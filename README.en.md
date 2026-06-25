<!-- 本文件由 scripts/build.mjs 自动生成，请勿手工编辑。Generated file — do not edit by hand. -->
# 🧭 quantskills
> A panoramic, clickable navigator for the QuantSkills org — skills / factors / agents at a glance.

[简体中文](README.md) | **English**

![repos](https://img.shields.io/badge/repos-69-blue) ![Skills](https://img.shields.io/badge/Skills-41-8a2be2) ![alphas](https://img.shields.io/badge/alphas-11-ff7f0e) ![BUILD](https://img.shields.io/badge/BUILD-5-2ca02c) ![Agents](https://img.shields.io/badge/Agents-6-d62728) ![updated](https://img.shields.io/badge/updated-2026--06--25-lightgrey)

> **Positioning**: a human-facing panoramic navigator, complementary to [`registry`](https://github.com/quantskills/registry) (machine/AI discovery) and the org `.github` profile.

## 🗺️ Overview
```mermaid
mindmap
  root((QuantSkills))
    🧩 Skills
      Factor Engineering
      Tooling & Scaffolding
      Analysis & Research
      Monitoring & Alerts
      Data Access
      Research Replication
      Other Skills (unregistered)
    📊 Alpha
      A-share
      Futures
    🏗️ BUILD
    🤖 Agents
    🗄️ Data & Misc
    🧱 Infra & Templates
```

## 📑 Contents
- [⭐ Featured](#featured)
- [🧩 Skills](#skills)
- [📊 Alpha · A-share](#alpha-ashare)
- [📊 Alpha · Futures](#alpha-futures)
- [🏗️ BUILD](#build)
- [🤖 Agents](#agents)
- [🗄️ Data & Misc](#others)
- [🧱 Infra & Templates](#infra)

<a id="featured"></a>
## ⭐ Featured

### [skill-xingtai-catcher](https://github.com/quantskills/skill-xingtai-catcher)
> PatternCatcher MCP skill for similar K-line stock and futures search
![stars](https://img.shields.io/github/stars/quantskills/skill-xingtai-catcher?style=social) ![last commit](https://img.shields.io/github/last-commit/quantskills/skill-xingtai-catcher)

### [build-b7-lhb-monitor](https://github.com/quantskills/build-b7-lhb-monitor)
> 龙虎榜监控+席位标签库 — panda-data BUILD 技能(B7)。收盘后抓取龙虎榜，席位标签匹配(北向/机构/游资/量化)，生成次日关注清单；个股详情页按上榜原因拆买卖营业部，支持区间统计与交互式HTML看板(搜索/筛选/排序/展开详情)。
![stars](https://img.shields.io/github/stars/quantskills/build-b7-lhb-monitor?style=social) ![last commit](https://img.shields.io/github/last-commit/quantskills/build-b7-lhb-monitor)

### [build-b6-limitup-pool](https://github.com/quantskills/build-b6-limitup-pool)
> 涨停池动态管理 — panda-data BUILD 技能(B6)。每日维护涨停池，标记首板/连板数/炸板次数/回封时间，含题材分组/特殊形态/情绪面量化(分层晋级率·赚钱效应)，输出多维表格+HTML看板。
![stars](https://img.shields.io/github/stars/quantskills/build-b6-limitup-pool?style=social) ![last commit](https://img.shields.io/github/last-commit/quantskills/build-b6-limitup-pool)

### [skill-a-share-stock-dossier](https://github.com/quantskills/skill-a-share-stock-dossier) 🟢runnable
> A-share stock dossier skill that uses Pandadata to produce company, financial, dividend, shareholder, and risk analysis.
![stars](https://img.shields.io/github/stars/quantskills/skill-a-share-stock-dossier?style=social) ![last commit](https://img.shields.io/github/last-commit/quantskills/skill-a-share-stock-dossier)

Platforms: `claude-code` `codex` `hermes` `openclaw` `cursor`

### [skill-market-daily-review](https://github.com/quantskills/skill-market-daily-review) 🟢runnable
> A-share end-of-day review skill covering indexes, valuation, breadth, sentiment, sectors, themes, and capital-flow clues.
![stars](https://img.shields.io/github/stars/quantskills/skill-market-daily-review?style=social) ![last commit](https://img.shields.io/github/last-commit/quantskills/skill-market-daily-review)

Platforms: `claude-code` `codex` `hermes` `openclaw` `cursor`

### [alpha-a3-streak-leader-relay](https://github.com/quantskills/alpha-a3-streak-leader-relay)
> A 股「连板龙头接力」Alpha 因子（A3）。每日从 ≥3 板候选中识别 top-N 接力标的，T+1 open 进 / T+2 vwap 出。事件型设计，绝对评分，含因子检验 + 策略层回测 + HTML 可视化。
![stars](https://img.shields.io/github/stars/quantskills/alpha-a3-streak-leader-relay?style=social) ![last commit](https://img.shields.io/github/last-commit/quantskills/alpha-a3-streak-leader-relay)

### [skill-factor-alpha191-alpha101](https://github.com/quantskills/skill-factor-alpha191-alpha101) ✅verified
> Compute Alpha101 and Alpha191 factor values based on JoinQuant formulas with full or selected factor runs.
![stars](https://img.shields.io/github/stars/quantskills/skill-factor-alpha191-alpha101?style=social) ![last commit](https://img.shields.io/github/last-commit/quantskills/skill-factor-alpha191-alpha101)

Platforms: `codex`

### [skill-pandadata-api](https://github.com/quantskills/skill-pandadata-api) 🟢runnable
> Pandadata and panda_data Python SDK reference skill for selecting, calling, and troubleshooting quant data APIs.
![stars](https://img.shields.io/github/stars/quantskills/skill-pandadata-api?style=social) ![last commit](https://img.shields.io/github/last-commit/quantskills/skill-pandadata-api)

Platforms: `claude-code` `codex` `openclaw` `cursor`

<a id="skills"></a>
## 🧩 Skills
Reusable capabilities: factors, data access, replication, analysis, screening, trading.

### Factor Engineering
| Project | Description | Status |
|---|---|---|
| [skill-factor-blend](https://github.com/quantskills/skill-factor-blend) | Multi-factor signal-level blending: redundancy removal via correlation matrix and top-bucket overlap, three weighting schemes (equal/ICIR/score), daily cross-sectional z-score synthesis, and composite re-evaluation. Signal-level only — outputs composite_signal, not portfolio weights. | ⭐0 · Python · 🚀production · 📅2026-06-24 |
| [skill-factor-decay](https://github.com/quantskills/skill-factor-decay) | Factor decay analysis with multi-horizon Rank IC curves, exponential/power-law/bi-exponential fitting, bootstrap half-life CIs, turnover decay, and Q5-Q1 group-return decay. Recommends optimal rebalancing frequency. Integrated with Pandadata for 5-horizon forward returns. | ⭐0 · Python · 🚀production · 📅2026-06-24 |
| [skill-factor-orthogonalize](https://github.com/quantskills/skill-factor-orthogonalize) | Daily cross-sectional OLS orthogonalization against industry one-hot dummies, size (log dollar volume), style (beta, volatility), and legacy factor exposures. Outputs residual signal with exposure-zeroing diagnostics. Integrated with Pandadata for sector classification and style controls. | ⭐0 · Python · 🚀production · 📅2026-06-24 |
| [skill-factor-alpha191-alpha101](https://github.com/quantskills/skill-factor-alpha191-alpha101) | Compute Alpha101 and Alpha191 factor values based on JoinQuant formulas with full or selected factor runs. | ⭐1 · Python · ✅verified · 📅2026-06-24 |
| [skill-a1-lhb-tracking](https://github.com/quantskills/skill-a1-lhb-tracking) | A-share LHB event-ranking factor using seat win rate, payoff, premium, and buy-size evidence from Pandadata. | ⭐0 · Python · ✅verified · 📅2026-06-23 |
| [skill-doc-to-alphas](https://github.com/quantskills/skill-doc-to-alphas) | Generate OHLCV alpha factor expressions from document text, with a formula contract and automatic toy-data validation. | ⭐0 · Python · ⚪listed · 📅2026-06-22 |
| [skill-quant-factor-volume-stat-alpha](https://github.com/quantskills/skill-quant-factor-volume-stat-alpha) | Volume, volume-price, ranking, and statistical OHLCV alpha factor library with 216 factor Skills validated on real market data. | ⭐1 · Python · ✅verified · 📅2026-06-17 |
| [skill-quant-factor-risk-pattern-alpha](https://github.com/quantskills/skill-quant-factor-risk-pattern-alpha) | Risk-state and chart-pattern OHLCV alpha factor library with 288 factor Skills for volatility, K-line shape, shock, drawdown, and pressure analysis. | ⭐1 · Python · ✅verified · 📅2026-06-17 |
| [skill-quant-factor-directional-alpha](https://github.com/quantskills/skill-quant-factor-directional-alpha) | Directional OHLCV alpha factor library with 296 trend, breakout, reversal, and channel-position factor Skills validated on real market data. | ⭐0 · Python · ✅verified · 📅2026-06-17 |

### Tooling & Scaffolding
| Project | Description | Status |
|---|---|---|
| [skill-factormad-debate-factor-mining](https://github.com/quantskills/skill-factormad-debate-factor-mining) | Mine interpretable code-based stock alpha factors from OHLCV market data with a FactorMAD-style LLM debate workflow. | ⭐0 · Python · 🟢runnable · 📅2026-06-17 |
| [skill-x-trader-builder](https://github.com/quantskills/skill-x-trader-builder) | Skill-builder workflow for turning public X/Twitter data and user materials into trader-specific research-model skills. | ⭐1 · Python · 🟢runnable · 📅2026-06-17 |
| [skill-ssquant-trader-generator](https://github.com/quantskills/skill-ssquant-trader-generator) | Trader-generator skill that turns natural-language trading ideas into deployable AI Trader rules, code, and operating plans. | ⭐0 · 🟢runnable · 📅2026-06-17 |
| [skill-ssquant-ai-trader](https://github.com/quantskills/skill-ssquant-ai-trader) | SSQuant AI Trader skill for converting natural-language trading descriptions into automated or semi-automated strategy workflows. | ⭐0 · 🟢runnable · 📅2026-06-17 |
| [skill-quant-factor-skill-factory](https://github.com/quantskills/skill-quant-factor-skill-factory) | Factory skill for turning OHLCV alpha ideas into QuantSkills factor skills with real-market validation and packaging. | ⭐4 · Python · 🟢runnable · 📅2026-06-17 |
| [skill-ic-analysis](https://github.com/quantskills/skill-ic-analysis) | Multidimensional IC diagnostics for rank versus Pearson IC, IC decay, subsample IC, top-basket stability, and cumulative IC timelines. | ⭐0 · ⚪listed · 📅2026-06-17 |
| [skill-factor-review](https://github.com/quantskills/skill-factor-review) | Factor-library review skill for experiment logs, acceptance rates, score dynamics, factor-family structure, correlations, and research recommendations. | ⭐0 · ⚪listed · 📅2026-06-17 |
| [skill-factor-mine](https://github.com/quantskills/skill-factor-mine) | Disciplined factor-mining workflow for hypothesis design, implementation, validation, iteration notes, acceptance, and rollback decisions. | ⭐0 · ⚪listed · 📅2026-06-17 |
| [skill-factor-evaluate](https://github.com/quantskills/skill-factor-evaluate) | Single-factor evaluation skill covering rank IC, Pearson IC, Sharpe, drawdown, monotonicity, turnover, and composite scoring. | ⭐0 · ⚪listed · 📅2026-06-17 |
| [skill-factor-debug](https://github.com/quantskills/skill-factor-debug) | Factor debugging playbook for NaNs, signal validation failures, look-ahead bias, horizon mismatch, checksum drift, and correlation violations. | ⭐0 · ⚪listed · 📅2026-06-17 |
| [skill-backtest](https://github.com/quantskills/skill-backtest) | Standard cross-sectional long-only backtest protocol with T+1 execution, fees, limit filters, NAV curves, IC, drawdown, and diagnostic charts. | ⭐0 · ⚪listed · 📅2026-06-17 |
| [skill-time-series-analysis](https://github.com/quantskills/skill-time-series-analysis) | Conclusion-first time-series diagnostics for original series, Log diff, distributions, stationarity, cointegration, and half-life. | ⭐0 · Python · 🟢runnable · 📅2026-06-15 |

### Analysis & Research
| Project | Description | Status |
|---|---|---|
| [skill-stock-screener](https://github.com/quantskills/skill-stock-screener) | Natural-language A-share stock screener skill that maps fundamentals, dividends, valuation, pledges, northbound flows, sectors, holders, and risk filters to Pandadata calls. | ⭐0 · 🟢runnable · 📅2026-06-17 |
| [skill-serenity-research-model](https://github.com/quantskills/skill-serenity-research-model) | Research-model skill for reconstructing Serenity-style AI, semiconductor, and supply-chain theses from public posts and datasets. | ⭐8 · Python · ⚪listed · 📅2026-06-17 |
| [skill-options-vol-analyst](https://github.com/quantskills/skill-options-vol-analyst) | Options volatility analyst skill for option chains, implied volatility, realized volatility, IV percentiles, term structure, skew, and volatility-premium reports. | ⭐1 · 🟢runnable · 📅2026-06-17 |
| [skill-index-valuation-rotation](https://github.com/quantskills/skill-index-valuation-rotation) | Index valuation and A-share industry rotation skill for PE/PB percentiles, valuation temperature, broad-index references, momentum ranks, and rotation summaries. | ⭐1 · 🟢runnable · 📅2026-06-17 |
| [skill-gaetano-crux-capital-research-model](https://github.com/quantskills/skill-gaetano-crux-capital-research-model) | Research-model skill for public-material analysis of photonics, optical networking, Physical AI, and AI infrastructure themes. | ⭐1 · ⚪listed · 📅2026-06-17 |
| [skill-futures-deepview-analyst](https://github.com/quantskills/skill-futures-deepview-analyst) | Futures DeepView analyst skill for position seats, basis, inventory, term structure, and calendar-spread signals from Pandadata. | ⭐1 · 🟢runnable · 📅2026-06-17 |
| [skill-a-share-stock-dossier](https://github.com/quantskills/skill-a-share-stock-dossier) | A-share stock dossier skill that uses Pandadata to produce company, financial, dividend, shareholder, and risk analysis. | ⭐2 · 🟢runnable · 📅2026-06-17 |

### Monitoring & Alerts
| Project | Description | Status |
|---|---|---|
| [skill-market-daily-review](https://github.com/quantskills/skill-market-daily-review) | A-share end-of-day review skill covering indexes, valuation, breadth, sentiment, sectors, themes, and capital-flow clues. | ⭐5 · Python · 🟢runnable · 📅2026-06-17 |
| [skill-macro-monitor](https://github.com/quantskills/skill-macro-monitor) | Macro monitoring skill for Pandadata macro data, economic calendars, industry prosperity, and high-frequency signals. | ⭐0 · 🟢runnable · 📅2026-06-17 |
| [skill-event-risk-alert](https://github.com/quantskills/skill-event-risk-alert) | A-share event-risk alert skill for watchlists, holdings, unlocks, pledges, reductions, ST changes, forecasts, audit opinions, and traceable reports. | ⭐0 · Python · 🟢runnable · 📅2026-06-17 |

### Data Access
| Project | Description | Status |
|---|---|---|
| [skill-pandadata-warehouse](https://github.com/quantskills/skill-pandadata-warehouse) | Pandadata warehouse skill for caching, refreshing, querying, and validating local DuckDB and Parquet market-data stores. | ⭐0 · 🟢runnable · 📅2026-06-17 |
| [skill-pandadata-api](https://github.com/quantskills/skill-pandadata-api) | Pandadata and panda_data Python SDK reference skill for selecting, calling, and troubleshooting quant data APIs. | ⭐6 · Python · 🟢runnable · 📅2026-06-17 |

### Research Replication
| Project | Description | Status |
|---|---|---|
| [skill-report-replication](https://github.com/quantskills/skill-report-replication) | Quant report replication skill that turns papers or reports into Chinese translations, factor formulas, Pandadata-backed validation reports, and strategy assets. | ⭐0 · Python · 🟢runnable · 📅2026-06-17 |
| [skill-paper-replication](https://github.com/quantskills/skill-paper-replication) | Framework-neutral quantitative paper replication skill for research scripts, backtests, charts, and auditable outputs. | ⭐1 · Python · 🟢runnable · 📅2026-06-17 |

### Other Skills (unregistered)
| Project | Description | Status |
|---|---|---|
| [skill-trade-review](https://github.com/quantskills/skill-trade-review) | 一个交易复盘skill，股票期货皆可用。可根据市场走势、给定的策略方案以及交易记录，对逐笔交易和整体情况进行分析复盘，并给出下一阶段操作建议 | ⭐0 · Python · 📅2026-06-24 |
| [skill-f7-lei-cross-section-core-broker-follow](https://github.com/quantskills/skill-f7-lei-cross-section-core-broker-follow) | — | ⭐0 · Python · 📅2026-06-24 |
| [skill-investment-decision](https://github.com/quantskills/skill-investment-decision) | — | ⭐0 · Python · 📅2026-06-24 |
| [skill-xingtai-catcher](https://github.com/quantskills/skill-xingtai-catcher) | PatternCatcher MCP skill for similar K-line stock and futures search | ⭐5 · Python · 📅2026-06-22 |
| [skill-B12-intraday-position-manager](https://github.com/quantskills/skill-B12-intraday-position-manager) | 日内仓位动态管理 — panda-trading 量化交易工具 | ⭐0 · Python · 📅2026-06-20 |
| [skill-quant-research-replication](https://github.com/quantskills/skill-quant-research-replication) | Codex skill for quantitative research replication workflows. | ⭐0 · Python · 📅2026-06-17 |

<a id="alpha-ashare"></a>
## 📊 Alpha · A-share
A-share stock-selection / event-driven alpha factors.

| Project | Description | Status |
|---|---|---|
| [alpha-a3-streak-leader-relay](https://github.com/quantskills/alpha-a3-streak-leader-relay) | A 股「连板龙头接力」Alpha 因子（A3）。每日从 ≥3 板候选中识别 top-N 接力标的，T+1 open 进 / T+2 vwap 出。事件型设计，绝对评分，含因子检验 + 策略层回测 + HTML 可视化。 | ⭐0 · Python · 📅2026-06-24 |
| [alpha-a04-sector-fund-flow](https://github.com/quantskills/alpha-a04-sector-fund-flow) | — | ⭐0 · Python · 📅2026-06-21 |
| [alpha-a2-first-limit-up-with-low-open](https://github.com/quantskills/alpha-a2-first-limit-up-with-low-open) | 首板涨停低开 | ⭐0 · Python · 📅2026-06-21 |
| [alpha-A06-hotmoney-reversal](https://github.com/quantskills/alpha-A06-hotmoney-reversal) | The SKILLS supports IC/IR calculation, stratified backtesting, monotonicity testing, turnover rate analysis and decay curve plotting for quantitative factor research. | ⭐0 · Python · 📅2026-06-18 |

<a id="alpha-futures"></a>
## 📊 Alpha · Futures
Futures cross-sectional / positioning alpha factors.

| Project | Description | Status |
|---|---|---|
| [alpha-f11-seat-ensemble](https://github.com/quantskills/alpha-f11-seat-ensemble) | 席位集中度+增量动态ensemble alpha因子 | V3反转×INC动量，集中度驱动动态加权 | ⭐0 · Python · 📅2026-06-22 |
| [alpha-f4-oipd](https://github.com/quantskills/alpha-f4-oipd) | OI价格背离因子V4.6(OIPD) | 4路信号ensemble+OI加速度+波动率门控+截面增强 | ⭐0 · Python · 📅2026-06-22 |
| [alpha-f001-seat-long-short-disagreement](https://github.com/quantskills/alpha-f001-seat-long-short-disagreement) | 期货截面因子：席位多空分歧，多头增仓-空头增仓差值，力量对比 | ⭐0 · Python · 📅2026-06-21 |
| [alpha-f5-member-position-concentration](https://github.com/quantskills/alpha-f5-member-position-concentration) | alpha-f5-member-position-concentration | ⭐0 · Python · 📅2026-06-21 |
| [alpha-f6-family-position-reverse](https://github.com/quantskills/alpha-f6-family-position-reverse) | alpha-f6-family-position-reverse | ⭐0 · Python · 📅2026-06-21 |
| [alpha-f8-family-main-divergence](https://github.com/quantskills/alpha-f8-family-main-divergence) | alpha-f8-family-main-divergence | ⭐0 · Python · 📅2026-06-21 |
| [alpha-f1-position-change](https://github.com/quantskills/alpha-f1-position-change) | — | ⭐0 · Python · 📅2026-06-18 |

<a id="build"></a>
## 🏗️ BUILD
BUILD-type skills on panda-data / panda-trading (dashboards, pools, risk).

| Project | Description | Status |
|---|---|---|
| [build-b7-lhb-monitor](https://github.com/quantskills/build-b7-lhb-monitor) | 龙虎榜监控+席位标签库 — panda-data BUILD 技能(B7)。收盘后抓取龙虎榜，席位标签匹配(北向/机构/游资/量化)，生成次日关注清单；个股详情页按上榜原因拆买卖营业部，支持区间统计与交互式HTML看板(搜索/筛选/排序/展开详情)。 | ⭐0 · HTML · 📅2026-06-24 |
| [build-b6-limitup-pool](https://github.com/quantskills/build-b6-limitup-pool) | 涨停池动态管理 — panda-data BUILD 技能(B6)。每日维护涨停池，标记首板/连板数/炸板次数/回封时间，含题材分组/特殊形态/情绪面量化(分层晋级率·赚钱效应)，输出多维表格+HTML看板。 | ⭐0 · Python · 📅2026-06-24 |
| [build-b11-auto-stop-loss-take-profit](https://github.com/quantskills/build-b11-auto-stop-loss-take-profit) | 按入场日期和开盘价自动判断止盈、止损、强平，以及单票仓位上限控制。 | ⭐0 · Python · 📅2026-06-21 |
| [build-b12-intraday-position-manager](https://github.com/quantskills/build-b12-intraday-position-manager) | 日内仓位动态管理 — panda-trading BUILD 技能 | ⭐0 · Python · 📅2026-06-21 |
| [build-B10-factor-evaluation](https://github.com/quantskills/build-B10-factor-evaluation) | The system supports IC/IR calculation, stratified backtesting, monotonicity testing, turnover rate analysis and decay curve plotting for quantitative factor research. | ⭐0 · HTML · 📅2026-06-18 |

<a id="agents"></a>
## 🤖 Agents
Multi-agent workflows: research automation, risk monitoring, content generation.

| Project | Description | Status |
|---|---|---|
| [agent-for-liangshuyuan-tasks](https://github.com/quantskills/agent-for-liangshuyuan-tasks) | 基于 Claude Code 多 Agent 协作框架的量化交易工具库，为完成量枢院任务而创建 | ⭐0 · Python · 📅2026-06-21 |
| [agent-quantspace](https://github.com/quantskills/agent-quantspace) | AI-native quantitative research framework for reusable skills, strategy workflows, backtests, and reports. | ⭐14 · Python · 🟢runnable · 📅2026-06-17 |
| [agent-market-regime-monitor](https://github.com/quantskills/agent-market-regime-monitor) | Monitor market regime from Pandadata index, breadth, volatility, and funding evidence. | ⭐0 · Python · ✅verified · 📅2026-06-17 |
| [agent-derivatives-skew-sentiment-monitor](https://github.com/quantskills/agent-derivatives-skew-sentiment-monitor) | Monitor derivatives sentiment from option implied volatility and underlying historical volatility. | ⭐0 · Python · ✅verified · 📅2026-06-17 |
| [agent-crowding-risk-monitor](https://github.com/quantskills/agent-crowding-risk-monitor) | Monitor crowded-trade risk from Pandadata price, turnover, margin, and LHB heat evidence. | ⭐0 · Python · ✅verified · 📅2026-06-17 |
| [agent-correlation-break-research](https://github.com/quantskills/agent-correlation-break-research) | Detect correlation breaks, style shifts, and diversification stress from Pandadata return evidence. | ⭐0 · Python · ✅verified · 📅2026-06-17 |

<a id="others"></a>
## 🗄️ Data & Misc
Data tooling, scraping, prediction markets, etc.

| Project | Description | Status |
|---|---|---|
| [news-sentiment-analyst](https://github.com/quantskills/news-sentiment-analyst) | A-share financial news sentiment analyst - Claude Code Skill | ⭐0 · Python · 📅2026-06-25 |

<a id="infra"></a>
## 🧱 Infra & Templates
Governance and scaffolding, not content assets.

| Project | Description | Status |
|---|---|---|
| [registry](https://github.com/quantskills/registry) | Public display registry for QUANTSKILLS skill-* and agent-* assets. | ⭐0 · Python · 📅2026-06-24 |
| [.github](https://github.com/quantskills/.github) | — | ⭐0 · 📅2026-06-24 |
| [skill-template](https://github.com/quantskills/skill-template) | Template repository for QUANTSKILLS skill-* projects. | ⭐1 · 📅2026-06-17 |
| [join](https://github.com/quantskills/join) | — | ⭐0 · 📅2026-06-17 |
| [agent-template](https://github.com/quantskills/agent-template) | Template repository for QUANTSKILLS agent-* projects. | ⭐0 · 📅2026-06-17 |

---
_Auto-generated daily by [`scripts/build.mjs`](scripts/build.mjs) (2026-06-25)._
