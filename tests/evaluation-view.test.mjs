import assert from "node:assert/strict";
import test from "node:test";

import { attachEvaluations, canonicalJson, sha256 } from "../scripts/build.mjs";
import { assetViewModel, filterAssets } from "../site/app.mjs";

const snapshot = "sha256:" + "a".repeat(64);
const site = {
  snapshot_id: snapshot,
  assets: [
    { name: "skill-one", commit_sha: "1".repeat(40), catalog: { category: "01" }, workflow: { workflow_stages: [] } },
    { name: "skill-two", commit_sha: "2".repeat(40), catalog: { category: "01" }, workflow: { workflow_stages: [] } },
  ],
};
const rawDigest = (value) => sha256(`${JSON.stringify(value, null, 2)}\n`);

function fixture() {
  const scores = {
    catalog_snapshot_id: snapshot,
    mode: "shadow",
    record_count: 218,
    records: [{
      asset_id: "skill-one",
      commit_sha: "1".repeat(40),
      source_publication: "publication.v12.23",
      scores: { behavior: 90, quality: 80, token: 70, total: 82.5 },
      featured: { status: "eligible", score: 88, reason: null },
    }],
  };
  const policy = { policy_id: "shadow-category-quartile.v1", status: "shadow" };
  policy.policy_digest = sha256(canonicalJson(policy));
  const recommended = {
    catalog_snapshot_id: snapshot,
    status: "shadow",
    record_count: 1,
    policy_id: policy.policy_id,
    policy_digest: policy.policy_digest,
    score_dataset_sha256: rawDigest(scores),
    records: [{ asset_id: "skill-one", rank: 1, group: "skill:01" }],
  };
  const sourceDigests = {
    "current-scores.json": rawDigest(scores),
    "recommended.snapshot.json": rawDigest(recommended),
    "selection-policy.v1.json": rawDigest(policy),
  };
  const manifest = {
    catalog_snapshot_id: snapshot,
    files: { ...sourceDigests },
  };
  manifest.snapshot_digest = sha256(canonicalJson(manifest));
  return { scores, recommended, manifest, policy, sourceDigests };
}

const attach = (inputs) => attachEvaluations(structuredClone(site), inputs.scores, inputs.recommended, inputs.manifest, inputs.policy, inputs.sourceDigests);

test("build joins public scores and Shadow recommendations by asset id", () => {
  const inputs = fixture();
  const result = attach(inputs);
  assert.equal(result.assets[0].evaluation.core, 82.5);
  assert.equal(result.assets[0].evaluation.recommended, true);
  assert.equal(result.assets[1].evaluation, null);
  assert.equal(result.evaluations.snapshot_digest, inputs.manifest.snapshot_digest);
});

test("recommended view filters assets and exposes score metadata", () => {
  const result = attach(fixture());
  assert.deepEqual(filterAssets(result, { view: "recommended" }).map((asset) => asset.name), ["skill-one"]);
  assert.equal(filterAssets(result, { view: "all" }).length, 2);
  const view = assetViewModel(result, result.assets[0]);
  assert.equal(view.evaluation.core, 82.5);
  assert.equal(view.evaluation.featured_status, "eligible");
});

test("build rejects evaluation data from another catalog snapshot", () => {
  const inputs = fixture();
  assert.throws(
    () => attach({ ...inputs, scores: { ...inputs.scores, catalog_snapshot_id: "sha256:" + "c".repeat(64) } }),
    /snapshot mismatch/,
  );
});

test("build rejects manifest and consumed file hash tampering", () => {
  const badManifest = fixture();
  badManifest.manifest.snapshot_digest = "0".repeat(64);
  assert.throws(() => attach(badManifest), /manifest digest mismatch/);

  const badFile = fixture();
  badFile.sourceDigests["current-scores.json"] = "0".repeat(64);
  assert.throws(() => attach(badFile), /file hash mismatch/);
});

test("build rejects score dataset and recommendation policy rebinding", () => {
  const badScoreBinding = fixture();
  badScoreBinding.recommended.score_dataset_sha256 = "0".repeat(64);
  badScoreBinding.sourceDigests["recommended.snapshot.json"] = rawDigest(badScoreBinding.recommended);
  badScoreBinding.manifest.files["recommended.snapshot.json"] = badScoreBinding.sourceDigests["recommended.snapshot.json"];
  badScoreBinding.manifest.snapshot_digest = sha256(canonicalJson(Object.fromEntries(Object.entries(badScoreBinding.manifest).filter(([key]) => key !== "snapshot_digest"))));
  assert.throws(() => attach(badScoreBinding), /score dataset mismatch/);

  const badPolicy = fixture();
  badPolicy.policy.policy_digest = "0".repeat(64);
  badPolicy.recommended.policy_digest = badPolicy.policy.policy_digest;
  badPolicy.sourceDigests["selection-policy.v1.json"] = rawDigest(badPolicy.policy);
  badPolicy.sourceDigests["recommended.snapshot.json"] = rawDigest(badPolicy.recommended);
  badPolicy.manifest.files = { ...badPolicy.sourceDigests };
  badPolicy.manifest.snapshot_digest = sha256(canonicalJson(Object.fromEntries(Object.entries(badPolicy.manifest).filter(([key]) => key !== "snapshot_digest"))));
  assert.throws(() => attach(badPolicy), /policy digest mismatch/);
});
