# 🧭 QuantSkills

[简体中文](README.md) | **English** · [Browse the website](https://www.quantskills.ai/)

> A community catalog for quantitative Skills and Agents that are discoverable, installable, verifiable, and shareable.

QuantSkills is an open quantitative community initiative started by [PandaAI](https://www.pandaaiquant.com/); it is not an official PandaAI certification or investment advice. It gathers reusable research, data, validation, and automation capabilities so people and AI Agents can discover, install, review, and compose them more clearly.

## Community vision

Quantitative experience should be described, reproduced, and discussed openly: contributors publish inspectable capability packages and boundaries, while users verify claims from the stated data sources and risk limits. A catalog snapshot lists public metadata only; it is not a quality endorsement, return promise, or production-readiness guarantee.

## Join and contribute

- Read the [community rules](https://github.com/quantskills/join/blob/main/COMMUNITY_RULES.md) and start at [join](https://github.com/quantskills/join).
- Create a Skill with [skill-template](https://github.com/quantskills/skill-template), or an Agent with [agent-template](https://github.com/quantskills/agent-template). State data, assumptions, parameters, limitations, and risk boundaries.
- Submit display metadata through [registry](https://github.com/quantskills/registry), then share improvements through repository issues and pull requests.

## Key entry points

[All organization repositories](https://github.com/orgs/quantskills/repositories) · [navigation repository](https://github.com/quantskills/quantskills) · [registry](https://github.com/quantskills/registry) · [templates](https://github.com/quantskills/skill-template) · [join the community](https://github.com/quantskills/join)

## Catalog overview

A periodic snapshot of the community's public assets; browse the interactive catalog at [www.quantskills.ai](https://www.quantskills.ai/).

<!-- CATALOG:START -->
<!-- catalog-snapshot: sha256:117387f24ed230521243f50541e0d1f8c10cd949848b4ba095c55222ba833c00 -->
<table align="center"><tr>
<td align="center"><strong>156</strong><br><sub>Assets</sub></td>
<td align="center"><strong>10</strong><br><sub>Categories</sub></td>
<td align="center"><strong>1</strong><br><sub>Published endpoints</sub></td>
<td align="center"><strong>2026-08-29</strong><br><sub>Snapshot updated</sub></td>
</tr></table>

## Category summary
- [01 Data APIs & Warehouse](#cat-01) — 7 assets（Data Sources & Connectors / Warehouse & Cache / Market Data Governance / PIT & Data Quality）
- [02 Factor R&D Toolbox](#cat-02) — 31 assets（Factor Ideation / Factor Generation / Orthogonalization & Blending / Factor Selection / Factor Evaluation / Factor Pool & Online Serving）
- [03 Market & Instrument Analysis](#cat-03) — 32 assets（A-Share Equities / HK & US Equities / ETFs, Funds & Indices / Futures & Commodities / Options & Convertible Bonds / Macro & Cross-Asset）
- [04 Risk Monitoring & Alerts](#cat-04) — 19 assets（Market Regime / Flows & Crowding / Liquidity Risk / Corporate Events / Regulatory Compliance / Portfolio Stress Testing / Automated Alerts）
- [05 Backtesting & Trading](#cat-05) — 18 assets（Strategies & Signals / Portfolio Construction / Backtesting Engine / Performance Attribution / Transaction Costs / Market Microstructure / Positions & Orders / Paper & Live Execution）
- [06 Research Models & Replication](#cat-06) — 18 assets（Paper Replication / Strategy Replication / Statistical & ML Models / Investor Research Models / Experiment Registry & Reproducible Research）
- [07 Research Validation & Quality](#cat-07) — 11 assets（Lookahead & Data Leakage / Survivorship Bias / Walk-Forward & OOS / Signal Stability / Forecast Calibration / Numerical & Model Audit / Workflow Audit）
- [08 Information Search & Knowledge Analysis](#cat-08) — 6 assets（News & Disclosures / Institutional Research / Daily Review）
- [09 Quant Agents & Automation](#cat-09) — 8 assets（Research Agent / Monitoring & Risk Agent / Trading Execution Agent / Workflow Orchestration Agent）
- [10 Infrastructure & Templates](#cat-10) — 6 assets（Skill Template / Agent Template / Build & Release Tooling）

## Workflow map
- **数据基础 / Data foundation** (2 stages): data-ingestion, data-quality
- **研究信号 / Research signal** (4 stages): feature-engineering, factor-generation, factor-screening, modeling
- **组合验证 / Portfolio validation** (4 stages): portfolio-construction, backtesting, evaluation, risk
- **监控交易 / Monitoring & trading** (3 stages): monitoring, execution, reporting
- **编排 / Orchestration** (1 stages): orchestration

<a id="cat-01"></a>
<details>
<summary><strong>01 Data APIs & Warehouse</strong> — 7 assets, 1 with screenshots</summary>

### Data Sources & Connectors（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-pandadata-api](https://github.com/quantskills/skill-pandadata-api) | Provides Pandadata market and research API calls and contract lookup across agent runtimes. | data-ingestion | — | — | pending maintainer review / no public endpoint |  |
| [skill-us-sec-edgar-harvester](https://github.com/quantskills/skill-us-sec-edgar-harvester) | Harvests and structures public US SEC EDGAR filings. | data-ingestion | — | — | pending maintainer review / no public endpoint |  |

### Warehouse & Cache（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-pandadata-warehouse](https://github.com/quantskills/skill-pandadata-warehouse) | Manages local Pandadata DuckDB and Parquet quantitative data warehouses, caches, and queries. | data-ingestion | — | market-bar | published | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-pandadata-warehouse.png"><img src="assets/skill-pandadata-warehouse.png" width="260"></a> |

### Market Data Governance（3）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-corporate-action-adjustment-auditor](https://github.com/quantskills/skill-corporate-action-adjustment-auditor) | Audits split and cash-dividend consistency between raw and adjusted equity prices before research. | data-quality | — | — | pending maintainer review / no public endpoint |  |
| [skill-futures-roll-auditor](https://github.com/quantskills/skill-futures-roll-auditor) | Audits continuous-contract selection, roll gaps, and adjustment factors and produces a roll ledger. | data-quality | — | — | pending maintainer review / no public endpoint |  |
| [skill-intraday-data-quality-auditor](https://github.com/quantskills/skill-intraday-data-quality-auditor) | Audits normalized intraday OHLCV data for timestamp, gap, price, volume, and trading-date defects. | data-quality | — | — | pending maintainer review / no public endpoint |  |

### PIT & Data Quality（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-a-share-pit-fundamental-vintage-builder](https://github.com/quantskills/skill-a-share-pit-fundamental-vintage-builder) | Builds and audits point-in-time A-share financial data without later restatements. | data-quality | — | — | pending maintainer review / no public endpoint |  |

</details>

<a id="cat-02"></a>
<details>
<summary><strong>02 Factor R&D Toolbox</strong> — 31 assets, 8 with screenshots</summary>

### Factor Ideation（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-factor-idea-generation](https://github.com/quantskills/skill-factor-idea-generation) | Generates candidate factor ideas with economic rationale and risk notes from the default data scope. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-factormad-debate-factor-mining](https://github.com/quantskills/skill-factormad-debate-factor-mining) | Uses a FactorMAD-style multi-agent debate framework for interpretable stock-alpha mining. | factor-generation | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factormad-debate-factor-mining.png"><img src="assets/skill-factormad-debate-factor-mining.png" width="260"></a> |

### Factor Generation（16）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-a1-lhb-tracking](https://github.com/quantskills/skill-a1-lhb-tracking) | Generates an event-ranking factor from Dragon-Tiger seat history, win rate, payoff, and next-session premium. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-alpha-a06-hotmoney-reversal](https://github.com/quantskills/skill-alpha-a06-hotmoney-reversal) | Computes a hot-money seat cooling and reversal factor from Dragon-Tiger and market data with validation artifacts. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-alpha-f1-position-change](https://github.com/quantskills/skill-alpha-f1-position-change) | Computes a futures top-20-seat position-change factor and signal from net-position data. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-alpha-f5-member-position-concentration](https://github.com/quantskills/skill-alpha-f5-member-position-concentration) | Computes member-position concentration signals from institutional, hot-money, and northbound net positions. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-alpha-f6-family-position-reverse](https://github.com/quantskills/skill-alpha-f6-family-position-reverse) | Computes a futures family-position reversal signal from seat-position relationships. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-alpha-f8-family-main-divergence](https://github.com/quantskills/skill-alpha-f8-family-main-divergence) | Computes a futures family-versus-main-seat position-divergence factor signal. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-alpha-ncav-graham](https://github.com/quantskills/skill-alpha-ncav-graham) | Computes a Graham NCAV discount factor for A-share deep-value screening and buy-sell-hold signals. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-doc-to-alphas](https://github.com/quantskills/skill-doc-to-alphas) | Defines OHLCV alpha-expression formats and validation rules for document-derived factors. | factor-generation | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-doc-to-alphas.png"><img src="assets/skill-doc-to-alphas.png" width="260"></a> |
| [skill-factor-alpha191-alpha101](https://github.com/quantskills/skill-factor-alpha191-alpha101) | Computes Alpha101 and Alpha191 factors from long-form OHLCV CSV and outputs wide CSV. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-factor-mine](https://github.com/quantskills/skill-factor-mine) | Provides a factor-mining SOP from hypothesis and experiment notes through scoring and accept/rollback. | factor-generation | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-mine.png"><img src="assets/skill-factor-mine.png" width="260"></a> |
| [skill-factor-mining-pandaai](https://github.com/quantskills/skill-factor-mining-pandaai) | Mines factors with PandaAI data and feedback or extracts them from public documents. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-factor-optimize](https://github.com/quantskills/skill-factor-optimize) | Runs parameter sweeps, ablations, and version refinements for existing equity or futures factors. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-fundamental-factor-analysis](https://github.com/quantskills/skill-fundamental-factor-analysis) | Computes and validates A-share valuation, quality, and growth factors from quarterly financial reports. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-overseas-equity-factor-miner](https://github.com/quantskills/skill-overseas-equity-factor-miner) | Discovers and validates HK and US cross-sectional alpha factors by IC, decay, and turnover. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-quant-factor-directional-alpha](https://github.com/quantskills/skill-quant-factor-directional-alpha) | Provides an OHLCV directional-factor library for trend, breakout, and reversal research. | factor-generation | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-factor-directional-alpha.png"><img src="assets/skill-quant-factor-directional-alpha.png" width="260"></a> |
| [skill-quant-factor-risk-pattern-alpha](https://github.com/quantskills/skill-quant-factor-risk-pattern-alpha) | Provides an OHLCV factor library for volatility, chart-pattern, and drawdown-pressure research. | factor-generation | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-factor-risk-pattern-alpha.png"><img src="assets/skill-quant-factor-risk-pattern-alpha.png" width="260"></a> |

### Orthogonalization & Blending（3）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-factor-blend](https://github.com/quantskills/skill-factor-blend) | De-redundantly weights and combines multiple factor signals into a composite signal. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-factor-orthogonalize](https://github.com/quantskills/skill-factor-orthogonalize) | Orthogonalizes cross-sectional factors with daily OLS and outputs residual factors and exposure diagnostics. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-ml-factor-ensemble](https://github.com/quantskills/skill-ml-factor-ensemble) | Ensembles machine-learning models into factor meta-signals with leakage-aware rolling validation. | modeling | — | — | pending maintainer review / no public endpoint |  |

### Factor Selection（3）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-factor-grouped-wrapper](https://github.com/quantskills/skill-factor-grouped-wrapper) | Wraps grouped factor-processing workflows and their pipeline diagrams. | factor-screening | — | — | pending maintainer review / no public endpoint |  |
| [skill-factor-ranking-sage](https://github.com/quantskills/skill-factor-ranking-sage) | Runs mRMR or Marginal-SAGE on local factor and label data to produce Top-K rankings. | factor-screening | — | — | pending maintainer review / no public endpoint |  |
| [skill-residual-guided-factor-selection](https://github.com/quantskills/skill-residual-guided-factor-selection) | Selects factor combinations using residual IC and out-of-sample evaluation. | factor-screening | — | — | pending maintainer review / no public endpoint |  |

### Factor Evaluation（5）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-build-b10-factor-evaluation](https://github.com/quantskills/skill-build-b10-factor-evaluation) | Evaluates quantitative factors with IC, IR, stratified backtests, monotonicity, turnover, and decay diagnostics. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-factor-evaluate](https://github.com/quantskills/skill-factor-evaluate) | Scores a cross-sectional factor using IC, Sharpe, drawdown, monotonicity, and turnover. | evaluation | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-evaluate.png"><img src="assets/skill-factor-evaluate.png" width="260"></a> |
| [skill-factor-mason](https://github.com/quantskills/skill-factor-mason) | Checks timing, IC/IR, costs, and neutralization quality in single-factor research. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-factor-review](https://github.com/quantskills/skill-factor-review) | Scans a factor library and experiment logs for inventory, structural analysis, and research recommendations. | evaluation | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-review.png"><img src="assets/skill-factor-review.png" width="260"></a> |
| [skill-ic-analysis](https://github.com/quantskills/skill-ic-analysis) | Evaluates quantitative factors through IC, grouped performance, and predictive effectiveness. | evaluation | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-ic-analysis.png"><img src="assets/skill-ic-analysis.png" width="260"></a> |

### Factor Pool & Online Serving（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-factor-pool-evolution](https://github.com/quantskills/skill-factor-pool-evolution) | Generates mutation, crossover, and recommendations from evaluated seed factor pools. | factor-screening | — | — | pending maintainer review / no public endpoint |  |
| [skill-pandaai-factor-online](https://github.com/quantskills/skill-pandaai-factor-online) | Supports PandaAI factor onboarding, online mining, batch backtests, and cost review. | factor-generation | — | — | pending maintainer review / no public endpoint |  |

</details>

<a id="cat-03"></a>
<details>
<summary><strong>03 Market & Instrument Analysis</strong> — 32 assets, 4 with screenshots</summary>

### A-Share Equities（7）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-a-share-stock-dossier](https://github.com/quantskills/skill-a-share-stock-dossier) | Uses Pandadata to produce a sourced A-share dossier covering fundamentals, corporate actions, holders, event risks, and market funds. | reporting | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-a-share-stock-dossier.png"><img src="assets/skill-a-share-stock-dossier.png" width="260"></a> |
| [skill-buffett-moat-screener](https://github.com/quantskills/skill-buffett-moat-screener) | Screens A-share and US companies using moat, valuation, and point-in-time data for research records. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-concept-rotation-monitor](https://github.com/quantskills/skill-concept-rotation-monitor) | Monitors A-share concept and theme momentum, breadth, and rotation for research reports. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-dividend-yield-scan](https://github.com/quantskills/skill-dividend-yield-scan) | Calculates A-share rolling dividend yield, dividend continuity, and ex-dividend calendars. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-holder-structure-scan](https://github.com/quantskills/skill-holder-structure-scan) | Tracks A-share holder counts, top-holder concentration, and free float to assess ownership concentration. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-post-market-screener](https://github.com/quantskills/skill-post-market-screener) | Screens A-share stocks after market close using technical patterns and capital-flow evidence. | factor-screening | — | — | pending maintainer review / no public endpoint |  |
| [skill-stock-screener](https://github.com/quantskills/skill-stock-screener) | Screens A-share stocks from natural-language criteria and Pandadata evidence. | factor-screening | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-stock-screener.png"><img src="assets/skill-stock-screener.png" width="260"></a> |

### HK & US Equities（9）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-cross-listing-parity](https://github.com/quantskills/skill-cross-listing-parity) | Monitors A/H and China ADR cross-listing parity using prices, FX, and share ratios. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-hk-stock-dossier](https://github.com/quantskills/skill-hk-stock-dossier) | Generates nine-dimension Hong Kong equity due-diligence reports from Pandadata interfaces. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-hk-us-consensus-radar](https://github.com/quantskills/skill-hk-us-consensus-radar) | Summarizes HK/US sell-side ratings, target prices, growth expectations, and changes. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-hk-us-consensus-revision-radar](https://github.com/quantskills/skill-hk-us-consensus-revision-radar) | Organizes cross-period HK/US target-price and rating revisions into a research report. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-hk-us-dividend-events](https://github.com/quantskills/skill-hk-us-dividend-events) | Generates HK and US equity dividend-event reports using Pandadata overseas-market interfaces. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-hk-us-insider-radar](https://github.com/quantskills/skill-hk-us-insider-radar) | Scans HK and US insider transactions, net direction, trading clusters, and holding changes. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-hk-us-quote-scan](https://github.com/quantskills/skill-hk-us-quote-scan) | Builds HK and US equity snapshots covering quotes, liquidity, valuation, and industry-relative position. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-stock-memory-analyzer-usa](https://github.com/quantskills/skill-stock-memory-analyzer-usa) | Performs multidimensional research analysis of US memory-chip stocks. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-us-sector-rotation](https://github.com/quantskills/skill-us-sector-rotation) | Generates factual reports on US sector performance, valuation, and rotation. | reporting | — | — | pending maintainer review / no public endpoint |  |

### ETFs, Funds & Indices（4）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-etf-arbitrage-monitor](https://github.com/quantskills/skill-etf-arbitrage-monitor) | Monitors A-share ETF primary/secondary-market premiums and redemption-basket feasibility. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-etf-fund-evaluator](https://github.com/quantskills/skill-etf-fund-evaluator) | Evaluates domestic non-QDII passive equity-index ETFs and comparable-index peers. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-index-rebalance-event-study](https://github.com/quantskills/skill-index-rebalance-event-study) | Runs reproducible event studies for index additions, deletions, and weight changes. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-index-valuation-rotation](https://github.com/quantskills/skill-index-valuation-rotation) | Analyzes A-share index valuation percentiles, relative industry valuation, and rotation signals. | reporting | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-index-valuation-rotation.png"><img src="assets/skill-index-valuation-rotation.png" width="260"></a> |

### Futures & Commodities（6）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-ag-futures-seasonality](https://github.com/quantskills/skill-ag-futures-seasonality) | Computes monthly agricultural-futures seasonality from daily prices and overlays crop-calendar context. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-commodity-carry-cta](https://github.com/quantskills/skill-commodity-carry-cta) | Builds commodity-futures carry, time-series momentum, cross-sectional momentum, basis, and inventory factors for rotation backtests. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-futures-deepview-analyst](https://github.com/quantskills/skill-futures-deepview-analyst) | Turns futures DeepView natural-language requests into data-call plans and fact/inference-separated reports. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-global-commodity-term-structure](https://github.com/quantskills/skill-global-commodity-term-structure) | Uses public data to study global commodity-futures term structure, roll yield, and spreads. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-oil-brief](https://github.com/quantskills/skill-oil-brief) | Combines futures, EIA, OPEC, and market data into Chinese crude-oil briefs. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-xingtai-catcher](https://github.com/quantskills/skill-xingtai-catcher) | Retrieves similar A-share and futures K-line patterns from text or image descriptions. | factor-screening | — | — | pending maintainer review / no public endpoint |  |

### Options & Convertible Bonds（3）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-cb-analyzer](https://github.com/quantskills/skill-cb-analyzer) | Analyzes A-share convertible bonds with double-low screening, terms, equity linkage, Greeks, and volatility. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-option-strategy-builder](https://github.com/quantskills/skill-option-strategy-builder) | Builds option strategies with legs, payoff charts, breakevens, Greeks, and margin analysis. | portfolio-construction | — | — | pending maintainer review / no public endpoint |  |
| [skill-options-vol-analyst](https://github.com/quantskills/skill-options-vol-analyst) | Analyzes option chains, implied and historical volatility, term structure, skew, and volatility premium. | modeling | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-options-vol-analyst.png"><img src="assets/skill-options-vol-analyst.png" width="260"></a> |

### Macro & Cross-Asset（3）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-global-macro-rates-fx-lab](https://github.com/quantskills/skill-global-macro-rates-fx-lab) | Produces sourced global macro briefs from public rates, central-bank, and FX data. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-macro-altdata-nowcast](https://github.com/quantskills/skill-macro-altdata-nowcast) | Uses high-frequency alternative macro data for industry nowcasts and trend monitoring. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-macro-monitor](https://github.com/quantskills/skill-macro-monitor) | Monitors macro data, industry conditions, economic calendars, and recurring macro changes. | monitoring | — | — | pending maintainer review / no public endpoint |  |

</details>

<a id="cat-04"></a>
<details>
<summary><strong>04 Risk Monitoring & Alerts</strong> — 19 assets, 1 with screenshots</summary>

### Market Regime（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-market-regime-analysis](https://github.com/quantskills/skill-market-regime-analysis) | Classifies A-share market regimes using index, macro, futures term-structure, and volatility features. | modeling | — | — | pending maintainer review / no public endpoint |  |

### Flows & Crowding（5）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-b7-lhb-monitor](https://github.com/quantskills/skill-b7-lhb-monitor) | Monitors Dragon-Tiger entries and seat labels to produce next-session watchlists and searchable views. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-block-trade-radar](https://github.com/quantskills/skill-block-trade-radar) | Builds an A-share block-trade radar from discount or premium, volume, and price evidence. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-capital-flow-crowding-monitor](https://github.com/quantskills/skill-capital-flow-crowding-monitor) | Aggregates margin, northbound-holding, and block-trade data into consensus, divergence, and crowding-percentile signals. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-northbound-margin-monitor](https://github.com/quantskills/skill-northbound-margin-monitor) | Monitors northbound flows, margin trading, and futures conditions with multiple risk signals. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-smart-money-profiler](https://github.com/quantskills/skill-smart-money-profiler) | Analyzes LHB seats, northbound activity, and capital-flow consensus or divergence. | monitoring | — | — | pending maintainer review / no public endpoint |  |

### Liquidity Risk（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-portfolio-liquidity-stress-test](https://github.com/quantskills/skill-portfolio-liquidity-stress-test) | Estimates portfolio liquidation days, horizon cash, redemption shortfalls, and impact costs under volume stress. | risk | — | — | pending maintainer review / no public endpoint |  |

### Corporate Events（4）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-buyback-monitor](https://github.com/quantskills/skill-buyback-monitor) | Monitors A-share buyback lifecycles, purposes, price ranges, and intensity for research. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-event-risk-alert](https://github.com/quantskills/skill-event-risk-alert) | Scans watchlists or holdings for unlock, pledge, ownership-change, and earnings-event risks. | monitoring | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-event-risk-alert.png"><img src="assets/skill-event-risk-alert.png" width="260"></a> |
| [skill-klarman-special-situations](https://github.com/quantskills/skill-klarman-special-situations) | Researches private placements, restructurings, spin-offs, and distressed turnarounds as special situations. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-refinancing-monitor](https://github.com/quantskills/skill-refinancing-monitor) | Tracks A-share refinancing lifecycles, pricing, and dilution risk. | monitoring | — | — | pending maintainer review / no public endpoint |  |

### Regulatory Compliance（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-audit-opinion-scanner](https://github.com/quantskills/skill-audit-opinion-scanner) | Assesses A-share financial health from audit opinions, statements, and industry benchmarks with risk checks. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-regulatory-risk-radar](https://github.com/quantskills/skill-regulatory-risk-radar) | Aggregates and grades A-share regulatory and compliance risk events. | monitoring | — | — | pending maintainer review / no public endpoint |  |

### Portfolio Stress Testing（4）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-portfolio-checkup](https://github.com/quantskills/skill-portfolio-checkup) | Aggregates concentration, benchmark deviation, valuation, quality, and risk exposures into a portfolio health report. | risk | — | — | pending maintainer review / no public endpoint |  |
| [skill-quant-portfolio-risk](https://github.com/quantskills/skill-quant-portfolio-risk) | Analyzes portfolio risk exposures, constraints, and stress scenarios. | risk | — | — | pending maintainer review / no public endpoint |  |
| [skill-risk-model](https://github.com/quantskills/skill-risk-model) | Builds a multifactor risk model and performs risk attribution. | risk | — | — | pending maintainer review / no public endpoint |  |
| [skill-rolling-beta-exposure](https://github.com/quantskills/skill-rolling-beta-exposure) | Estimates rolling beta exposure of assets or portfolios relative to a benchmark. | risk | — | — | pending maintainer review / no public endpoint |  |

### Automated Alerts（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-a-share-market-risk-radar](https://github.com/quantskills/skill-a-share-market-risk-radar) | Scans A-share macro, funding, valuation, trend, sector-rotation, and event evidence into risk levels. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-b6-limitup-pool](https://github.com/quantskills/skill-b6-limitup-pool) | Maintains a daily limit-up pool with board, break, reseal, theme, sentiment, and dashboard outputs. | monitoring | — | — | pending maintainer review / no public endpoint |  |

</details>

<a id="cat-05"></a>
<details>
<summary><strong>05 Backtesting & Trading</strong> — 18 assets, 2 with screenshots</summary>

### Strategies & Signals（4）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-global-macro-trend-strategy](https://github.com/quantskills/skill-global-macro-trend-strategy) | Turns global signals and public daily prices into backtestable research strategies, positions, and risk rules. | backtesting | — | — | pending maintainer review / no public endpoint |  |
| [skill-ma-crossover-signal](https://github.com/quantskills/skill-ma-crossover-signal) | Computes moving-average crossover signals and reports trend state, latest cross, MA gap, and price bias. | factor-generation | — | — | pending maintainer review / no public endpoint |  |
| [skill-oversold-rebound](https://github.com/quantskills/skill-oversold-rebound) | Identifies A-share oversold-rebound conditions and screens candidate stocks. | factor-screening | — | — | pending maintainer review / no public endpoint |  |
| [skill-qbti](https://github.com/quantskills/skill-qbti) | Translates a five-part user questionnaire into factor directions and strategy parameters. | portfolio-construction | — | — | pending maintainer review / no public endpoint |  |

### Portfolio Construction（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-dalio-all-weather](https://github.com/quantskills/skill-dalio-all-weather) | Provides an all-weather allocation and backtest workflow for A-share assets, bonds, gold, and commodities. | portfolio-construction | — | — | pending maintainer review / no public endpoint |  |
| [skill-portfolio-optimize](https://github.com/quantskills/skill-portfolio-optimize) | Turns alpha signals into optimized weights under weight, sector, exposure, and turnover constraints. | portfolio-construction | — | — | pending maintainer review / no public endpoint |  |

### Backtesting Engine（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-backtest](https://github.com/quantskills/skill-backtest) | Provides a cross-sectional long-only backtest protocol with T+1 execution, fees, limit filters, and diagnostics. | backtesting | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-backtest.png"><img src="assets/skill-backtest.png" width="260"></a> |
| [skill-factor-backtest](https://github.com/quantskills/skill-factor-backtest) | Runs long-only cross-sectional factor backtests on supplied factors and market data with diagnostics. | backtesting | — | — | pending maintainer review / no public endpoint |  |

### Performance Attribution（4）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-portfolio-attribution](https://github.com/quantskills/skill-portfolio-attribution) | Attributes active portfolio returns to industry allocation, stock selection, interaction, and factor contributions. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-portfolio-pnl-attribution](https://github.com/quantskills/skill-portfolio-pnl-attribution) | Attributes realized portfolio returns by security and sector while reconciling fees, benchmarks, and input quality. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-risk-return-metrics](https://github.com/quantskills/skill-risk-return-metrics) | Calculates risk-return metrics for portfolios or strategies. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-strategy-tearsheet-report](https://github.com/quantskills/skill-strategy-tearsheet-report) | Generates strategy-performance tearsheets with risk-adjusted metrics. | reporting | — | — | pending maintainer review / no public endpoint |  |

### Transaction Costs（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-transaction-cost-analysis](https://github.com/quantskills/skill-transaction-cost-analysis) | Decomposes fills against VWAP/TWAP into transaction-cost components. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-transaction-cost-calibration](https://github.com/quantskills/skill-transaction-cost-calibration) | Calibrates commission, spread, slippage, and market-impact assumptions from execution and market data. | evaluation | — | — | pending maintainer review / no public endpoint |  |

### Market Microstructure（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-quant-execution-microstructure](https://github.com/quantskills/skill-quant-execution-microstructure) | Converts approved trade targets into observable, cost-aware execution plans. | execution | — | — | pending maintainer review / no public endpoint |  |

### Positions & Orders（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-b11-auto-stop-loss-take-profit](https://github.com/quantskills/skill-b11-auto-stop-loss-take-profit) | Applies entry-date and open-price rules for take-profit, stop-loss, forced exits, and single-name position caps. | execution | — | — | pending maintainer review / no public endpoint |  |
| [skill-b12-intraday-position-manager](https://github.com/quantskills/skill-b12-intraday-position-manager) | Manages intraday multi-instrument positions using sellable and locked quantity, price, and cash inputs. | execution | — | — | pending maintainer review / no public endpoint |  |

### Paper & Live Execution（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-ssquant-ai-trader](https://github.com/quantskills/skill-ssquant-ai-trader) | Orchestrates SSQuant strategy research, paper trading, and runtime checks. | execution | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-ssquant-ai-trader.png"><img src="assets/skill-ssquant-ai-trader.png" width="260"></a> |

</details>

<a id="cat-06"></a>
<details>
<summary><strong>06 Research Models & Replication</strong> — 18 assets, 7 with screenshots</summary>

### Paper Replication（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-paper-replication](https://github.com/quantskills/skill-paper-replication) | Supports paper search, data extraction, experiment reproduction, and research-result reporting. | modeling | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-paper-replication.png"><img src="assets/skill-paper-replication.png" width="260"></a> |
| [skill-quant-research-replication](https://github.com/quantskills/skill-quant-research-replication) | Guides auditable quantitative-research replication workflows. | modeling | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-research-replication.png"><img src="assets/skill-quant-research-replication.png" width="260"></a> |

### Strategy Replication（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-report-replication](https://github.com/quantskills/skill-report-replication) | Guides conversion of research reports into reproducible analysis workflows. | modeling | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-report-replication.png"><img src="assets/skill-report-replication.png" width="260"></a> |

### Statistical & ML Models（6）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-dl-gnn-stock-graph](https://github.com/quantskills/skill-dl-gnn-stock-graph) | Builds A-share heterogeneous graphs for GNN stock selection and backtesting. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-model-hpo-evidence-driven](https://github.com/quantskills/skill-model-hpo-evidence-driven) | Optimizes quantitative multi-factor model hyperparameters with fixed validation and trial-level evidence. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-pair-correlation](https://github.com/quantskills/skill-pair-correlation) | Computes and interprets asset-pair correlations, rolling relationships, and research uses. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-simons-pairs-trading](https://github.com/quantskills/skill-simons-pairs-trading) | Studies A-share pairs trading with cointegration, spreads, and execution constraints. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-statistical-arbitrage-time-series](https://github.com/quantskills/skill-statistical-arbitrage-time-series) | Builds statistical-arbitrage time-series research and produces traceable reports. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-time-series-analysis](https://github.com/quantskills/skill-time-series-analysis) | Diagnoses financial time series and produces analysis reports. | modeling | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-time-series-analysis.png"><img src="assets/skill-time-series-analysis.png" width="260"></a> |

### Investor Research Models（7）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-gaetano-crux-capital-research-model](https://github.com/quantskills/skill-gaetano-crux-capital-research-model) | Uses public sources to structure research evidence and risks for photonics, optical-network, and AI-infrastructure companies. | modeling | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-gaetano-crux-capital-research-model.png"><img src="assets/skill-gaetano-crux-capital-research-model.png" width="260"></a> |
| [skill-gao-shanwen-research-model](https://github.com/quantskills/skill-gao-shanwen-research-model) | Organizes, retrieves, and studies Gao Shanwen's public writings and articles. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-investment-decision](https://github.com/quantskills/skill-investment-decision) | Combines research evidence, valuation, and risk information into an auditable investment decision report. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-keynes-contrarian-investment](https://github.com/quantskills/skill-keynes-contrarian-investment) | Uses long-term expectations and contrarian analysis to identify optimism, pessimism, and value traps. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-munger-mental-model](https://github.com/quantskills/skill-munger-mental-model) | Applies a multidisciplinary mental-model framework to company investment research and judgment reports. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-serenity-research-model](https://github.com/quantskills/skill-serenity-research-model) | Reconstructs Serenity-style research logic from public X/Twitter evidence. | modeling | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-serenity-research-model.png"><img src="assets/skill-serenity-research-model.png" width="260"></a> |
| [skill-x-trader-builder](https://github.com/quantskills/skill-x-trader-builder) | Builds trader-specific research-model skills from public X/Twitter post data. | orchestration | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-x-trader-builder.png"><img src="assets/skill-x-trader-builder.png" width="260"></a> |

### Experiment Registry & Reproducible Research（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-quant-research](https://github.com/quantskills/skill-quant-research) | Guides quantitative research, backtest design, and statistical validation workflows. | modeling | — | — | pending maintainer review / no public endpoint |  |
| [skill-quant-research-experiment-registry](https://github.com/quantskills/skill-quant-research-experiment-registry) | Registers quantitative experiments and audits their reproducibility evidence. | evaluation | — | — | pending maintainer review / no public endpoint |  |

</details>

<a id="cat-07"></a>
<details>
<summary><strong>07 Research Validation & Quality</strong> — 11 assets, 1 with screenshots</summary>

### Lookahead & Data Leakage（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-backtesting-bias-avoidance](https://github.com/quantskills/skill-backtesting-bias-avoidance) | Builds look-ahead-safe backtests and audits leakage, survivorship, overfitting, costs, and out-of-sample checks. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-numerical-leak-check](https://github.com/quantskills/skill-numerical-leak-check) | Detects lookahead and data leakage in quantitative research workflows through numerical checks. | evaluation | — | — | pending maintainer review / no public endpoint |  |

### Survivorship Bias（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-survivorship-universe-auditor](https://github.com/quantskills/skill-survivorship-universe-auditor) | Audits point-in-time universe membership, identities, and delisting returns before backtests. | data-quality | — | — | pending maintainer review / no public endpoint |  |

### Walk-Forward & OOS（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-backtest-overfit](https://github.com/quantskills/skill-backtest-overfit) | Evaluates backtest overfitting and multiple-testing risk with DSR, PBO, purged cross-validation, and Harvey-Liu haircut. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-walk-forward-validator](https://github.com/quantskills/skill-walk-forward-validator) | Validates cross-sectional signals out of sample with purged and embargoed rolling windows. | evaluation | — | — | pending maintainer review / no public endpoint |  |

### Signal Stability（3）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-calendar-anomaly-scanner](https://github.com/quantskills/skill-calendar-anomaly-scanner) | Scans dated price changes for calendar anomalies using robust tests, bootstrap checks, and multiple-testing control. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-factor-decay](https://github.com/quantskills/skill-factor-decay) | Analyzes decay in Rank IC, turnover, and bucket returns and estimates half-life. | evaluation | — | — | pending maintainer review / no public endpoint |  |
| [skill-signal-stability-audit](https://github.com/quantskills/skill-signal-stability-audit) | Audits quantitative-signal stability across time and samples. | evaluation | — | — | pending maintainer review / no public endpoint |  |

### Forecast Calibration（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-forecast-calibration-audit](https://github.com/quantskills/skill-forecast-calibration-audit) | Audits probability-forecast calibration rather than sample ranking alone. | evaluation | — | — | pending maintainer review / no public endpoint |  |

### Numerical & Model Audit（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-factor-debug](https://github.com/quantskills/skill-factor-debug) | Provides a symptom, cause, and verification playbook for factor failures. | evaluation | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-debug.png"><img src="assets/skill-factor-debug.png" width="260"></a> |

### Workflow Audit（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-pandaai-workflow-audit](https://github.com/quantskills/skill-pandaai-workflow-audit) | Audits PandaAI workflow graphs, code, timing, parameters, and backtest-validation evidence. | evaluation | — | — | pending maintainer review / no public endpoint |  |

</details>

<a id="cat-08"></a>
<details>
<summary><strong>08 Information Search & Knowledge Analysis</strong> — 6 assets, 1 with screenshots</summary>

### News & Disclosures（3）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-earnings-season-tracker](https://github.com/quantskills/skill-earnings-season-tracker) | Scans earnings guidance, industry distributions, and qualified audit items during earnings seasons. | monitoring | — | — | pending maintainer review / no public endpoint |  |
| [skill-fin-news](https://github.com/quantskills/skill-fin-news) | Aggregates financial headlines and market data to select headlines and draft analysis articles. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-news-sentiment-analyst](https://github.com/quantskills/skill-news-sentiment-analyst) | Collects, verifies, and analyzes A-share financial-news sentiment for research reports. | modeling | — | — | pending maintainer review / no public endpoint |  |

### Institutional Research（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-institutional-research-tracker](https://github.com/quantskills/skill-institutional-research-tracker) | Monitors A-share institutional research activity, attention, and changes over time. | monitoring | — | — | pending maintainer review / no public endpoint |  |

### Daily Review（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-daily-report](https://github.com/quantskills/skill-daily-report) | Aggregates cross-market prices, sectors, flows, and news into a daily Markdown review. | reporting | — | — | pending maintainer review / no public endpoint |  |
| [skill-market-daily-review](https://github.com/quantskills/skill-market-daily-review) | Generates Pandadata-based A-share after-close daily market review reports. | reporting | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-market-daily-review.png"><img src="assets/skill-market-daily-review.png" width="260"></a> |

</details>

<a id="cat-09"></a>
<details>
<summary><strong>09 Quant Agents & Automation</strong> — 8 assets, 5 with screenshots</summary>

### Research Agent（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [agent-correlation-break-research](https://github.com/quantskills/agent-correlation-break-research) | Uses Pandadata price-series correlation changes to identify style shifts, diversification stress, and structural market moves. | monitoring | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-correlation-break-research.png"><img src="assets/agent-correlation-break-research.png" width="260"></a> |
| [agent-macro-driven-rotation](https://github.com/quantskills/agent-macro-driven-rotation) | Generates macro-driven industry-rotation research materials from clock phases, nowcasts, and valuation filters. | modeling | — | — | pending maintainer review / no public endpoint |  |

### Monitoring & Risk Agent（3）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [agent-crowding-risk-monitor](https://github.com/quantskills/agent-crowding-risk-monitor) | Monitors crowded-trade risk from Pandadata price, turnover, margin, and Dragon-Tiger heat evidence. | monitoring | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-crowding-risk-monitor.png"><img src="assets/agent-crowding-risk-monitor.png" width="260"></a> |
| [agent-derivatives-skew-sentiment-monitor](https://github.com/quantskills/agent-derivatives-skew-sentiment-monitor) | Monitors derivatives sentiment from option implied volatility and underlying historical volatility. | monitoring | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-derivatives-skew-sentiment-monitor.png"><img src="assets/agent-derivatives-skew-sentiment-monitor.png" width="260"></a> |
| [agent-market-regime-monitor](https://github.com/quantskills/agent-market-regime-monitor) | Monitors market regimes from Pandadata index breadth, volatility, and funding evidence. | monitoring | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-market-regime-monitor.png"><img src="assets/agent-market-regime-monitor.png" width="260"></a> |

### Trading Execution Agent（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [agent-ssquant](https://github.com/quantskills/agent-ssquant) | SSQuant Agent workflow for futures strategies, data services, CTP gates, and Chinese backtest reports. | execution | — | — | pending maintainer review / no public endpoint |  |

### Workflow Orchestration Agent（2）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [agent-for-liangshuyuan-tasks](https://github.com/quantskills/agent-for-liangshuyuan-tasks) | Multi-agent collaboration framework for Liangshuyuan tasks, organizing quantitative tools, build workflows, and task roles. | orchestration | — | — | pending maintainer review / no public endpoint |  |
| [agent-quantspace](https://github.com/quantskills/agent-quantspace) | AI-native quantitative research framework for reusable skills, strategy workflows, backtests, and reports. | orchestration | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-quantspace.png"><img src="assets/agent-quantspace.png" width="260"></a> |

</details>

<a id="cat-10"></a>
<details>
<summary><strong>10 Infrastructure & Templates</strong> — 6 assets, 1 with screenshots</summary>

### Skill Template（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-template](https://github.com/quantskills/skill-template) | Provides a template structure and instructions for QuantSkills skill projects. | orchestration | — | — | pending maintainer review / no public endpoint |  |

### Agent Template（1）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [agent-template](https://github.com/quantskills/agent-template) | Canonical template for portable QuantSkills agent projects. | orchestration | — | — | pending maintainer review / no public endpoint |  |

### Build & Release Tooling（4）

| Project | Bilingual summary | Primary stage | Inputs | Outputs | Interface status | Screenshot |
|---|---|---|---|---|---|---|
| [skill-jq-to-panda-converter](https://github.com/quantskills/skill-jq-to-panda-converter) | Converts JoinQuant strategy code into PandaAI JSON configurations runnable in backtests. | orchestration | — | — | pending maintainer review / no public endpoint |  |
| [skill-pandaai-workflow-generator](https://github.com/quantskills/skill-pandaai-workflow-generator) | Generates importable PandaAI workflow JSON and embedded strategy or factor code from quant ideas. | orchestration | — | — | pending maintainer review / no public endpoint |  |
| [skill-quant-factor-skill-factory](https://github.com/quantskills/skill-quant-factor-skill-factory) | Batch-generates, validates, and packages framework-neutral OHLCV factor skills. | orchestration | — | — | pending maintainer review / no public endpoint | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-factor-skill-factory.png"><img src="assets/skill-quant-factor-skill-factory.png" width="260"></a> |
| [skill-ssquant-trader-generator](https://github.com/quantskills/skill-ssquant-trader-generator) | Turns natural-language trading ideas into a reusable Trader Skill and delegates simulated deployment. | orchestration | — | — | pending maintainer review / no public endpoint |  |

</details>

## Infrastructure & community entry points

| Project | Link |
|---|---|
| .github | [https://github.com/quantskills/.github](https://github.com/quantskills/.github) |
| join | [https://github.com/quantskills/join](https://github.com/quantskills/join) |
| quantskills | [https://github.com/quantskills/quantskills](https://github.com/quantskills/quantskills) |
| registry | [https://github.com/quantskills/registry](https://github.com/quantskills/registry) |

---
## 🐼 PandaAI Community
<div align="center">
  <img src="assets/pandaai-community-qr.jpg" alt="PandaAI community QR code" width="220">
  <br>
  <sub>Scan to join the PandaAI community for QUANTSKILLS skills, agent workflows, and quant research.</sub>
</div>
<!-- CATALOG:END -->

## Maintenance and license

Maintained by [quantskills-GuoYJ](https://github.com/quantskills-GuoYJ) and the QuantSkills community. Each asset declares its own license; see this navigation repository's [LICENSE](LICENSE).
