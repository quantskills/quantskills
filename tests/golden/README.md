<!-- catalog-snapshot: sha256:c292e301b7a9bb22c538ffee75d862dab90052a6753d6278529d039e8aa2cd53 -->
# quantskills
**简体中文** | [English](README.en.md)
Snapshot: sha256:c292e301b7a9bb22c538ffee75d862dab90052a6753d6278529d039e8aa2cd53; public assets: 16.

## 目录
[01](#cat-01) · [02](#cat-02) · [03](#cat-03) · [04](#cat-04) · [05](#cat-05) · [06](#cat-06) · [07](#cat-07) · [08](#cat-08) · [09](#cat-09) · [10](#cat-10)

## 工作流索引
- <a id="workflow-data-foundation"></a>workflow-data-foundation: data-ingestion, data-quality
- <a id="workflow-research-signal"></a>workflow-research-signal: feature-engineering, factor-generation, factor-screening, modeling
- <a id="workflow-portfolio-validation"></a>workflow-portfolio-validation: portfolio-construction, backtesting, evaluation, risk
- <a id="workflow-monitoring-trading"></a>workflow-monitoring-trading: monitoring, execution, reporting
- <a id="workflow-orchestration"></a>workflow-orchestration: orchestration

<a id="cat-01"></a>
## 01 数据接口与数据仓库

### 01.data-source-connectors 数据源与连接器
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-fixture-01](https://github.com/quantskills/skill-fixture-01) | ??01????1 | skill | data-ingestion | — | — | market-bar | active |
| [skill-fixture-11](https://github.com/quantskills/skill-fixture-11) | ??01????11 | skill | monitoring | — | — | — | active |

### 01.warehouse-cache 仓库与缓存
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 01.normalization-master-data 标准化与主数据
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 01.market-data-governance 行情数据治理
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 01.pit-data-quality PIT 与数据质量
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

<a id="cat-02"></a>
## 02 因子研发工具箱

### 02.factor-idea-generation 因子创意
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 02.factor-generation 因子生成
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 02.factor-preprocessing 因子预处理
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-fixture-02](https://github.com/quantskills/skill-fixture-02) | ??02????2 | skill | data-quality | — | — | — | active |

### 02.factor-orthogonalization-blending 正交与合成
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 02.factor-selection 因子筛选
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 02.factor-evaluation 因子评价
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-fixture-12](https://github.com/quantskills/skill-fixture-12) | ??02????12 | skill | execution | — | — | — | active |

### 02.factor-pool-online 因子池与在线化
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

<a id="cat-03"></a>
## 03 市场与标的分析

### 03.a-share-equity A 股
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-fixture-03](https://github.com/quantskills/skill-fixture-03) | ??03????3 | skill | feature-engineering | — | — | — | active |
| [skill-fixture-13](https://github.com/quantskills/skill-fixture-13) | ??03????13 | skill | reporting | — | — | — | active |

### 03.hk-us-equity 港股与美股
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 03.etf-fund-index ETF、基金与指数
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 03.futures-commodity 期货与商品
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 03.options-convertible-bond 期权与可转债
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 03.macro-cross-asset 宏观与跨资产
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

<a id="cat-04"></a>
## 04 风险监控与预警

### 04.market-regime 市场状态
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-fixture-04](https://github.com/quantskills/skill-fixture-04) | ??04????4 | skill | factor-generation | — | — | — | active |
| [skill-fixture-14](https://github.com/quantskills/skill-fixture-14) | ??04????14 | skill | orchestration | — | — | — | active |

### 04.flow-crowding 资金与拥挤
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 04.liquidity-risk 流动性风险
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 04.corporate-event 公司事件
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 04.regulatory-compliance 监管合规
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 04.portfolio-stress 组合压力测试
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 04.automated-alerts 自动预警
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

<a id="cat-05"></a>
## 05 策略回测与交易工具

### 05.strategy-signal 策略与信号
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-fixture-05](https://github.com/quantskills/skill-fixture-05) | ??05????5 | skill | factor-screening | — | — | — | active |

### 05.portfolio-construction 组合构建
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 05.backtest-engine 回测引擎
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 05.performance-attribution 绩效归因
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 05.transaction-costs 交易成本
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 05.market-microstructure 微观结构
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 05.position-orders 仓位与订单
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 05.paper-live-execution 模拟与实盘执行
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

<a id="cat-06"></a>
## 06 投研模型与研究复现

### 06.paper-replication 论文复现
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 06.strategy-replication 策略复现
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 06.statistical-ml-models 统计与机器学习模型
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-fixture-06](https://github.com/quantskills/skill-fixture-06) | ??06????6 | skill | modeling | — | — | — | active |

### 06.investor-research-models 投资者研究模型
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 06.experiment-reproducibility 实验登记与可重复研究
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

<a id="cat-07"></a>
## 07 研究验证与质量工具

### 07.lookahead-leakage 前视与数据泄漏
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 07.survivorship-bias 幸存者偏差
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 07.walk-forward-oos Walk-forward 与 OOS
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-fixture-07](https://github.com/quantskills/skill-fixture-07) | ??07????7 | skill | portfolio-construction | — | — | — | active |

### 07.signal-stability 信号稳定性
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 07.forecast-calibration 预测校准
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 07.numerical-model-audit 数值与模型审计
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 07.workflow-audit 工作流审计
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

<a id="cat-08"></a>
## 08 资讯搜索与知识分析

### 08.news-disclosures 新闻与公告
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 08.institutional-research 机构研究
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 08.event-calendar 事件日历
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 08.daily-review 每日复盘
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-fixture-08](https://github.com/quantskills/skill-fixture-08) | ??08????8 | skill | backtesting | — | — | — | active |

### 08.thematic-brief 专题简报
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 08.document-knowledge 文档提取与知识整理
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

<a id="cat-09"></a>
## 09 量化智能体与自动化

### 09.research-agent 研究 Agent
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-fixture-09](https://github.com/quantskills/skill-fixture-09) | ??09????9 | skill | evaluation | — | — | — | active |

### 09.monitor-risk-agent 监控与风险 Agent
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 09.execution-agent 交易执行 Agent
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 09.workflow-orchestration-agent 工作流编排 Agent
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 09.development-review-agent 开发与审查 Agent
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

<a id="cat-10"></a>
## 10 基础设施与模板

### 10.registry-navigation Registry 与导航
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-fixture-10](https://github.com/quantskills/skill-fixture-10) | ??10????10 | skill | risk | — | — | — | active |

### 10.skill-template Skill 模板
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [skill-template](https://github.com/quantskills/skill-template) | ?????? | skill | orchestration | — | — | — | active |

### 10.agent-template Agent 模板
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|
| [agent-template](https://github.com/quantskills/agent-template) | ?????? | agent | orchestration | — | — | — | active |

### 10.governance-community 组织治理与社区
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 10.build-release-tooling 构建与发布工具
| 名称 | 摘要 | 类型 | 主阶段 | 参与阶段 | 输入 | 输出 | 状态 |
|---|---|---|---|---|---|---|---|

### 组织资源
| 名称 | 摘要 |
|---|---|
| [.github](https://github.com/quantskills/.github) | 组织资源 |
| [join](https://github.com/quantskills/join) | 组织资源 |
| [quantskills](https://github.com/quantskills/quantskills) | 组织资源 |
| [registry](https://github.com/quantskills/registry) | 组织资源 |
