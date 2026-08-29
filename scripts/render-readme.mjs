import { existsSync, readFileSync } from "node:fs";
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

// 介绍截图存在性判断（assets/<name>.png，点击打开全尺寸原图放大）
const hasImg = (name) => existsSync(join(ROOT, "assets", `${name}.png`));
const imgCell = (name) => {
  const rel = `assets/${name}.png`;
  const full = `https://raw.githubusercontent.com/quantskills/quantskills/main/${rel}`;
  return hasImg(name) ? `<a href="${full}"><img src="${rel}" width="260"></a>` : "";
};

function assetRow(asset, language) {
  const workflow = asset.workflow || {};
  const interface_ = asset.interface || {};
  return `| [${escape(asset.name)}](${asset.url}) | ${escape(language === "en" ? asset.summary_en : asset.summary_zh)} | ${escape(workflow.primary_stage)} | ${escape(endpoint(asset, interface_.inputs))} | ${escape(endpoint(asset, interface_.outputs))} | ${interfaceState(asset, language === "en")} | ${imgCell(asset.name)} |`;
}

// 快照展示日期：优先 snapshot_id 内嵌时间戳（20260811T051557Z），其次 built_at 元数据
function snapshotDate(model) {
  const embedded = String(model.snapshot_id || "").match(/(\d{4})(\d{2})(\d{2})T\d{4}/);
  if (embedded) return `${embedded[1]}-${embedded[2]}-${embedded[3]}`;
  const built = String(model.built_at || "").match(/(\d{4})-(\d{2})-(\d{2})/);
  if (built) return `${built[1]}-${built[2]}-${built[3]}`;
  return new Date().toISOString().slice(0, 10);
}

export function renderCatalog(model, language) {
  const english = language === "en";
  const published = model.assets.filter((asset) => asset.interface_status === "published").length;
  const labels = english
    ? { catalog: "Live catalog", summary: "Category summary", workflow: "Workflow map", stages: "stages", assets: "assets", name: "Project", summaryCol: "Bilingual summary", stage: "Primary stage", inputs: "Inputs", outputs: "Outputs", status: "Interface status", shot: "Screenshot", lAssets: "Assets", lCats: "Categories", lPub: "Published endpoints", lUpd: "Snapshot updated", resources: "Infrastructure & community entry points" }
    : { catalog: "实时目录", summary: "分类总览", workflow: "工作流地图", stages: "个阶段", assets: "项资产", name: "项目", summaryCol: "双语摘要", stage: "主阶段", inputs: "输入", outputs: "输出", status: "接口状态", shot: "截图", lAssets: "资产", lCats: "分类", lPub: "已发布端点", lUpd: "快照更新", resources: "基础设施与社区入口" };
  const bySub = {}; // subcategory id -> assets[]（快照 taxonomy 的二级分类归属）
  for (const asset of model.assets) (bySub[asset.catalog?.subcategory] ||= []).push(asset);
  const subNames = (category) =>
    (category.subcategories || []).filter((s) => bySub[s.id]?.length).map((s) => (english ? s.label_en : s.label_zh));
  const stat = (num, label) => `<td align="center"><strong>${num}</strong><br><sub>${label}</sub></td>`;
  const lines = [
    `<!-- catalog-snapshot: ${model.snapshot_id} -->`,
    `<table align="center"><tr>`,
    stat(model.assets.length, labels.lAssets),
    stat(model.categories.length, labels.lCats),
    stat(published, labels.lPub),
    stat(snapshotDate(model), labels.lUpd),
    `</tr></table>`,
    "", `## ${labels.summary}`,
    model.categories.map((category) => {
      const total = model.assets.filter((asset) => asset.catalog.category === category.id).length;
      const subs = subNames(category);
      return `- [${category.id} ${english ? category.label_en : category.label_zh}](#cat-${category.id}) — ${total} ${labels.assets}${subs.length ? `（${subs.join(" / ")}）` : ""}`;
    }).join("\n"),
    "", `## ${labels.workflow}`,
    ...WORKFLOW_GROUPS.map(([group, stages]) => `- **${group}** (${stages.length} ${labels.stages}): ${stages.join(", ")}`),
  ];
  for (const category of model.categories) {
    const assets = model.assets.filter((asset) => asset.catalog.category === category.id);
    const withImg = assets.filter((asset) => hasImg(asset.name)).length;
    const summarySuffix = withImg ? (english ? `, ${withImg} with screenshots` : `，含截图 ${withImg}`) : "";
    lines.push("", `<a id="cat-${category.id}"></a>`, `<details>`, `<summary><strong>${category.id} ${english ? category.label_en : category.label_zh}</strong> — ${assets.length} ${labels.assets}${summarySuffix}</summary>`, "");
    // 二级分类分块：空子类不显示，块内按名称排序
    for (const sub of category.subcategories || []) {
      const list = (bySub[sub.id] || []).slice().sort((a, b) => a.name.localeCompare(b.name));
      if (!list.length) continue;
      lines.push(`### ${english ? sub.label_en : sub.label_zh}（${list.length}）`, "", `| ${labels.name} | ${labels.summaryCol} | ${labels.stage} | ${labels.inputs} | ${labels.outputs} | ${labels.status} | ${labels.shot} |`, "|---|---|---|---|---|---|---|");
      for (const asset of list) lines.push(assetRow(asset, language));
      lines.push("");
    }
    lines.push("</details>");
  }
  lines.push("", `## ${labels.resources}`, "", "| Project | Link |", "|---|---|");
  for (const resource of model.resources) lines.push(`| ${escape(resource.name)} | [${resource.url}](${resource.url}) |`);
  // 结尾：PandaAI 社群二维码
  lines.push("", "---", `## ${english ? "🐼 PandaAI Community" : "🐼 PandaAI 社群"}`,
    `<div align="center">`,
    `  <img src="assets/pandaai-community-qr.jpg" alt="${english ? "PandaAI community QR code" : "PandaAI 社群二维码"}" width="220">`,
    `  <br>`,
    `  <sub>${english ? "Scan to join the PandaAI community for QUANTSKILLS skills, agent workflows, and quant research." : "扫码加入 PandaAI 社群，交流 QUANTSKILLS 技能、Agent 工作流与量化研究实践。"}</sub>`,
    `</div>`);
  return `${lines.join("\n")}\n`;
}

export function replaceCatalog(template, model, language) {
  const catalog = renderCatalog(model, language);
  const marker = /<!-- CATALOG:START -->[\s\S]*?<!-- CATALOG:END -->/;
  if (!marker.test(template)) throw new Error("README template is missing catalog markers");
  return template.replace(marker, `<!-- CATALOG:START -->\n${catalog}<!-- CATALOG:END -->`).replace(/\r\n/g, "\n");
}

export function renderReadme(model, language) {
  const file = `README.${language === "en" ? "en" : "zh"}.template.md`;
  return replaceCatalog(readFileSync(join(ROOT, "docs", file), "utf8"), model, language);
}
