<!-- catalog-snapshot: sha256:c292e301b7a9bb22c538ffee75d862dab90052a6753d6278529d039e8aa2cd53 -->
# quantskills
[简体中文](README.md) | **English**
Snapshot: sha256:c292e301b7a9bb22c538ffee75d862dab90052a6753d6278529d039e8aa2cd53; public assets: 16.

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
| [skill-fixture-01](https://github.com/quantskills/skill-fixture-01) | Fixture skill 1 for category 01. | skill | data-ingestion | — | — | market-bar | active |
| [skill-fixture-11](https://github.com/quantskills/skill-fixture-11) | Fixture skill 11 for category 01. | skill | monitoring | — | — | — | active |

### 01.warehouse-cache Warehouse & Cache
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 01.normalization-master-data Normalization & Master Data
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 01.market-data-governance Market Data Governance
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 01.pit-data-quality PIT & Data Quality
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

<a id="cat-02"></a>
## 02 Factor R&D Toolbox

### 02.factor-idea-generation Factor Ideation
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 02.factor-generation Factor Generation
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 02.factor-preprocessing Factor Preprocessing
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-fixture-02](https://github.com/quantskills/skill-fixture-02) | Fixture skill 2 for category 02. | skill | data-quality | — | — | — | active |

### 02.factor-orthogonalization-blending Orthogonalization & Blending
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 02.factor-selection Factor Selection
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 02.factor-evaluation Factor Evaluation
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-fixture-12](https://github.com/quantskills/skill-fixture-12) | Fixture skill 12 for category 02. | skill | execution | — | — | — | active |

### 02.factor-pool-online Factor Pool & Online Serving
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

<a id="cat-03"></a>
## 03 Market & Instrument Analysis

### 03.a-share-equity A-Share Equities
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-fixture-03](https://github.com/quantskills/skill-fixture-03) | Fixture skill 3 for category 03. | skill | feature-engineering | — | — | — | active |
| [skill-fixture-13](https://github.com/quantskills/skill-fixture-13) | Fixture skill 13 for category 03. | skill | reporting | — | — | — | active |

### 03.hk-us-equity HK & US Equities
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 03.etf-fund-index ETFs, Funds & Indices
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 03.futures-commodity Futures & Commodities
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 03.options-convertible-bond Options & Convertible Bonds
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 03.macro-cross-asset Macro & Cross-Asset
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

<a id="cat-04"></a>
## 04 Risk Monitoring & Alerts

### 04.market-regime Market Regime
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-fixture-04](https://github.com/quantskills/skill-fixture-04) | Fixture skill 4 for category 04. | skill | factor-generation | — | — | — | active |
| [skill-fixture-14](https://github.com/quantskills/skill-fixture-14) | Fixture skill 14 for category 04. | skill | orchestration | — | — | — | active |

### 04.flow-crowding Flows & Crowding
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 04.liquidity-risk Liquidity Risk
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 04.corporate-event Corporate Events
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 04.regulatory-compliance Regulatory Compliance
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 04.portfolio-stress Portfolio Stress Testing
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 04.automated-alerts Automated Alerts
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

<a id="cat-05"></a>
## 05 Backtesting & Trading

### 05.strategy-signal Strategies & Signals
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-fixture-05](https://github.com/quantskills/skill-fixture-05) | Fixture skill 5 for category 05. | skill | factor-screening | — | — | — | active |

### 05.portfolio-construction Portfolio Construction
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 05.backtest-engine Backtesting Engine
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 05.performance-attribution Performance Attribution
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 05.transaction-costs Transaction Costs
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 05.market-microstructure Market Microstructure
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 05.position-orders Positions & Orders
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 05.paper-live-execution Paper & Live Execution
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

<a id="cat-06"></a>
## 06 Research Models & Replication

### 06.paper-replication Paper Replication
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 06.strategy-replication Strategy Replication
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 06.statistical-ml-models Statistical & ML Models
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-fixture-06](https://github.com/quantskills/skill-fixture-06) | Fixture skill 6 for category 06. | skill | modeling | — | — | — | active |

### 06.investor-research-models Investor Research Models
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 06.experiment-reproducibility Experiment Registry & Reproducible Research
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

<a id="cat-07"></a>
## 07 Research Validation & Quality

### 07.lookahead-leakage Lookahead & Data Leakage
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 07.survivorship-bias Survivorship Bias
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 07.walk-forward-oos Walk-Forward & OOS
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-fixture-07](https://github.com/quantskills/skill-fixture-07) | Fixture skill 7 for category 07. | skill | portfolio-construction | — | — | — | active |

### 07.signal-stability Signal Stability
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 07.forecast-calibration Forecast Calibration
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 07.numerical-model-audit Numerical & Model Audit
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 07.workflow-audit Workflow Audit
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

<a id="cat-08"></a>
## 08 Information Search & Knowledge Analysis

### 08.news-disclosures News & Disclosures
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 08.institutional-research Institutional Research
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 08.event-calendar Event Calendar
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 08.daily-review Daily Review
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-fixture-08](https://github.com/quantskills/skill-fixture-08) | Fixture skill 8 for category 08. | skill | backtesting | — | — | — | active |

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
| [skill-fixture-09](https://github.com/quantskills/skill-fixture-09) | Fixture skill 9 for category 09. | skill | evaluation | — | — | — | active |

### 09.monitor-risk-agent Monitoring & Risk Agent
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 09.execution-agent Trading Execution Agent
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 09.workflow-orchestration-agent Workflow Orchestration Agent
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 09.development-review-agent Development & Review Agent
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

<a id="cat-10"></a>
## 10 Infrastructure & Templates

### 10.registry-navigation Registry & Navigation
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-fixture-10](https://github.com/quantskills/skill-fixture-10) | Fixture skill 10 for category 10. | skill | risk | — | — | — | active |

### 10.skill-template Skill Template
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [skill-template](https://github.com/quantskills/skill-template) | Template fixture entry. | skill | orchestration | — | — | — | active |

### 10.agent-template Agent Template
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|
| [agent-template](https://github.com/quantskills/agent-template) | Template fixture entry. | agent | orchestration | — | — | — | active |

### 10.governance-community Governance & Community
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### 10.build-release-tooling Build & Release Tooling
| Name | Summary | Type | Primary stage | Additional stages | Inputs | Outputs | Status |
|---|---|---|---|---|---|---|---|

### Organization resources
| Name | Summary |
|---|---|
| [.github](https://github.com/quantskills/.github) | Organization resources |
| [join](https://github.com/quantskills/join) | Organization resources |
| [quantskills](https://github.com/quantskills/quantskills) | Organization resources |
| [registry](https://github.com/quantskills/registry) | Organization resources |
