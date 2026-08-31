#!/usr/bin/env node
import { chmodSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { buildCatalogModel, loadCatalogSnapshot } from "./catalog-model.mjs";
import { replaceCatalog } from "./render-readme.mjs";
import { renderSiteData } from "./render-site-data.mjs";
import { verifyBuild } from "./verify-build.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export const canonicalJson = (value) => {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
};

export const sha256 = (value) => createHash("sha256").update(value).digest("hex");

const readJsonSource = (path) => {
  const bytes = readFileSync(path);
  return { value: JSON.parse(bytes.toString("utf8")), digest: sha256(bytes) };
};

export function attachEvaluations(site, scores, recommended, manifest, policy, sourceDigests) {
  const snapshot = site?.snapshot_id;
  if (!snapshot || scores?.catalog_snapshot_id !== snapshot || recommended?.catalog_snapshot_id !== snapshot || manifest?.catalog_snapshot_id !== snapshot) {
    throw new Error("evaluation/catalog snapshot mismatch");
  }
  if (scores?.mode !== "shadow" || recommended?.status !== "shadow") throw new Error("evaluation projection must remain Shadow-only");
  const unsignedManifest = Object.fromEntries(Object.entries(manifest).filter(([key]) => key !== "snapshot_digest"));
  if (manifest.snapshot_digest !== sha256(canonicalJson(unsignedManifest))) throw new Error("evaluation manifest digest mismatch");
  for (const name of ["current-scores.json", "recommended.snapshot.json", "selection-policy.v1.json"]) {
    if (!sourceDigests?.[name] || manifest?.files?.[name] !== sourceDigests[name]) throw new Error(`evaluation file hash mismatch: ${name}`);
  }
  if (recommended.score_dataset_sha256 !== sourceDigests["current-scores.json"]) throw new Error("recommendation score dataset mismatch");
  const unsignedPolicy = Object.fromEntries(Object.entries(policy || {}).filter(([key]) => key !== "policy_digest"));
  if (policy?.policy_digest !== sha256(canonicalJson(unsignedPolicy))) throw new Error("recommendation policy digest mismatch");
  if (recommended.policy_id !== policy.policy_id || recommended.policy_digest !== policy.policy_digest) throw new Error("recommendation policy binding mismatch");
  const scoreByAsset = new Map((scores.records || []).map((row) => [row.asset_id, row]));
  const recommendationByAsset = new Map((recommended.records || []).map((row) => [row.asset_id, row]));
  site.assets = site.assets.map((asset) => {
    const score = scoreByAsset.get(asset.name);
    if (!score) return { ...asset, evaluation: null };
    const recommendation = recommendationByAsset.get(asset.name);
    return {
      ...asset,
      evaluation: {
        mode: "shadow",
        source_publication: score.source_publication,
        evaluated_commit_sha: score.commit_sha,
        current_commit: score.commit_sha === asset.commit_sha,
        behavior: score.scores.behavior,
        quality: score.scores.quality,
        token: score.scores.token,
        core: score.scores.total,
        featured_status: score.featured.status,
        featured_score: score.featured.score,
        featured_reason: score.featured.reason,
        recommended: Boolean(recommendation),
        recommendation_rank: recommendation?.rank ?? null,
        recommendation_group: recommendation?.group ?? null,
      },
    };
  });
  site.evaluations = {
    mode: "shadow",
    snapshot_digest: manifest.snapshot_digest,
    score_record_count: scores.record_count,
    recommended_record_count: recommended.record_count,
    recommendation_policy: recommended.policy_id,
  };
  return site;
}

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
  mkdirSync(outputRoot, { recursive: true });
  const previous = new Map(expected.map((relative) => [relative, destinationState(join(outputRoot, relative))]));
  const transactionRoot = mkdtempSync(join(outputRoot, ".quantskills-publication-"));
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

export function build(snapshotPath, outputDir, evaluationsRoot = null) {
  const snapshot = loadCatalogSnapshot(snapshotPath);
  const model = buildCatalogModel(snapshot);
  let site = { ...renderSiteData(model), profiles: snapshot.profiles.items, adapters: snapshot.adapters.items, compatibility_edges: snapshot.compatibility_edges };
  if (evaluationsRoot) {
    const scoreSource = readJsonSource(join(evaluationsRoot, "current-scores.json"));
    const recommendationSource = readJsonSource(join(evaluationsRoot, "recommended.snapshot.json"));
    const manifestSource = readJsonSource(join(evaluationsRoot, "manifest.json"));
    const policySource = readJsonSource(join(evaluationsRoot, "selection-policy.v1.json"));
    site = attachEvaluations(
      site,
      scoreSource.value,
      recommendationSource.value,
      manifestSource.value,
      policySource.value,
      {
        "current-scores.json": scoreSource.digest,
        "recommended.snapshot.json": recommendationSource.digest,
        "selection-policy.v1.json": policySource.digest,
      },
    );
  }
  const zhTemplate = readFileSync(join(ROOT, "docs", "README.zh.template.md"), "utf8");
  const enTemplate = readFileSync(join(ROOT, "docs", "README.en.template.md"), "utf8");
  // catalog-snapshot projections share workflow-data-foundation and cat-10 navigation.
  stageAndPromote({ "README.md": replaceCatalog(zhTemplate, model, "zh"), "README.en.md": replaceCatalog(enTemplate, model, "en"), "site/catalog.json": `${JSON.stringify(site, null, 2)}\n` }, outputDir, snapshot);
  return model;
}

function args(values) {
  const at = (name) => values.indexOf(name);
  const snapshot = at("--snapshot") >= 0 ? values[at("--snapshot") + 1] : join(ROOT, "..", "registry", "catalog.snapshot.json");
  const outputDir = at("--output-dir") >= 0 ? values[at("--output-dir") + 1] : ROOT;
  const evaluationsRoot = at("--evaluations-root") >= 0 ? values[at("--evaluations-root") + 1] : join(ROOT, "..", "registry", "evaluations");
  if (!snapshot || !outputDir || !evaluationsRoot) throw new Error("--snapshot, --output-dir, and --evaluations-root require values");
  return { snapshot: resolve(snapshot), outputDir: resolve(outputDir), evaluationsRoot: resolve(evaluationsRoot) };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const { snapshot, outputDir, evaluationsRoot } = args(process.argv.slice(2));
  build(snapshot, outputDir, evaluationsRoot);
}
