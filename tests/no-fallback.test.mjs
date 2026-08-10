import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("renderer never classifies unknown assets into legacy 07 or 08 fallbacks", () => {
  const source = readFileSync(new URL("../scripts/catalog-model.mjs", import.meta.url), "utf8");
  assert.doesNotMatch(source, /function\s+classify\b|FEISHU_CAT|catMap|reservedCategories|categoryOverride/);
  assert.doesNotMatch(source, /return\s+\{\s*feishu:\s*["']0[78]["']/);
});

test("an unclassified snapshot row is rejected rather than rendered", () => {
  const source = readFileSync(new URL("../scripts/catalog-model.mjs", import.meta.url), "utf8");
  assert.match(source, /unclassified|unknown category|invalid snapshot/i);
});
