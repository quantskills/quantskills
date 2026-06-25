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
const CAT_FILE = join(ROOT, "data", "feishu_categories.json");
const feishuCat = existsSync(CAT_FILE) ? JSON.parse(readFileSync(CAT_FILE, "utf8")) : {};
// 主分类映射：文档抓取(feishuCat) + 人工覆盖/补充(curation.categoryOverride)，后者优先
const catMap = { ...feishuCat, ...(curation.categoryOverride || {}) };
const FEISHU_DOC = "https://ncn9g4d5xvof.feishu.cn/wiki/ZMD0w4rvoivnHVkoVwKcunkvn1g";

// ---------- 数据获取 ----------

// 归一化后的仓库形状：{name, description, language, stars, pushedAt, isFork, isArchived, topics[]}
function fetchReposViaGh() {
  const out = execSync(
    `gh repo list ${ORG} --limit 300 --json name,description,primaryLanguage,stargazerCount,pushedAt,isFork,isArchived,repositoryTopics`,
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
  "07": { zh: "预测市场工具箱", en: "Prediction Markets" },
  "08": { zh: "信息搜索与网页采集", en: "Search & Web Scraping" },
  "09": { zh: "热门智能体", en: "Featured Agents" },
};

// 补充区（飞书未收录的仓库），按资产族归类
const SUPP = [
  { id: "alpha-ashare", title: { zh: "📊 因子库 Alpha · A股", en: "📊 Alpha Factors · A-share" }, intro: { zh: "A股选股/事件型 alpha 因子仓库。", en: "A-share stock-selection / event-driven alpha factors." }, short: { zh: "因子库 A股", en: "Alpha A-share" } },
  { id: "alpha-futures", title: { zh: "📊 因子库 Alpha · 期货", en: "📊 Alpha Factors · Futures" }, intro: { zh: "期货截面/持仓博弈类 alpha 因子仓库。", en: "Futures cross-sectional / positioning alpha factors." }, short: { zh: "因子库 期货", en: "Alpha Futures" } },
  { id: "build", title: { zh: "🏗️ BUILD 构建技能", en: "🏗️ BUILD Skills" }, intro: { zh: "基于 panda-data / panda-trading 的构建型技能。", en: "BUILD-type skills on panda-data / panda-trading." }, short: { zh: "BUILD", en: "BUILD" } },
  { id: "skills", title: { zh: "🧩 其他技能（百宝箱未收录）", en: "🧩 Other Skills (not in catalog)" }, intro: { zh: "尚未进入飞书百宝箱的技能。", en: "Skills not yet in the Feishu catalog." }, short: { zh: "其他技能", en: "Other Skills" } },
  { id: "agents", title: { zh: "🤖 其他 Agent", en: "🤖 Other Agents" }, intro: { zh: "未在百宝箱收录的 Agent。", en: "Agents not in the catalog." }, short: { zh: "其他 Agent", en: "Other Agents" } },
  { id: "others", title: { zh: "🗄️ 数据与其他", en: "🗄️ Data & Misc" }, intro: { zh: "数据工具、抓取等。", en: "Data tooling, scraping, etc." }, short: { zh: "数据与其他", en: "Data & Misc" } },
  { id: "infra", title: { zh: "🧱 基础设施与模板", en: "🧱 Infra & Templates" }, intro: { zh: "治理与脚手架，不属于内容资产。", en: "Governance and scaffolding." }, short: { zh: "基础设施与模板", en: "Infra & Templates" } },
  { id: "incubator", title: { zh: "🧪 实验 · 孵化", en: "🧪 Incubating" }, intro: { zh: "早期/占位仓库，待补充内容后归类。", en: "Early/placeholder repos." }, short: { zh: "实验孵化", en: "Incubating" } },
];

function classify(repo) {
  const name = repo.name;
  const lower = name.toLowerCase();
  if (catMap[name]) return { feishu: catMap[name] }; // 飞书百宝箱已收录 / 人工归类 → 主分类
  if (curation.manualCategory?.[name]) return { family: curation.manualCategory[name] };
  if (curation.infra?.includes(name) || lower.endsWith("-template")) return { family: "infra" };
  if (lower.startsWith("alpha-")) return { family: lower.charAt(6) === "f" ? "alpha-futures" : "alpha-ashare" };
  if (lower.startsWith("build-")) return { family: "build" };
  if (lower.startsWith("agent-")) return { family: "agents" };
  if (lower.startsWith("skill-")) return { family: "skills" };
  return { family: "others" };
}

// 智能过滤：无描述且无语言且不属于任何已知前缀族 → 孵化区
function isIncubator(repo) {
  const lower = repo.name.toLowerCase();
  const knownPrefix = ["skill-", "agent-", "alpha-", "build-"].some((p) => lower.startsWith(p));
  return !repo.description && !repo.language && !knownPrefix && !curation.infra?.includes(repo.name) && !catMap[repo.name];
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
  const byFamily = {}; // 补充族 -> repos[]
  const incubator = [];
  for (const repo of repos) {
    if (curation.denylist?.includes(repo.name)) continue;
    if (isIncubator(repo)) { incubator.push(repo); continue; }
    const c = classify(repo);
    if (c.feishu) (byFeishu[c.feishu] ||= []).push(repo);
    else (byFamily[c.family] ||= []).push(repo);
  }

  const total = repos.filter((r) => !curation.denylist?.includes(r.name)).length;
  const inDoc = Object.values(byFeishu).reduce((n, a) => n + a.length, 0);
  const today = new Date().toISOString().slice(0, 10);
  const reserved = curation.reservedCategories || []; // 即便为空也始终显示的类目
  const catOrder = Object.keys(FEISHU_CAT).filter((n) => byFeishu[n]?.length || reserved.includes(n));
  const suppPresent = SUPP.filter((s) => (s.id === "incubator" ? incubator.length : byFamily[s.id]?.length));

  const out = [];
  out.push(`<!-- 本文件由 scripts/build.mjs 自动生成，请勿手工编辑。Generated file — do not edit by hand. -->`);
  out.push(`# 🧭 quantskills`);
  out.push(`> ${t("QuantSkills 组织全景导航 · 量化技能 / 因子 / Agent 一站式可点击索引，图文并茂。", "A panoramic, clickable navigator for the QuantSkills org — skills / factors / agents at a glance.")}`);
  out.push("");
  out.push(t(`**简体中文** | [English](README.en.md)`, `[简体中文](README.md) | **English**`));
  out.push("");
  const esc = (s) => encodeURIComponent(String(s).replace(/-/g, "--").replace(/_/g, "__"));
  const badge = (label, val, color) => `![${label}](https://img.shields.io/badge/${esc(label)}-${esc(val)}-${color})`;
  out.push(
    [
      badge(t("仓库", "repos"), total, "blue"),
      badge(t("百宝箱收录", "in-catalog"), inDoc, "8a2be2"),
      badge("Agents", (byFeishu["09"]?.length || 0) + (byFamily.agents?.length || 0), "d62728"),
      badge(t("更新", "updated"), today, "lightgrey"),
    ].join(" ")
  );
  out.push("");
  out.push(
    t(
      `> **分类依据**：主分类沿用飞书文档[「QuantSkills 百宝箱」](${FEISHU_DOC})的九大类目；文档未收录的仓库归入末尾「补充」区。与组织 [\`registry\`](${repoUrl("registry")})（机器/AI 发现层）、\`.github\`（门面）互补。`,
      `> **Taxonomy**: primary categories follow the Feishu doc ["QuantSkills 百宝箱"](${FEISHU_DOC}); repos not in the doc go to the "Supplementary" section. Complementary to [\`registry\`](${repoUrl("registry")}) and the \`.github\` profile.`
    )
  );
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

  // PART B —— 补充区
  if (suppPresent.length) {
    out.push("---");
    out.push(`### ${t("➕ 补充：百宝箱未收录的仓库", "➕ Supplementary: repos not in the catalog")}`);
    out.push(t("原始因子、构建技能、模板、孵化项目等，按资产族归类。", "Raw factors, BUILD skills, templates, incubating repos — grouped by asset family."));
    out.push("");
    for (const s of suppPresent) section(s.id, s.title[lang], s.intro[lang], s.id === "incubator" ? incubator : byFamily[s.id]);
  }

  out.push("---");
  out.push(t(`_本文件由 [\`scripts/build.mjs\`](scripts/build.mjs) 每日自动生成（${today}）。_`, `_Auto-generated daily by [\`scripts/build.mjs\`](scripts/build.mjs) (${today})._`));
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
