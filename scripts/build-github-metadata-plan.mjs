#!/usr/bin/env node
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const canonical = (value) => JSON.stringify(value, Object.keys(value).sort());
const slug = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const profileIds = (asset) => [...(asset.interface.inputs || []), ...(asset.interface.outputs || [])].map((item) => item.profile).filter(Boolean).slice(0, 2);
export function desired(asset) {
  const description = `${asset.summary_zh}｜${asset.summary_en}`;
  if (Array.from(description).length > 350) throw new Error("invalid summary");
  const topics = ["quantskills", "quantitative-finance", asset.project_type === "agent" ? "ai-agent" : "agent-skill", `category-${asset.catalog.category}`, slug(asset.catalog.subcategory.split(".")[1]), slug(asset.workflow.primary_stage), ...profileIds(asset)].filter(Boolean);
  return { description, topics: [...new Set(topics)].slice(0, 8) };
}
export async function buildMetadataPlan(snapshot, reader) {
  if (!snapshot?.snapshot_id || !Array.isArray(snapshot.assets)) throw new Error("invalid snapshot");
  const items = [];
  for (const asset of snapshot.assets) {
    const before = await reader.getRepository(asset.name);
    if (!before?.url || !before.default_branch || !before.head_sha) throw new Error("repository unavailable");
    const after = desired(asset);
    items.push({ repository: asset.name, repository_url: before.url, default_branch: before.default_branch, head_sha: before.head_sha, snapshot_id: snapshot.snapshot_id, before: { description: before.description || "", topics: before.topics || [] }, after, action: before.description === after.description && JSON.stringify([...(before.topics || [])].sort()) === JSON.stringify([...after.topics].sort()) ? "unchanged" : "update" });
  }
  const plan = { version: "1.0.0", snapshot_id: snapshot.snapshot_id, items };
  plan.sha256 = "sha256:" + createHash("sha256").update(JSON.stringify(plan)).digest("hex");
  return plan;
}
async function main() {
  const args = process.argv.slice(2); const value = (name) => args[args.indexOf(name) + 1]; const snapshotPath = value("--snapshot"); const output = value("--output"); if (!snapshotPath || !output) throw new Error("--snapshot and --output are required");
  const token = process.env.GITHUB_TOKEN || ""; const snapshot = JSON.parse(readFileSync(snapshotPath, "utf8"));
  const reader = { async getRepository(name) { const response = await fetch(`https://api.github.com/repos/quantskills/${name}`, { headers: { Accept: "application/vnd.github+json", ...(token ? { Authorization: `Bearer ${token}` } : {}) } }); if (!response.ok) throw new Error("API failure"); const item = await response.json(); const commit = await fetch(item.commits_url.replace("{/sha}", "/main"), { headers: { Accept: "application/vnd.github+json" } }); if (!commit.ok) throw new Error("API failure"); const head = await commit.json(); return { name, url: item.html_url, description: item.description, topics: item.topics, default_branch: item.default_branch, head_sha: head.sha }; } };
  const plan = await buildMetadataPlan(snapshot, reader); mkdirSync(dirname(resolve(output)), { recursive: true }); const temporary = `${output}.tmp`; writeFileSync(temporary, `${JSON.stringify(plan, null, 2)}\n`); renameSync(temporary, output);
}
if (process.argv[1] === new URL(import.meta.url).pathname) main();
