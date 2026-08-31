import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const source = readFileSync(new URL("../scripts/build.mjs", import.meta.url), "utf8");

test("renderer accepts an explicit snapshot and output directory without network access", () => {
  assert.match(source, /--snapshot/);
  assert.match(source, /--output-dir/);
  assert.match(source, /--evaluations-root/);
  assert.doesNotMatch(source, /(?:gh repo list|api\.github\.com|raw\.githubusercontent\.com)/);
});

test("renderer has deterministic staged outputs", () => {
  assert.match(source, /stageAndPromote/);
  assert.match(source, /catalog\.snapshot/);
});
