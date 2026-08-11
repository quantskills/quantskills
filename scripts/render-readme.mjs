import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const WORKFLOW_GROUPS = [
  ["数据基础 / Data foundation", ["data-ingestion", "data-quality"]],
  ["研究信号 / Research signal", ["feature-engineering", "factor-generation", "factor-screening", "modeling"]],
  ["组合验证 / Portfolio validation", ["portfolio-construction", "backtesting", "evaluation", "risk"]],
  ["监控交易 / Monitoring & trading", ["monitoring", "execution", "reporting"]],
  ["编排 / Orchestration", ["orchestration"]],
];

const escape = (value) => String(value || "—").replace(/[\r\n]+/g, " ").replace(/\|/g, "\\|");
const endpoint = (asset, items, key) => asset.interface_status === "published" ? ((items || []).map((item) => item.profile || item[key]).filter(Boolean).join(", ") || "—") : "—";
const interfaceState = (asset, english) => asset.interface_status === "published" ? (english ? "published" : "已发布") : (english ? "pending maintainer review / no public endpoint" : "待维护者审核 / 无公开端点");

function assetRow(asset, language) {
  const workflow = asset.workflow || {};
  const extra = (workflow.workflow_stages || []).filter((stage) => stage !== workflow.primary_stage).join(", ") || "—";
  const interface_ = asset.interface || {};
  return `| [${escape(asset.name)}](${asset.url}) | ${escape(language === "en" ? asset.summary_en : asset.summary_zh)} | ${escape(workflow.primary_stage)} | ${escape(endpoint(asset, interface_.inputs))} | ${escape(endpoint(asset, interface_.outputs))} | ${interfaceState(asset, language)} |`;
}

export function renderCatalog(model, language) {
  const english = language === "en";
  const published = model.assets.filter((asset) => asset.interface_status === "published").length;
  const pending = model.assets.filter((asset) => asset.interface_status === "pending-maintainer").length;
  const labels = english
    ? { catalog: "Live catalog", summary: "Category summary", workflow: "Workflow map", stages: "stages", assets: "assets", name: "Project", summaryCol: "Bilingual summary", stage: "Primary stage", inputs: "Inputs", outputs: "Outputs", status: "Interface status", resources: "Infrastructure & community entry points" }
    : { catalog: "实时目录", summary: "分类总览", workflow: "工作流地图", stages: "个阶段", assets: "项资产", name: "项目", summaryCol: "双语摘要", stage: "主阶段", inputs: "输入", outputs: "输出", status: "接口状态", resources: "基础设施与社区入口" };
  const lines = [
    `<!-- catalog-snapshot: ${model.snapshot_id} -->`,
    `> ${english ? `Snapshot ${model.snapshot_id}. **${model.assets.length}** public assets across **${model.categories.length}** categories; **${published} published** structured endpoint and **${pending} pending** maintainer interface reviews.` : `快照 ${model.snapshot_id}。**${model.assets.length}** 项公开资产，覆盖 **${model.categories.length}** 个分类；**${published} 个已发布**结构化端点，**${pending} 个待维护者接口审核**。`}`,
    "", `## ${labels.summary}`,
    model.categories.map((category) => `- [${category.id} ${english ? category.label_en : category.label_zh}](#cat-${category.id}) — ${model.assets.filter((asset) => asset.catalog.category === category.id).length} ${labels.assets}`).join("\n"),
    "", `## ${labels.workflow}`,
    ...WORKFLOW_GROUPS.map(([group, stages]) => `- **${group}** (${stages.length} ${labels.stages}): ${stages.join(", ")}`),
  ];
  for (const category of model.categories) {
    const assets = model.assets.filter((asset) => asset.catalog.category === category.id);
    lines.push("", `<a id="cat-${category.id}"></a>`, `<details>`, `<summary><strong>${category.id} ${english ? category.label_en : category.label_zh}</strong> — ${assets.length} ${labels.assets}</summary>`, "", `| ${labels.name} | ${labels.summaryCol} | ${labels.stage} | ${labels.inputs} | ${labels.outputs} | ${labels.status} |`, "|---|---|---|---|---|---|");
    for (const asset of assets) lines.push(assetRow(asset, language));
    lines.push("", "</details>");
  }
  lines.push("", `## ${labels.resources}`, "", "| Project | Link |", "|---|---|");
  for (const resource of model.resources) lines.push(`| ${escape(resource.name)} | [${resource.url}](${resource.url}) |`);
  return `${lines.join("\n")}\n`;
}

export function replaceCatalog(template, model, language) {
  const catalog = renderCatalog(model, language);
  const marker = /<!-- CATALOG:START -->[\s\S]*?<!-- CATALOG:END -->/;
  if (!marker.test(template)) throw new Error("README template is missing catalog markers");
  return template.replace(marker, `<!-- CATALOG:START -->\n${catalog}<!-- CATALOG:END -->`);
}

export function renderReadme(model, language) {
  const file = `README.${language === "en" ? "en" : "zh"}.template.md`;
  return replaceCatalog(readFileSync(join(ROOT, "docs", file), "utf8"), model, language);
}
