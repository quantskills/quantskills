<!-- catalog-snapshot: sha256:ecb9a3d03c6df06f3d5ca7961766ad2927ab3d370ee64e80343c0dd6946567a7 -->
# quantskills
[简体中文](README.md) | **English**
Snapshot: sha256:ecb9a3d03c6df06f3d5ca7961766ad2927ab3d370ee64e80343c0dd6946567a7; public assets: 158.
Published structured endpoints: 1; pending maintainer interface review: 157.

## Catalog
[01](#cat-01) · [02](#cat-02) · [03](#cat-03) · [04](#cat-04) · [05](#cat-05) · [06](#cat-06) · [07](#cat-07) · [08](#cat-08) · [09](#cat-09) · [10](#cat-10)

## Workflow index
- <a id="workflow-data-foundation"></a>workflow-data-foundation: data-ingestion, data-quality
- <a id="workflow-research-signal"></a>workflow-research-signal: feature-engineering, factor-generation, factor-screening, modeling
- <a id="workflow-portfolio-validation"></a>workflow-portfolio-validation: portfolio-construction, backtesting, evaluation, risk
- <a id="workflow-monitoring-trading"></a>workflow-monitoring-trading: monitoring, execution, reporting
- <a id="workflow-orchestration"></a>workflow-orchestration: orchestration

<a id="cat-01"></a>
## 01 Data APIs & Warehouse

### 01.data-source-connectors Data Sources & Connectors
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-pandadata-api](https://github.com/quantskills/skill-pandadata-api) | Provides Pandadata market and research API calls and contract lookup across agent runtimes. | skill | data-ingestion | data-quality | — | — | pending maintainer review / no public endpoint |
| [skill-us-sec-edgar-harvester](https://github.com/quantskills/skill-us-sec-edgar-harvester) | Harvests and structures public US SEC EDGAR filings. | skill | data-ingestion | data-quality, reporting | — | — | pending maintainer review / no public endpoint |

### 01.warehouse-cache Warehouse & Cache
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-pandadata-warehouse](https://github.com/quantskills/skill-pandadata-warehouse) | Manages local Pandadata DuckDB and Parquet quantitative data warehouses, caches, and queries. | skill | data-ingestion | data-quality | — | market-bar | published |

### 01.normalization-master-data Normalization & Master Data
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 01.market-data-governance Market Data Governance
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-corporate-action-adjustment-auditor](https://github.com/quantskills/skill-corporate-action-adjustment-auditor) | Audits split and cash-dividend consistency between raw and adjusted equity prices before research. | skill | data-quality | data-ingestion, evaluation, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-futures-roll-auditor](https://github.com/quantskills/skill-futures-roll-auditor) | Audits continuous-contract selection, roll gaps, and adjustment factors and produces a roll ledger. | skill | data-quality | data-ingestion, evaluation, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-intraday-data-quality-auditor](https://github.com/quantskills/skill-intraday-data-quality-auditor) | Audits normalized intraday OHLCV data for timestamp, gap, price, volume, and trading-date defects. | skill | data-quality | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 01.pit-data-quality PIT & Data Quality
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-a-share-pit-fundamental-vintage-builder](https://github.com/quantskills/skill-a-share-pit-fundamental-vintage-builder) | Builds and audits point-in-time A-share financial data without later restatements. | skill | data-quality | data-ingestion | — | — | pending maintainer review / no public endpoint |

<a id="cat-02"></a>
## 02 Factor R&D Toolbox

### 02.factor-idea-generation Factor Ideation
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-factor-idea-generation](https://github.com/quantskills/skill-factor-idea-generation) | Generates candidate factor ideas with economic rationale and risk notes from the default data scope. | skill | factor-generation | — | — | — | pending maintainer review / no public endpoint |
| [skill-factormad-debate-factor-mining](https://github.com/quantskills/skill-factormad-debate-factor-mining) | Uses a FactorMAD-style multi-agent debate framework for interpretable stock-alpha mining. | skill | factor-generation | evaluation | — | — | pending maintainer review / no public endpoint |

### 02.factor-generation Factor Generation
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-a1-lhb-tracking](https://github.com/quantskills/skill-a1-lhb-tracking) | Generates an event-ranking factor from Dragon-Tiger seat history, win rate, payoff, and next-session premium. | skill | factor-generation | data-ingestion, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-alpha-a06-hotmoney-reversal](https://github.com/quantskills/skill-alpha-a06-hotmoney-reversal) | Computes a hot-money seat cooling and reversal factor from Dragon-Tiger and market data with validation artifacts. | skill | factor-generation | data-ingestion, feature-engineering, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-alpha-f1-position-change](https://github.com/quantskills/skill-alpha-f1-position-change) | Computes a futures top-20-seat position-change factor and signal from net-position data. | skill | factor-generation | data-ingestion, feature-engineering, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-alpha-f5-member-position-concentration](https://github.com/quantskills/skill-alpha-f5-member-position-concentration) | Computes member-position concentration signals from institutional, hot-money, and northbound net positions. | skill | factor-generation | data-ingestion, feature-engineering, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-alpha-f6-family-position-reverse](https://github.com/quantskills/skill-alpha-f6-family-position-reverse) | Computes a futures family-position reversal signal from seat-position relationships. | skill | factor-generation | data-ingestion, feature-engineering, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-alpha-f8-family-main-divergence](https://github.com/quantskills/skill-alpha-f8-family-main-divergence) | Computes a futures family-versus-main-seat position-divergence factor signal. | skill | factor-generation | data-ingestion, feature-engineering, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-alpha-ncav-graham](https://github.com/quantskills/skill-alpha-ncav-graham) | Computes a Graham NCAV discount factor for A-share deep-value screening and buy-sell-hold signals. | skill | factor-generation | data-ingestion, feature-engineering, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-doc-to-alphas](https://github.com/quantskills/skill-doc-to-alphas) | Defines OHLCV alpha-expression formats and validation rules for document-derived factors. | skill | factor-generation | data-quality | — | — | pending maintainer review / no public endpoint |
| [skill-factor-alpha191-alpha101](https://github.com/quantskills/skill-factor-alpha191-alpha101) | Computes Alpha101 and Alpha191 factors from long-form OHLCV CSV and outputs wide CSV. | skill | factor-generation | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-factor-mine](https://github.com/quantskills/skill-factor-mine) | Provides a factor-mining SOP from hypothesis and experiment notes through scoring and accept/rollback. | skill | factor-generation | evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-factor-mining-pandaai](https://github.com/quantskills/skill-factor-mining-pandaai) | Mines factors with PandaAI data and feedback or extracts them from public documents. | skill | factor-generation | backtesting, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-factor-optimize](https://github.com/quantskills/skill-factor-optimize) | Runs parameter sweeps, ablations, and version refinements for existing equity or futures factors. | skill | factor-generation | evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-fundamental-factor-analysis](https://github.com/quantskills/skill-fundamental-factor-analysis) | Computes and validates A-share valuation, quality, and growth factors from quarterly financial reports. | skill | factor-generation | data-ingestion, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-overseas-equity-factor-miner](https://github.com/quantskills/skill-overseas-equity-factor-miner) | Discovers and validates HK and US cross-sectional alpha factors by IC, decay, and turnover. | skill | factor-generation | data-ingestion, feature-engineering, factor-screening, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-quant-factor-directional-alpha](https://github.com/quantskills/skill-quant-factor-directional-alpha) | Provides an OHLCV directional-factor library for trend, breakout, and reversal research. | skill | factor-generation | data-ingestion, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-quant-factor-risk-pattern-alpha](https://github.com/quantskills/skill-quant-factor-risk-pattern-alpha) | Provides an OHLCV factor library for volatility, chart-pattern, and drawdown-pressure research. | skill | factor-generation | data-ingestion, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-quant-factor-volume-stat-alpha](https://github.com/quantskills/skill-quant-factor-volume-stat-alpha) | Provides an OHLCV factor library for volume and price-volume statistical research. | skill | factor-generation | data-ingestion, evaluation | — | — | pending maintainer review / no public endpoint |

### 02.factor-preprocessing Factor Preprocessing
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 02.factor-orthogonalization-blending Orthogonalization & Blending
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-factor-blend](https://github.com/quantskills/skill-factor-blend) | De-redundantly weights and combines multiple factor signals into a composite signal. | skill | factor-generation | evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-factor-orthogonalize](https://github.com/quantskills/skill-factor-orthogonalize) | Orthogonalizes cross-sectional factors with daily OLS and outputs residual factors and exposure diagnostics. | skill | factor-generation | evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-ml-factor-ensemble](https://github.com/quantskills/skill-ml-factor-ensemble) | Ensembles machine-learning models into factor meta-signals with leakage-aware rolling validation. | skill | modeling | feature-engineering, factor-generation, backtesting, evaluation | — | — | pending maintainer review / no public endpoint |

### 02.factor-selection Factor Selection
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-factor-grouped-wrapper](https://github.com/quantskills/skill-factor-grouped-wrapper) | Wraps grouped factor-processing workflows and their pipeline diagrams. | skill | factor-screening | factor-generation, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-factor-ranking-sage](https://github.com/quantskills/skill-factor-ranking-sage) | Runs mRMR or Marginal-SAGE on local factor and label data to produce Top-K rankings. | skill | factor-screening | evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-residual-guided-factor-selection](https://github.com/quantskills/skill-residual-guided-factor-selection) | Selects factor combinations using residual IC and out-of-sample evaluation. | skill | factor-screening | feature-engineering, modeling, backtesting, evaluation | — | — | pending maintainer review / no public endpoint |

### 02.factor-evaluation Factor Evaluation
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-build-b10-factor-evaluation](https://github.com/quantskills/skill-build-b10-factor-evaluation) | Evaluates quantitative factors with IC, IR, stratified backtests, monotonicity, turnover, and decay diagnostics. | skill | evaluation | data-ingestion, factor-screening, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-factor-evaluate](https://github.com/quantskills/skill-factor-evaluate) | Scores a cross-sectional factor using IC, Sharpe, drawdown, monotonicity, and turnover. | skill | evaluation | factor-screening | — | — | pending maintainer review / no public endpoint |
| [skill-factor-mason](https://github.com/quantskills/skill-factor-mason) | Checks timing, IC/IR, costs, and neutralization quality in single-factor research. | skill | evaluation | factor-screening, risk | — | — | pending maintainer review / no public endpoint |
| [skill-factor-review](https://github.com/quantskills/skill-factor-review) | Scans a factor library and experiment logs for inventory, structural analysis, and research recommendations. | skill | evaluation | reporting | — | — | pending maintainer review / no public endpoint |
| [skill-ic-analysis](https://github.com/quantskills/skill-ic-analysis) | Evaluates quantitative factors through IC, grouped performance, and predictive effectiveness. | skill | evaluation | factor-generation, reporting | — | — | pending maintainer review / no public endpoint |

### 02.factor-pool-online Factor Pool & Online Serving
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-factor-pool-evolution](https://github.com/quantskills/skill-factor-pool-evolution) | Generates mutation, crossover, and recommendations from evaluated seed factor pools. | skill | factor-screening | factor-generation, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-pandaai-factor-online](https://github.com/quantskills/skill-pandaai-factor-online) | Supports PandaAI factor onboarding, online mining, batch backtests, and cost review. | skill | factor-generation | feature-engineering, factor-screening, backtesting, evaluation | — | — | pending maintainer review / no public endpoint |

<a id="cat-03"></a>
## 03 Market & Instrument Analysis

### 03.a-share-equity A-Share Equities
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-a-share-stock-dossier](https://github.com/quantskills/skill-a-share-stock-dossier) | Uses Pandadata to produce a sourced A-share dossier covering fundamentals, corporate actions, holders, event risks, and market funds. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-buffett-moat-screener](https://github.com/quantskills/skill-buffett-moat-screener) | Screens A-share and US companies using moat, valuation, and point-in-time data for research records. | skill | modeling | data-ingestion, evaluation, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-concept-rotation-monitor](https://github.com/quantskills/skill-concept-rotation-monitor) | Monitors A-share concept and theme momentum, breadth, and rotation for research reports. | skill | monitoring | data-ingestion, feature-engineering, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-dividend-yield-scan](https://github.com/quantskills/skill-dividend-yield-scan) | Calculates A-share rolling dividend yield, dividend continuity, and ex-dividend calendars. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-holder-structure-scan](https://github.com/quantskills/skill-holder-structure-scan) | Tracks A-share holder counts, top-holder concentration, and free float to assess ownership concentration. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-post-market-screener](https://github.com/quantskills/skill-post-market-screener) | Screens A-share stocks after market close using technical patterns and capital-flow evidence. | skill | factor-screening | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-stock-screener](https://github.com/quantskills/skill-stock-screener) | Screens A-share stocks from natural-language criteria and Pandadata evidence. | skill | factor-screening | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 03.hk-us-equity HK & US Equities
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-cross-listing-parity](https://github.com/quantskills/skill-cross-listing-parity) | Monitors A/H and China ADR cross-listing parity using prices, FX, and share ratios. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-hk-stock-dossier](https://github.com/quantskills/skill-hk-stock-dossier) | Generates nine-dimension Hong Kong equity due-diligence reports from Pandadata interfaces. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-hk-us-consensus-radar](https://github.com/quantskills/skill-hk-us-consensus-radar) | Summarizes HK/US sell-side ratings, target prices, growth expectations, and changes. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-hk-us-consensus-revision-radar](https://github.com/quantskills/skill-hk-us-consensus-revision-radar) | Organizes cross-period HK/US target-price and rating revisions into a research report. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-hk-us-dividend-events](https://github.com/quantskills/skill-hk-us-dividend-events) | Generates HK and US equity dividend-event reports using Pandadata overseas-market interfaces. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-hk-us-insider-radar](https://github.com/quantskills/skill-hk-us-insider-radar) | Scans HK and US insider transactions, net direction, trading clusters, and holding changes. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-hk-us-quote-scan](https://github.com/quantskills/skill-hk-us-quote-scan) | Builds HK and US equity snapshots covering quotes, liquidity, valuation, and industry-relative position. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-stock-memory-analyzer-usa](https://github.com/quantskills/skill-stock-memory-analyzer-usa) | Performs multidimensional research analysis of US memory-chip stocks. | skill | reporting | data-ingestion, modeling | — | — | pending maintainer review / no public endpoint |
| [skill-us-sector-rotation](https://github.com/quantskills/skill-us-sector-rotation) | Generates factual reports on US sector performance, valuation, and rotation. | skill | reporting | data-ingestion, evaluation | — | — | pending maintainer review / no public endpoint |

### 03.etf-fund-index ETFs, Funds & Indices
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-etf-arbitrage-monitor](https://github.com/quantskills/skill-etf-arbitrage-monitor) | Monitors A-share ETF primary/secondary-market premiums and redemption-basket feasibility. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-etf-fund-evaluator](https://github.com/quantskills/skill-etf-fund-evaluator) | Evaluates domestic non-QDII passive equity-index ETFs and comparable-index peers. | skill | evaluation | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-index-rebalance-event-study](https://github.com/quantskills/skill-index-rebalance-event-study) | Runs reproducible event studies for index additions, deletions, and weight changes. | skill | evaluation | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-index-valuation-rotation](https://github.com/quantskills/skill-index-valuation-rotation) | Analyzes A-share index valuation percentiles, relative industry valuation, and rotation signals. | skill | reporting | data-ingestion, feature-engineering, modeling | — | — | pending maintainer review / no public endpoint |

### 03.futures-commodity Futures & Commodities
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-ag-futures-seasonality](https://github.com/quantskills/skill-ag-futures-seasonality) | Computes monthly agricultural-futures seasonality from daily prices and overlays crop-calendar context. | skill | modeling | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-commodity-carry-cta](https://github.com/quantskills/skill-commodity-carry-cta) | Builds commodity-futures carry, time-series momentum, cross-sectional momentum, basis, and inventory factors for rotation backtests. | skill | factor-generation | data-ingestion, feature-engineering, backtesting, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-futures-deepview-analyst](https://github.com/quantskills/skill-futures-deepview-analyst) | Turns futures DeepView natural-language requests into data-call plans and fact/inference-separated reports. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-global-commodity-term-structure](https://github.com/quantskills/skill-global-commodity-term-structure) | Uses public data to study global commodity-futures term structure, roll yield, and spreads. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-oil-brief](https://github.com/quantskills/skill-oil-brief) | Combines futures, EIA, OPEC, and market data into Chinese crude-oil briefs. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-xingtai-catcher](https://github.com/quantskills/skill-xingtai-catcher) | Retrieves similar A-share and futures K-line patterns from text or image descriptions. | skill | factor-screening | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 03.options-convertible-bond Options & Convertible Bonds
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-cb-analyzer](https://github.com/quantskills/skill-cb-analyzer) | Analyzes A-share convertible bonds with double-low screening, terms, equity linkage, Greeks, and volatility. | skill | evaluation | data-ingestion, modeling, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-option-strategy-builder](https://github.com/quantskills/skill-option-strategy-builder) | Builds option strategies with legs, payoff charts, breakevens, Greeks, and margin analysis. | skill | portfolio-construction | data-ingestion, risk, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-options-vol-analyst](https://github.com/quantskills/skill-options-vol-analyst) | Analyzes option chains, implied and historical volatility, term structure, skew, and volatility premium. | skill | modeling | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 03.macro-cross-asset Macro & Cross-Asset
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-global-macro-rates-fx-lab](https://github.com/quantskills/skill-global-macro-rates-fx-lab) | Produces sourced global macro briefs from public rates, central-bank, and FX data. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-macro-altdata-nowcast](https://github.com/quantskills/skill-macro-altdata-nowcast) | Uses high-frequency alternative macro data for industry nowcasts and trend monitoring. | skill | modeling | data-ingestion, feature-engineering, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-macro-monitor](https://github.com/quantskills/skill-macro-monitor) | Monitors macro data, industry conditions, economic calendars, and recurring macro changes. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

<a id="cat-04"></a>
## 04 Risk Monitoring & Alerts

### 04.market-regime Market Regime
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-market-regime-analysis](https://github.com/quantskills/skill-market-regime-analysis) | Classifies A-share market regimes using index, macro, futures term-structure, and volatility features. | skill | modeling | data-ingestion, feature-engineering, backtesting, evaluation | — | — | pending maintainer review / no public endpoint |

### 04.flow-crowding Flows & Crowding
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-b7-lhb-monitor](https://github.com/quantskills/skill-b7-lhb-monitor) | Monitors Dragon-Tiger entries and seat labels to produce next-session watchlists and searchable views. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-block-trade-radar](https://github.com/quantskills/skill-block-trade-radar) | Builds an A-share block-trade radar from discount or premium, volume, and price evidence. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-capital-flow-crowding-monitor](https://github.com/quantskills/skill-capital-flow-crowding-monitor) | Aggregates margin, northbound-holding, and block-trade data into consensus, divergence, and crowding-percentile signals. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-northbound-margin-monitor](https://github.com/quantskills/skill-northbound-margin-monitor) | Monitors northbound flows, margin trading, and futures conditions with multiple risk signals. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-smart-money-profiler](https://github.com/quantskills/skill-smart-money-profiler) | Analyzes LHB seats, northbound activity, and capital-flow consensus or divergence. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 04.liquidity-risk Liquidity Risk
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-portfolio-liquidity-stress-test](https://github.com/quantskills/skill-portfolio-liquidity-stress-test) | Estimates portfolio liquidation days, horizon cash, redemption shortfalls, and impact costs under volume stress. | skill | risk | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 04.corporate-event Corporate Events
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-buyback-monitor](https://github.com/quantskills/skill-buyback-monitor) | Monitors A-share buyback lifecycles, purposes, price ranges, and intensity for research. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-event-risk-alert](https://github.com/quantskills/skill-event-risk-alert) | Scans watchlists or holdings for unlock, pledge, ownership-change, and earnings-event risks. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-klarman-special-situations](https://github.com/quantskills/skill-klarman-special-situations) | Researches private placements, restructurings, spin-offs, and distressed turnarounds as special situations. | skill | modeling | data-ingestion, evaluation, risk, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-refinancing-monitor](https://github.com/quantskills/skill-refinancing-monitor) | Tracks A-share refinancing lifecycles, pricing, and dilution risk. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 04.regulatory-compliance Regulatory Compliance
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-audit-opinion-scanner](https://github.com/quantskills/skill-audit-opinion-scanner) | Assesses A-share financial health from audit opinions, statements, and industry benchmarks with risk checks. | skill | evaluation | data-ingestion, risk, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-regulatory-risk-radar](https://github.com/quantskills/skill-regulatory-risk-radar) | Aggregates and grades A-share regulatory and compliance risk events. | skill | monitoring | data-ingestion, risk, reporting | — | — | pending maintainer review / no public endpoint |

### 04.portfolio-stress Portfolio Stress Testing
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-portfolio-checkup](https://github.com/quantskills/skill-portfolio-checkup) | Aggregates concentration, benchmark deviation, valuation, quality, and risk exposures into a portfolio health report. | skill | risk | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-quant-portfolio-risk](https://github.com/quantskills/skill-quant-portfolio-risk) | Analyzes portfolio risk exposures, constraints, and stress scenarios. | skill | risk | portfolio-construction, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-risk-model](https://github.com/quantskills/skill-risk-model) | Builds a multifactor risk model and performs risk attribution. | skill | risk | data-ingestion, modeling, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-rolling-beta-exposure](https://github.com/quantskills/skill-rolling-beta-exposure) | Estimates rolling beta exposure of assets or portfolios relative to a benchmark. | skill | risk | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 04.automated-alerts Automated Alerts
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-a-share-market-risk-radar](https://github.com/quantskills/skill-a-share-market-risk-radar) | Scans A-share macro, funding, valuation, trend, sector-rotation, and event evidence into risk levels. | skill | monitoring | data-ingestion, risk, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-b6-limitup-pool](https://github.com/quantskills/skill-b6-limitup-pool) | Maintains a daily limit-up pool with board, break, reseal, theme, sentiment, and dashboard outputs. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

<a id="cat-05"></a>
## 05 Backtesting & Trading

### 05.strategy-signal Strategies & Signals
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-global-macro-trend-strategy](https://github.com/quantskills/skill-global-macro-trend-strategy) | Turns global signals and public daily prices into backtestable research strategies, positions, and risk rules. | skill | backtesting | factor-screening, portfolio-construction | — | — | pending maintainer review / no public endpoint |
| [skill-ma-crossover-signal](https://github.com/quantskills/skill-ma-crossover-signal) | Computes moving-average crossover signals and reports trend state, latest cross, MA gap, and price bias. | skill | factor-generation | data-ingestion, feature-engineering, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-oversold-rebound](https://github.com/quantskills/skill-oversold-rebound) | Identifies A-share oversold-rebound conditions and screens candidate stocks. | skill | factor-screening | data-ingestion, feature-engineering, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-qbti](https://github.com/quantskills/skill-qbti) | Translates a five-part user questionnaire into factor directions and strategy parameters. | skill | portfolio-construction | factor-screening, backtesting, reporting | — | — | pending maintainer review / no public endpoint |

### 05.portfolio-construction Portfolio Construction
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-dalio-all-weather](https://github.com/quantskills/skill-dalio-all-weather) | Provides an all-weather allocation and backtest workflow for A-share assets, bonds, gold, and commodities. | skill | portfolio-construction | data-ingestion, backtesting, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-portfolio-optimize](https://github.com/quantskills/skill-portfolio-optimize) | Turns alpha signals into optimized weights under weight, sector, exposure, and turnover constraints. | skill | portfolio-construction | data-ingestion, modeling, backtesting, evaluation | — | — | pending maintainer review / no public endpoint |

### 05.backtest-engine Backtesting Engine
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-backtest](https://github.com/quantskills/skill-backtest) | Provides a cross-sectional long-only backtest protocol with T+1 execution, fees, limit filters, and diagnostics. | skill | backtesting | data-ingestion, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-factor-backtest](https://github.com/quantskills/skill-factor-backtest) | Runs long-only cross-sectional factor backtests on supplied factors and market data with diagnostics. | skill | backtesting | factor-screening, evaluation, reporting | — | — | pending maintainer review / no public endpoint |

### 05.performance-attribution Performance Attribution
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-brinson-performance-attribution](https://github.com/quantskills/skill-brinson-performance-attribution) | Runs Brinson-Fachler or BHB attribution with HHI, contributor ranking, and Carino multi-period linking. | skill | evaluation | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-portfolio-attribution](https://github.com/quantskills/skill-portfolio-attribution) | Attributes active portfolio returns to industry allocation, stock selection, interaction, and factor contributions. | skill | evaluation | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-portfolio-pnl-attribution](https://github.com/quantskills/skill-portfolio-pnl-attribution) | Attributes realized portfolio returns by security and sector while reconciling fees, benchmarks, and input quality. | skill | evaluation | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-risk-return-metrics](https://github.com/quantskills/skill-risk-return-metrics) | Calculates risk-return metrics for portfolios or strategies. | skill | evaluation | reporting | — | — | pending maintainer review / no public endpoint |
| [skill-strategy-tearsheet-report](https://github.com/quantskills/skill-strategy-tearsheet-report) | Generates strategy-performance tearsheets with risk-adjusted metrics. | skill | reporting | evaluation, risk | — | — | pending maintainer review / no public endpoint |

### 05.transaction-costs Transaction Costs
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-transaction-cost-analysis](https://github.com/quantskills/skill-transaction-cost-analysis) | Decomposes fills against VWAP/TWAP into transaction-cost components. | skill | evaluation | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-transaction-cost-calibration](https://github.com/quantskills/skill-transaction-cost-calibration) | Calibrates commission, spread, slippage, and market-impact assumptions from execution and market data. | skill | evaluation | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 05.market-microstructure Market Microstructure
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-quant-execution-microstructure](https://github.com/quantskills/skill-quant-execution-microstructure) | Converts approved trade targets into observable, cost-aware execution plans. | skill | execution | risk, monitoring, reporting | — | — | pending maintainer review / no public endpoint |

### 05.position-orders Positions & Orders
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-b11-auto-stop-loss-take-profit](https://github.com/quantskills/skill-b11-auto-stop-loss-take-profit) | Applies entry-date and open-price rules for take-profit, stop-loss, forced exits, and single-name position caps. | skill | execution | data-ingestion, risk | — | — | pending maintainer review / no public endpoint |
| [skill-b12-intraday-position-manager](https://github.com/quantskills/skill-b12-intraday-position-manager) | Manages intraday multi-instrument positions using sellable and locked quantity, price, and cash inputs. | skill | execution | data-ingestion, risk | — | — | pending maintainer review / no public endpoint |

### 05.paper-live-execution Paper & Live Execution
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-ssquant-ai-trader](https://github.com/quantskills/skill-ssquant-ai-trader) | Orchestrates SSQuant strategy research, paper trading, and runtime checks. | skill | execution | modeling, portfolio-construction, backtesting, risk, reporting | — | — | pending maintainer review / no public endpoint |

<a id="cat-06"></a>
## 06 Research Models & Replication

### 06.paper-replication Paper Replication
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-paper-replication](https://github.com/quantskills/skill-paper-replication) | Supports paper search, data extraction, experiment reproduction, and research-result reporting. | skill | modeling | data-ingestion, backtesting, evaluation, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-quant-research-replication](https://github.com/quantskills/skill-quant-research-replication) | Guides auditable quantitative-research replication workflows. | skill | modeling | data-ingestion, backtesting, evaluation, reporting | — | — | pending maintainer review / no public endpoint |

### 06.strategy-replication Strategy Replication
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-report-replication](https://github.com/quantskills/skill-report-replication) | Guides conversion of research reports into reproducible analysis workflows. | skill | modeling | data-ingestion, evaluation, reporting | — | — | pending maintainer review / no public endpoint |

### 06.statistical-ml-models Statistical & ML Models
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-dl-gnn-stock-graph](https://github.com/quantskills/skill-dl-gnn-stock-graph) | Builds A-share heterogeneous graphs for GNN stock selection and backtesting. | skill | modeling | feature-engineering, backtesting, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-model-hpo-evidence-driven](https://github.com/quantskills/skill-model-hpo-evidence-driven) | Optimizes quantitative multi-factor model hyperparameters with fixed validation and trial-level evidence. | skill | modeling | data-ingestion, evaluation, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-pair-correlation](https://github.com/quantskills/skill-pair-correlation) | Computes and interprets asset-pair correlations, rolling relationships, and research uses. | skill | evaluation | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-simons-pairs-trading](https://github.com/quantskills/skill-simons-pairs-trading) | Studies A-share pairs trading with cointegration, spreads, and execution constraints. | skill | modeling | data-ingestion, backtesting, evaluation, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-statistical-arbitrage-time-series](https://github.com/quantskills/skill-statistical-arbitrage-time-series) | Builds statistical-arbitrage time-series research and produces traceable reports. | skill | modeling | data-ingestion, backtesting, evaluation, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-time-series-analysis](https://github.com/quantskills/skill-time-series-analysis) | Diagnoses financial time series and produces analysis reports. | skill | modeling | data-ingestion, evaluation, reporting | — | — | pending maintainer review / no public endpoint |

### 06.investor-research-models Investor Research Models
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-gaetano-crux-capital-research-model](https://github.com/quantskills/skill-gaetano-crux-capital-research-model) | Uses public sources to structure research evidence and risks for photonics, optical-network, and AI-infrastructure companies. | skill | modeling | reporting | — | — | pending maintainer review / no public endpoint |
| [skill-gao-shanwen-research-model](https://github.com/quantskills/skill-gao-shanwen-research-model) | Organizes, retrieves, and studies Gao Shanwen's public writings and articles. | skill | reporting | — | — | — | pending maintainer review / no public endpoint |
| [skill-investment-decision](https://github.com/quantskills/skill-investment-decision) | Combines research evidence, valuation, and risk information into an auditable investment decision report. | skill | modeling | data-ingestion, evaluation, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-keynes-contrarian-investment](https://github.com/quantskills/skill-keynes-contrarian-investment) | Uses long-term expectations and contrarian analysis to identify optimism, pessimism, and value traps. | skill | modeling | data-ingestion, evaluation, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-munger-mental-model](https://github.com/quantskills/skill-munger-mental-model) | Applies a multidisciplinary mental-model framework to company investment research and judgment reports. | skill | modeling | data-ingestion, evaluation, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-serenity-research-model](https://github.com/quantskills/skill-serenity-research-model) | Reconstructs Serenity-style research logic from public X/Twitter evidence. | skill | modeling | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-x-trader-builder](https://github.com/quantskills/skill-x-trader-builder) | Builds trader-specific research-model skills from public X/Twitter post data. | skill | orchestration | data-ingestion, modeling, evaluation, reporting | — | — | pending maintainer review / no public endpoint |

### 06.experiment-reproducibility Experiment Registry & Reproducible Research
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-quant-research](https://github.com/quantskills/skill-quant-research) | Guides quantitative research, backtest design, and statistical validation workflows. | skill | modeling | data-ingestion, backtesting, evaluation, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-quant-research-experiment-registry](https://github.com/quantskills/skill-quant-research-experiment-registry) | Registers quantitative experiments and audits their reproducibility evidence. | skill | evaluation | modeling, reporting | — | — | pending maintainer review / no public endpoint |

<a id="cat-07"></a>
## 07 Research Validation & Quality

### 07.lookahead-leakage Lookahead & Data Leakage
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-backtesting-bias-avoidance](https://github.com/quantskills/skill-backtesting-bias-avoidance) | Builds look-ahead-safe backtests and audits leakage, survivorship, overfitting, costs, and out-of-sample checks. | skill | evaluation | data-ingestion, data-quality, backtesting | — | — | pending maintainer review / no public endpoint |
| [skill-numerical-leak-check](https://github.com/quantskills/skill-numerical-leak-check) | Detects lookahead and data leakage in quantitative research workflows through numerical checks. | skill | evaluation | data-quality, reporting | — | — | pending maintainer review / no public endpoint |

### 07.survivorship-bias Survivorship Bias
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-survivorship-universe-auditor](https://github.com/quantskills/skill-survivorship-universe-auditor) | Audits point-in-time universe membership, identities, and delisting returns before backtests. | skill | data-quality | data-ingestion, evaluation, reporting | — | — | pending maintainer review / no public endpoint |

### 07.walk-forward-oos Walk-Forward & OOS
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-backtest-overfit](https://github.com/quantskills/skill-backtest-overfit) | Evaluates backtest overfitting and multiple-testing risk with DSR, PBO, purged cross-validation, and Harvey-Liu haircut. | skill | evaluation | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-walk-forward-validator](https://github.com/quantskills/skill-walk-forward-validator) | Validates cross-sectional signals out of sample with purged and embargoed rolling windows. | skill | evaluation | data-quality, reporting | — | — | pending maintainer review / no public endpoint |

### 07.signal-stability Signal Stability
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-calendar-anomaly-scanner](https://github.com/quantskills/skill-calendar-anomaly-scanner) | Scans dated price changes for calendar anomalies using robust tests, bootstrap checks, and multiple-testing control. | skill | evaluation | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-factor-decay](https://github.com/quantskills/skill-factor-decay) | Analyzes decay in Rank IC, turnover, and bucket returns and estimates half-life. | skill | evaluation | reporting | — | — | pending maintainer review / no public endpoint |
| [skill-signal-stability-audit](https://github.com/quantskills/skill-signal-stability-audit) | Audits quantitative-signal stability across time and samples. | skill | evaluation | data-quality, risk, reporting | — | — | pending maintainer review / no public endpoint |

### 07.forecast-calibration Forecast Calibration
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-forecast-calibration-audit](https://github.com/quantskills/skill-forecast-calibration-audit) | Audits probability-forecast calibration rather than sample ranking alone. | skill | evaluation | reporting | — | — | pending maintainer review / no public endpoint |

### 07.numerical-model-audit Numerical & Model Audit
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-factor-debug](https://github.com/quantskills/skill-factor-debug) | Provides a symptom, cause, and verification playbook for factor failures. | skill | evaluation | risk | — | — | pending maintainer review / no public endpoint |

### 07.workflow-audit Workflow Audit
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-pandaai-workflow-audit](https://github.com/quantskills/skill-pandaai-workflow-audit) | Audits PandaAI workflow graphs, code, timing, parameters, and backtest-validation evidence. | skill | evaluation | data-quality, reporting | — | — | pending maintainer review / no public endpoint |

<a id="cat-08"></a>
## 08 Information Search & Knowledge Analysis

### 08.news-disclosures News & Disclosures
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-earnings-season-tracker](https://github.com/quantskills/skill-earnings-season-tracker) | Scans earnings guidance, industry distributions, and qualified audit items during earnings seasons. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-fin-news](https://github.com/quantskills/skill-fin-news) | Aggregates financial headlines and market data to select headlines and draft analysis articles. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-news-sentiment-analyst](https://github.com/quantskills/skill-news-sentiment-analyst) | Collects, verifies, and analyzes A-share financial-news sentiment for research reports. | skill | modeling | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 08.institutional-research Institutional Research
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-institutional-research-tracker](https://github.com/quantskills/skill-institutional-research-tracker) | Monitors A-share institutional research activity, attention, and changes over time. | skill | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 08.event-calendar Event Calendar
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 08.daily-review Daily Review
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-daily-report](https://github.com/quantskills/skill-daily-report) | Aggregates cross-market prices, sectors, flows, and news into a daily Markdown review. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |
| [skill-market-daily-review](https://github.com/quantskills/skill-market-daily-review) | Generates Pandadata-based A-share after-close daily market review reports. | skill | reporting | data-ingestion | — | — | pending maintainer review / no public endpoint |

### 08.thematic-brief Thematic Brief
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 08.document-knowledge Document Extraction & Knowledge Organization
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

<a id="cat-09"></a>
## 09 Quant Agents & Automation

### 09.research-agent Research Agent
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [agent-correlation-break-research](https://github.com/quantskills/agent-correlation-break-research) | Uses Pandadata price-series correlation changes to identify style shifts, diversification stress, and structural market moves. | agent | monitoring | data-ingestion, modeling, reporting | — | — | pending maintainer review / no public endpoint |
| [agent-macro-driven-rotation](https://github.com/quantskills/agent-macro-driven-rotation) | Generates macro-driven industry-rotation research materials from clock phases, nowcasts, and valuation filters. | agent | modeling | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 09.monitor-risk-agent Monitoring & Risk Agent
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [agent-crowding-risk-monitor](https://github.com/quantskills/agent-crowding-risk-monitor) | Monitors crowded-trade risk from Pandadata price, turnover, margin, and Dragon-Tiger heat evidence. | agent | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [agent-derivatives-skew-sentiment-monitor](https://github.com/quantskills/agent-derivatives-skew-sentiment-monitor) | Monitors derivatives sentiment from option implied volatility and underlying historical volatility. | agent | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |
| [agent-market-regime-monitor](https://github.com/quantskills/agent-market-regime-monitor) | Monitors market regimes from Pandadata index breadth, volatility, and funding evidence. | agent | monitoring | data-ingestion, reporting | — | — | pending maintainer review / no public endpoint |

### 09.execution-agent Trading Execution Agent
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [agent-ssquant](https://github.com/quantskills/agent-ssquant) | SSQuant Agent workflow for futures strategies, data services, CTP gates, and Chinese backtest reports. | agent | execution | data-ingestion, modeling, backtesting, reporting | — | — | pending maintainer review / no public endpoint |

### 09.workflow-orchestration-agent Workflow Orchestration Agent
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [agent-for-liangshuyuan-tasks](https://github.com/quantskills/agent-for-liangshuyuan-tasks) | Multi-agent collaboration framework for Liangshuyuan tasks, organizing quantitative tools, build workflows, and task roles. | agent | orchestration | — | — | — | pending maintainer review / no public endpoint |
| [agent-quantspace](https://github.com/quantskills/agent-quantspace) | AI-native quantitative research framework for reusable skills, strategy workflows, backtests, and reports. | agent | orchestration | data-ingestion, modeling, backtesting, reporting | — | — | pending maintainer review / no public endpoint |

### 09.development-review-agent Development & Review Agent
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

<a id="cat-10"></a>
## 10 Infrastructure & Templates

### 10.registry-navigation Registry & Navigation
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 10.skill-template Skill Template
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-template](https://github.com/quantskills/skill-template) | Provides a template structure and instructions for QuantSkills skill projects. | skill | orchestration | — | — | — | pending maintainer review / no public endpoint |

### 10.agent-template Agent Template
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [agent-template](https://github.com/quantskills/agent-template) | Canonical template for portable QuantSkills agent projects. | agent | orchestration | — | — | — | pending maintainer review / no public endpoint |

### 10.governance-community Governance & Community
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 10.build-release-tooling Build & Release Tooling
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-jq-to-panda-converter](https://github.com/quantskills/skill-jq-to-panda-converter) | Converts JoinQuant strategy code into PandaAI JSON configurations runnable in backtests. | skill | orchestration | modeling, reporting | — | — | pending maintainer review / no public endpoint |
| [skill-pandaai-workflow-generator](https://github.com/quantskills/skill-pandaai-workflow-generator) | Generates importable PandaAI workflow JSON and embedded strategy or factor code from quant ideas. | skill | orchestration | — | — | — | pending maintainer review / no public endpoint |
| [skill-quant-factor-skill-factory](https://github.com/quantskills/skill-quant-factor-skill-factory) | Batch-generates, validates, and packages framework-neutral OHLCV factor skills. | skill | orchestration | data-ingestion, factor-generation, evaluation | — | — | pending maintainer review / no public endpoint |
| [skill-ssquant-trader-generator](https://github.com/quantskills/skill-ssquant-trader-generator) | Turns natural-language trading ideas into a reusable Trader Skill and delegates simulated deployment. | skill | orchestration | execution | — | — | pending maintainer review / no public endpoint |

### Organization resources
| Name | Summary |
|---|---|
| [.github](https://github.com/quantskills/.github) | Organization resources |
| [join](https://github.com/quantskills/join) | Organization resources |
| [quantskills](https://github.com/quantskills/quantskills) | Organization resources |
| [registry](https://github.com/quantskills/registry) | Organization resources |
