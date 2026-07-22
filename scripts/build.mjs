#!/usr/bin/env node
// quantskills 导航生成器（零外部依赖，Node 18+）
//
// 数据来源：
//   1) GitHub：组织全量仓库元数据（优先 gh CLI，回退 REST API）
//   2) quantskills/registry 的 registry.json（复用其 summary_zh|en 等元数据）
//   3) data/curation.json（人工：denylist / infra / manualCategory）
//   4) data/feishu_categories.json（repo -> 飞书「百宝箱」九大类目号；主分类依据）
// 产出：README.md（中文默认）+ README.en.md（英文），二者均为自动生成，请勿手工编辑。
//
// 注：设计稿原拟用 Python + Jinja2 + YAML，因本机无 Python，改用 Node + 内置模板 + JSON，零依赖即可端到端运行。

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const curation = JSON.parse(readFileSync(join(ROOT, "data", "curation.json"), "utf8"));
const ORG = curation.org || "quantskills";
const REGISTRY_RAW = `https://raw.githubusercontent.com/${ORG}/registry/main/registry.json`;
const LOCAL_REGISTRY = process.env.QS_REGISTRY_JSON || join(ROOT, "..", "registry", "registry.json");
const CAT_FILE = join(ROOT, "data", "feishu_categories.json");
const feishuCat = existsSync(CAT_FILE) ? JSON.parse(readFileSync(CAT_FILE, "utf8")) : {};
// 主分类映射：文档抓取(feishuCat) + 人工覆盖/补充(curation.categoryOverride)，后者优先
const catMap = { ...feishuCat, ...(curation.categoryOverride || {}) };
const FEISHU_DOC = "https://ncn9g4d5xvof.feishu.cn/wiki/ZMD0w4rvoivnHVkoVwKcunkvn1g";

// ---------- 数据获取 ----------

// 归一化后的仓库形状：{name, description, language, stars, pushedAt, isFork, isArchived, topics[]}
function fetchReposViaGh() {
  const out = execSync(
    `gh repo list ${ORG} --limit 300 --visibility public --json name,description,primaryLanguage,stargazerCount,pushedAt,isFork,isArchived,repositoryTopics`,
    { encoding: "utf8", maxBuffer: 1e8 }
  );
  return JSON.parse(out).map((r) => ({
    name: r.name,
    description: r.description || "",
    language: r.primaryLanguage?.name || "",
    stars: r.stargazerCount || 0,
    pushedAt: r.pushedAt || "",
    isFork: !!r.isFork,
    isArchived: !!r.isArchived,
    topics: (r.repositoryTopics || []).map((t) => t.name),
  }));
}

async function fetchReposViaRest() {
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || "";
  const headers = { "User-Agent": "quantskills", Accept: "application/vnd.github+json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const repos = [];
  for (let page = 1; page < 10; page++) {
    const res = await fetch(`https://api.github.com/orgs/${ORG}/repos?per_page=100&page=${page}&type=public`, { headers });
    if (!res.ok) throw new Error(`REST ${res.status}`);
    const batch = await res.json();
    if (!batch.length) break;
    for (const r of batch)
      repos.push({
        name: r.name,
        description: r.description || "",
        language: r.language || "",
        stars: r.stargazers_count || 0,
        pushedAt: r.pushed_at || "",
        isFork: !!r.fork,
        isArchived: !!r.archived,
        topics: r.topics || [],
      });
  }
  return repos;
}

async function getRepos() {
  try {
    return fetchReposViaGh();
  } catch (e) {
    console.warn("[warn] gh CLI 不可用，回退 REST API:", e.message);
    return fetchReposViaRest();
  }
}

async function getRegistry() {
  if (existsSync(LOCAL_REGISTRY)) {
    const arr = JSON.parse(readFileSync(LOCAL_REGISTRY, "utf8"));
    const byName = {};
    for (const x of arr) byName[x.name] = x;
    return byName;
  }
  try {
    const res = await fetch(REGISTRY_RAW);
    if (!res.ok) throw new Error(`registry ${res.status}`);
    const arr = await res.json();
    const byName = {};
    for (const x of arr) byName[x.name] = x;
    return byName;
  } catch (e) {
    console.warn("[warn] registry.json 拉取失败，skill/agent 元数据将降级:", e.message);
    return {};
  }
}

// ---------- 分类 ----------

// 飞书「百宝箱」九大类目（主分类）
const FEISHU_CAT = {
  "01": { zh: "数据接口与数据仓库", en: "Data APIs & Warehouse" },
  "02": { zh: "因子研发工具箱", en: "Factor R&D Toolbox" },
  "03": { zh: "市场与标的分析", en: "Market & Instrument Analysis" },
  "04": { zh: "风险监控与预警", en: "Risk Monitoring & Alerts" },
  "05": { zh: "策略回测与交易工具", en: "Backtesting & Trading" },
  "06": { zh: "投研模型与研究复现", en: "Research Models & Replication" },
  "07": { zh: "研究验证与质量工具", en: "Research Validation & Quality" },
  "08": { zh: "资讯搜索与知识分析", en: "Information Search & Knowledge Analysis" },
  "09": { zh: "热门智能体", en: "Featured Agents" },
};

// 补充区：基础设施与模板
const SUPP = [
  { id: "infra", title: { zh: "🧱 基础设施与模板", en: "🧱 Infra & Templates" }, intro: { zh: "治理、脚手架与模板（含本导航仓库 quantskills）。", en: "Governance, scaffolding and templates (incl. the quantskills nav repo)." }, short: { zh: "基础设施与模板", en: "Infra & Templates" } },
];

function classify(repo) {
  const name = repo.name;
  const lower = name.toLowerCase();
  if (curation.infra?.includes(name) || lower.endsWith("-template")) return { family: "infra" }; // 基础设施与模板（quantskills/.github/registry/join/*-template）
  if (lower.startsWith("agent-")) return { feishu: "09" }; // 所有 agent-* → 09
  if (lower.startsWith("skill-") && lower.includes("factor")) return { feishu: "02" }; // 所有 factor skill → 02
  if (catMap[name]) return { feishu: catMap[name] }; // 飞书九大类目（含 categoryOverride）
  if (lower.startsWith("skill-")) return { feishu: "07" }; // 无显式映射的 skill → 研究验证与质量工具
  return { feishu: "08" }; // 其余公开仓库 → 资讯搜索与知识分析
}

// ---------- 渲染辅助 ----------

const repoUrl = (name) => `https://github.com/${ORG}/${name}`;
const oneLine = (s) => (s || "").replace(/\s+/g, " ").trim();

function descOf(repo, reg, lang) {
  const r = reg[repo.name];
  if (r) return oneLine(lang === "zh" ? r.summary_zh || r.description : r.summary_en || r.description);
  return oneLine(repo.description) || "—";
}

// 截图单元：assets/<name>.png 存在则插入缩略图（点击打开全尺寸原图放大），否则占位
function imgCell(name) {
  const rel = `assets/${name}.png`;
  const full = `https://raw.githubusercontent.com/${ORG}/${ORG}/main/${rel}`;
  return existsSync(join(ROOT, rel)) ? `<a href="${full}"><img src="${rel}" width="220"></a>` : "—";
}

function table(repos, reg, lang) {
  const head = lang === "zh" ? "| 项目 | 说明 | 截图 |\n|---|---|---|" : "| Project | Description | Screenshot |\n|---|---|---|";
  const rows = repos
    .slice()
    .sort((a, b) => (b.pushedAt || "").localeCompare(a.pushedAt || ""))
    .map((r) => `| [${r.name}](${repoUrl(r.name)}) | ${descOf(r, reg, lang)} | ${imgCell(r.name)} |`);
  return [head, ...rows].join("\n");
}

// ---------- 主渲染 ----------

function render(lang, repos, reg) {
  const t = (zh, en) => (lang === "zh" ? zh : en);

  const byFeishu = {}; // "01".."09" -> repos[]
  const byFamily = {}; // 补充族(infra) -> repos[]
  for (const repo of repos) {
    if (curation.denylist?.includes(repo.name)) continue;
    const c = classify(repo);
    if (c.feishu) (byFeishu[c.feishu] ||= []).push(repo);
    else (byFamily[c.family] ||= []).push(repo);
  }

  const total = repos.filter((r) => !curation.denylist?.includes(r.name)).length;
  const inDoc = Object.values(byFeishu).reduce((n, a) => n + a.length, 0);
  const today = new Date().toISOString().slice(0, 10);
  const reserved = curation.reservedCategories || []; // 即便为空也始终显示的类目
  const catOrder = Object.keys(FEISHU_CAT).filter((n) => byFeishu[n]?.length || reserved.includes(n));
  const suppPresent = SUPP.filter((s) => byFamily[s.id]?.length);

  const out = [];
  out.push(`<!-- 本文件由 scripts/build.mjs 自动生成，请勿手工编辑。Generated file — do not edit by hand. -->`);
  out.push(`# 🧭 quantskills`);
  out.push(`> ${t("QuantSkills 组织全景导航 · 量化技能 / 因子 / Agent 一站式可点击索引，图文并茂。", "A panoramic, clickable navigator for the QuantSkills org — skills / factors / agents at a glance.")}`);
  out.push("");
  out.push(t(`**简体中文** | [English](README.en.md)`, `[简体中文](README.md) | **English**`));
  out.push("");
  const esc = (s) => encodeURIComponent(String(s).replace(/-/g, "--").replace(/_/g, "__"));
  const badge = (label, val, color, href) => {
    const img = `![${label}](https://img.shields.io/badge/${esc(label)}-${esc(val)}-${color})`;
    return href ? `[${img}](${href})` : img;
  };
  out.push(
    [
      badge(t("仓库", "repos"), total, "blue", `https://github.com/orgs/${ORG}/repositories`),
      badge(t("百宝箱收录", "in-catalog"), inDoc, "8a2be2", FEISHU_DOC),
      badge("Agents", (byFeishu["09"]?.length || 0) + (byFamily.agents?.length || 0), "d62728", "#cat-09"),
      badge(t("更新", "updated"), today, "lightgrey", `https://github.com/${ORG}/${ORG}/commits/main`),
    ].join(" ")
  );
  out.push("");
  // 简介（取自组织主页 .github/profile）
  out.push(
    t(
      `**QUANTSKILLS** 是 AI Agent 时代的开放量化社区，聚焦 **Quant Skills（量化技能）** 与 **Agents（智能体）** 两类资产。由 [PandaAI](https://www.pandaaiquant.com/) 发起，帮助量化开发者把交易经验、研究方法、因子模型与策略代码，转化为**可检索、可安装、可验证、可分享**的标准化资产。`,
      `**QUANTSKILLS** is an open community for **Quant Skills and Agents** in the AI Agent era. Initiated by [PandaAI](https://www.tqx.ai/), it helps quant developers turn trading experience, research methods, factor models, and strategy code into standardized assets that can be **searched, installed, validated, and shared**.`
    )
  );
  out.push("");
  out.push(t(`> 把你的量化经验，变成人类可以信任、AI Agent 可以调用的 Skill。`, `> Turn your quant experience into Skills that humans can trust and AI Agents can use.`));
  out.push("");

  // mermaid 全景思维导图
  out.push(`## ${t("🗺️ 全景总览", "🗺️ Overview")}`);
  out.push("```mermaid");
  out.push("mindmap");
  out.push("  root((QuantSkills))");
  out.push(`    ${t("📚 百宝箱分类", "📚 Catalog")}`);
  for (const n of catOrder) out.push(`      ${n} ${FEISHU_CAT[n][lang]}`);
  if (suppPresent.length) {
    out.push(`    ${t("➕ 补充", "➕ Supplementary")}`);
    for (const s of suppPresent) out.push(`      ${s.short[lang]}`);
  }
  out.push("```");
  out.push("");

  // 目录（锚点点击定位）
  out.push(`## ${t("📑 目录", "📑 Contents")}`);
  const toc = [];
  for (const n of catOrder) toc.push([`cat-${n}`, `${n} ${FEISHU_CAT[n][lang]}`]);
  for (const s of suppPresent) toc.push([s.id, s.title[lang]]);
  out.push(toc.map(([id, label]) => `- [${label}](#${id})`).join("\n"));
  out.push("");

  const section = (id, title, intro, items, emptyNote) => {
    out.push(`<a id="${id}"></a>`);
    out.push(`## ${title}`);
    if (intro) out.push(intro);
    out.push("");
    out.push(items?.length ? table(items, reg, lang) : emptyNote || t("_（暂无）_", "_(none)_"));
    out.push("");
  };

  // PART A —— 飞书百宝箱九大类目
  for (const n of catOrder) {
    const empty = !byFeishu[n]?.length;
    const note = empty && reserved.includes(n) ? t("> 🔒 预留分类，暂无仓库（后续补充）。", "> 🔒 Reserved category — no repos yet.") : null;
    section(`cat-${n}`, `${n} ${FEISHU_CAT[n][lang]}`, "", byFeishu[n], note);
  }

  // PART B —— 补充区（基础设施与模板）
  if (suppPresent.length) {
    out.push("---");
    for (const s of suppPresent) section(s.id, s.title[lang], s.intro[lang], byFamily[s.id]);
  }

  // 结尾：PandaAI 社群二维码（取自组织主页 .github/profile）
  out.push("---");
  out.push(`## ${t("🐼 PandaAI 社群", "🐼 PandaAI Community")}`);
  out.push(`<div align="center">`);
  out.push(`  <img src="assets/pandaai-community-qr.jpg" alt="${t("PandaAI 社群二维码", "PandaAI community QR code")}" width="220">`);
  out.push(`  <br>`);
  out.push(`  <sub>${t("扫码加入 PandaAI 社群，交流 QUANTSKILLS 技能、Agent 工作流与量化研究实践。", "Scan to join the PandaAI community for QUANTSKILLS skills, agent workflows, and quant research.")}</sub>`);
  out.push(`</div>`);
  out.push("");
  return out.join("\n");
}

// ---------- 入口 ----------

const [repos, reg] = await Promise.all([getRepos(), getRegistry()]);
console.log(`[info] repos=${repos.length} registry=${Object.keys(reg).length} feishuCat=${Object.keys(feishuCat).length}`);
if (!existsSync(join(ROOT, "assets"))) mkdirSync(join(ROOT, "assets"), { recursive: true });
writeFileSync(join(ROOT, "README.md"), render("zh", repos, reg));
writeFileSync(join(ROOT, "README.en.md"), render("en", repos, reg));
console.log("[ok] README.md + README.en.md 已生成");
