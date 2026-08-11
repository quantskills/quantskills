import { createHash } from "node:crypto";

const VOLATILE_KEYS = new Set(["snapshot_id", "generated_at", "validated_at", "scan_time", "last_validated"]);
const CATEGORY_IDS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
const WORKFLOW_STAGES = [
  "data-ingestion", "data-quality", "feature-engineering", "factor-generation", "factor-screening", "modeling",
  "portfolio-construction", "backtesting", "evaluation", "risk", "monitoring", "execution", "reporting", "orchestration",
];
const RESOURCE_NAMES = [".github", "join", "quantskills", "registry"];
const ROOT_KEYS = [
  "schema_version", "taxonomy_version", "snapshot_id", "contract_mode", "interface_diagnostics", "taxonomy", "assets",
  "resources", "envelope", "profiles", "adapters", "provider_mappings", "core_lineage", "compatibility_edges", "publication",
];
const ASSET_REQUIRED = [
  "name", "url", "description", "project_type", "declaration_file", "catalog", "workflow", "interface", "category",
  "subcategory", "stage", "tags", "platforms", "status", "requires", "summary_zh", "summary_en", "license",
  "validation_level", "maintainer_type", "last_validated", "commit_sha",
];
const ASSET_OPTIONAL = ["migration_state", "migration_issues", "health", "workflow_groups", "lineage", "catalog_status", "interface_status", "declaration_status", "default_branch", "description"];

const PROFILE_DEFINITIONS = Object.freeze({
  "backtest-result": ["result", "result/backtest-result/1.0.0.schema.json"],
  "evaluation-result": ["result", "result/evaluation-result/1.0.0.schema.json"],
  "event-record": ["base", "base/event-record/1.0.0.schema.json"],
  "execution-plan": ["result", "result/execution-plan/1.0.0.schema.json"],
  "factor-panel": ["base", "base/factor-panel/1.0.0.schema.json"],
  "fundamental-pit": ["base", "base/fundamental-pit/1.0.0.schema.json"],
  "futures-contract": ["base", "base/futures-contract/1.0.0.schema.json"],
  holdings: ["base", "base/holdings/1.0.0.schema.json"],
  "macro-series": ["base", "base/macro-series/1.0.0.schema.json"],
  "market-bar": ["base", "base/market-bar/1.0.0.schema.json"],
  "model-artifact": ["result", "result/model-artifact/1.0.0.schema.json"],
  "option-chain": ["base", "base/option-chain/1.0.0.schema.json"],
  "portfolio-target": ["result", "result/portfolio-target/1.0.0.schema.json"],
  "ranked-factor-set": ["result", "result/ranked-factor-set/1.0.0.schema.json"],
  "report-artifact": ["result", "result/report-artifact/1.0.0.schema.json"],
  "risk-result": ["result", "result/risk-result/1.0.0.schema.json"],
});

const isObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
const fail = (message) => { throw new Error(message); };
const ensure = (condition, message) => { if (!condition) fail(message); };
const exactKeys = (value, required, optional = []) => {
  ensure(isObject(value), "expected object");
  const allowed = new Set([...required, ...optional]);
  ensure(required.every((key) => Object.prototype.hasOwnProperty.call(value, key)), "missing required field");
  ensure(Object.keys(value).every((key) => allowed.has(key)), "unexpected field");
};
const string = (value, message = "expected string") => ensure(typeof value === "string" && value.length > 0, message);
const arrayOfStrings = (value, message = "expected string array") => ensure(Array.isArray(value) && value.every((item) => typeof item === "string"), message);
const sha = (value) => ensure(typeof value === "string" && /^sha256:[0-9a-f]{64}$/.test(value), "invalid sha256");
const date = (value) => ensure(typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value), "invalid date");

function sortKeys(value, omitVolatile = false) {
  if (Array.isArray(value)) return value.map((item) => sortKeys(item, omitVolatile));
  if (!isObject(value)) return value;
  return Object.fromEntries(Object.keys(value).sort().filter((key) => !(omitVolatile && VOLATILE_KEYS.has(key))).map((key) => [key, sortKeys(value[key], omitVolatile)]));
}

export const stableSnapshot = (snapshot) => sortKeys(snapshot, true);
export const canonicalJson = (value) => {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (isObject(value)) return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
};
export const snapshotId = (snapshot) => `sha256:${createHash("sha256").update(Buffer.from(canonicalJson(stableSnapshot(snapshot)), "utf8")).digest("hex")}`;

function profileKey(profile, version = "1.0.0") {
  return `${profile}@${version}`;
}

function validateTaxonomy(taxonomy) {
  exactKeys(taxonomy, ["schema_version", "categories", "workflow_stages"], ["workflow_groups"]);
  ensure(taxonomy.schema_version === "1.0.0", "invalid taxonomy schema");
  exactKeys(taxonomy.categories, CATEGORY_IDS);
  const stages = taxonomy.workflow_stages;
  ensure(Array.isArray(stages) && stages.length === 14 && new Set(stages).size === 14, "taxonomy must have 14 unique stages");
  ensure(JSON.stringify([...stages].sort()) === JSON.stringify([...WORKFLOW_STAGES].sort()), "unknown workflow stage");
  if (taxonomy.workflow_groups !== undefined) {
    ensure(isObject(taxonomy.workflow_groups), "invalid workflow groups");
    for (const group of Object.values(taxonomy.workflow_groups)) { arrayOfStrings(group); ensure(group.every((stage) => stages.includes(stage)), "workflow group references unknown stage"); }
  }
  const subcategories = new Map();
  let count = 0;
  for (const category of CATEGORY_IDS) {
    const detail = taxonomy.categories[category];
    exactKeys(detail, ["label_zh", "label_en", "subcategories"]);
    string(detail.label_zh); string(detail.label_en);
    ensure(Array.isArray(detail.subcategories) && detail.subcategories.length > 0, "category has no subcategories");
    for (const item of detail.subcategories) {
      exactKeys(item, ["id", "label_zh", "label_en"]);
      string(item.id); string(item.label_zh); string(item.label_en);
      ensure(item.id.startsWith(`${category}.`) && /^[0-9]{2}\.[a-z0-9-]+$/.test(item.id), "invalid subcategory id");
      ensure(!subcategories.has(item.id), "duplicate subcategory id");
      subcategories.set(item.id, category); count += 1;
    }
  }
  ensure(count === 61, "taxonomy must have 61 subcategories");
  return { stages: new Set(stages), subcategories };
}

function validateResources(resources) {
  ensure(Array.isArray(resources) && resources.length === RESOURCE_NAMES.length, "incomplete resources");
  const seen = new Set();
  resources.forEach((resource, index) => {
    exactKeys(resource, ["name", "url"]); string(resource.name); string(resource.url);
    ensure(!seen.has(resource.name), "duplicate resource"); seen.add(resource.name);
    ensure(resource.name === RESOURCE_NAMES[index] && resource.url === `https://github.com/quantskills/${resource.name}`, "invalid resource URL");
  });
  ensure(seen.size === RESOURCE_NAMES.length, "incomplete resources");
}

function validateEnvelope(envelope) {
  exactKeys(envelope, ["version", "name", "items"]);
  ensure(envelope.version === "1.0.0" && envelope.name === "quantskills-envelope", "invalid envelope catalog");
  ensure(Array.isArray(envelope.items) && envelope.items.length > 0, "empty envelope catalog");
  envelope.items.forEach((item) => { exactKeys(item, ["version", "schema"]); ensure(item.version === "1.0.0" && item.schema === "1.0.0.schema.json", "unknown envelope schema"); });
}

function validateProfiles(profiles) {
  exactKeys(profiles, ["version", "items"]); ensure(profiles.version === "1.0.0" && Array.isArray(profiles.items) && profiles.items.length > 0, "invalid profile catalog");
  const seen = new Set();
  for (const item of profiles.items) {
    exactKeys(item, ["id", "version", "schema", "kind", "primary_key", "time_semantics"]);
    string(item.id); ensure(item.version === "1.0.0", "unknown profile version");
    const definition = PROFILE_DEFINITIONS[item.id]; ensure(definition && definition[0] === item.kind && definition[1] === item.schema, "unknown profile schema");
    const key = profileKey(item.id, item.version); ensure(!seen.has(key), "duplicate profile id-version"); seen.add(key);
    ensure(Array.isArray(item.primary_key) && item.primary_key.length > 0, "invalid profile primary key"); arrayOfStrings(item.primary_key); string(item.time_semantics);
  }
  return seen;
}

function validateProfileRef(value, profiles, message = "unknown profile reference") {
  exactKeys(value, ["profile", "version"]); string(value.profile); ensure(value.version === "1.0.0" && profiles.has(profileKey(value.profile, value.version)), message);
}

function validateMappingProfileRef(value, profiles) {
  exactKeys(value, ["id", "version"]); string(value.id); ensure(value.version === "1.0.0" && profiles.has(profileKey(value.id, value.version)), "mapping references unknown profile");
}

function validateAdapters(adapters, profiles) {
  exactKeys(adapters, ["version", "items"]); ensure(adapters.version === "1.0.0" && Array.isArray(adapters.items), "invalid adapter catalog");
  const ids = new Set();
  for (const adapter of adapters.items) {
    exactKeys(adapter, ["id", "source", "target", "implementation", "lossless", "validation_status", "evidence", "envelope_major"]);
    string(adapter.id); ensure(!ids.has(adapter.id), "duplicate adapter id"); ids.add(adapter.id);
    validateProfileRef(adapter.source, profiles); validateProfileRef(adapter.target, profiles);
    exactKeys(adapter.implementation, ["repository", "path"]); ensure(adapter.implementation.repository === "registry", "invalid adapter repository"); string(adapter.implementation.path);
    ensure(adapter.lossless === true && adapter.validation_status === "validated" && adapter.envelope_major === 1, "invalid adapter contract");
    exactKeys(adapter.evidence, ["fixture_sha256", "test_command", "validated_at"]); sha(adapter.evidence.fixture_sha256); string(adapter.evidence.test_command); date(adapter.evidence.validated_at);
  }
  return ids;
}

function validateMappings(mappings, profiles) {
  exactKeys(mappings, ["version", "items"]); ensure(mappings.version === "1.0.0" && Array.isArray(mappings.items) && mappings.items.length > 0, "invalid provider mapping catalog");
  const ids = new Set();
  for (const mapping of mappings.items) {
    exactKeys(mapping, ["id", "source", "target", "implementation", "lossless", "validation_status", "evidence", "fields", "native_fields_retained", "policies", "units"]);
    string(mapping.id); ensure(!ids.has(mapping.id), "duplicate provider mapping id"); ids.add(mapping.id);
    exactKeys(mapping.source, ["provider", "dataset", "representation"]); string(mapping.source.provider); string(mapping.source.dataset); string(mapping.source.representation);
    exactKeys(mapping.target, ["envelope", "profile"]); exactKeys(mapping.target.envelope, ["name", "version"]); ensure(mapping.target.envelope.name === "quantskills-envelope" && mapping.target.envelope.version === "1.0.0", "invalid mapping envelope");
    validateMappingProfileRef(mapping.target.profile, profiles);
    exactKeys(mapping.implementation, ["module", "callable"]); string(mapping.implementation.module); string(mapping.implementation.callable);
    ensure(mapping.lossless === true && mapping.validation_status === "validated", "invalid mapping contract");
    exactKeys(mapping.evidence, ["fixture", "raw_sha256"]); string(mapping.evidence.fixture); sha(mapping.evidence.raw_sha256);
    ensure(isObject(mapping.fields) && Object.values(mapping.fields).every((value) => typeof value === "string"), "invalid mapping fields");
    arrayOfStrings(mapping.native_fields_retained); ensure(isObject(mapping.policies) && Object.values(mapping.policies).every((value) => typeof value === "string"), "invalid mapping policies");
    ensure(isObject(mapping.units) && Object.values(mapping.units).every((value) => typeof value === "string"), "invalid mapping units");
  }
}

function validateInterface(interface_, profiles, adapters) {
  ensure(isObject(interface_), "invalid interface"); string(interface_.mode);
  if (interface_.mode === "natural-language") { exactKeys(interface_, ["mode"]); return; }
  if (interface_.mode === "not-applicable") { exactKeys(interface_, ["mode", "reason"]); string(interface_.reason); return; }
  ensure(interface_.mode === "structured" || interface_.mode === "hybrid", "unknown interface mode");
  exactKeys(interface_, ["mode", "envelope", "inputs", "outputs", "adapters"]);
  exactKeys(interface_.envelope, ["name", "version"]); ensure(interface_.envelope.name === "quantskills-envelope" && interface_.envelope.version === "1.0.0", "invalid interface envelope");
  ensure(Array.isArray(interface_.inputs) && Array.isArray(interface_.outputs) && Array.isArray(interface_.adapters), "invalid interface endpoints");
  interface_.inputs.forEach((item) => { exactKeys(item, ["profile", "version_range", "required"]); string(item.profile); string(item.version_range); ensure(typeof item.required === "boolean" && [...profiles].some((key) => key.startsWith(`${item.profile}@`)), "unknown input profile"); });
  interface_.outputs.forEach((item) => { validateProfileRef(item, profiles, "unknown output profile"); });
  interface_.adapters.forEach((id) => { string(id); ensure(adapters.has(id), "unknown interface adapter"); });
}

function validateAssets(assets, taxonomy, profiles, adapters) {
  ensure(Array.isArray(assets) && assets.length > 0, "assets must be nonempty");
  const names = new Set();
  for (const asset of assets) {
    exactKeys(asset, ASSET_REQUIRED, ASSET_OPTIONAL); ASSET_REQUIRED.forEach((key) => ensure(Object.prototype.hasOwnProperty.call(asset, key), `asset missing ${key}`));
    string(asset.name); ensure(!names.has(asset.name), "duplicate asset"); names.add(asset.name);
    ensure(asset.url === `https://github.com/quantskills/${asset.name}`, "invalid asset URL");
    ensure(typeof asset.description === "string", "invalid description"); ensure(asset.project_type === "skill" || asset.project_type === "agent", "invalid project type");
    ensure(asset.declaration_file === (asset.project_type === "skill" ? "SKILL.md" : "AGENTS.md"), "invalid declaration file");
    exactKeys(asset.catalog, ["category", "subcategory"]); ensure(taxonomy.subcategories.get(asset.catalog.subcategory) === asset.catalog.category, "unknown asset subcategory");
    ensure(asset.category === asset.catalog.category && asset.subcategory === asset.catalog.subcategory, "asset catalog aliases mismatch");
    exactKeys(asset.workflow, ["primary_stage", "workflow_stages"]); arrayOfStrings(asset.workflow.workflow_stages); ensure(asset.workflow.workflow_stages.length > 0 && new Set(asset.workflow.workflow_stages).size === asset.workflow.workflow_stages.length, "invalid workflow stages");
    ensure(asset.workflow.workflow_stages.every((stage) => taxonomy.stages.has(stage)), "unknown asset workflow stage");
    ensure(taxonomy.stages.has(asset.workflow.primary_stage) && asset.workflow.workflow_stages.includes(asset.workflow.primary_stage), "invalid primary stage");
    ensure(asset.stage === asset.workflow.primary_stage, "asset stage alias mismatch");
    if (asset.catalog_status !== undefined) ensure(asset.catalog_status === "approved", "asset is not catalog-approved");
    if (asset.interface_status !== undefined) {
      ensure(asset.interface_status === "pending-maintainer" || asset.interface_status === "published", "invalid interface status");
      if (asset.interface_status === "pending-maintainer") ensure(asset.interface === null, "pending interface must be null");
      if (asset.interface_status === "published") ensure(asset.interface !== null, "published interface is required");
    }
    if (asset.interface !== null) validateInterface(asset.interface, profiles, adapters);
    arrayOfStrings(asset.tags); arrayOfStrings(asset.platforms); arrayOfStrings(asset.requires);
    ["status", "summary_zh", "summary_en", "license", "validation_level", "maintainer_type", "commit_sha"].forEach((key) => string(asset[key])); date(asset.last_validated);
    if (asset.workflow_groups !== undefined) arrayOfStrings(asset.workflow_groups);
    if (asset.lineage !== undefined) { exactKeys(asset.lineage, ["source_mapping_id"]); string(asset.lineage.source_mapping_id); }
    if (asset.migration_issues !== undefined) ensure(Array.isArray(asset.migration_issues), "invalid migration issues");
  }
  return new Map(assets.map((asset) => [asset.name, asset]));
}

function validateCoreLineage(lineage, assets, profiles) {
  exactKeys(lineage, ["version", "artifacts"], ["scope"]); ensure(lineage.version === "1.0.0" && Array.isArray(lineage.artifacts) && lineage.artifacts.length <= 7, "invalid core lineage");
  const ids = new Set();
  for (const item of lineage.artifacts) {
    exactKeys(item, ["id", "file", "artifact_sha256", "producer", "profile", "version", "inputs"], ["source_mapping_id", "provenance"]);
    string(item.id); ensure(!ids.has(item.id), "duplicate lineage artifact"); ids.add(item.id); ensure(/^0[1-7]-[a-z-]+\.json$/.test(item.file), "invalid lineage artifact file"); sha(item.artifact_sha256); string(item.producer); ensure(assets.has(item.producer), "unknown lineage producer");
    ensure(profiles.has(profileKey(item.profile, item.version)), "unknown lineage profile"); ensure(item.version === "1.0.0");
    ensure(Array.isArray(item.inputs), "invalid lineage inputs"); item.inputs.forEach((input) => { exactKeys(input, ["id", "artifact_sha256"]); string(input.id); sha(input.artifact_sha256); });
    if (item.id === "market-bar") {
      exactKeys(item, ["id", "file", "artifact_sha256", "producer", "profile", "version", "inputs", "source_mapping_id", "provenance"]);
      string(item.source_mapping_id); exactKeys(item.provenance, ["provider", "dataset", "raw_ref", "raw_sha256"]); string(item.provenance.provider); string(item.provenance.dataset); string(item.provenance.raw_ref); sha(item.provenance.raw_sha256);
    } else ensure(item.source_mapping_id === undefined && item.provenance === undefined, "unexpected lineage source fields");
  }
}

function validateDiagnostics(diagnostics) {
  ensure(Array.isArray(diagnostics), "invalid interface diagnostics");
  diagnostics.forEach((item) => { exactKeys(item, ["code", "path"]); ensure(typeof item.code === "string" && /^[a-z0-9-]+$/.test(item.code), "invalid diagnostic code"); ensure(typeof item.path === "string" && item.path.startsWith("$"), "invalid diagnostic path"); });
}

function validateEdges(edges, assets, profiles, adapters) {
  ensure(Array.isArray(edges), "invalid compatibility edges");
  edges.forEach((edge) => {
    exactKeys(edge, ["producer", "consumer", "output", "input", "status", "adapter_path"]);
    ensure(assets.has(edge.producer) && assets.has(edge.consumer), "unknown compatibility asset");
    ensure(assets.get(edge.producer)?.interface_status !== "pending-maintainer" && assets.get(edge.consumer)?.interface_status !== "pending-maintainer", "pending interface cannot have compatibility edges");
    validateProfileRef(edge.output, profiles); exactKeys(edge.input, ["profile", "version_range", "required"]); ensure(profiles.has(profileKey(edge.input.profile, "1.0.0")), "unknown compatibility input profile"); string(edge.input.version_range); ensure(typeof edge.input.required === "boolean");
    ensure(edge.status === "compatible" || edge.status === "adapter-required", "invalid compatibility status"); arrayOfStrings(edge.adapter_path); edge.adapter_path.forEach((id) => ensure(adapters.has(id), "unknown compatibility adapter"));
  });
}

function validatePublication(publication, assets, profiles, adapters) {
  exactKeys(publication, ["assignments_sha256", "inventory_sha256", "manifest_sha256", "published_interfaces"]);
  sha(publication.assignments_sha256); sha(publication.inventory_sha256); sha(publication.manifest_sha256);
  ensure(Array.isArray(publication.published_interfaces), "invalid published interfaces");
  const published = new Set();
  for (const item of publication.published_interfaces) {
    exactKeys(item, ["name", "default_branch", "head_sha", "interface"]);
    string(item.name); string(item.default_branch); ensure(/^[0-9a-f]{40}$/.test(item.head_sha), "invalid published head");
    const asset = assets.get(item.name);
    ensure(asset?.catalog_status === "approved" && asset.interface_status === "published" && JSON.stringify(asset.interface) === JSON.stringify(item.interface), "invalid published interface");
    validateInterface(item.interface, profiles, adapters); ensure(!published.has(item.name), "duplicate published interface"); published.add(item.name);
  }
  ensure(published.size === [...assets.values()].filter((asset) => asset.interface_status === "published").length, "published interface mismatch");
}

export function validateCatalogSnapshot(snapshot) {
  exactKeys(snapshot, ROOT_KEYS.filter((key) => key !== "publication"), ["publication"]);
  ensure(snapshot.schema_version === "1.0.0" && snapshot.taxonomy_version === "1.0.0", "invalid snapshot schema");
  ensure(snapshot.contract_mode === "enforce", "catalog admission requires enforce mode");
  ensure(typeof snapshot.snapshot_id === "string" && /^sha256:[0-9a-f]{64}$/.test(snapshot.snapshot_id), "invalid snapshot id");
  ensure(snapshot.snapshot_id === snapshotId(snapshot), "snapshot id does not match canonical content");
  const taxonomy = validateTaxonomy(snapshot.taxonomy);
  validateResources(snapshot.resources); validateEnvelope(snapshot.envelope);
  const profiles = validateProfiles(snapshot.profiles); const adapters = validateAdapters(snapshot.adapters, profiles); validateMappings(snapshot.provider_mappings, profiles);
  const assets = validateAssets(snapshot.assets, taxonomy, profiles, adapters);
  validateCoreLineage(snapshot.core_lineage, assets, profiles); validateDiagnostics(snapshot.interface_diagnostics); validateEdges(snapshot.compatibility_edges, assets, profiles, adapters); if (snapshot.publication !== undefined) validatePublication(snapshot.publication, assets, profiles, adapters);
  return snapshot;
}
