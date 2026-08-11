#!/usr/bin/env node
import { chmodSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { buildCatalogModel, loadCatalogSnapshot } from "./catalog-model.mjs";
import { renderReadme } from "./render-readme.mjs";
import { renderSiteData } from "./render-site-data.mjs";
import { verifyBuild } from "./verify-build.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const destinationState = (path) => {
  try {
    const stat = lstatSync(path);
    if (!stat.isFile()) throw new Error(`destination must be a regular file: ${path}`);
    return { exists: true, bytes: readFileSync(path), mode: stat.mode & 0o7777 };
  } catch (error) {
    if (error?.code === "ENOENT") return { exists: false };
    throw error;
  }
};

const removeDestination = (path) => {
  try {
    const stat = lstatSync(path);
    if (stat.isDirectory()) rmSync(path, { recursive: true, force: true });
    else unlinkSync(path);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
};

export function stageAndPromote(outputs, outputDir, snapshot, options = {}) {
  const expected = ["README.md", "README.en.md", "site/catalog.json"];
  if (!outputs || Object.keys(outputs).sort().join(",") !== expected.slice().sort().join(",")) throw new Error("invalid output set");
  const outputRoot = resolve(outputDir);
  const previous = new Map(expected.map((relative) => [relative, destinationState(join(outputRoot, relative))]));
  const transactionRoot = mkdtempSync(join(tmpdir(), "quantskills-publication-"));
  const stage = join(transactionRoot, "stage");
  const backup = join(transactionRoot, "backup");
  const failAt = options.failAt ?? options.injectFailureAt ?? options.injectReplaceFailureAt;
  mkdirSync(stage, { recursive: true });
  mkdirSync(backup, { recursive: true });
  try {
    for (const [relative, content] of Object.entries(outputs)) {
      const destination = join(stage, relative);
      mkdirSync(dirname(destination), { recursive: true });
      writeFileSync(destination, content);
      if (relative.endsWith(".json")) JSON.parse(readFileSync(destination, "utf8"));
    }
    verifyBuild(stage, snapshot);
    for (let index = 0; index < expected.length; index += 1) {
      const relative = expected[index];
      const destination = join(outputRoot, relative);
      const source = join(stage, relative);
      const state = previous.get(relative);
      if (state.exists) {
        const backupPath = join(backup, relative);
        mkdirSync(dirname(backupPath), { recursive: true });
        renameSync(destination, backupPath);
      }
      mkdirSync(dirname(destination), { recursive: true });
      if (failAt === index + 1) throw new Error(`injected replacement failure at point ${index + 1}`);
      if (typeof options.replace === "function") options.replace(source, destination, index + 1);
      else renameSync(source, destination);
    }
  } catch (error) {
    try {
      for (const relative of expected) {
        const destination = join(outputRoot, relative);
        removeDestination(destination);
        const state = previous.get(relative);
        if (state.exists) {
          mkdirSync(dirname(destination), { recursive: true });
          writeFileSync(destination, state.bytes);
          chmodSync(destination, state.mode);
        }
      }
    } catch (rollbackError) {
      throw new AggregateError([error, rollbackError], "publication rollback failed");
    }
    throw error;
  } finally {
    rmSync(transactionRoot, { recursive: true, force: true });
  }
}

export function build(snapshotPath, outputDir) {
  const snapshot = loadCatalogSnapshot(snapshotPath);
  const model = buildCatalogModel(snapshot);
  const site = { ...renderSiteData(model), profiles: snapshot.profiles.items, adapters: snapshot.adapters.items, compatibility_edges: snapshot.compatibility_edges };
  // catalog-snapshot projections share workflow-data-foundation and cat-10 navigation.
  stageAndPromote({ "README.md": renderReadme(model, "zh"), "README.en.md": renderReadme(model, "en"), "site/catalog.json": `${JSON.stringify(site, null, 2)}\n` }, outputDir, snapshot);
  return model;
}

function args(values) {
  const at = (name) => values.indexOf(name);
  const snapshot = at("--snapshot") >= 0 ? values[at("--snapshot") + 1] : join(ROOT, "..", "registry", "catalog.snapshot.json");
  const outputDir = at("--output-dir") >= 0 ? values[at("--output-dir") + 1] : ROOT;
  if (!snapshot || !outputDir) throw new Error("--snapshot and --output-dir require values");
  return { snapshot: resolve(snapshot), outputDir: resolve(outputDir) };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const { snapshot, outputDir } = args(process.argv.slice(2));
  build(snapshot, outputDir);
}
