#!/usr/bin/env node
import { mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { buildCatalogModel, loadCatalogSnapshot } from "./catalog-model.mjs";
import { renderReadme } from "./render-readme.mjs";
import { renderSiteData } from "./render-site-data.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export function stageAndPromote(outputs, outputDir) {
  const stage = mkdtempSync(join(outputDir, ".catalog-stage-"));
  try {
    for (const [relative, content] of Object.entries(outputs)) {
      const destination = join(stage, relative);
      mkdirSync(dirname(destination), { recursive: true });
      writeFileSync(destination, content, "utf8");
      if (relative.endsWith(".json")) JSON.parse(readFileSync(destination, "utf8"));
    }
    for (const relative of Object.keys(outputs)) {
      const destination = join(outputDir, relative);
      mkdirSync(dirname(destination), { recursive: true });
      renameSync(join(stage, relative), destination);
    }
  } finally {
    rmSync(stage, { recursive: true, force: true });
  }
}

export function build(snapshotPath, outputDir) {
  const snapshot = loadCatalogSnapshot(snapshotPath);
  const model = buildCatalogModel(snapshot);
  const site = { ...renderSiteData(model), profiles: snapshot.profiles.items, adapters: snapshot.adapters.items, compatibility_edges: snapshot.compatibility_edges };
  // catalog-snapshot projections share workflow-data-foundation and cat-10 navigation.
  stageAndPromote({ "README.md": renderReadme(model, "zh"), "README.en.md": renderReadme(model, "en"), "site/catalog.json": `${JSON.stringify(site, null, 2)}\n` }, outputDir);
  return model;
}

function args(values) {
  const at = (name) => values.indexOf(name);
  const snapshot = at("--snapshot") >= 0 ? values[at("--snapshot") + 1] : join(ROOT, "..", "registry", "catalog.snapshot.json");
  const outputDir = at("--output-dir") >= 0 ? values[at("--output-dir") + 1] : ROOT;
  if (!snapshot || !outputDir) throw new Error("--snapshot and --output-dir require values");
  return { snapshot: resolve(snapshot), outputDir: resolve(outputDir) };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { snapshot, outputDir } = args(process.argv.slice(2));
  build(snapshot, outputDir);
}
