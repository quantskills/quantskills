import assert from "node:assert/strict";
import test from "node:test";
import * as app from "../site/app.mjs";

const stages = {
  "data-foundation": ["data-ingestion", "data-quality"],
  "research-signal": ["feature-engineering", "factor-generation", "factor-screening", "modeling"],
  "portfolio-validation": ["portfolio-construction", "backtesting", "evaluation", "risk"],
  "monitoring-trading": ["monitoring", "execution", "reporting"],
  orchestration: ["orchestration"],
};

const asset = (name, overrides = {}) => ({
  name,
  url: `https://github.com/quantskills/${name}`,
  summary_zh: `${name} 中文摘要`,
  summary_en: `${name} summary`,
  catalog: { category: "01", subcategory: "01.data-source-connectors" },
  workflow: { primary_stage: "data-ingestion", workflow_stages: ["data-ingestion"] },
  project_type: "skill",
  platforms: ["codex"],
  status: "active",
  interface: { mode: "structured", inputs: [], outputs: [{ profile: "market-bar", version: "1.0.0" }], adapters: [] },
  ...overrides,
});

const data = {
  taxonomy: { workflow_groups: stages },
  profiles: [{ id: "market-bar", version: "1.0.0" }],
  assets: [
    asset("skill-safe"),
    asset("skill-consumer", { catalog: { category: "02", subcategory: "02.factor-generation" }, workflow: { primary_stage: "factor-generation", workflow_stages: ["factor-generation"] }, interface: { mode: "structured", inputs: [{ profile: "market-bar", version_range: ">=1.0.0 <2.0.0", required: true }], outputs: [], adapters: [] } }),
    asset("agent-other", { project_type: "agent", platforms: ["claude-code"], catalog: { category: "10", subcategory: "10.agent-template" }, workflow: { primary_stage: "orchestration", workflow_stages: ["orchestration"] }, interface: { mode: "not-applicable", reason: "orchestration-only" } }),
    asset("skill-unrelated", { catalog: { category: "03", subcategory: "03.a-share-equity" }, workflow: { primary_stage: "monitoring", workflow_stages: ["monitoring"] }, interface: { mode: "natural-language" } }),
    asset("skill-isolated", { catalog: { category: "04", subcategory: "04.market-regime" }, workflow: { primary_stage: "risk", workflow_stages: ["risk"] }, interface: { mode: "natural-language" } }),
  ],
  compatibility_edges: [
    { producer: "skill-safe", consumer: "skill-consumer", output: { profile: "market-bar", version: "1.0.0" }, input: { profile: "market-bar", version_range: ">=1.0.0 <2.0.0", required: true }, status: "compatible", explanation: "direct profile match" },
    { producer: "skill-safe", consumer: "skill-consumer", output: { profile: "market-bar", version: "1.0.0" }, input: { profile: "market-bar", version_range: ">=1.0.0 <2.0.0", required: true }, status: "adapter-required", explanation: "adapter path required" },
    { producer: "skill-safe", consumer: "skill-consumer", output: { profile: "market-bar", version: "1.0.0" }, input: { profile: "market-bar", version_range: ">=1.0.0 <2.0.0", required: true }, status: "lossy", explanation: "lossy conversion" },
    { producer: "skill-safe", consumer: "skill-consumer", output: { profile: "market-bar", version: "1.0.0" }, input: { profile: "market-bar", version_range: ">=1.0.0 <2.0.0", required: true }, status: "incompatible", explanation: "schema conflict" },
    { producer: "skill-safe", consumer: "skill-consumer", output: { profile: "market-bar", version: "1.0.0" }, input: { profile: "market-bar", version_range: ">=1.0.0 <2.0.0", required: true }, status: "unknown", explanation: "insufficient evidence" },
    { producer: "skill-unrelated", consumer: "agent-other", output: { profile: "market-bar", version: "1.0.0" }, input: { profile: "market-bar", version_range: ">=1.0.0 <2.0.0", required: true }, status: "compatible", explanation: "unrelated edge" },
  ],
};

class FakeNode {
  constructor(tagName) { this.tagName = tagName; this.children = []; this.textContent = ""; this.attributes = {}; this.innerHTMLWrites = 0; }
  append(...nodes) { this.children.push(...nodes); }
  appendChild(node) { this.append(node); return node; }
  replaceChildren(...nodes) { this.children = [...nodes]; }
  setAttribute(name, value) { this.attributes[name] = String(value); }
  get innerHTML() { return this.innerHTMLWrites ? "unsafe" : ""; }
  set innerHTML(value) { this.innerHTMLWrites += 1; this._innerHTML = value; }
  get href() { return this.attributes.href; }
  set href(value) { this.attributes.href = String(value); }
  get value() { return this._value || ""; }
  set value(value) { this._value = String(value); }
  get allText() { return [this.textContent, ...this.children.map((child) => child.allText || child.textContent || "")].join(" "); }
}

const fakeDocument = { createElement: (tag) => new FakeNode(tag) };

test("filterAssets intersects category, subcategory, group, stage, type, runtime, profile, status, and text", () => {
  const state = { category: "01", subcategory: "01.data-source-connectors", group: "data-foundation", stage: "data-ingestion", project_type: "skill", runtime: "codex", profile: "market-bar", status: "active", text: "SAFE" };
  assert.deepEqual(app.filterAssets(data, state).map((item) => item.name), ["skill-safe"]);
  assert.deepEqual(app.filterAssets(data, { ...state, group: "research-signal" }), []);
  assert.deepEqual(app.filterAssets(data, { ...state, stage: "factor-generation" }), []);
});

test("compatibility selection matches only the exact selected status and related edge", () => {
  for (const status of ["adapter-required", "incompatible", "unknown"]) assert.deepEqual(app.filterAssets(data, { compatibility: status }).map((item) => item.name), ["skill-safe", "skill-consumer"]);
  assert.deepEqual(app.filterAssets(data, { compatibility: "compatible" }).map((item) => item.name), ["skill-safe", "skill-consumer", "agent-other", "skill-unrelated"]);
  assert.deepEqual(app.filterAssets(data, { compatibility: "arbitrary-status" }), []);
  assert.deepEqual(app.filterAssets(data, { compatibility: "compatible", text: "unrelated" }).map((item) => item.name), ["skill-unrelated"]);
});

test("compatibility options are exact and derive not-applicable only from explicit interface modes", () => {
  assert.deepEqual(app.COMPATIBILITY_STATUSES, ["compatible", "adapter-required", "incompatible", "unknown", "not-applicable"]);
  assert.deepEqual(app.filterAssets(data, { compatibility: "not-applicable" }).map((item) => item.name).sort(), ["agent-other", "skill-isolated", "skill-unrelated"]);
  assert.deepEqual(app.filterAssets(data, { compatibility: "lossy" }), []);
  assert.equal(app.relationshipModel(data, "skill-safe").edges.some((edge) => edge.status === "lossy"), false);
});

test("relationship model exposes exact edge explanations and profile providers/consumers", () => {
  const model = app.relationshipModel(data, "skill-safe");
  assert.equal(model.edges[0].status, "compatible");
  assert.equal(model.edges[0].explanation, "direct profile match");
  assert.deepEqual(model.downstreamConsumers, ["skill-consumer"]);
  assert.deepEqual(app.relationshipModel(data, "skill-consumer").upstreamProviders, ["skill-safe"]);
});

test("malicious names, summaries, stages, and profiles stay text and never become markup or hrefs", () => {
  const malicious = asset("<img src=x onerror=alert(1)>", {
    url: "javascript:alert(1)",
    summary_zh: "<script>alert(1)</script>",
    workflow: { primary_stage: "<svg onload=alert(1)>", workflow_stages: ["<svg onload=alert(1)>"] },
    interface: { mode: "structured", inputs: [{ profile: "<img src=x>", version_range: "*", required: true }], outputs: [], adapters: [] },
  });
  const card = app.renderAssetCard(fakeDocument, { ...data, assets: [malicious] }, malicious, 0);
  assert.equal(card.innerHTML, "");
  assert.match(card.allText, /<img src=x onerror=alert\(1\)>/);
  assert.match(card.allText, /<script>alert\(1\)<\/script>/);
  assert.equal(card.attributes.href, undefined);
  assert.equal(Object.values(card.attributes).some((value) => /javascript:|onerror|onload/.test(value)), false);
});

test("URL state restoration is explicit and URL-encoded", () => {
  const state = app.stateFromSearch("?group=data-foundation&stage=data-ingestion&profile=market-bar&text=a%20b");
  assert.equal(state.group, "data-foundation");
  assert.equal(state.text, "a b");
  assert.equal(app.searchFromState(state), "group=data-foundation&stage=data-ingestion&profile=market-bar&text=a+b");
});
