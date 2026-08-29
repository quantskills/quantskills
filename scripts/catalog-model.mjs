import { readFileSync } from "node:fs";
import { snapshotId, validateCatalogSnapshot } from "./snapshot-contract.mjs";

export { snapshotId };

const CATEGORY_IDS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
export function loadCatalogSnapshot(path) {
  let snapshot;
  try {
    snapshot = JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    throw new Error("invalid snapshot", { cause: error });
  }
  return validateCatalogSnapshot(snapshot);
}

export function buildCatalogModel(snapshot, presentation = {}) {
  const categories = CATEGORY_IDS.map((id) => ({ id, ...snapshot.taxonomy.categories[id] }));
  const assets = snapshot.assets.filter((asset) => asset.status !== "deprecated").sort((left, right) => left.name.localeCompare(right.name));
  return { snapshot_id: snapshot.snapshot_id, taxonomy: snapshot.taxonomy, categories, assets, resources: [...snapshot.resources], presentation };
}
