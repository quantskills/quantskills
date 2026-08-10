const WORKFLOW_GROUPS = [
  ["workflow-data-foundation", ["data-ingestion", "data-quality"]],
  ["workflow-research-signal", ["feature-engineering", "factor-generation", "factor-screening", "modeling"]],
  ["workflow-portfolio-validation", ["portfolio-construction", "backtesting", "evaluation", "risk"]],
  ["workflow-monitoring-trading", ["monitoring", "execution", "reporting"]],
  ["workflow-orchestration", ["orchestration"]],
];

export function renderReadme(model, language) {
  const english = language === "en";
  const lines = [`<!-- catalog-snapshot: ${model.snapshot_id} -->`, "# quantskills", english ? "[中文](README.md) | **English**" : "**简体中文** | [English](README.en.md)", "", "## Catalog"];
  lines.push(model.categories.map((category) => `[${category.id}](#cat-${category.id})`).join(" · "));
  lines.push("", "## Workflow index");
  for (const [anchor, stages] of WORKFLOW_GROUPS) lines.push(`- <a id="${anchor}"></a>${anchor}: ${stages.join(", ")}`);
  for (const category of model.categories) {
    lines.push("", `<a id="cat-${category.id}"></a>`, `## ${category.id} ${english ? category.label_en : category.label_zh}`);
    for (const asset of model.assets.filter((item) => item.catalog.category === category.id)) lines.push(`- [${asset.name}](${asset.url}): ${english ? asset.summary_en : asset.summary_zh}`);
  }
  return `${lines.join("\n")}\n`;
}
