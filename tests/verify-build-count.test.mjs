import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { build } from "../scripts/build.mjs";

test("build verifies rendered HTML count cells for both README languages", () => {
  const output = mkdtempSync(join(tmpdir(), "quantskills-build-count-"));
  build(new URL("./fixtures/catalog.snapshot.json", import.meta.url), output);
  const zh = readFileSync(join(output, "README.md"), "utf8");
  const en = readFileSync(join(output, "README.en.md"), "utf8");
  assert.match(zh, /<strong>16<\/strong>\s*<br>\s*<sub>资产<\/sub>/);
  assert.match(en, /<strong>16<\/strong>\s*<br>\s*<sub>Assets<\/sub>/);
});
