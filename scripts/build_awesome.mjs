#!/usr/bin/env node
// awesome-quantskills 导航生成器（零外部依赖，Node 18+）
//
// 数据来源：
//   1) GitHub：组织全量仓库元数据（优先 gh CLI，回退 REST API）
//   2) quantskills/registry 的 registry.json（复用其 category / validation_level / summary_zh|en / platforms）
//   3) data/curation.json（人工：denylist / infra / featured / manualCategory）
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
  const headers = { "User-Agent": "awesome-quantskills", Accept: "application/vnd.github+json" };
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

const SKILL_SUB = {
  factor: { zh: "因子工程", en: "Factor Engineering" },
  tooling: { zh: "工具与脚手架", en: "Tooling & Scaffolding" },
  analyst: { zh: "分析与研究", en: "Analysis & Research" },
  monitor: { zh: "监控与预警", en: "Monitoring & Alerts" },
  "data-api": { zh: "数据接入", en: "Data Access" },
  replication: { zh: "研究复现", en: "Research Replication" },
  _other: { zh: "其他技能（待登记）", en: "Other Skills (unregistered)" },
};

const LEVEL = {
  verified: { zh: "✅已验证", en: "✅verified" },
  production: { zh: "🚀生产级", en: "🚀production" },
  runnable: { zh: "🟢可运行", en: "🟢runnable" },
  listed: { zh: "⚪已登记", en: "⚪listed" },
};

function classify(repo, reg) {
  const name = repo.name;
  const lower = name.toLowerCase();
  if (curation.manualCategory?.[name]) return { family: curation.manualCategory[name] };
  if (curation.infra?.includes(name) || lower.endsWith("-template")) return { family: "infra" };
  if (lower.startsWith("skill-")) {
    const cat = reg[name]?.category;
    const sub = SKILL_SUB[cat] ? cat : "_other";
    return { family: "skills", sub };
  }
  if (lower.startsWith("agent-")) return { family: "agents" };
  if (lower.startsWith("alpha-")) {
    const c = lower.charAt(6);
    if (c === "a") return { family: "alpha-ashare" };
    if (c === "f") return { family: "alpha-futures" };
    return { family: "alpha-ashare" };
  }
  if (lower.startsWith("build-")) return { family: "build" };
  return { family: "others" };
}

// 智能过滤：无描述且无语言且不属于任何已知前缀族 → 孵化区
function isIncubator(repo) {
  const lower = repo.name.toLowerCase();
  const knownPrefix = ["skill-", "agent-", "alpha-", "build-"].some((p) => lower.startsWith(p));
  return !repo.description && !repo.language && !knownPrefix && !curation.infra?.includes(repo.name);
}

// ---------- 渲染辅助 ----------

const repoUrl = (name) => `https://github.com/${ORG}/${name}`;
const date = (iso) => (iso ? iso.slice(0, 10) : "—");
const oneLine = (s) => (s || "").replace(/\s+/g, " ").trim();

function descOf(repo, reg, lang) {
  const r = reg[repo.name];
  if (r) return oneLine(lang === "zh" ? r.summary_zh || r.description : r.summary_en || r.description);
  return oneLine(repo.description) || "—";
}

function levelBadge(repo, reg, lang) {
  const lv = reg[repo.name]?.validation_level;
  return lv && LEVEL[lv] ? LEVEL[lv][lang] : "";
}

function metaCell(repo, reg, lang) {
  const parts = [`⭐${repo.stars}`];
  if (repo.language) parts.push(repo.language);
  const lb = levelBadge(repo, reg, lang);
  if (lb) parts.push(lb);
  parts.push(`📅${date(repo.pushedAt)}`);
  return parts.join(" · ");
}

function table(repos, reg, lang) {
  const head = lang === "zh" ? "| 项目 | 说明 | 状态 |\n|---|---|---|" : "| Project | Description | Status |\n|---|---|---|";
  const rows = repos
    .slice()
    .sort((a, b) => (b.pushedAt || "").localeCompare(a.pushedAt || ""))
    .map((r) => `| [${r.name}](${repoUrl(r.name)}) | ${descOf(r, reg, lang)} | ${metaCell(r, reg, lang)} |`);
  return [head, ...rows].join("\n");
}

// ---------- 主渲染 ----------

function render(lang, repos, reg) {
  const t = (zh, en) => (lang === "zh" ? zh : en);
  const byFamily = {};
  const incubator = [];
  for (const repo of repos) {
    if (curation.denylist?.includes(repo.name)) continue;
    if (isIncubator(repo)) {
      incubator.push(repo);
      continue;
    }
    const { family, sub } = classify(repo, reg);
    (byFamily[family] ||= {});
    if (family === "skills") (byFamily.skills[sub] ||= []).push(repo);
    else (byFamily[family]._ ||= []).push(repo);
  }

  const count = (fam) => Object.values(byFamily[fam] || {}).reduce((n, a) => n + a.length, 0);
  const total = repos.filter((r) => !curation.denylist?.includes(r.name)).length;
  const today = new Date().toISOString().slice(0, 10);

  const out = [];
  out.push(`<!-- 本文件由 scripts/build_awesome.mjs 自动生成，请勿手工编辑。Generated file — do not edit by hand. -->`);
  out.push(`# 🧭 awesome-quantskills`);
  out.push(`> ${t("QuantSkills 组织全景导航 · 量化技能 / 因子 / Agent 一站式可点击索引，图文并茂。", "A panoramic, clickable navigator for the QuantSkills org — skills / factors / agents at a glance.")}`);
  out.push("");
  out.push(t(`**简体中文** | [English](README.en.md)`, `[简体中文](README.md) | **English**`));
  out.push("");
  // 统计徽章（shields.io 转义：- → --，_ → __，再做 URL 编码处理空格/中文）
  const esc = (s) => encodeURIComponent(String(s).replace(/-/g, "--").replace(/_/g, "__"));
  const badge = (label, val, color) => `![${label}](https://img.shields.io/badge/${esc(label)}-${esc(val)}-${color})`;
  out.push(
    [
      badge(t("仓库", "repos"), total, "blue"),
      badge("Skills", count("skills"), "8a2be2"),
      badge(t("因子", "alphas"), count("alpha-ashare") + count("alpha-futures"), "ff7f0e"),
      badge("BUILD", count("build"), "2ca02c"),
      badge("Agents", count("agents"), "d62728"),
      badge(t("更新", "updated"), today, "lightgrey"),
    ].join(" ")
  );
  out.push("");

  // 三层分工
  out.push(
    t(
      `> **定位**：本仓是面向人类社区的「全景导航」，与组织另两套设施互补——[\`registry\`](${repoUrl("registry")})（机器/AI 发现层）、组织主页 \`.github\`（门面）。`,
      `> **Positioning**: a human-facing panoramic navigator, complementary to [\`registry\`](${repoUrl("registry")}) (machine/AI discovery) and the org \`.github\` profile.`
    )
  );
  out.push("");

  // mermaid 全景思维导图
  out.push(`## ${t("🗺️ 全景总览", "🗺️ Overview")}`);
  out.push("```mermaid");
  out.push("mindmap");
  out.push("  root((QuantSkills))");
  out.push(`    ${t("🧩 技能", "🧩 Skills")}`);
  for (const k of Object.keys(SKILL_SUB)) if (byFamily.skills?.[k]?.length) out.push(`      ${SKILL_SUB[k][lang]}`);
  out.push(`    ${t("📊 因子 Alpha", "📊 Alpha")}`);
  out.push(`      ${t("A股", "A-share")}`);
  out.push(`      ${t("期货", "Futures")}`);
  out.push(`    ${t("🏗️ BUILD 构建技能", "🏗️ BUILD")}`);
  out.push(`    ${t("🤖 Agents", "🤖 Agents")}`);
  out.push(`    ${t("🗄️ 数据与其他", "🗄️ Data & Misc")}`);
  out.push(`    ${t("🧱 基础设施与模板", "🧱 Infra & Templates")}`);
  out.push("```");
  out.push("");

  // 目录（锚点点击定位）
  out.push(`## ${t("📑 目录", "📑 Contents")}`);
  const toc = [
    ["featured", t("⭐ 精选旗舰", "⭐ Featured")],
    ["skills", t("🧩 技能 Skills", "🧩 Skills")],
    ["alpha-ashare", t("📊 因子 Alpha · A股", "📊 Alpha · A-share")],
    ["alpha-futures", t("📊 因子 Alpha · 期货", "📊 Alpha · Futures")],
    ["build", t("🏗️ BUILD 构建技能", "🏗️ BUILD")],
    ["agents", t("🤖 Agents", "🤖 Agents")],
    ["others", t("🗄️ 数据与其他", "🗄️ Data & Misc")],
    ["infra", t("🧱 基础设施与模板", "🧱 Infra & Templates")],
  ];
  if (incubator.length) toc.push(["incubator", t("🧪 实验 · 孵化", "🧪 Incubating")]);
  out.push(toc.map(([id, label]) => `- [${label}](#${id})`).join("\n"));
  out.push("");

  // 精选画廊
  out.push(`<a id="featured"></a>`);
  out.push(`## ${t("⭐ 精选旗舰", "⭐ Featured")}`);
  out.push("");
  for (const name of curation.featured || []) {
    const repo = repos.find((r) => r.name === name);
    if (!repo) continue;
    const lb = levelBadge(repo, reg, lang);
    out.push(`### [${name}](${repoUrl(name)})${lb ? " " + lb : ""}`);
    out.push(`> ${descOf(repo, reg, lang)}`);
    const imgRel = `assets/${name}.png`;
    if (existsSync(join(ROOT, imgRel))) out.push(`\n![${name}](${imgRel})\n`);
    out.push(
      `![stars](https://img.shields.io/github/stars/${ORG}/${name}?style=social) ` +
        `![last commit](https://img.shields.io/github/last-commit/${ORG}/${name})`
    );
    const plats = reg[name]?.platforms;
    if (plats?.length) out.push(`\n${t("平台", "Platforms")}: ${plats.map((p) => `\`${p}\``).join(" ")}`);
    out.push("");
  }

  // 技能（含子分组）
  out.push(`<a id="skills"></a>`);
  out.push(`## ${t("🧩 技能 Skills", "🧩 Skills")}`);
  out.push(t("可复用能力：因子计算、数据接入、研究复现、分析监控、选股复盘、交易执行等。", "Reusable capabilities: factors, data access, replication, analysis, screening, trading."));
  out.push("");
  for (const [cat, label] of Object.entries(SKILL_SUB)) {
    const items = byFamily.skills?.[cat];
    if (!items?.length) continue;
    out.push(`### ${label[lang]}`);
    out.push(table(items, reg, lang));
    out.push("");
  }

  const section = (id, title, intro, items) => {
    out.push(`<a id="${id}"></a>`);
    out.push(`## ${title}`);
    if (intro) out.push(intro);
    out.push("");
    out.push(items?.length ? table(items, reg, lang) : t("_（暂无）_", "_(none)_"));
    out.push("");
  };

  section("alpha-ashare", t("📊 因子 Alpha · A股", "📊 Alpha · A-share"), t("A股选股/事件型 alpha 因子。", "A-share stock-selection / event-driven alpha factors."), byFamily["alpha-ashare"]?._);
  section("alpha-futures", t("📊 因子 Alpha · 期货", "📊 Alpha · Futures"), t("期货截面/持仓博弈类 alpha 因子。", "Futures cross-sectional / positioning alpha factors."), byFamily["alpha-futures"]?._);
  section("build", t("🏗️ BUILD 构建技能", "🏗️ BUILD"), t("基于 panda-data / panda-trading 的构建型技能（看板、池子、风控）。", "BUILD-type skills on panda-data / panda-trading (dashboards, pools, risk)."), byFamily.build?._);
  section("agents", t("🤖 Agents", "🤖 Agents"), t("多 Agent 协作工作流：研究自动化、风险监控、内容生成等。", "Multi-agent workflows: research automation, risk monitoring, content generation."), byFamily.agents?._);
  section("others", t("🗄️ 数据与其他", "🗄️ Data & Misc"), t("数据工具、抓取、预测市场等。", "Data tooling, scraping, prediction markets, etc."), byFamily.others?._);
  section("infra", t("🧱 基础设施与模板", "🧱 Infra & Templates"), t("治理与脚手架，不属于内容资产。", "Governance and scaffolding, not content assets."), byFamily.infra?._);
  if (incubator.length) section("incubator", t("🧪 实验 · 孵化", "🧪 Incubating"), t("早期/占位仓库，待补充内容后归入正式分类。", "Early/placeholder repos, pending promotion."), incubator);

  out.push("---");
  out.push(t(`_本文件由 [\`scripts/build_awesome.mjs\`](scripts/build_awesome.mjs) 每日自动生成（${today}）。_`, `_Auto-generated daily by [\`scripts/build_awesome.mjs\`](scripts/build_awesome.mjs) (${today})._`));
  out.push("");
  return out.join("\n");
}

// ---------- 入口 ----------

const [repos, reg] = await Promise.all([getRepos(), getRegistry()]);
console.log(`[info] repos=${repos.length} registry=${Object.keys(reg).length}`);
if (!existsSync(join(ROOT, "assets"))) mkdirSync(join(ROOT, "assets"), { recursive: true });
writeFileSync(join(ROOT, "README.md"), render("zh", repos, reg));
writeFileSync(join(ROOT, "README.en.md"), render("en", repos, reg));
console.log("[ok] README.md + README.en.md 已生成");
