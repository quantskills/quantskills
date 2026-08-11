import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { buildCatalogModel } from "../scripts/catalog-model.mjs";
import { renderReadme } from "../scripts/render-readme.mjs";

const snapshot = JSON.parse(readFileSync(new URL("./fixtures/catalog.snapshot.json", import.meta.url), "utf8"));
const model = buildCatalogModel(snapshot);
const outside = (text) => text.replace(/<!-- CATALOG:START -->[\s\S]*?<!-- CATALOG:END -->/, "<!-- CATALOG:START --><!-- CATALOG:END -->");

for (const language of ["zh", "en"]) test(`${language} README preserves its community template and renders the catalog`, () => {
  const actual = renderReadme(model, language);
  const template = readFileSync(new URL(`../docs/README.${language === "en" ? "en" : "zh"}.template.md`, import.meta.url), "utf8");
  assert.equal(outside(actual), outside(template));
  assert.doesNotMatch(actual, /\r\n|162|156|Featured Agents/);
  assert.match(actual, new RegExp(`<!-- catalog-snapshot: ${snapshot.snapshot_id} -->`));
  assert.match(actual, /\*\*16\*\* public assets|\*\*16\*\* 项公开资产/);
  assert.match(actual, /PandaAI|community/i);
  assert.deepEqual([...actual.matchAll(/\[([0-9]{2}) [^\]]+\]\(#cat-\1\)/g)].map((match) => match[1]), ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]);
  for (const stage of ["data-ingestion", "feature-engineering", "portfolio-construction", "monitoring", "orchestration"]) assert.match(actual, new RegExp(stage));
  assert.match(actual, /skill-template/);
  assert.match(actual, /agent-template/);
});

test("renderer escapes markdown table delimiters and line breaks", () => {
  const changed = structuredClone(model);
  changed.assets.find((asset) => asset.name === "skill-fixture-01").summary_en = "line one\nline | two";
  assert.match(renderReadme(changed, "en"), /line one line \\| two/);
});
