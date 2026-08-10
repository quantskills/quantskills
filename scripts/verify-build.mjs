import { readFileSync } from "node:fs";
import { join } from "node:path";

const marker = (text) => text.match(/<!-- catalog-snapshot: (sha256:[0-9a-f]{64}) -->/)?.[1];
const names = (items) => items.map((item) => item.name).sort().join(",");

export function verifyBuild(outputDir, snapshot) {
  const zh = readFileSync(join(outputDir, "README.md"), "utf8");
  const en = readFileSync(join(outputDir, "README.en.md"), "utf8");
  const site = JSON.parse(readFileSync(join(outputDir, "site", "catalog.json"), "utf8"));
  if (marker(zh) !== snapshot.snapshot_id || marker(en) !== snapshot.snapshot_id || site.snapshot_id !== snapshot.snapshot_id) throw new Error("mixed snapshot output");
  if (names(site.assets) !== names(snapshot.assets) || names(site.resources) !== names(snapshot.resources) || JSON.stringify(site.taxonomy) !== JSON.stringify(snapshot.taxonomy) || JSON.stringify(site.profiles) !== JSON.stringify(snapshot.profiles.items) || JSON.stringify(site.adapters) !== JSON.stringify(snapshot.adapters.items) || JSON.stringify(site.compatibility_edges) !== JSON.stringify(snapshot.compatibility_edges)) throw new Error("output projection mismatch");
  for (const asset of snapshot.assets) {
    const actual = site.assets.find((item) => item.name === asset.name);
    if (!actual || JSON.stringify(actual) !== JSON.stringify(asset)) throw new Error("output asset mismatch");
    if (!zh.includes(asset.name) || !en.includes(asset.name)) throw new Error("README asset mismatch");
  }
  if (!zh.includes(`public assets: ${snapshot.assets.length}`) || !en.includes(`public assets: ${snapshot.assets.length}`)) throw new Error("output count mismatch");
  return true;
}
