import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
const data = JSON.parse(readFileSync(new URL("../site/catalog.json", import.meta.url), "utf8"));

test("site retains ten business categories in the catalog data", () => {
  for (let number = 1; number <= 10; number++) assert.ok(data.taxonomy.categories[String(number).padStart(2, "0")]);
  assert.match(data.snapshot_id, /^sha256:/);
  assert.ok(data.assets.length > 0);
});

test("site has no external script style or font dependency", () => {
  assert.doesNotMatch(html, /<(?:script|link)[^>]+https?:\/\//i);
});
