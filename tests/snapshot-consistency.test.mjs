import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const fixture = JSON.parse(readFileSync(new URL("./fixtures/catalog.snapshot.json", import.meta.url), "utf8"));

test("fixture is a complete same-snapshot renderer input", () => {
  assert.match(fixture.snapshot_id, /^sha256:[0-9a-f]{64}$/);
  assert.deepEqual(Object.keys(fixture.taxonomy.categories), ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]);
  assert.equal(new Set(fixture.assets.map((asset) => asset.name)).size, fixture.assets.length);
  assert.deepEqual(fixture.resources.map((resource) => resource.name), [".github", "join", "quantskills", "registry"]);
  assert.equal(new Set(fixture.assets.map((asset) => asset.workflow.primary_stage)).size, 14);
  assert.ok(fixture.assets.some((asset) => asset.interface.mode === "structured"));
  assert.ok(fixture.assets.some((asset) => asset.project_type === "agent" && asset.interface.mode === "not-applicable"));
  assert.ok(fixture.assets.some((asset) => asset.name === "skill-template"));
  assert.ok(fixture.assets.some((asset) => asset.name === "agent-template"));
});

test("planned output contract carries one snapshot ID and ten primary categories", () => {
  const source = readFileSync(new URL("../scripts/build.mjs", import.meta.url), "utf8");
  assert.match(source, /catalog-snapshot/);
  assert.match(source, /workflow-data-foundation/);
  assert.match(source, /cat-10/);
});
