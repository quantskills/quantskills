import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { chmodSync, existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { buildMetadataPlan } from "../scripts/build-github-metadata-plan.mjs";
import { stageAndPromote } from "../scripts/build.mjs";
import { buildCatalogModel } from "../scripts/catalog-model.mjs";
import { renderReadme } from "../scripts/render-readme.mjs";
import { renderSiteData } from "../scripts/render-site-data.mjs";
import { canonicalJson } from "../scripts/snapshot-contract.mjs";

const snapshot = JSON.parse(readFileSync(new URL("./fixtures/catalog.snapshot.json", import.meta.url), "utf8"));
const model = buildCatalogModel(snapshot);
const site = { ...renderSiteData(model), profiles: snapshot.profiles.items, adapters: snapshot.adapters.items, compatibility_edges: snapshot.compatibility_edges };
const outputs = {
  "README.md": Buffer.from(renderReadme(model, "zh")),
  "README.en.md": Buffer.from(renderReadme(model, "en")),
  "site/catalog.json": Buffer.from(`${JSON.stringify(site, null, 2)}\n`),
};

const destinationState = (root, relative) => {
  const path = join(root, relative);
  if (!existsSync(path)) return { exists: false };
  const stat = statSync(path);
  return { exists: true, bytes: readFileSync(path), mode: stat.mode & 0o7777 };
};

test("publication replacement rolls back every destination for every replace point", async () => {
  for (const existing of [true, false]) {
    for (const failAt of [1, 2, 3]) {
      const root = mkdtempSync(join(tmpdir(), "qs-publication-test-"));
      try {
        const before = new Map();
        for (const [relative, bytes] of Object.entries(outputs)) {
          const path = join(root, relative);
          if (existing) {
            mkdirSync(join(path, ".."), { recursive: true });
            writeFileSync(path, Buffer.from(`old:${relative}`));
            chmodSync(path, 0o640);
          }
          before.set(relative, destinationState(root, relative));
        }
        const logs = [];
        const originalLog = console.log;
        console.log = (...args) => logs.push(args);
        try {
          assert.throws(() => stageAndPromote(outputs, root, snapshot, { failAt }), /replacement failure/);
        } finally {
          console.log = originalLog;
        }
        assert.deepEqual(logs, [], `unexpected success log for ${existing ? "existing" : "absent"}/${failAt}`);
        for (const relative of Object.keys(outputs)) assert.deepEqual(destinationState(root, relative), before.get(relative), `${relative} ${existing}/${failAt}`);
      } finally {
        rmSync(root, { recursive: true, force: true });
      }
    }
  }
});

test("publication preflight rejects a non-regular destination", () => {
  const root = mkdtempSync(join(tmpdir(), "qs-publication-preflight-"));
  try {
    mkdirSync(join(root, "README.md"));
    assert.throws(() => stageAndPromote(outputs, root, snapshot), /regular file/i);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

const readerFor = (snapshotValue, overrides = {}) => ({
  async getRepository(name) {
    const repo = {
      html_url: `https://github.com/quantskills/${name}`,
      full_name: `quantskills/${name}`,
      description: "",
      topics: [],
      default_branch: "main",
      ...overrides,
    };
    return repo;
  },
  async getBranchCommit() { return { sha: snapshotValue.assets[0].commit_sha }; },
});

test("metadata admission rejects repository identity and branch-head discrepancies", async () => {
  await assert.rejects(() => buildMetadataPlan(snapshot, readerFor(snapshot, { html_url: "https://github.com/other/repo" })), /repository/i);
  await assert.rejects(() => buildMetadataPlan(snapshot, readerFor(snapshot, { full_name: "other/repo" })), /repository/i);
  await assert.rejects(() => buildMetadataPlan(snapshot, readerFor(snapshot, { default_branch: "" })), /branch/i);
  await assert.rejects(() => buildMetadataPlan(snapshot, { ...readerFor(snapshot), async getBranchCommit() { return { sha: "forged" }; } }), /HEAD|commit|sha/i);
});

test("metadata plans are canonical and hash-independent of asset input order", async () => {
  const reader = (topics) => ({
    async getRepository(name) { return { full_name: `quantskills/${name}`, html_url: `https://github.com/quantskills/${name}`, default_branch: "main", topics, description: "" }; },
    async getBranchCommit(name, branch) { assert.equal(branch, "main"); return { sha: snapshot.assets.find((asset) => asset.name === name).commit_sha }; },
  });
  const first = await buildMetadataPlan(snapshot, reader(["z", "a", "a"]));
  const second = await buildMetadataPlan(snapshot, reader(["a", "z"]));
  assert.equal(first.sha256, second.sha256);
  const unhashed = { ...first };
  delete unhashed.sha256;
  assert.equal(first.sha256, `sha256:${createHash("sha256").update(canonicalJson(unhashed), "utf8").digest("hex")}`);
  assert.deepEqual(first.items[0].before.topics, ["a", "z"]);
  assert.deepEqual(first.items.map((item) => item.repository), [...first.items].map((item) => item.repository).sort());
});

test("metadata CLI reports missing arguments with exactly one diagnostic", () => {
  const result = spawnSync(process.execPath, [fileURLToPath(new URL("../scripts/build-github-metadata-plan.mjs", import.meta.url))], { encoding: "utf8" });
  assert.notEqual(result.status, 0);
  assert.equal(result.stderr.trim().split(/\r?\n/).filter(Boolean).length, 1);
});
