import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { snapshotId, validateCatalogSnapshot } from "../scripts/snapshot-contract.mjs";
import { buildCatalogModel } from "../scripts/catalog-model.mjs";

const fixture = JSON.parse(readFileSync(new URL("./fixtures/catalog.snapshot.json", import.meta.url), "utf8"));

test("reviewed unranked listings remain visible in the public directory", () => {
  const snapshot = structuredClone(fixture);
  snapshot.assets[0].current_ranking_eligible = false;
  snapshot.snapshot_id = snapshotId(snapshot);
  const admitted = validateCatalogSnapshot(snapshot);
  assert.equal(buildCatalogModel(admitted).assets.length, snapshot.assets.length);
  assert.equal(admitted.assets[0].current_ranking_eligible, false);
});

test("ranking eligibility requires a boolean even with a recomputed digest", () => {
  const snapshot = structuredClone(fixture);
  snapshot.assets[0].current_ranking_eligible = "false";
  snapshot.snapshot_id = snapshotId(snapshot);
  assert.throws(() => validateCatalogSnapshot(snapshot));
});
