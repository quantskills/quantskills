import { readFileSync } from "node:fs";
import { join } from "node:path";

const marker = (text) => text.match(/<!-- catalog-snapshot: (sha256:[0-9a-f]{64}) -->/)?.[1];
const names = (items) => items.map((item) => item.name).sort().join(",");

export function verifyBuild(outputDir, snapshot) {
  const zh = readFileSync(join(outputDir, "README.md"), "utf8");
  const en = readFileSync(join(outputDir, "README.en.md"), "utf8");
  const site = JSON.parse(readFileSync(join(outputDir, "site", "catalog.json"), "utf8"));
  if (marker(zh) !== snapshot.snapshot_id || marker(en) !== snapshot.snapshot_id || site.snapshot_id !== snapshot.snapshot_id) throw new Error("mixed snapshot output");
  if (names(site.assets) !== names(snapshot.assets) || names(site.resources) !== names(snapshot.resources)) throw new Error("output name set mismatch");
  for (const asset of snapshot.assets) {
    const actual = site.assets.find((item) => item.name === asset.name);
    if (!actual || actual.url !== asset.url || actual.summary_zh !== asset.summary_zh || actual.summary_en !== asset.summary_en || actual.catalog.category !== asset.catalog.category || actual.catalog.subcategory !== asset.catalog.subcategory || JSON.stringify(actual.interface.inputs || []) !== JSON.stringify(asset.interface.inputs || []) || JSON.stringify(actual.interface.outputs || []) !== JSON.stringify(asset.interface.outputs || [])) throw new Error("output asset mismatch");
    if (!zh.includes(asset.name) || !en.includes(asset.name)) throw new Error("README asset mismatch");
  }
  if (!zh.includes(`public assets: ${snapshot.assets.length}`) || !en.includes(`public assets: ${snapshot.assets.length}`)) throw new Error("output count mismatch");
  return true;
}
