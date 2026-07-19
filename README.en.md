<!-- 本文件由 scripts/build.mjs 自动生成，请勿手工编辑。Generated file — do not edit by hand. -->
# 🧭 quantskills
> A panoramic, clickable navigator for the QuantSkills org — skills / factors / agents at a glance.

[简体中文](README.md) | **English**

[![repos](https://img.shields.io/badge/repos-97-blue)](https://github.com/orgs/quantskills/repositories) [![in-catalog](https://img.shields.io/badge/in--catalog-80-8a2be2)](https://ncn9g4d5xvof.feishu.cn/wiki/ZMD0w4rvoivnHVkoVwKcunkvn1g) [![Agents](https://img.shields.io/badge/Agents-7-d62728)](#cat-09) [![updated](https://img.shields.io/badge/updated-2026--07--19-lightgrey)](https://github.com/quantskills/quantskills/commits/main)

**QUANTSKILLS** is an open community for **Quant Skills and Agents** in the AI Agent era. Initiated by [PandaAI](https://www.tqx.ai/), it helps quant developers turn trading experience, research methods, factor models, and strategy code into standardized assets that can be **searched, installed, validated, and shared**.

> Turn your quant experience into Skills that humans can trust and AI Agents can use.

## 🗺️ Overview
```mermaid
mindmap
  root((QuantSkills))
    📚 Catalog
      01 Data APIs & Warehouse
      02 Factor R&D Toolbox
      03 Market & Instrument Analysis
      04 Risk Monitoring & Alerts
      05 Backtesting & Trading
      06 Research Models & Replication
      07 Prediction Markets
      08 Search & Web Scraping
      09 Featured Agents
    ➕ Supplementary
      Not in catalog
      Infra & Templates
```

## 📑 Contents
- [01 Data APIs & Warehouse](#cat-01)
- [02 Factor R&D Toolbox](#cat-02)
- [03 Market & Instrument Analysis](#cat-03)
- [04 Risk Monitoring & Alerts](#cat-04)
- [05 Backtesting & Trading](#cat-05)
- [06 Research Models & Replication](#cat-06)
- [07 Prediction Markets](#cat-07)
- [08 Search & Web Scraping](#cat-08)
- [09 Featured Agents](#cat-09)
- [📦 Repos not in catalog](#uncat)
- [🧱 Infra & Templates](#infra)

<a id="cat-01"></a>
## 01 Data APIs & Warehouse

| Project | Description | Screenshot |
|---|---|---|
| [skill-us-sec-edgar-harvester](https://github.com/quantskills/skill-us-sec-edgar-harvester) | Harvest and structure US SEC EDGAR public filings into a deduplicated, sourced, time-lined dataset. | — |
| [skill-pandadata-warehouse](https://github.com/quantskills/skill-pandadata-warehouse) | Pandadata warehouse skill for caching, refreshing, querying, and validating local DuckDB and Parquet market-data stores. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-pandadata-warehouse.png"><img src="assets/skill-pandadata-warehouse.png" width="220"></a> |
| [skill-pandadata-api](https://github.com/quantskills/skill-pandadata-api) | Pandadata and panda_data Python SDK reference skill for selecting, calling, and troubleshooting quant data APIs. | — |
| [skill-fundamental-factor-analysis](https://github.com/quantskills/skill-fundamental-factor-analysis) | Compute, validate, and analyze A-share fundamental factors. Covers value (EP/BP/SP/CP/FCFP/GP/A), quality (ROE/ROA/gross margin/accruals/leverage), growth (earnings growth/revenue growth/analyst revision) and composite factors. Uses Pandadata financial APIs with IC analysis, grouped returns, and Fama-MacBeth regression for validation. | — |

<a id="cat-02"></a>
## 02 Factor R&D Toolbox

| Project | Description | Screenshot |
|---|---|---|
| [skill-templeton-global-contrarian](https://github.com/quantskills/skill-templeton-global-contrarian) | John Templeton contrarian global value factor for cross-market valuation deviation screening | — |
| [skill-quant-factor-volume-stat-alpha](https://github.com/quantskills/skill-quant-factor-volume-stat-alpha) | Volume, volume-price, ranking, and statistical OHLCV alpha factor library with 216 factor Skills validated on real market data. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-factor-volume-stat-alpha.png"><img src="assets/skill-quant-factor-volume-stat-alpha.png" width="220"></a> |
| [skill-quant-factor-skill-factory](https://github.com/quantskills/skill-quant-factor-skill-factory) | Factory skill for turning OHLCV alpha ideas into QuantSkills factor skills with real-market validation and packaging. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-factor-skill-factory.png"><img src="assets/skill-quant-factor-skill-factory.png" width="220"></a> |
| [skill-quant-factor-risk-pattern-alpha](https://github.com/quantskills/skill-quant-factor-risk-pattern-alpha) | Risk-state and chart-pattern OHLCV alpha factor library with 288 factor Skills for volatility, K-line shape, shock, drawdown, and pressure analysis. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-factor-risk-pattern-alpha.png"><img src="assets/skill-quant-factor-risk-pattern-alpha.png" width="220"></a> |
| [skill-quant-factor-directional-alpha](https://github.com/quantskills/skill-quant-factor-directional-alpha) | Directional OHLCV alpha factor library with 296 trend, breakout, reversal, and channel-position factor Skills validated on real market data. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-factor-directional-alpha.png"><img src="assets/skill-quant-factor-directional-alpha.png" width="220"></a> |
| [skill-overseas-equity-factor-miner](https://github.com/quantskills/skill-overseas-equity-factor-miner) | Discover and validate cross-sectional alpha factors for HK/US equities by IC, decay, and turnover. | — |
| [skill-ic-analysis](https://github.com/quantskills/skill-ic-analysis) | Multidimensional IC diagnostics for rank versus Pearson IC, IC decay, subsample IC, top-basket stability, and cumulative IC timelines. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-ic-analysis.png"><img src="assets/skill-ic-analysis.png" width="220"></a> |
| [skill-factormad-debate-factor-mining](https://github.com/quantskills/skill-factormad-debate-factor-mining) | Mine interpretable code-based stock alpha factors from OHLCV market data with a FactorMAD-style LLM debate workflow. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factormad-debate-factor-mining.png"><img src="assets/skill-factormad-debate-factor-mining.png" width="220"></a> |
| [skill-factor-review](https://github.com/quantskills/skill-factor-review) | Factor-library review skill for experiment logs, acceptance rates, score dynamics, factor-family structure, correlations, and research recommendations. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-review.png"><img src="assets/skill-factor-review.png" width="220"></a> |
| [skill-factor-pool-evolution](https://github.com/quantskills/skill-factor-pool-evolution) | Run one round of factor-pool recommendation from an existing stock alpha set. Use when an agent needs to start from user-provided seed factors, prepare mutation and crossover prompt packs for the current model to reason... | — |
| [skill-factor-orthogonalize](https://github.com/quantskills/skill-factor-orthogonalize) | Daily cross-sectional OLS orthogonalization against industry one-hot dummies, size (log dollar volume), style (beta, volatility), and legacy factor exposures. Outputs residual signal with exposure-zeroing diagnostics. Integrated with Pandadata for sector classification and style controls. | — |
| [skill-factor-optimize](https://github.com/quantskills/skill-factor-optimize) | Optimize an existing stock or futures factor with period sweeps, ablations, refinements, and a final keep-or-replace decision. | — |
| [skill-factor-mine](https://github.com/quantskills/skill-factor-mine) | Disciplined factor-mining workflow for hypothesis design, implementation, validation, iteration notes, acceptance, and rollback decisions. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-mine.png"><img src="assets/skill-factor-mine.png" width="220"></a> |
| [skill-factor-evaluate](https://github.com/quantskills/skill-factor-evaluate) | Single-factor evaluation skill covering rank IC, Pearson IC, Sharpe, drawdown, monotonicity, turnover, and composite scoring. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-evaluate.png"><img src="assets/skill-factor-evaluate.png" width="220"></a> |
| [skill-factor-decay](https://github.com/quantskills/skill-factor-decay) | Factor decay analysis with multi-horizon Rank IC curves, exponential/power-law/bi-exponential fitting, bootstrap half-life CIs, turnover decay, and Q5-Q1 group-return decay. Recommends optimal rebalancing frequency. Integrated with Pandadata for 5-horizon forward returns. | — |
| [skill-factor-debug](https://github.com/quantskills/skill-factor-debug) | Factor debugging playbook for NaNs, signal validation failures, look-ahead bias, horizon mismatch, checksum drift, and correlation violations. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-debug.png"><img src="assets/skill-factor-debug.png" width="220"></a> |
| [skill-factor-blend](https://github.com/quantskills/skill-factor-blend) | Multi-factor signal-level blending: redundancy removal via correlation matrix and top-bucket overlap, three weighting schemes (equal/ICIR/score), daily cross-sectional z-score synthesis, and composite re-evaluation. Signal-level only — outputs composite_signal, not portfolio weights. | — |
| [skill-factor-alpha191-alpha101](https://github.com/quantskills/skill-factor-alpha191-alpha101) | Compute Alpha101 and Alpha191 factor values based on JoinQuant formulas with full or selected factor runs. | — |
| [skill-doc-to-alphas](https://github.com/quantskills/skill-doc-to-alphas) | Generate OHLCV alpha factor expressions from document text, with a formula contract and automatic toy-data validation. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-doc-to-alphas.png"><img src="assets/skill-doc-to-alphas.png" width="220"></a> |
| [skill-alpha-a06-hotmoney-reversal](https://github.com/quantskills/skill-alpha-a06-hotmoney-reversal) | Use this skill to calculate, validate, backtest, and publish the A06 hot-money seat cooling-reversal and collaborative-breakout Alpha factor for A-share Dragon-Tiger List data. | — |
| [skill-alpha-f5-member-position-concentration](https://github.com/quantskills/skill-alpha-f5-member-position-concentration) | Use when researching or validating the F5 commodity futures member-position concentration factor in a local Panda data environment. | — |
| [skill-alpha-f6-family-position-reverse](https://github.com/quantskills/skill-alpha-f6-family-position-reverse) | Use when researching or validating the F6 commodity futures family-position reverse factor in a local Panda data environment. | — |
| [skill-alpha-f8-family-main-divergence](https://github.com/quantskills/skill-alpha-f8-family-main-divergence) | Use when researching or validating the F8 commodity futures broker-position divergence factor in a local Panda data environment. | — |
| [skill-build-b10-factor-evaluation](https://github.com/quantskills/skill-build-b10-factor-evaluation) | The system supports IC/IR calculation, stratified backtesting, monotonicity testing, turnover rate analysis and decay curve plotting for quantitative factor research. | — |

<a id="cat-03"></a>
## 03 Market & Instrument Analysis

| Project | Description | Screenshot |
|---|---|---|
| [skill-stock-screener](https://github.com/quantskills/skill-stock-screener) | Natural-language A-share stock screener skill that maps fundamentals, dividends, valuation, pledges, northbound flows, sectors, holders, and risk filters to Pandadata calls. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-stock-screener.png"><img src="assets/skill-stock-screener.png" width="220"></a> |
| [skill-smart-money-profiler](https://github.com/quantskills/skill-smart-money-profiler) | Identify the capital actors behind A-share trades and profile their cross-period behavior using Pandadata seat, northbound, margin, and block-trade data. | — |
| [skill-portfolio-checkup](https://github.com/quantskills/skill-portfolio-checkup) | Portfolio-level checkup skill that uses Pandadata to aggregate single-stock signals into portfolio structure, concentration, weighted valuation/quality, risk exposure, and benchmark deviation. | — |
| [skill-options-vol-analyst](https://github.com/quantskills/skill-options-vol-analyst) | Options volatility analyst skill for option chains, implied volatility, realized volatility, IV percentiles, term structure, skew, and volatility-premium reports. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-options-vol-analyst.png"><img src="assets/skill-options-vol-analyst.png" width="220"></a> |
| [skill-market-daily-review](https://github.com/quantskills/skill-market-daily-review) | A-share end-of-day review skill covering indexes, valuation, breadth, sentiment, sectors, themes, and capital-flow clues. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-market-daily-review.png"><img src="assets/skill-market-daily-review.png" width="220"></a> |
| [skill-macro-monitor](https://github.com/quantskills/skill-macro-monitor) | Macro monitoring skill for Pandadata macro data, economic calendars, industry prosperity, and high-frequency signals. | — |
| [skill-index-valuation-rotation](https://github.com/quantskills/skill-index-valuation-rotation) | Index valuation and A-share industry rotation skill for PE/PB percentiles, valuation temperature, broad-index references, momentum ranks, and rotation summaries. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-index-valuation-rotation.png"><img src="assets/skill-index-valuation-rotation.png" width="220"></a> |
| [skill-global-macro-rates-fx-lab](https://github.com/quantskills/skill-global-macro-rates-fx-lab) | Study global rates, FX, and macro regime from public FRED/central-bank data and Pandadata international macro. | — |
| [skill-global-commodity-term-structure](https://github.com/quantskills/skill-global-commodity-term-structure) | Research overseas commodity futures term structure, roll yield, and cross-commodity spreads from public data. | — |
| [skill-gao-shanwen-research-model](https://github.com/quantskills/skill-gao-shanwen-research-model) | Build and apply a Gao Shanwen-style China macro and capital-market research workflow from his books, public articles, and archived materials. | — |
| [skill-futures-deepview-analyst](https://github.com/quantskills/skill-futures-deepview-analyst) | Futures DeepView analyst skill for position seats, basis, inventory, term structure, and calendar-spread signals from Pandadata. | — |
| [skill-a1-lhb-tracking](https://github.com/quantskills/skill-a1-lhb-tracking) | A-share LHB event-ranking factor using seat win rate, payoff, premium, and buy-size evidence from Pandadata. | — |
| [skill-a-share-stock-dossier](https://github.com/quantskills/skill-a-share-stock-dossier) | A-share stock dossier skill that uses Pandadata to produce company, financial, dividend, shareholder, and risk analysis. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-a-share-stock-dossier.png"><img src="assets/skill-a-share-stock-dossier.png" width="220"></a> |
| [skill-hk-stock-dossier](https://github.com/quantskills/skill-hk-stock-dossier) | 生成结构化港股尽职调查研报，输出为中文 Markdown 研报。 | — |
| [skill-b7-lhb-monitor](https://github.com/quantskills/skill-b7-lhb-monitor) |  | — |
| [skill-xingtai-catcher](https://github.com/quantskills/skill-xingtai-catcher) | PatternCatcher MCP skill for similar K-line stock and futures search | — |

<a id="cat-04"></a>
## 04 Risk Monitoring & Alerts

| Project | Description | Screenshot |
|---|---|---|
| [skill-hk-us-insider-radar](https://github.com/quantskills/skill-hk-us-insider-radar) | An HK/US insider-trading radar that reads get_stock_insider_trade (HK) and get_stock_insider_transaction (US), separates open-market buys from sales and option/gift dispositions, weights by insider role and is_main_role, nets shares and value over a window, flags cluster buying/selling and holding changes, and ranks names by net insider direction. | — |
| [skill-event-risk-alert](https://github.com/quantskills/skill-event-risk-alert) | A-share event-risk alert skill for watchlists, holdings, unlocks, pledges, reductions, ST changes, forecasts, audit opinions, and traceable reports. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-event-risk-alert.png"><img src="assets/skill-event-risk-alert.png" width="220"></a> |
| [skill-earnings-season-tracker](https://github.com/quantskills/skill-earnings-season-tracker) | Whole-market A-share earnings-season scanner covering forecast-type distribution, beat/miss leaders, industry earnings prosperity, and audit-opinion watchlists. | — |
| [skill-block-trade-radar](https://github.com/quantskills/skill-block-trade-radar) | A-share block-trade radar that joins each block trade to the same-day close to compute discount/premium, reads institutional (机构专用) buy/sell direction, flags repeated discounted takeovers and same-branch wash-like prints, and ranks names by amount and premium/discount, for the whole market or a single name. | — |

<a id="cat-05"></a>
## 05 Backtesting & Trading

| Project | Description | Screenshot |
|---|---|---|
| [skill-dalio-all-weather](https://github.com/quantskills/skill-dalio-all-weather) | Build and audit reproducible, research-only A-share All Weather allocations with PandaData, growth-inflation regimes, inverse-volatility risk budgets, quarterly backtests, and risk-contribution diagnostics. | — |
| [skill-simons-pairs-trading](https://github.com/quantskills/skill-simons-pairs-trading) | Screen and audit reproducible, research-only A-share pairs with adjusted PandaData prices, same-industry Engle-Granger tests, Benjamini-Hochberg FDR, formation-only clustering, rolling backtests, conservative gates, and... | — |
| [skill-factor-ranking-sage](https://github.com/quantskills/skill-factor-ranking-sage) | Rank and select quantitative model factors from local factor and label CSV files with one of two self-contained methods: deterministic regression mRMR using F-statistic relevance and Pearson redundancy, or fixed-model... | — |
| [skill-model-hpo-evidence-driven](https://github.com/quantskills/skill-model-hpo-evidence-driven) | Run evidence-driven or deterministic grid hyperparameter search for quantitative multi-factor models. Use when an agent needs legacy-compatible RankIC-IR LGBM/MLP results, or explicitly opts into robust block RankIC,... | — |
| [skill-x-trader-builder](https://github.com/quantskills/skill-x-trader-builder) | Skill-builder workflow for turning public X/Twitter data and user materials into trader-specific research-model skills. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-x-trader-builder.png"><img src="assets/skill-x-trader-builder.png" width="220"></a> |
| [skill-ssquant-trader-generator](https://github.com/quantskills/skill-ssquant-trader-generator) | Trader-generator skill that turns natural-language trading ideas into deployable AI Trader rules, code, and operating plans. | — |
| [skill-ssquant-ai-trader](https://github.com/quantskills/skill-ssquant-ai-trader) | SSQuant AI Trader skill for converting natural-language trading descriptions into automated or semi-automated strategy workflows. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-ssquant-ai-trader.png"><img src="assets/skill-ssquant-ai-trader.png" width="220"></a> |
| [skill-risk-model](https://github.com/quantskills/skill-risk-model) | Build a Barra-style structural multi-factor risk model and attribute portfolio risk. Use when a user wants a covariance matrix for optimisation, asks how risky a portfolio is, where its risk comes from (which factors /... | — |
| [skill-portfolio-optimize](https://github.com/quantskills/skill-portfolio-optimize) | Turn an alpha signal into optimal portfolio weights under real constraints. Use when a user has factor scores / expected returns and wants portfolio weights, or asks about mean-variance / risk-parity / minimum-variance... | — |
| [skill-pandaai-workflow-generator](https://github.com/quantskills/skill-pandaai-workflow-generator) | Generate ready-to-import PandaAI workflow JSON files containing Python strategy/factor code and complete graph links based on user's natural language trading ideas. | — |
| [skill-pandaai-workflow-audit](https://github.com/quantskills/skill-pandaai-workflow-audit) | Review PandaAI workflow files like code review by checking graph structure, strategy and factor code, data timing, research flexibility, backtest assumptions, and validation evidence, with severity-ranked defects and actionable fixes. | — |
| [skill-jq-to-panda-converter](https://github.com/quantskills/skill-jq-to-panda-converter) | Batch convert JoinQuant platform strategies to PandaAI-compatible code. Understands strategy intent rather than line-by-line translation, supports single file and batch directory conversion, produces runnable backtest configs with a summary report. | — |
| [skill-global-macro-trend-strategy](https://github.com/quantskills/skill-global-macro-trend-strategy) | Turn an overseas commodity/macro/FX signal into a framework-neutral, backtestable research strategy. | — |
| [skill-backtest](https://github.com/quantskills/skill-backtest) | Standard cross-sectional long-only backtest protocol with T+1 execution, fees, limit filters, NAV curves, IC, drawdown, and diagnostic charts. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-backtest.png"><img src="assets/skill-backtest.png" width="220"></a> |
| [skill-backtest-overfit](https://github.com/quantskills/skill-backtest-overfit) | Detect backtest overfitting and selection bias from multiple testing. Use when a user has a backtest / factor result and asks whether the Sharpe is real, whether a strategy is overfit, or wants to validate results... | — |
| [skill-qbti](https://github.com/quantskills/skill-qbti) | QBTI (Quant Behavior Type Indicator): a personality-style quiz that translates a retail user's investing preferences into factor directions and strategy parameters via a fixed rule table, then hands off to the QuantSkills backtest pipeline. | — |
| [skill-b12-intraday-position-manager](https://github.com/quantskills/skill-b12-intraday-position-manager) | 当需要对日内多品种持仓做动态仓位管理时，使用此 skill。支持 A股/A股ETF/股指期货/商品期货/港股+ETF；区分 T+1/T+0、昨仓/今仓、保证金/现金，输出标准 8 字段调仓指令。 | — |
| [skill-factor-backtest](https://github.com/quantskills/skill-factor-backtest) | — | — |

<a id="cat-06"></a>
## 06 Research Models & Replication

| Project | Description | Screenshot |
|---|---|---|
| [skill-time-series-analysis](https://github.com/quantskills/skill-time-series-analysis) | Conclusion-first time-series diagnostics for original series, Log diff, distributions, stationarity, cointegration, and half-life. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-time-series-analysis.png"><img src="assets/skill-time-series-analysis.png" width="220"></a> |
| [skill-serenity-research-model](https://github.com/quantskills/skill-serenity-research-model) | Research-model skill for reconstructing Serenity-style AI, semiconductor, and supply-chain theses from public posts and datasets. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-serenity-research-model.png"><img src="assets/skill-serenity-research-model.png" width="220"></a> |
| [skill-report-replication](https://github.com/quantskills/skill-report-replication) | Quant report replication skill that turns papers or reports into Chinese translations, factor formulas, Pandadata-backed validation reports, and strategy assets. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-report-replication.png"><img src="assets/skill-report-replication.png" width="220"></a> |
| [skill-quant-research-replication](https://github.com/quantskills/skill-quant-research-replication) | Quant research replication skill for source discovery, formula reconstruction, Chinese summaries, validation, and deliverables. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-research-replication.png"><img src="assets/skill-quant-research-replication.png" width="220"></a> |
| [skill-paper-replication](https://github.com/quantskills/skill-paper-replication) | Framework-neutral quantitative paper replication skill for research scripts, backtests, charts, and auditable outputs. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-paper-replication.png"><img src="assets/skill-paper-replication.png" width="220"></a> |
| [skill-gaetano-crux-capital-research-model](https://github.com/quantskills/skill-gaetano-crux-capital-research-model) | Research-model skill for public-material analysis of photonics, optical networking, Physical AI, and AI infrastructure themes. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-gaetano-crux-capital-research-model.png"><img src="assets/skill-gaetano-crux-capital-research-model.png" width="220"></a> |
| [skill-investment-decision](https://github.com/quantskills/skill-investment-decision) | Given a company name or ticker, generate a long-term (6-18 month) BUY/NEUTRAL/SELL investment decision report with confidence, charts, and sources in .docx format — self-contained, uses public data. | — |

<a id="cat-07"></a>
## 07 Prediction Markets

> 🔒 Reserved category — no repos yet.

<a id="cat-08"></a>
## 08 Search & Web Scraping

> 🔒 Reserved category — no repos yet.

<a id="cat-09"></a>
## 09 Featured Agents

| Project | Description | Screenshot |
|---|---|---|
| [agent-ssquant](https://github.com/quantskills/agent-ssquant) | SSQuant Agent workflow for futures strategies, data services, CTP gates, and Chinese reports. | — |
| [agent-quantspace](https://github.com/quantskills/agent-quantspace) | AI-native quantitative research framework | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-quantspace.png"><img src="assets/agent-quantspace.png" width="220"></a> |
| [agent-market-regime-monitor](https://github.com/quantskills/agent-market-regime-monitor) | Monitor market regime from Pandadata index, breadth, volatility, and funding evidence. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-market-regime-monitor.png"><img src="assets/agent-market-regime-monitor.png" width="220"></a> |
| [agent-for-liangshuyuan-tasks](https://github.com/quantskills/agent-for-liangshuyuan-tasks) | 量枢学院多 Agent 协作框架——基于 Claude Code 的量化交易工具开发平台，将任务需求自动分析、路由、开发、测试、发布全流程自动化。内置 6 个专业 Agent，支持 BUILD 工具与 Alpha 因子的 Skill 架构开发。 | — |
| [agent-derivatives-skew-sentiment-monitor](https://github.com/quantskills/agent-derivatives-skew-sentiment-monitor) | Monitor derivatives sentiment from option implied volatility and underlying historical volatility. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-derivatives-skew-sentiment-monitor.png"><img src="assets/agent-derivatives-skew-sentiment-monitor.png" width="220"></a> |
| [agent-crowding-risk-monitor](https://github.com/quantskills/agent-crowding-risk-monitor) | Monitor crowded-trade risk from Pandadata price, turnover, margin, and LHB heat evidence. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-crowding-risk-monitor.png"><img src="assets/agent-crowding-risk-monitor.png" width="220"></a> |
| [agent-correlation-break-research](https://github.com/quantskills/agent-correlation-break-research) | Detect correlation breaks, style shifts, and diversification stress from Pandadata return evidence. | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-correlation-break-research.png"><img src="assets/agent-correlation-break-research.png" width="220"></a> |

---
<a id="uncat"></a>
## 📦 Repos not in catalog
Repos not in the Feishu catalog (raw factors, BUILD skills, and other non skill-/agent- repos).

| Project | Description | Screenshot |
|---|---|---|
| [skill-factor-idea-generation](https://github.com/quantskills/skill-factor-idea-generation) | Generate initial stock alpha ideas with economic rationale and concrete factor shapes, defaulting to daily OHLCV when no fields are specified. | — |
| [skill-alpha-ncav-graham](https://github.com/quantskills/skill-alpha-ncav-graham) | Graham NCAV 净流动资产折价因子技能。A股深度价值筛选，排除金融股，计算 NCAV 折价并生成 buy/sell/hold 信号。 | — |
| [skill-stock-memory-analyzer-usa](https://github.com/quantskills/skill-stock-memory-analyzer-usa) | 对 MU、SNDK、WDC、STX 等美股存储公司开展基于 panda_data 的可追溯研究分析，结合行情、财务、估值、DRAM/NAND/HBM 供需、库存、CapEx、技术节点和同业对标，生成交互式 HTML 研究报告。当用户提到存储芯片、内存、NAND、DRAM、HBM、存储周期，或要求研究这些美股公司时使用。首次响应列出可分析标的并要求用户明确选择一只； | — |
| [skill-numerical-leak-check](https://github.com/quantskills/skill-numerical-leak-check) | 当 agent 需要检查时间序列计算、量化因子、特征工程、标签生成、回测信号或研究管线是否存在未来信息泄露时使用。Use this skill for numerical causality checks, lookahead/future-leakage detection, prefix replay, future mutation, batch checking many factors or cases, and... | — |
| [skill-market-regime-analysis](https://github.com/quantskills/skill-market-regime-analysis) | Chinese A-share market regime analysis toolkit — classify market states (bull/bear/sideways/high-vol/low-vol) using HMMs or threshold rules on index data, macro indicators, and futures term structure; evaluate conditional factor performance; generate regime-aware risk forecasts; and build regime-switching strategies. | — |
| [skill-fin-news](https://github.com/quantskills/skill-fin-news) | 实时财经头条生成器。采集东方财富财经要闻 + Pandadata 市场数据，由 AI 精选 5 条并撰写深度文章（含事实描述、数据解读、大V点评）。 | — |
| [skill-munger-mental-model](https://github.com/quantskills/skill-munger-mental-model) | Munger 5-维模型与一票否决的多角度cross-validation分析工具，面向 A 股。支持单票和行业批筛。 | — |
| [skill-news-sentiment-analyst](https://github.com/quantskills/skill-news-sentiment-analyst) | A-share financial news sentiment analyst - Claude Code Skill | — |
| [skill-alpha-f1-position-change](https://github.com/quantskills/skill-alpha-f1-position-change) | 当需要开发、计算、验证期货前20席位持仓突变因子时，使用此 skill。支持多空持仓优势分析、主力调仓方向判断。 | — |
| [skill-b11-auto-stop-loss-take-profit](https://github.com/quantskills/skill-b11-auto-stop-loss-take-profit) | 当需要对 A 股和期货持仓做自动止盈止损与仓位管理时，使用此 skill。支持次日高开止盈、次日低开止损、持仓满2交易日强平、单票名义仓位上限控制。交易日历唯一来源 = panda_data.get_trade_cal（硬依赖）。 | — |
| [skill-b6-limitup-pool](https://github.com/quantskills/skill-b6-limitup-pool) |  | — |

<a id="infra"></a>
## 🧱 Infra & Templates
Governance, scaffolding and templates (incl. the quantskills nav repo).

| Project | Description | Screenshot |
|---|---|---|
| [quantskills](https://github.com/quantskills/quantskills) | QuantSkills组织的全景导航 ——Panoramic navigator for the QuantSkills organization | — |
| [registry](https://github.com/quantskills/registry) | Public display registry for QUANTSKILLS skill-* and agent-* assets. | — |
| [skill-template](https://github.com/quantskills/skill-template) | Template repository for QUANTSKILLS skill-* projects. | — |
| [.github](https://github.com/quantskills/.github) | — | — |
| [join](https://github.com/quantskills/join) | — | — |
| [agent-template](https://github.com/quantskills/agent-template) | Template repository for QUANTSKILLS agent-* projects. | — |

---
## 🐼 PandaAI Community
<div align="center">
  <img src="assets/pandaai-community-qr.jpg" alt="PandaAI community QR code" width="220">
  <br>
  <sub>Scan to join the PandaAI community for QUANTSKILLS skills, agent workflows, and quant research.</sub>
</div>
