const WORKFLOW_GROUPS = [
  ["workflow-data-foundation", ["data-ingestion", "data-quality"]],
  ["workflow-research-signal", ["feature-engineering", "factor-generation", "factor-screening", "modeling"]],
  ["workflow-portfolio-validation", ["portfolio-construction", "backtesting", "evaluation", "risk"]],
  ["workflow-monitoring-trading", ["monitoring", "execution", "reporting"]],
  ["workflow-orchestration", ["orchestration"]],
];

const escape = (value) => String(value || "").replace(/[\r\n]+/g, " ").replace(/\|/g, "\\|");
const endpoint = (items, key) => (items || []).map((item) => item.profile || item[key]).filter(Boolean).join(", ") || "—";

function assetRow(asset, language) {
  const workflow = asset.workflow || {};
  const extra = (workflow.workflow_stages || []).filter((stage) => stage !== workflow.primary_stage).join(", ") || "—";
  const interface_ = asset.interface || {};
  return `| [${escape(asset.name)}](${asset.url}) | ${escape(language === "en" ? asset.summary_en : asset.summary_zh)} | ${escape(asset.project_type)} | ${escape(workflow.primary_stage)} | ${escape(extra)} | ${escape(endpoint(interface_.inputs))} | ${escape(endpoint(interface_.outputs))} | ${escape(asset.status)} |`;
}

export function renderReadme(model, language) {
  const english = language === "en";
  const label = english ? { catalog: "Catalog", workflow: "Workflow index", resources: "Organization resources", name: "Name", summary: "Summary", type: "Type", primary: "Primary stage", extra: "Additional stages", inputs: "Inputs", outputs: "Outputs", status: "Status" } : { catalog: "目录", workflow: "工作流索引", resources: "组织资源", name: "名称", summary: "摘要", type: "类型", primary: "主阶段", extra: "参与阶段", inputs: "输入", outputs: "输出", status: "状态" };
  const lines = [
    `<!-- catalog-snapshot: ${model.snapshot_id} -->`, "# quantskills",
    english ? "[简体中文](README.md) | **English**" : "**简体中文** | [English](README.en.md)",
    `Snapshot: ${model.snapshot_id}; public assets: ${model.assets.length}.`, "", `## ${label.catalog}`,
    model.categories.map((category) => `[${category.id}](#cat-${category.id})`).join(" · "), "", `## ${label.workflow}`,
  ];
  for (const [anchor, stages] of WORKFLOW_GROUPS) lines.push(`- <a id="${anchor}"></a>${anchor}: ${stages.join(", ")}`);
  for (const category of model.categories) {
    lines.push("", `<a id="cat-${category.id}"></a>`, `## ${category.id} ${english ? category.label_en : category.label_zh}`);
    const subcategories = [...(category.subcategories || [])];
    for (const id of [...new Set(model.assets.filter((asset) => asset.catalog.category === category.id).map((asset) => asset.catalog.subcategory))].sort()) {
      if (!subcategories.some((subcategory) => subcategory.id === id)) subcategories.push({ id, label_zh: id, label_en: id });
    }
    for (const subcategory of subcategories) {
      lines.push("", `### ${subcategory.id} ${english ? subcategory.label_en : subcategory.label_zh}`);
      lines.push(`| ${label.name} | ${label.summary} | ${label.type} | ${label.primary} | ${label.extra} | ${label.inputs} | ${label.outputs} | ${label.status} |`, "|---|---|---|---|---|---|---|---|");
      for (const asset of model.assets.filter((item) => item.catalog.subcategory === subcategory.id)) lines.push(assetRow(asset, language));
    }
    if (category.id === "10") {
      lines.push("", `### ${label.resources}`, `| ${label.name} | ${label.summary} |`, "|---|---|");
      for (const resource of model.resources) lines.push(`| [${escape(resource.name)}](${resource.url}) | ${label.resources} |`);
    }
  }
  return `${lines.join("\n")}\n`;
}
