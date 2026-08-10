import { readFileSync } from "node:fs";

const CATEGORY_IDS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
const RESOURCE_NAMES = [".github", "join", "quantskills", "registry"];

export function loadCatalogSnapshot(path) {
  let snapshot;
  try {
    snapshot = JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    throw new Error("invalid snapshot", { cause: error });
  }
  if (!snapshot || snapshot.schema_version !== "1.0.0" || !/^sha256:[0-9a-f]{64}$/.test(snapshot.snapshot_id || "")) throw new Error("invalid snapshot");
  if (!Array.isArray(snapshot.assets) || !Array.isArray(snapshot.resources) || !snapshot.taxonomy?.categories) throw new Error("invalid snapshot");
  if (Object.keys(snapshot.taxonomy.categories).sort().join(",") !== CATEGORY_IDS.join(",")) throw new Error("incomplete taxonomy");
  if (snapshot.resources.map((item) => item.name).sort().join(",") !== RESOURCE_NAMES.join(",")) throw new Error("incomplete resources");
  const names = new Set();
  for (const asset of snapshot.assets) {
    if (!asset?.name || names.has(asset.name) || !asset.summary_zh || !asset.summary_en || !asset.catalog?.category || !asset.catalog?.subcategory || !asset.workflow?.primary_stage) throw new Error("invalid asset");
    if (!CATEGORY_IDS.includes(asset.catalog.category)) throw new Error("unknown category");
    names.add(asset.name);
  }
  return snapshot;
}

export function buildCatalogModel(snapshot, presentation = {}) {
  const categories = CATEGORY_IDS.map((id) => ({ id, ...snapshot.taxonomy.categories[id] }));
  const assets = [...snapshot.assets].sort((left, right) => left.name.localeCompare(right.name));
  return { snapshot_id: snapshot.snapshot_id, taxonomy: snapshot.taxonomy, categories, assets, resources: [...snapshot.resources], presentation };
}
