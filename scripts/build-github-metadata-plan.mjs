#!/usr/bin/env node
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { loadCatalogSnapshot } from "./catalog-model.mjs";
import { canonicalJson, validateCatalogSnapshot } from "./snapshot-contract.mjs";

const slug = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const canonicalRepositoryUrl = (name) => `https://github.com/quantskills/${name}`;
const sortedTopics = (topics) => [...new Set(topics)].sort();
const profileIds = (asset) => [...(asset.interface.inputs || []), ...(asset.interface.outputs || [])]
  .map((item) => item.profile).filter(Boolean).slice(0, 2);

export function desired(asset) {
  const description = `${asset.summary_zh}｜${asset.summary_en}`;
  if (Array.from(description).length > 350) throw new Error("invalid summary");
  const topics = [
    "quantskills", "quantitative-finance", asset.project_type === "agent" ? "ai-agent" : "agent-skill",
    `category-${asset.catalog.category}`, slug(asset.catalog.subcategory.split(".")[1]), slug(asset.workflow.primary_stage),
    ...profileIds(asset),
  ].filter(Boolean);
  return { description, topics: sortedTopics(topics).slice(0, 8) };
}

const planHash = (plan) => {
  const { sha256: ignored, ...hashable } = plan;
  return `sha256:${createHash("sha256").update(canonicalJson(hashable), "utf8").digest("hex")}`;
};

function repositoryBefore(name, before, asset) {
  const expectedUrl = canonicalRepositoryUrl(name);
  if (!before || before.html_url !== expectedUrl || before.full_name !== `quantskills/${name}`) throw new Error(`repository identity discrepancy: ${name}`);
  if (typeof before.default_branch !== "string" || before.default_branch.trim().length === 0) throw new Error(`repository branch unavailable: ${name}`);
  if (!(typeof before.description === "string" || before.description === null)) throw new Error(`repository description discrepancy: ${name}`);
  if (!Array.isArray(before.topics) || before.topics.some((topic) => typeof topic !== "string")) throw new Error(`repository topics discrepancy: ${name}`);
  if (typeof asset.commit_sha !== "string" || asset.commit_sha.length === 0) throw new Error(`asset commit unavailable: ${name}`);
  return {
    repository_url: expectedUrl,
    default_branch: before.default_branch,
    before: { description: before.description || "", topics: sortedTopics(before.topics) },
  };
}

export async function buildMetadataPlan(snapshot, reader) {
  validateCatalogSnapshot(snapshot);
  const getBranchCommit = reader?.getBranchCommit || reader?.getCommit || reader?.getBranch;
  if (!reader || typeof reader.getRepository !== "function" || typeof getBranchCommit !== "function") throw new Error("repository reader unavailable");
  for (const asset of snapshot.assets) {
    if (asset.url !== canonicalRepositoryUrl(asset.name)) throw new Error(`invalid repository URL: ${asset.name}`);
  }
  const items = [];
  for (const asset of snapshot.assets) {
    const beforeResponse = await reader.getRepository(asset.name);
    const before = repositoryBefore(asset.name, beforeResponse, asset);
    const commit = await getBranchCommit.call(reader, asset.name, before.default_branch);
    const headSha = commit?.sha || commit?.head_sha;
    if (typeof headSha !== "string" || headSha.length === 0 || headSha !== asset.commit_sha) throw new Error(`repository HEAD discrepancy: ${asset.name}`);
    const after = desired(asset);
    const action = before.before.description === after.description && JSON.stringify(before.before.topics) === JSON.stringify(after.topics) ? "unchanged" : "update";
    items.push({
      repository: asset.name,
      repository_url: before.repository_url,
      default_branch: before.default_branch,
      head_sha: headSha,
      snapshot_id: snapshot.snapshot_id,
      before: before.before,
      after,
      action,
    });
  }
  items.sort((left, right) => left.repository < right.repository ? -1 : left.repository > right.repository ? 1 : 0);
  const plan = { version: "1.0.0", snapshot_id: snapshot.snapshot_id, items };
  plan.sha256 = planHash(plan);
  return plan;
}

const githubReader = (token) => {
  const headers = { Accept: "application/vnd.github+json", ...(token ? { Authorization: `Bearer ${token}` } : {}) };
  const api = (name, suffix = "") => `https://api.github.com/repos/quantskills/${name}${suffix}`;
  return {
    async getRepository(name) {
      const response = await fetch(api(name), { headers });
      if (!response.ok) throw new Error(`repository API failure: ${name}`);
      const item = await response.json();
      return { html_url: item.html_url, full_name: item.full_name, description: item.description, topics: item.topics, default_branch: item.default_branch };
    },
    async getBranchCommit(name, branch) {
      const response = await fetch(api(name, `/commits/${encodeURIComponent(branch)}`), { headers });
      if (!response.ok) throw new Error(`branch API failure: ${name}`);
      const item = await response.json();
      return { sha: item.sha };
    },
  };
};

function option(values, name) {
  const index = values.indexOf(name);
  if (index < 0 || index + 1 >= values.length || values[index + 1].startsWith("--")) return undefined;
  return values[index + 1];
}

export async function main(values = process.argv.slice(2)) {
  const snapshotPath = option(values, "--snapshot");
  const outputPath = option(values, "--output");
  if (!snapshotPath || !outputPath) throw new Error("--snapshot and --output are required");
  const snapshot = loadCatalogSnapshot(resolve(snapshotPath));
  const plan = await buildMetadataPlan(snapshot, githubReader(process.env.GITHUB_TOKEN || ""));
  const output = resolve(outputPath);
  const outputDirectory = dirname(output);
  mkdirSync(outputDirectory, { recursive: true });
  const temporaryDirectory = mkdtempSync(join(outputDirectory, ".metadata-plan-"));
  const temporary = join(temporaryDirectory, basename(output));
  try {
    writeFileSync(temporary, `${JSON.stringify(plan, null, 2)}\n`);
    renameSync(temporary, output);
  } finally {
    rmSync(temporaryDirectory, { recursive: true, force: true });
  }
}

const isMain = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;
if (isMain) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
