import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
const data = JSON.parse(readFileSync(new URL("../site/catalog.json", import.meta.url), "utf8"));

test("site has ten-category navigation and same snapshot data", () => {
  for (let number = 1; number <= 10; number++) assert.match(html, new RegExp(`cat-${String(number).padStart(2, "0")}`));
  assert.match(data.snapshot_id, /^sha256:/);
  assert.equal(data.assets.length, 16);
});

test("site has no external script style or font dependency", () => {
  assert.doesNotMatch(html, /<(?:script|link)[^>]+https?:\/\//i);
});
