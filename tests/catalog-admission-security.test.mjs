import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";
import test from "node:test";
import { loadCatalogSnapshot, snapshotId } from "../scripts/catalog-model.mjs";

const fixturePath = new URL("./fixtures/catalog.snapshot.json", import.meta.url);
const fixture = JSON.parse(readFileSync(fixturePath, "utf8"));

const validAdapter = () => ({
  id: "fixture-adapter",
  source: { profile: "market-bar", version: "1.0.0" },
  target: { profile: "market-bar", version: "1.0.0" },
  implementation: { repository: "registry", path: "scripts/compatibility.py" },
  lossless: true,
  validation_status: "validated",
  evidence: { fixture_sha256: `sha256:${"0".repeat(64)}`, test_command: "fixture", validated_at: "2026-08-10" },
  envelope_major: 1,
});

const validEdge = (adapter = false) => ({
  producer: "skill-fixture-01",
  consumer: "skill-fixture-02",
  output: { profile: "market-bar", version: "1.0.0" },
  input: { profile: "market-bar", version_range: ">=1.0.0 <2.0.0", required: true },
  status: "compatible",
  adapter_path: adapter ? ["fixture-adapter"] : [],
});

const writeMutation = (mutate, { preserveId = false } = {}) => {
  const value = structuredClone(fixture);
  mutate(value);
  if (!preserveId) value.snapshot_id = snapshotId(value);
  const directory = mkdtempSync(join(tmpdir(), "qs-nav-admission-"));
  const path = join(directory, "snapshot.json");
  writeFileSync(path, JSON.stringify(value));
  return path;
};

const rejectsMutation = (mutate, options) => assert.throws(() => loadCatalogSnapshot(writeMutation(mutate, options)));

test("canonical fixture is admitted", () => {
  assert.equal(loadCatalogSnapshot(fileURLToPath(fixturePath)).snapshot_id, fixture.snapshot_id);
});

test("summary changes cannot retain the old snapshot id", () => {
  rejectsMutation((value) => { value.assets[0].summary_en = "tampered"; }, { preserveId: true });
});

test("taxonomy admission is closed at ten categories, 61 subcategories, and 14 stages", () => {
  rejectsMutation((value) => { delete value.taxonomy.categories["10"]; });
  rejectsMutation((value) => { value.taxonomy.categories["01"].subcategories.push(structuredClone(value.taxonomy.categories["01"].subcategories[0])); });
  rejectsMutation((value) => { value.taxonomy.categories["01"].subcategories[0].id = "99.orphan"; });
  rejectsMutation((value) => { value.taxonomy.workflow_stages.push("unknown-stage"); });
});

test("unknown stages and primaries are rejected", () => {
  rejectsMutation((value) => { value.assets[0].workflow.primary_stage = "unknown-stage"; });
  rejectsMutation((value) => { value.assets[0].workflow.primary_stage = "data-quality"; });
});

test("resources and assets are unique canonical HTTPS GitHub links", () => {
  rejectsMutation((value) => { value.resources.push(structuredClone(value.resources[0])); });
  rejectsMutation((value) => { value.resources[0].url = "http://github.com/quantskills/.github"; });
  rejectsMutation((value) => { value.assets.push(structuredClone(value.assets[0])); });
  rejectsMutation((value) => { value.assets[0].url = "https://example.com/asset"; });
});

test("profiles reject duplicate ids and unknown schema references", () => {
  rejectsMutation((value) => { value.profiles.items.push(structuredClone(value.profiles.items[0])); });
  rejectsMutation((value) => { value.profiles.items[0].schema = "base/unknown/1.0.0.schema.json"; });
});

test("adapters and edges reject duplicate or unknown references", () => {
  rejectsMutation((value) => {
    value.adapters.items = [validAdapter(), validAdapter()];
  });
  rejectsMutation((value) => {
    const adapter = validAdapter();
    adapter.source.profile = "unknown-profile";
    value.adapters.items = [adapter];
  });
  rejectsMutation((value) => {
    value.compatibility_edges = [validEdge()];
    value.compatibility_edges[0].producer = "unknown-asset";
  });
  rejectsMutation((value) => {
    value.compatibility_edges = [validEdge()];
    value.compatibility_edges[0].output.profile = "unknown-profile";
  });
  rejectsMutation((value) => {
    value.adapters.items = [validAdapter()];
    value.compatibility_edges = [validEdge(true)];
    value.compatibility_edges[0].adapter_path = ["unknown-adapter"];
  });
});

test("root and catalog objects are closed and enforce mode is required", () => {
  rejectsMutation((value) => { value.extra = true; });
  rejectsMutation((value) => { delete value.assets; });
  rejectsMutation((value) => { value.contract_mode = "audit"; });
  rejectsMutation((value) => { value.assets[0].catalog.extra = true; });
  rejectsMutation((value) => { delete value.assets[0].catalog.subcategory; });
});

test("pending interfaces and unknown modes cannot publish endpoints", () => {
  rejectsMutation((value) => { value.assets[0].interface_status = "pending-maintainer"; });
  rejectsMutation((value) => { value.assets[0].interface_status = "pending-maintainer"; value.assets[0].interface = null; value.compatibility_edges = [validEdge()]; });
  rejectsMutation((value) => { value.assets[0].interface.mode = "unknown"; value.assets[0].interface.reason = "unverified"; });
  rejectsMutation((value) => { value.assets[0].catalog_status = "candidate"; });
});
