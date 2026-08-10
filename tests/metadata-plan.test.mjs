import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { buildMetadataPlan } from "../scripts/build-github-metadata-plan.mjs";

const snapshot = JSON.parse(readFileSync(new URL("./fixtures/catalog.snapshot.json", import.meta.url), "utf8"));
test("metadata dry run is immutable and normalized", async () => {
  let mutations = 0;
  const reader = { async getRepository(name) { return { name, url: `https://github.com/quantskills/${name}`, description: "", topics: [], default_branch: "main", head_sha: "fixture-head" }; }, async mutate() { mutations++; } };
  const plan = await buildMetadataPlan(snapshot, reader);
  assert.equal(mutations, 0); assert.equal(plan.items.length, snapshot.assets.length); assert.match(plan.sha256, /^sha256:/);
  for (const item of plan.items) { assert.ok(Array.from(item.after.description).length <= 350); assert.ok(item.after.topics.length <= 8); assert.equal(new Set(item.after.topics).size, item.after.topics.length); assert.match(item.head_sha, /fixture-head/); }
});
