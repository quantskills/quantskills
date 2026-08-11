export const WORKFLOW_GROUPS = Object.freeze({
  "data-foundation": ["data-ingestion", "data-quality"],
  "research-signal": ["feature-engineering", "factor-generation", "factor-screening", "modeling"],
  "portfolio-validation": ["portfolio-construction", "backtesting", "evaluation", "risk"],
  "monitoring-trading": ["monitoring", "execution", "reporting"],
  orchestration: ["orchestration"],
});

export const COMPATIBILITY_STATUSES = Object.freeze(["compatible", "adapter-required", "incompatible", "unknown", "not-applicable"]);
const EDGE_COMPATIBILITY_STATUSES = Object.freeze(["compatible", "adapter-required", "incompatible", "unknown"]);
const NOT_APPLICABLE_MODES = new Set(["natural-language", "not-applicable"]);
const FILTER_KEYS = ["text", "category", "subcategory", "group", "stage", "project_type", "platform", "runtime", "profile", "status", "compatibility"];
const PARAM_ORDER = ["category", "subcategory", "group", "stage", "project_type", "platform", "runtime", "profile", "status", "compatibility", "text"];

const asText = (value) => typeof value === "string" ? value : value == null ? "" : String(value);
const list = (value) => Array.isArray(value) ? value : [];
const safeOption = (value) => /^[a-z0-9][a-z0-9._-]*$/.test(asText(value));
const assetStages = (asset) => list(asset?.workflow?.workflow_stages).filter((stage) => typeof stage === "string");
const endpointProfiles = (items) => list(items).filter((item) => item && typeof item === "object" && typeof item.profile === "string").map((item) => item.profile);

export function workflowGroups(data) {
  const groups = data?.taxonomy?.workflow_groups;
  if (!groups || typeof groups !== "object" || Array.isArray(groups)) return WORKFLOW_GROUPS;
  return Object.fromEntries(Object.entries(groups).map(([group, stages]) => [group, list(stages).filter((stage) => typeof stage === "string")]));
}

function matchesGroup(data, asset, group) {
  const stages = workflowGroups(data)[group];
  return Array.isArray(stages) && assetStages(asset).some((stage) => stages.includes(stage));
}

const trustedEdges = (data) => list(data?.compatibility_edges).filter((edge) => edge && EDGE_COMPATIBILITY_STATUSES.includes(edge.status));

function relatedToAsset(data, assetName, status = "") {
  if (!status) return trustedEdges(data);
  if (!COMPATIBILITY_STATUSES.includes(status)) return [];
  if (status === "not-applicable") {
    const asset = list(data?.assets).find((item) => item?.name === assetName);
    return asset && NOT_APPLICABLE_MODES.has(asset?.interface?.mode) ? [{ status }] : [];
  }
  return trustedEdges(data).filter((edge) => edge.status === status && (edge.producer === assetName || edge.consumer === assetName));
}

export function filterAssets(data, state = {}) {
  const value = state || {};
  const runtime = value.runtime || value.platform || "";
  const profile = value.profile || "";
  const text = asText(value.text).toLowerCase();
  const compatibility = value.compatibility || "";
  return list(data?.assets).filter((asset) => {
    const stages = assetStages(asset);
    const profiles = [...endpointProfiles(asset?.interface?.inputs), ...endpointProfiles(asset?.interface?.outputs)];
    const haystack = [asset?.name, asset?.summary_zh, asset?.summary_en].map(asText).join(" ").toLowerCase();
    return (!value.category || asset?.catalog?.category === value.category)
      && (!value.subcategory || asset?.catalog?.subcategory === value.subcategory)
      && (!value.group || matchesGroup(data, asset, value.group))
      && (!value.stage || stages.includes(value.stage))
      && (!value.project_type || asset?.project_type === value.project_type)
      && (!runtime || list(asset?.platforms).includes(runtime))
      && (!profile || profiles.includes(profile))
      && (!value.status || asset?.status === value.status)
      && (!compatibility || relatedToAsset(data, asset.name, compatibility).length > 0)
      && (!text || haystack.includes(text));
  });
}

export function explainEdges(data, asset) {
  const name = typeof asset === "string" ? asset : asset?.name;
  return trustedEdges(data).filter((edge) => edge.producer === name || edge.consumer === name);
}

function explanation(edge) {
  return asText(edge?.explanation || edge?.reason || edge?.details || edge?.evidence?.summary || "No explanation provided");
}

export function relationshipModel(data, asset) {
  const target = typeof asset === "string" ? list(data?.assets).find((item) => item?.name === asset) : asset;
  const name = target?.name;
  const inputs = new Set(endpointProfiles(target?.interface?.inputs));
  const outputs = new Set(endpointProfiles(target?.interface?.outputs));
  const assets = list(data?.assets);
  const upstreamProviders = assets.filter((item) => item?.name !== name && [...inputs].some((profile) => endpointProfiles(item?.interface?.outputs).includes(profile))).map((item) => item.name).filter(Boolean).sort();
  const downstreamConsumers = assets.filter((item) => item?.name !== name && [...outputs].some((profile) => endpointProfiles(item?.interface?.inputs).includes(profile))).map((item) => item.name).filter(Boolean).sort();
  const edges = explainEdges(data, name).map((edge) => ({ ...edge, explanation: explanation(edge) }));
  return { edges, upstreamProviders: [...new Set(upstreamProviders)], downstreamConsumers: [...new Set(downstreamConsumers)] };
}

export function canonicalAssetUrl(asset) {
  const name = asText(asset?.name);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) return null;
  return `https://github.com/quantskills/${name}`;
}

export function assetViewModel(data, asset) {
  const relationships = relationshipModel(data, asset);
  return {
    name: asText(asset?.name),
    summary_zh: asText(asset?.summary_zh),
    summary_en: asText(asset?.summary_en),
    href: canonicalAssetUrl(asset),
    category: asText(asset?.catalog?.category),
    subcategory: asText(asset?.catalog?.subcategory),
    primary_stage: asText(asset?.workflow?.primary_stage),
    project_type: asText(asset?.project_type),
    status: asText(asset?.status),
    inputs: endpointProfiles(asset?.interface?.inputs),
    outputs: endpointProfiles(asset?.interface?.outputs),
    ...relationships,
  };
}

export function renderAssetCard(document_, data, asset, index = 0) {
  const model = assetViewModel(data, asset);
  const card = document_.createElement("article");
  card.className = "card";
  card.id = `asset-card-${Number.isSafeInteger(index) && index >= 0 ? index : 0}`;
  const title = document_.createElement("h2");
  if (model.href) {
    const link = document_.createElement("a");
    link.href = model.href;
    link.textContent = model.name;
    title.append(link);
  } else title.textContent = model.name;
  const summary = document_.createElement("p");
  summary.textContent = `${model.summary_zh} ${model.summary_en}`.trim();
  const metadata = document_.createElement("p");
  metadata.textContent = `${model.category} / ${model.subcategory} · ${model.primary_stage} · ${model.project_type} · ${model.status}`;
  const edges = document_.createElement("p");
  edges.textContent = model.edges.length ? model.edges.map((edge) => `${asText(edge.status)}: ${edge.explanation}`).join(" | ") : "Compatibility: none";
  const profiles = document_.createElement("p");
  profiles.textContent = `Upstream providers: ${model.upstreamProviders.join(", ") || "—"}; Downstream consumers: ${model.downstreamConsumers.join(", ") || "—"}`;
  card.append(title, summary, metadata, edges, profiles);
  return card;
}

export function stateFromSearch(search = "") {
  const query = search instanceof URLSearchParams ? search : new URLSearchParams(asText(search));
  const state = Object.fromEntries(FILTER_KEYS.map((key) => [key, query.get(key) || ""]));
  if (!state.runtime && state.platform) state.runtime = state.platform;
  if (!state.platform && state.runtime) state.platform = state.runtime;
  return state;
}

export function searchFromState(state = {}) {
  const query = new URLSearchParams();
  for (const key of PARAM_ORDER) {
    const value = asText(state[key]);
    if (value) query.set(key, value);
  }
  return query.toString();
}

function optionValues(data) {
  const assets = list(data?.assets);
  const values = {
    category: assets.map((asset) => asset?.catalog?.category),
    subcategory: assets.map((asset) => asset?.catalog?.subcategory),
    group: Object.keys(workflowGroups(data)),
    stage: assets.flatMap(assetStages),
    project_type: assets.map((asset) => asset?.project_type),
    platform: assets.flatMap((asset) => list(asset?.platforms)),
    runtime: assets.flatMap((asset) => list(asset?.platforms)),
    profile: assets.flatMap((asset) => [...endpointProfiles(asset?.interface?.inputs), ...endpointProfiles(asset?.interface?.outputs)]),
    status: assets.map((asset) => asset?.status),
    compatibility: COMPATIBILITY_STATUSES,
  };
  return Object.fromEntries(Object.entries(values).map(([key, items]) => [key, [...new Set(items.filter(safeOption))].sort()]));
}

function populateControl(document_, control, values) {
  for (const value of values) {
    const option = document_.createElement("option");
    option.value = value;
    option.textContent = value;
    control.append(option);
  }
}

function readControls(controls) {
  const state = Object.fromEntries(Object.entries(controls).map(([key, control]) => [key, control.value || ""]));
  if (!state.runtime && state.platform) state.runtime = state.platform;
  if (!state.platform && state.runtime) state.platform = state.runtime;
  return state;
}

export function renderResults(document_, data, state) {
  const results = document_.querySelector("#results");
  results.replaceChildren();
  for (const [index, asset] of filterAssets(data, state).entries()) results.append(renderAssetCard(document_, data, asset, index));
  if (!results.childNodes.length) results.textContent = "No results. Adjust active filters.";
  return results;
}

if (typeof document !== "undefined") {
  const controls = {};
  const data = await fetch("catalog.json").then((response) => { if (!response.ok) throw new Error("catalog unavailable"); return response.json(); });
  if (!/^sha256:[0-9a-f]{64}$/.test(data.snapshot_id || "")) throw new Error("invalid snapshot");
  document.querySelector("#snapshot").textContent = data.snapshot_id;
  for (const key of FILTER_KEYS.filter((id) => id !== "text")) {
    const control = document.querySelector(`#${key}`);
    if (!control) continue;
    controls[key] = control;
    populateControl(document, control, optionValues(data)[key] || []);
  }
  const textControl = document.querySelector("#text");
  if (textControl) controls.text = textControl;
  const initial = stateFromSearch(location.search);
  for (const [key, control] of Object.entries(controls)) control.value = initial[key] || "";
  const render = () => {
    const state = readControls(controls);
    renderResults(document, data, state);
    const query = searchFromState(state);
    history.replaceState(null, "", `${query ? `?${query}` : ""}${location.hash}`);
  };
  for (const control of Object.values(controls)) control.addEventListener("input", render);
  render();
}
