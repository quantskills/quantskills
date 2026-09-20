import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { renderAssetCard, optionLabel } from "../site/app.mjs";

class Node {
  constructor(tag = "div") { this.tagName = tag; this.children = []; this.value = ""; this.textContent = ""; this.events = {}; this.attributes = {}; }
  append(...items) { this.children.push(...items); }
  replaceChildren(...items) { this.children = items; }
  setAttribute(key, value) { this.attributes[key] = value; }
  addEventListener(key, callback) { this.events[key] = callback; }
}
const data = JSON.parse(readFileSync(new URL("../site/catalog.json", import.meta.url)));
const documentStub = { createElement: (tag) => new Node(tag) };
test("cards show a single summary and keep technical data in collapsed details", () => {
  const asset = data.assets.find((item) => item.summary_zh && item.summary_en);
  const card = renderAssetCard(documentStub, data, asset);
  assert.equal(card.children.find((item) => item.className === "summary").textContent, asset.summary_zh);
  const details = card.children.find((item) => item.tagName === "details");
  assert.ok(details);
  assert.ok(!details.open);
  assert.ok(details.children.some((item) => item.textContent === asset.summary_en));
  assert.equal(optionLabel(data, "category", "01"), data.taxonomy.categories["01"].label_zh);
});

test("URL filters restore, advanced filters disclose their state, and clear resets all controls", async () => {
  const nodes = new Map();
  const html = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
  for (const match of html.matchAll(/id="([^"]+)"/g)) nodes.set(`#${match[1]}`, new Node());
  const buttons = ["all", "recommended"].map((view) => Object.assign(new Node("button"), { dataset: { view } }));
  const saved = Object.fromEntries(["document", "fetch", "location", "history"].map((key) => [key, globalThis[key]]));
  let url;
  try {
    globalThis.document = { ...documentStub, querySelector: (selector) => nodes.get(selector), querySelectorAll: () => buttons };
    globalThis.fetch = async () => ({ ok: true, json: async () => data });
    globalThis.location = { search: "?category=01&project_type=skill&view=recommended", hash: "" };
    globalThis.history = { replaceState: (_a, _b, next) => { url = next; } };
    await import(`../site/app.mjs?interaction-test`);
    assert.equal(nodes.get("#category").value, "01");
    assert.equal(nodes.get("#advanced-filters").open, true);
    assert.match(nodes.get("#advanced-count").textContent, /1/);
    assert.equal(nodes.get("#selection-note").hidden, false);
    nodes.get("#clear-filters").events.click();
    assert.equal(nodes.get("#category").value, "");
    assert.equal(nodes.get("#project_type").value, "");
    assert.equal(nodes.get("#clear-filters").disabled, true);
    assert.equal(nodes.get("#results").children.length, data.assets.length);
    assert.equal(url, "?view=all");
    nodes.get("#text").value = "__no_such_tool_123__";
    nodes.get("#text").events.input();
    assert.equal(nodes.get("#results").children[0].className, "empty-state");
    assert.match(nodes.get("#result-count").textContent, /^0 /);
  } finally {
    for (const [key, value] of Object.entries(saved)) {
      if (value === undefined) delete globalThis[key]; else globalThis[key] = value;
    }
  }
});
