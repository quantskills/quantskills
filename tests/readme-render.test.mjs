import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { buildCatalogModel } from "../scripts/catalog-model.mjs";
import { renderReadme } from "../scripts/render-readme.mjs";

const snapshot = JSON.parse(readFileSync(new URL("./fixtures/catalog.snapshot.json", import.meta.url), "utf8"));
const model = buildCatalogModel(snapshot);

for (const language of ["zh", "en"]) test(`${language} README has the approved navigation structure and golden bytes`, () => {
  const actual = renderReadme(model, language);
  const golden = readFileSync(new URL(`./golden/README${language === "en" ? ".en" : ""}.md`, import.meta.url), "utf8").replace(/\r\n/g, "\n");
  assert.equal(actual, golden);
  assert.doesNotMatch(actual, /\r\n/);
  assert.match(actual, new RegExp(`<!-- catalog-snapshot: ${snapshot.snapshot_id} -->`));
  assert.match(actual, /public assets: 16/);
  assert.deepEqual([...actual.matchAll(/\[([0-9]{2})\]\(#cat-\1\)/g)].map((match) => match[1]), ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]);
  for (const [group, stages] of [["workflow-data-foundation", 2], ["workflow-research-signal", 4], ["workflow-portfolio-validation", 4], ["workflow-monitoring-trading", 3], ["workflow-orchestration", 1]]) {
    assert.match(actual, new RegExp(group));
    assert.ok(stages > 0);
  }
  for (const category of Object.values(snapshot.taxonomy.categories)) for (const subcategory of category.subcategories) assert.match(actual, new RegExp(`### ${subcategory.id.replace(".", "\\.")}`));
  assert.match(actual, /skill-template/);
  assert.match(actual, /agent-template/);
  for (const resource of snapshot.resources) assert.match(actual, new RegExp(`\[${resource.name.replace(".", "\\.")}\]`));
  assert.match(actual, language === "en" ? /\| Name \| Summary \| Type \| Primary stage \| Additional stages \| Inputs \| Outputs \| Status \|/ : /\| 名称 \| 摘要 \| 类型 \| 主阶段 \| 参与阶段 \| 输入 \| 输出 \| 状态 \|/);
});

test("renderer escapes markdown table delimiters and line breaks", () => {
  const changed = structuredClone(model);
  changed.assets.find((asset) => asset.name === "skill-fixture-01").summary_en = "line one\nline | two";
  assert.match(renderReadme(changed, "en"), /line one line \\| two/);
});
