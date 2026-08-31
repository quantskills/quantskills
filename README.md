# 🧭 QuantSkills

**简体中文** | [English](README.en.md) · [浏览网站](https://www.quantskills.ai/)

> 可发现、可安装、可验证、可分享的量化 Skill 与 Agent 社区目录。

QuantSkills 是由 [PandaAI](https://www.pandaaiquant.com/) 发起的开放量化社区项目；它不是 PandaAI 的官方认证或投资建议。这里汇集可复用的研究、数据、验证和自动化能力，让人和 AI Agent 都能更清晰地发现、安装、审阅与组合它们。

## 社区愿景

我们相信量化经验应当能被清楚描述、复现和讨论：贡献者提供可检查的能力包与边界，使用者依据说明、数据来源和风险限制自行验证。目录快照只陈列公开元数据，不代表质量背书、收益承诺或生产可用性保证。

## 加入与贡献

- 阅读 [社区规则](https://github.com/quantskills/join/blob/main/COMMUNITY_RULES.md)，从 [join](https://github.com/quantskills/join) 开始加入讨论。
- 用 [skill-template](https://github.com/quantskills/skill-template) 创建 Skill，或用 [agent-template](https://github.com/quantskills/agent-template) 创建 Agent；提交前说明数据、假设、参数、限制和风险边界。
- 在 [registry](https://github.com/quantskills/registry) 提交可展示的元数据，并通过仓库 issue / PR 分享改进。

## 关键入口

[全部组织仓库](https://github.com/orgs/quantskills/repositories) · [导航仓库](https://github.com/quantskills/quantskills) · [注册表](https://github.com/quantskills/registry) · [模板](https://github.com/quantskills/skill-template) · [加入社区](https://github.com/quantskills/join)

## 目录概况

以下是社区公开资产的定期快照；交互式目录见 [www.quantskills.ai](https://www.quantskills.ai/)。

<!-- CATALOG:START -->
<!-- catalog-snapshot: sha256:276e68899f6db4a7570a1b13cd84231f94987469343002522270686e52e87091 -->
<table align="center"><tr>
<td align="center"><strong>214</strong><br><sub>资产</sub></td>
<td align="center"><strong>10</strong><br><sub>分类</sub></td>
<td align="center"><strong>1</strong><br><sub>已发布端点</sub></td>
<td align="center"><strong>2026-08-31</strong><br><sub>快照更新</sub></td>
</tr></table>

## 分类总览
- [01 数据接口与数据仓库](#cat-01) — 7 项资产（数据源与连接器 / 仓库与缓存 / 行情数据治理 / PIT 与数据质量）
- [02 因子研发工具箱](#cat-02) — 44 项资产（因子创意 / 因子生成 / 正交与合成 / 因子筛选 / 因子评价 / 因子池与在线化）
- [03 市场与标的分析](#cat-03) — 44 项资产（A 股 / 港股与美股 / ETF、基金与指数 / 期货与商品 / 期权与可转债 / 宏观与跨资产）
- [04 风险监控与预警](#cat-04) — 22 项资产（市场状态 / 资金与拥挤 / 流动性风险 / 公司事件 / 监管合规 / 组合压力测试 / 自动预警）
- [05 策略回测与交易工具](#cat-05) — 25 项资产（策略与信号 / 组合构建 / 回测引擎 / 绩效归因 / 交易成本 / 微观结构 / 仓位与订单 / 模拟与实盘执行）
- [06 投研模型与研究复现](#cat-06) — 30 项资产（论文复现 / 策略复现 / 统计与机器学习模型 / 投资者研究模型 / 实验登记与可重复研究）
- [07 研究验证与质量工具](#cat-07) — 12 项资产（前视与数据泄漏 / 幸存者偏差 / Walk-forward 与 OOS / 信号稳定性 / 预测校准 / 数值与模型审计 / 工作流审计）
- [08 资讯搜索与知识分析](#cat-08) — 10 项资产（新闻与公告 / 机构研究 / 每日复盘）
- [09 量化智能体与自动化](#cat-09) — 14 项资产（研究 Agent / 监控与风险 Agent / 交易执行 Agent / 工作流编排 Agent）
- [10 基础设施与模板](#cat-10) — 6 项资产（Skill 模板 / Agent 模板 / 构建与发布工具）

## 工作流地图
- **数据基础 / Data foundation** (2 个阶段): data-ingestion, data-quality
- **研究信号 / Research signal** (4 个阶段): feature-engineering, factor-generation, factor-screening, modeling
- **组合验证 / Portfolio validation** (4 个阶段): portfolio-construction, backtesting, evaluation, risk
- **监控交易 / Monitoring & trading** (3 个阶段): monitoring, execution, reporting
- **编排 / Orchestration** (1 个阶段): orchestration

<a id="cat-01"></a>
<details>
<summary><strong>01 数据接口与数据仓库</strong> — 7 项资产，含截图 1</summary>

### 数据源与连接器（2）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-pandadata-api](https://github.com/quantskills/skill-pandadata-api) | 为多种智能体运行时提供Pandadata市场和研究数据API调用与契约查询。 | data-ingestion | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-us-sec-edgar-harvester](https://github.com/quantskills/skill-us-sec-edgar-harvester) | 采集并结构化美国 SEC EDGAR 公开申报文件。 | data-ingestion | — | — | 待维护者审核 / 无公开端点 |  |

### 仓库与缓存（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-pandadata-warehouse](https://github.com/quantskills/skill-pandadata-warehouse) | 管理本地Pandadata DuckDB和Parquet量化数据仓库、缓存和查询流程。 | data-ingestion | — | market-bar | 已发布 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-pandadata-warehouse.png"><img src="assets/skill-pandadata-warehouse.png" width="260"></a> |

### 行情数据治理（3）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-corporate-action-adjustment-auditor](https://github.com/quantskills/skill-corporate-action-adjustment-auditor) | 在研究或回测前审计原始与复权价格中的拆分和现金分红一致性。 | data-quality | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-futures-roll-auditor](https://github.com/quantskills/skill-futures-roll-auditor) | 审计连续合约选择、换月价差和调整因子，并生成换月账本。 | data-quality | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-intraday-data-quality-auditor](https://github.com/quantskills/skill-intraday-data-quality-auditor) | 审计标准化日内OHLCV数据的时间戳、缺口、价格、成交量和交易日缺陷。 | data-quality | — | — | 待维护者审核 / 无公开端点 |  |

### PIT 与数据质量（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-a-share-pit-fundamental-vintage-builder](https://github.com/quantskills/skill-a-share-pit-fundamental-vintage-builder) | 按披露可见时点构建并审计 A 股财务数据，避免使用后续重述信息。 | data-quality | — | — | 待维护者审核 / 无公开端点 |  |

</details>

<a id="cat-02"></a>
<details>
<summary><strong>02 因子研发工具箱</strong> — 44 项资产，含截图 8</summary>

### 因子创意（2）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-factor-idea-generation](https://github.com/quantskills/skill-factor-idea-generation) | 根据默认数据范围生成包含经济逻辑和风险说明的因子候选想法。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-factormad-debate-factor-mining](https://github.com/quantskills/skill-factormad-debate-factor-mining) | 参考FactorMAD多智能体辩论框架进行可解释的股票Alpha因子挖掘。 | factor-generation | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factormad-debate-factor-mining.png"><img src="assets/skill-factormad-debate-factor-mining.png" width="260"></a> |

### 因子生成（26）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-a1-lhb-tracking](https://github.com/quantskills/skill-a1-lhb-tracking) | 用龙虎榜席位历史表现和次日溢价生成事件驱动排序因子。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-alpha-a06-hotmoney-reversal](https://github.com/quantskills/skill-alpha-a06-hotmoney-reversal) | 从龙虎榜席位与行情数据计算热钱席位冷却反转因子并提供验证与回测产物。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-alpha-a3-streak-leader-relay](https://github.com/quantskills/skill-alpha-a3-streak-leader-relay) | 连板龙头接力（A3）Alpha 因子——从全 A 市场每日 ≥3 板候选池中识别 T+1 接力的事件型 top-N 信号，10 个子因子（个股截面 8 + 大盘情绪 2），权重可用 ICIR + shrinkage 重训，含滚动 IC gate 与 score 加权。研究层面的候选发现器，非交易策略。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-alpha-f1-position-change](https://github.com/quantskills/skill-alpha-f1-position-change) | 从期货前 20 席位净持仓变化计算持仓突变因子并生成信号。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-alpha-f5-member-position-concentration](https://github.com/quantskills/skill-alpha-f5-member-position-concentration) | 从机构、游资与北向等席位净持仓计算成员持仓集中度信号。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-alpha-f6-family-position-reverse](https://github.com/quantskills/skill-alpha-f6-family-position-reverse) | 从期货家族席位持仓反转关系计算交易信号。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-alpha-f8-family-main-divergence](https://github.com/quantskills/skill-alpha-f8-family-main-divergence) | 从期货家族席位与主力席位持仓背离计算因子信号。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-causal-alpha-discovery](https://github.com/quantskills/skill-causal-alpha-discovery) | Discover causal alpha factors from OHLCV data using causal discovery (PC + LiNGAM + NOTEARS), build Structural Causal Models, construct regime-invariant factor expressions, and validate through backtesting. Produces OHLCV-only alpha factors whose predictive power is grounded in causal mechanisms rather than spurious correlations. Use when an agent needs to discover stable alpha factors that survive regime changes, test whether existing factors are causal or merely correlational, or generate alpha factors with formal invariance guarantees on portable agent platforms such as Claude Code, Codex, or Codex-style skill systems. | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-doc-to-alphas](https://github.com/quantskills/skill-doc-to-alphas) | 定义OHLCV因子表达式格式和校验规则，用于从文档生成Alpha因子。 | factor-generation | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-doc-to-alphas.png"><img src="assets/skill-doc-to-alphas.png" width="260"></a> |
| [skill-factor-alpha191-alpha101](https://github.com/quantskills/skill-factor-alpha191-alpha101) | 从长表OHLCV CSV批量计算Alpha101和Alpha191因子并输出宽表CSV。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-factor-loop-evolve](https://github.com/quantskills/skill-factor-loop-evolve) | 本地闭环因子研究系统：生成导入因子，验证，回测（PandaData真实A股数据），诊断，优化，经验记忆，生成新批次，迭代N轮，实现自我改进的因子发现与优化。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-factor-mine](https://github.com/quantskills/skill-factor-mine) | 提供从假设、实验记录到评分和接受或回滚的因子挖掘SOP。 | factor-generation | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-mine.png"><img src="assets/skill-factor-mine.png" width="260"></a> |
| [skill-factor-mining-pandaai](https://github.com/quantskills/skill-factor-mining-pandaai) | 使用PandaAI数据和分析反馈进行因子挖掘，或从公开文档提取因子。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-factor-optimize](https://github.com/quantskills/skill-factor-optimize) | 对已有股票或期货因子执行参数扫描、消融和版本增强。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-fundamental-alpha](https://github.com/quantskills/skill-fundamental-alpha) | 基于基本面数据（PandaData）生成Alpha因子表达式，支持从研报/自然语言输入中提取估值、质量、成长、现金流、预期与股东信号，并通过公式合约与PIT面板验证。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-fundamental-factor-analysis](https://github.com/quantskills/skill-fundamental-factor-analysis) | 从季度财报计算并验证A股估值、质量和成长因子。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-futures-transition-crowding-factor](https://github.com/quantskills/skill-futures-transition-crowding-factor) | 从期货合约迁移与拥挤转移构造可审计横截面因子 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-graph-spectral-diffusion-factor](https://github.com/quantskills/skill-graph-spectral-diffusion-factor) | 在点时股票关系图上构造可审计的因子扩散与局部残差 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-hk-us-fundamental-factor](https://github.com/quantskills/skill-hk-us-fundamental-factor) | Build, standardize, compare, and validate multi-factor fundamental panels for Hong Kong and US equities from PandaAI operating, market-financial, industry-median, price-volume, and financial-statement APIs. Use for quality, value, growth, momentum, low-risk, composite-score, percentile-rank, or cross-market stock-screening tasks. | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-llm-alpha-generator](https://github.com/quantskills/skill-llm-alpha-generator) | Mine formulaic alpha factors end to end: LLM 主导生成候选公式 → 三层校验（白名单/量纲/前视）→ warm-start 遗传编程精修 → AlphaEval 五维打分 → LLM 经济解释 → 自包含 HTML 报告，返回结构化因子结果。Use when the user wants to mine/discover alpha factors, generate formulaic (expression-tree) trading factors, run LLM+GP factor search, or evaluate factor predictive power (RankIC) on stocks or futures. 只挖因子、不做回测（回测归另一 skill）。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-material-contract-alpha](https://github.com/quantskills/skill-material-contract-alpha) | A 股重大合同 Alpha 因子：基于合同金额对数和的横截面排序信号。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-minuteflow-alpha](https://github.com/quantskills/skill-minuteflow-alpha) | 基于分钟级行情数据（PandaData）生成Alpha因子表达式，支持从研报/自然语言输入中提取日内微观结构信号（VWAP偏离、订单流代理、日内动量衰减、波动率曲线等），并通过公式合约验证。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-optimal-transport-cross-sectional-factor](https://github.com/quantskills/skill-optimal-transport-cross-sectional-factor) | 用点时截面分布的单调最优传输构造可审计因子 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-overseas-equity-factor-miner](https://github.com/quantskills/skill-overseas-equity-factor-miner) | 发现并以IC、衰减和换手率验证港美股横截面alpha因子。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-quant-factor-directional-alpha](https://github.com/quantskills/skill-quant-factor-directional-alpha) | 提供用于趋势、突破和反转研究的 OHLCV 方向因子库。 | factor-generation | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-factor-directional-alpha.png"><img src="assets/skill-quant-factor-directional-alpha.png" width="260"></a> |
| [skill-quant-factor-risk-pattern-alpha](https://github.com/quantskills/skill-quant-factor-risk-pattern-alpha) | 提供用于波动、K 线形态和回撤压力研究的 OHLCV 因子库。 | factor-generation | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-factor-risk-pattern-alpha.png"><img src="assets/skill-quant-factor-risk-pattern-alpha.png" width="260"></a> |

### 正交与合成（3）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-factor-blend](https://github.com/quantskills/skill-factor-blend) | 将多个因子信号去冗余、加权并合成为复合信号。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-factor-orthogonalize](https://github.com/quantskills/skill-factor-orthogonalize) | 对截面因子进行逐日OLS正交化，并输出残差因子和暴露诊断。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-ml-factor-ensemble](https://github.com/quantskills/skill-ml-factor-ensemble) | 用防泄漏滚动验证将机器学习模型集成为因子元信号。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |

### 因子筛选（3）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-factor-grouped-wrapper](https://github.com/quantskills/skill-factor-grouped-wrapper) | 按分组封装因子处理流程和工作流图。 | factor-screening | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-factor-ranking-sage](https://github.com/quantskills/skill-factor-ranking-sage) | 在本地因子和标签数据上运行mRMR或Marginal-SAGE并输出Top-K排名。 | factor-screening | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-residual-guided-factor-selection](https://github.com/quantskills/skill-residual-guided-factor-selection) | 使用残差 IC 和样本外评估筛选因子组合。 | factor-screening | — | — | 待维护者审核 / 无公开端点 |  |

### 因子评价（8）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-build-b10-factor-evaluation](https://github.com/quantskills/skill-build-b10-factor-evaluation) | 评估因子的 IC、IR、分层回测、单调性、换手率和衰减表现。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-factor-evaluate](https://github.com/quantskills/skill-factor-evaluate) | 对单个截面因子计算IC、夏普、回撤、单调性和换手的综合评分。 | evaluation | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-evaluate.png"><img src="assets/skill-factor-evaluate.png" width="260"></a> |
| [skill-factor-ic-decay](https://github.com/quantskills/skill-factor-ic-decay) | 用日度截面 Spearman IC、ICIR、Newey-West 显著性、滚动稳定性与多周期半衰期，诊断因子预测力衰减；事实优先，不给买卖指令。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-factor-mason](https://github.com/quantskills/skill-factor-mason) | 检查单因子研究中的时点、IC/IR、成本和中性化质量。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-factor-review](https://github.com/quantskills/skill-factor-review) | 扫描因子库和实验日志，生成量化盘点、结构分析和研究建议。 | evaluation | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-review.png"><img src="assets/skill-factor-review.png" width="260"></a> |
| [skill-futures-cta-alpha](https://github.com/quantskills/skill-futures-cta-alpha) | Commodity-futures CTA factor library — computes a structured date×variety factor panel (time-series & cross-sectional momentum, carry/roll, term structure, positioning/COT, inventory, volatility). Use when the user asks for 商品期货因子、 CTA 信号、动量/carry/期限结构/库存/持仓因子, a factor panel for futures backtesting, or futures factor IC. Fills the ecosystem gap of ZERO futures factor libraries (vs 10 for equities). Emits factor values for the factor toolchain (factor-evaluate / ic-analysis / backtest), NOT human-readable reports. | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-ic-analysis](https://github.com/quantskills/skill-ic-analysis) | 评估量化因子的IC、分组表现和预测有效性。 | evaluation | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-ic-analysis.png"><img src="assets/skill-ic-analysis.png" width="260"></a> |
| [skill-quant-strategy-diagnostics](https://github.com/quantskills/skill-quant-strategy-diagnostics) | 检查策略或因子近期是否恶化，列出收益、IC、回撤、换手率和市场状态方面的证据。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |

### 因子池与在线化（2）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-factor-pool-evolution](https://github.com/quantskills/skill-factor-pool-evolution) | 根据种子因子池的评估生成变异、交叉和推荐。 | factor-screening | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-pandaai-factor-online](https://github.com/quantskills/skill-pandaai-factor-online) | 支持PandaAI因子大赛环境配置、在线挖掘、批量回测和成本复盘。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |

</details>

<a id="cat-03"></a>
<details>
<summary><strong>03 市场与标的分析</strong> — 44 项资产，含截图 4</summary>

### A 股（15）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-a-share-market-participation](https://github.com/quantskills/skill-a-share-market-participation) | Analyze A-share cross-sectional market participation, turnover concentration, liquidity distribution, speculative crowding, leader dependence, and structural fragility from daily or intraday stock snapshots. Use when the user asks in Chinese or English to analyze A-share market breadth, participation, turnover concentration, crowding, whether an index rally is broad or narrow, or to generate a reproducible market-structure report. Use only bundled scripts with PandaData as the primary live source, AKShare as fallback, or user-provided local data; never search, browse, or scrape webpages for replacement market data, and fail closed when approved sources are unavailable. Do not use for order routing, fill simulation, slippage/TCA, live trade execution, or stock-level margin/northbound/block-trade capital-flow attribution. | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-a-share-stock-dossier](https://github.com/quantskills/skill-a-share-stock-dossier) | 输入一个 A 股代码，汇总基本面、公司行动、股东行为、事件风险与资金面的可溯源尽调报告。 | reporting | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-a-share-stock-dossier.png"><img src="assets/skill-a-share-stock-dossier.png" width="260"></a> |
| [skill-a-share-tradability-auditor](https://github.com/quantskills/skill-a-share-tradability-auditor) | A 股可交易性约束审计：把回测交易流放回历史行情，逐笔判定涨跌停封板、停牌、T+1、 裸卖空、新股窗口与参与率上限，把账面收益拆成"可成交收益"与"幽灵收益"， 并定位到具体交易。回答"这条净值曲线里有多少是市场根本不会给你的"。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-buffett-moat-screener](https://github.com/quantskills/skill-buffett-moat-screener) | 按巴菲特式护城河、估值和点时数据筛选 A 股与美股公司并生成研究记录。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-buffett-moat-screener--lavineversion](https://github.com/quantskills/skill-buffett-moat-screener--lavineversion) | 基于 PandaData 点时证据执行十年资本回报与护城河硬筛选。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-concept-rotation-monitor](https://github.com/quantskills/skill-concept-rotation-monitor) | 监测 A 股概念与题材的动量、宽度和轮动变化并生成研究报告。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-dividend-yield-scan](https://github.com/quantskills/skill-dividend-yield-scan) | 计算A股滚动股息率、连续分红和除权除息日历。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-equity-placard-watchlist](https://github.com/quantskills/skill-equity-placard-watchlist) | 举牌行为监控——侦测 A 股股东持股比例上穿 5%/10%/15%/20%/25%/30% 法定披露梯度的权益变动事件，含举牌梯度、意图倾向（财务 vs 战略）、6 个月锁定期、逼近举牌线观察名单。剔除通道账户与股本稀释造成的假举牌。BUILD 型 skill，可被复盘 agent 或事件驱动 Alpha 调用。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-graham-netnet-screener](https://github.com/quantskills/skill-graham-netnet-screener) | 当需要开发、计算、验证 Graham 净净营运资本(NCAV) 因子时，使用此 skill。适用于 A 股全市场深度价值筛选，排除银行/房地产/非银金融，计算 NCAV 折价因子并生成 buy/sell/hold 信号。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-holder-structure-scan](https://github.com/quantskills/skill-holder-structure-scan) | 跟踪A股股东户数、前十大持股和自由流通股以评估筹码集中度。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-post-market-screener](https://github.com/quantskills/skill-post-market-screener) | 收盘后结合技术形态和资金流筛选 A 股股票并生成报告。 | factor-screening | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-soros-reflexivity-detector](https://github.com/quantskills/skill-soros-reflexivity-detector) | 索罗斯反身性识别器——用双环模型（快环情绪-资金 / 慢环基本面-资本）判断 A 股"这波涨跌是不是自我强化的反身性、转到哪一圈、燃料和裂缝在哪"，做阶段识别与仓位纪律。BUILD 型 skill，可被复盘 agent 或 Alpha 调用。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-stock-score](https://github.com/quantskills/skill-stock-score) | skill stock score | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-stock-screener](https://github.com/quantskills/skill-stock-screener) | 依据自然语言筛选条件和 Pandadata 证据筛选 A 股股票。 | factor-screening | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-stock-screener.png"><img src="assets/skill-stock-screener.png" width="260"></a> |
| [skill-templeton-global-contrarian](https://github.com/quantskills/skill-templeton-global-contrarian) | 当需要开发、计算、验证 Templeton 全球价值多因子 V2 时，使用此 skill。适用于 A 股/港股/美股跨市场价值筛选，基于 EP/BP/SP/股息/ROE/杠杆/动量 七子因子截面打分，生成 buy/sell/hold 信号。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |

### 港股与美股（10）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-cross-listing-parity](https://github.com/quantskills/skill-cross-listing-parity) | 比较 A/H 与中国 ADR 的跨市场价格平价、汇率和换股比例并输出监测报告。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-hk-stock-dossier](https://github.com/quantskills/skill-hk-stock-dossier) | 基于Pandadata接口生成覆盖九个维度的港股尽职调查研报。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-hk-us-consensus-radar](https://github.com/quantskills/skill-hk-us-consensus-radar) | 汇总港美股卖方评级、目标价和成长预期及其变化。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-hk-us-consensus-revision-radar](https://github.com/quantskills/skill-hk-us-consensus-revision-radar) | 组织港美股目标价和评级的跨期修订轨迹，并生成研究报告。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-hk-us-dividend-events](https://github.com/quantskills/skill-hk-us-dividend-events) | 基于Pandadata外盘接口生成港股和美股分红事件报告。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-hk-us-insider-radar](https://github.com/quantskills/skill-hk-us-insider-radar) | 扫描港股和美股内部人交易、净买卖方向、聚集交易及持股变化。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-hk-us-institutional-concentration](https://github.com/quantskills/skill-hk-us-institutional-concentration) | Build, compare, and validate institutional ownership structure panels for Hong Kong and US equities with PandaAI investor concentration, ranking, and shareholder-report APIs. Use for ownership breadth, top-holder dominance, HHI, controlling-holder risk, evidence confidence, or within-market institutional ownership screening. | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-hk-us-quote-scan](https://github.com/quantskills/skill-hk-us-quote-scan) | 生成港美股行情、流动性、估值和行业相对位置的研究快照。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-stock-memory-analyzer-usa](https://github.com/quantskills/skill-stock-memory-analyzer-usa) | 对美国存储芯片股票开展多维度研究分析。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-us-sector-rotation](https://github.com/quantskills/skill-us-sector-rotation) | 生成美国行业表现、估值和轮动的事实性报告。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |

### ETF、基金与指数（4）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-etf-arbitrage-monitor](https://github.com/quantskills/skill-etf-arbitrage-monitor) | 监控A股ETF一级和二级市场折溢价及申赎篮子可行性。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-etf-fund-evaluator](https://github.com/quantskills/skill-etf-fund-evaluator) | 评价境内非QDII被动股票指数ETF，并支持同指数横向比较。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-index-rebalance-event-study](https://github.com/quantskills/skill-index-rebalance-event-study) | 围绕指数纳入、剔除和权重调整公告或生效日运行可复现事件研究。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-index-valuation-rotation](https://github.com/quantskills/skill-index-valuation-rotation) | 分析A股指数估值分位、行业相对估值和轮动线索。 | reporting | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-index-valuation-rotation.png"><img src="assets/skill-index-valuation-rotation.png" width="260"></a> |

### 期货与商品（8）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-ag-futures-seasonality](https://github.com/quantskills/skill-ag-futures-seasonality) | 从农产品期货日线计算各月份历史季节性并叠加作物日历生成可视化报告。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-commodity-carry-cta](https://github.com/quantskills/skill-commodity-carry-cta) | 构建商品期货 carry、时序动量、横截面动量、基差动量和库存因子并回测轮动。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-futures-deepview-analyst](https://github.com/quantskills/skill-futures-deepview-analyst) | 将期货DeepView自然语言请求转为数据调用计划和事实与推断分离的报告。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-futures-hedgecraft](https://github.com/quantskills/skill-futures-hedgecraft) | 当需要设计、审查或排错期货对冲、期货仓位 sizing、合约移仓、基差/carry 分析、日历价差、保证金压力测试或 CTA 风格期货配置时，使用此 skill。适用于股指期货、商品期货、利率期货和跨期价差场景，重点处理合约乘数、名义本金、保证金、期限结构、交割规则和压力损失。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-futures-investment-council](https://github.com/quantskills/skill-futures-investment-council) | Futures research Skill for analyzing, comparing, and screening futures markets with technical indicators, futures structure, and committee-style reports. Use when Codex needs to analyze a futures symbol, compare futures symbols, screen futures candidates, explain signal changes, or generate a structured futures research report without stock analysis, auto-trading, or deterministic buy/sell promises. | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-global-commodity-term-structure](https://github.com/quantskills/skill-global-commodity-term-structure) | 用公开数据研究海外商品期货期限结构、展期收益和价差。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-oil-brief](https://github.com/quantskills/skill-oil-brief) | 整合期货、EIA、OPEC和市场数据生成中文原油简报。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-xingtai-catcher](https://github.com/quantskills/skill-xingtai-catcher) | 根据文字或图像描述检索相似的 A 股和期货 K 线形态。 | factor-screening | — | — | 待维护者审核 / 无公开端点 |  |

### 期权与可转债（3）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-cb-analyzer](https://github.com/quantskills/skill-cb-analyzer) | 分析 A 股可转债双低策略、条款事件、正股联动、Black-Scholes Greeks 与波动率。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-option-strategy-builder](https://github.com/quantskills/skill-option-strategy-builder) | 构建期权策略腿组合、损益图、盈亏平衡、希腊字母和保证金分析。 | portfolio-construction | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-options-vol-analyst](https://github.com/quantskills/skill-options-vol-analyst) | 分析期权链、隐含与历史波动率、期限结构、偏度和波动率溢价。 | modeling | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-options-vol-analyst.png"><img src="assets/skill-options-vol-analyst.png" width="260"></a> |

### 宏观与跨资产（4）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-global-macro-rates-fx-lab](https://github.com/quantskills/skill-global-macro-rates-fx-lab) | 以公开利率、央行和外汇数据生成可溯源的全球宏观格局简报。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-macro-altdata-nowcast](https://github.com/quantskills/skill-macro-altdata-nowcast) | 利用宏观另类高频数据进行行业景气度现在预测和趋势观察。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-macro-futures-scenario-analysis](https://github.com/quantskills/skill-macro-futures-scenario-analysis) | 基于 PandaData 的宏观事件—期货预期分析：读取宏观经济日历的实际值、市场预期与前值，结合期货价格、成交量、持仓量、基差、期限结构、库存与仓单，对沪金、沪铜、原油及用户指定品种输出基准、偏强、偏弱情景。当用户询问「美国CPI对期货影响」「宏观事件期货预期」「美联储对商品影响」「期货供需与宏观共振」「事件公布前情景」时触发。仅作条件化研究，不承诺涨跌或生成自动交易指令。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-macro-monitor](https://github.com/quantskills/skill-macro-monitor) | 监测宏观数据、行业景气、经济日历和周期性宏观变化。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |

</details>

<a id="cat-04"></a>
<details>
<summary><strong>04 风险监控与预警</strong> — 22 项资产，含截图 1</summary>

### 市场状态（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-market-regime-analysis](https://github.com/quantskills/skill-market-regime-analysis) | 结合指数、宏观、期货期限结构和波动率特征划分A股市场状态。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |

### 资金与拥挤（5）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-b7-lhb-monitor](https://github.com/quantskills/skill-b7-lhb-monitor) | 监控龙虎榜与席位标签，生成次日关注清单和可筛选的个股详情看板。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-block-trade-radar](https://github.com/quantskills/skill-block-trade-radar) | 按大宗交易折溢价、成交量和价格证据生成 A 股个股雷达报告。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-capital-flow-crowding-monitor](https://github.com/quantskills/skill-capital-flow-crowding-monitor) | 聚合融资融券、北向持股和大宗交易，计算资金一致性、背离与拥挤度分位信号。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-northbound-margin-monitor](https://github.com/quantskills/skill-northbound-margin-monitor) | 监测北向资金、融资融券和期货全景的多类风险信号。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-smart-money-profiler](https://github.com/quantskills/skill-smart-money-profiler) | 分析龙虎榜席位、北向行为与资金共识或分歧。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |

### 流动性风险（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-portfolio-liquidity-stress-test](https://github.com/quantskills/skill-portfolio-liquidity-stress-test) | 在成交量压力下估算组合清算天数、期限内变现、赎回缺口和冲击成本。 | risk | — | — | 待维护者审核 / 无公开端点 |  |

### 公司事件（4）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-buyback-monitor](https://github.com/quantskills/skill-buyback-monitor) | 监测 A 股回购公告生命周期、用途、价格区间和强度并整理研究结果。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-event-risk-alert](https://github.com/quantskills/skill-event-risk-alert) | 对自选或持仓清单扫描解禁、质押、增减持和业绩等事件风险。 | monitoring | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-event-risk-alert.png"><img src="assets/skill-event-risk-alert.png" width="260"></a> |
| [skill-klarman-special-situations](https://github.com/quantskills/skill-klarman-special-situations) | 按特殊情况投资框架研究定增解禁、重组、分拆和困境反转事件。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-refinancing-monitor](https://github.com/quantskills/skill-refinancing-monitor) | 跟踪 A 股再融资生命周期、定价和稀释风险。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |

### 监管合规（3）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-audit-opinion-scanner](https://github.com/quantskills/skill-audit-opinion-scanner) | 从审计意见、财务报表和行业对标评估 A 股财务健康并输出风险检查结果。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-csrc-approval-pipeline](https://github.com/quantskills/skill-csrc-approval-pipeline) | A 股证监会批文进度追踪：按公告级别分类、审批流程监控、批文状态报告生成。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-regulatory-risk-radar](https://github.com/quantskills/skill-regulatory-risk-radar) | 汇总 A 股监管与合规风险事件并进行分级。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |

### 组合压力测试（6）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-derivatives-pricing-stochastic-calculus](https://github.com/quantskills/skill-derivatives-pricing-stochastic-calculus) | 输入期权合约与市场参数，输出可复现的定价与风险报告：BSM 解析价、全套希腊字母、二叉树与蒙特卡洛数值价、隐含波动率、平价与无套利校验，一次算清。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-guarantee-risk-scan](https://github.com/quantskills/skill-guarantee-risk-scan) | A 股累计担保风险扫描：担保比率、超额担保、高负债率担保占比监控与预警报告。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-portfolio-checkup](https://github.com/quantskills/skill-portfolio-checkup) | 汇总持仓集中度、基准偏离、估值、质量和风险暴露生成组合健康报告。 | risk | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-quant-portfolio-risk](https://github.com/quantskills/skill-quant-portfolio-risk) | 分析组合风险暴露、约束和压力情景。 | risk | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-risk-model](https://github.com/quantskills/skill-risk-model) | 构建多因子风险模型并进行风险归因。 | risk | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-rolling-beta-exposure](https://github.com/quantskills/skill-rolling-beta-exposure) | 估计资产或组合相对于基准的滚动贝塔暴露。 | risk | — | — | 待维护者审核 / 无公开端点 |  |

### 自动预警（2）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-a-share-market-risk-radar](https://github.com/quantskills/skill-a-share-market-risk-radar) | 扫描 A 股宏观、资金、估值、趋势、行业轮动与个股事件并汇总风险等级。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-b6-limitup-pool](https://github.com/quantskills/skill-b6-limitup-pool) | 维护每日涨停池，记录首板、连板、炸板、回封、题材和情绪指标并生成看板。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |

</details>

<a id="cat-05"></a>
<details>
<summary><strong>05 策略回测与交易工具</strong> — 25 项资产，含截图 2</summary>

### 策略与信号（4）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-global-macro-trend-strategy](https://github.com/quantskills/skill-global-macro-trend-strategy) | 将海外信号和公开日线价格转为可回测的研究策略、仓位和风控规则。 | backtesting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-ma-crossover-signal](https://github.com/quantskills/skill-ma-crossover-signal) | 计算均线交叉交易信号并提供回测评估。 | factor-generation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-oversold-rebound](https://github.com/quantskills/skill-oversold-rebound) | 判断A股短期超跌反弹环境并筛选候选股票。 | factor-screening | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-qbti](https://github.com/quantskills/skill-qbti) | 通过五部分问答将用户偏好转换为因子方向和策略参数。 | portfolio-construction | — | — | 待维护者审核 / 无公开端点 |  |

### 组合构建（7）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-dalio-all-weather](https://github.com/quantskills/skill-dalio-all-weather) | 针对A股股票、债券、黄金和商品资产提供全天候配置与回测流程。 | portfolio-construction | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-portfolio-blacklitterman](https://github.com/quantskills/skill-portfolio-blacklitterman) | Black-Litterman 组合优化 —— 用户问「跑一下 BL 组合」「基于视图的组合权重」「相对沪深300 的主动配置」「动量/反转/换手视图对权重的影响」类问题时触发。以沪深300 指数权重为先验，用动量/反转/换手率三条因子视图更新，输出长权重组合，按「样式② 结构化播报」呈现给用户。 | risk | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-portfolio-cvar-optim](https://github.com/quantskills/skill-portfolio-cvar-optim) | 当需要开发、计算、验证 CVaR 尾部风险最小化组合时，使用此 skill。在预期收益约束下最小化组合 95% CVaR，支持极值理论(EVT/GPD)尾部补样、组合权重求解、样本外验证。 | risk | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-portfolio-optimize](https://github.com/quantskills/skill-portfolio-optimize) | 将alpha信号转为受权重、行业、暴露和换手约束的优化组合权重。 | portfolio-construction | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-portfolio-risk-parity](https://github.com/quantskills/skill-portfolio-risk-parity) | 当需要开发、计算、验证风险平价（等风险贡献 ERC）组合时使用。手写 Ledoit-Wolf 收缩协方差稳定相关性，scipy SLSQP 求 ERC 权重，支持指数/期货/ETF 三类资产与月度 rebalance。 | risk | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-rl-portfolio-allocator](https://github.com/quantskills/skill-rl-portfolio-allocator) | skill rl portfolio allocator | risk | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-signal-portfolio-optimize](https://github.com/quantskills/skill-signal-portfolio-optimize) | 将单个股票信号转换为受基准相对风险、风格、行业、换手和成本约束的可审计组合权重。 | portfolio-construction | — | — | 待维护者审核 / 无公开端点 |  |

### 回测引擎（2）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-backtest](https://github.com/quantskills/skill-backtest) | 提供横截面多头回测协议，固定 T+1 开盘成交、费用、涨跌停剔除与诊断图表。 | backtesting | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-backtest.png"><img src="assets/skill-backtest.png" width="260"></a> |
| [skill-factor-backtest](https://github.com/quantskills/skill-factor-backtest) | 对给定因子和行情数据执行long-only横截面因子回测并生成诊断报告。 | backtesting | — | — | 待维护者审核 / 无公开端点 |  |

### 绩效归因（4）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-portfolio-attribution](https://github.com/quantskills/skill-portfolio-attribution) | 将组合主动收益分解为行业配置、个股选择、交互效应和因子贡献。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-portfolio-pnl-attribution](https://github.com/quantskills/skill-portfolio-pnl-attribution) | 按证券和行业归因组合已实现收益，并对账费用、基准和输入质量。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-risk-return-metrics](https://github.com/quantskills/skill-risk-return-metrics) | 计算投资组合或策略的风险收益指标。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-strategy-tearsheet-report](https://github.com/quantskills/skill-strategy-tearsheet-report) | 生成包含风险调整指标的策略绩效 tearsheet。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |

### 交易成本（3）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-strategy-capacity-tca](https://github.com/quantskills/skill-strategy-capacity-tca) | 用成交与 ADV 估计参与率、平方根/线性冲击成本与容量曲线，回答「策略能承载多少资金、成本何时吃掉 alpha」——估计非保证，不作交易建议。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-transaction-cost-analysis](https://github.com/quantskills/skill-transaction-cost-analysis) | 将成交记录相对 VWAP/TWAP 分解为多类交易成本。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-transaction-cost-calibration](https://github.com/quantskills/skill-transaction-cost-calibration) | 从成交和市场数据校准佣金、价差、滑点与冲击成本假设。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |

### 微观结构（2）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-microstructure-vwap-deviation](https://github.com/quantskills/skill-microstructure-vwap-deviation) | Minute-bar VWAP deviation strategy research and auditable SSQuant futures validation. Use for rolling VWAP deviation signals, confirmed mean reversion, trend guards, next-bar execution, execution-cost modeling, frozen-data backtests, and trade-result review. | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-quant-execution-microstructure](https://github.com/quantskills/skill-quant-execution-microstructure) | 将已批准的交易目标转化为可观测的成本感知执行方案。 | execution | — | — | 待维护者审核 / 无公开端点 |  |

### 仓位与订单（2）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-b11-auto-stop-loss-take-profit](https://github.com/quantskills/skill-b11-auto-stop-loss-take-profit) | 按入场日期和开盘价规则判断止盈、止损、强平，并控制单票仓位上限。 | execution | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-b12-intraday-position-manager](https://github.com/quantskills/skill-b12-intraday-position-manager) | 在日内交易中按可卖与锁定数量、价格和现金管理多标的仓位。 | execution | — | — | 待维护者审核 / 无公开端点 |  |

### 模拟与实盘执行（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-ssquant-ai-trader](https://github.com/quantskills/skill-ssquant-ai-trader) | 组织 SSQuant 策略研究、模拟交易和运行检查。 | execution | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-ssquant-ai-trader.png"><img src="assets/skill-ssquant-ai-trader.png" width="260"></a> |

</details>

<a id="cat-06"></a>
<details>
<summary><strong>06 投研模型与研究复现</strong> — 30 项资产，含截图 6</summary>

### 论文复现（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-paper-replication](https://github.com/quantskills/skill-paper-replication) | 支持论文检索、数据提取、实验复现和研究结果报告。 | modeling | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-paper-replication.png"><img src="assets/skill-paper-replication.png" width="260"></a> |

### 策略复现（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-report-replication](https://github.com/quantskills/skill-report-replication) | 指导将研究报告转化为可复现的分析流程。 | modeling | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-report-replication.png"><img src="assets/skill-report-replication.png" width="260"></a> |

### 统计与机器学习模型（11）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-dl-autoencoder-anomaly](https://github.com/quantskills/skill-dl-autoencoder-anomaly) | 深度自编码器无监督异常检测 —— 用户问「今天哪些股票走势最异常」「沪深300 异常股」「AE 跑一下」「找不像自己往常样子的股票」类问题时触发。对沪深300成分股用最近60日窗口重训一个MLP自编码器，输出T日重建误差Top-10异常股，按「样式② 结构化播报」呈现。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-dl-gnn-stock-graph](https://github.com/quantskills/skill-dl-gnn-stock-graph) | 构建A股多层异构图并使用图神经网络进行量化选股与回测。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-dl-tcn-shortterm](https://github.com/quantskills/skill-dl-tcn-shortterm) | 使用因果扩张 Temporal Convolutional Network 对沪深 A 股分钟线执行未来 1、2、3、5 个交易日的横截面收益排序研究，并以同数据、切分和预算的 LSTM 作为基准，生成可审计的数据、训练、速度和预测效果证据。用于运行或诊断 TCN 短线预测、核验感受野与因果卷积、PIT/walk-forward/purge/embargo、防止未来泄漏、比较 RankIC/Top 区域指标与训练吞吐，或判断研究模型是否达到冻结候选条件；不用于组合换手优化、券商连接、实盘交易或收益承诺。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-dl-transformer-multiasset](https://github.com/quantskills/skill-dl-transformer-multiasset) | skill dl transformer multiasset | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-llm-rag-financial-qa](https://github.com/quantskills/skill-llm-rag-financial-qa) | 财报公告 RAG 问答系统——就一家 A 股公司的财报/公告提问，给出带官方引用、可核对、拒绝编造的回答。三路路由（数字精确算 / 底仓文本检索 / 官方全文按需）+ 引用纪律 + 拒答。数据源 PandaData 优先、官方披露网页为次级源。BUILD 型 skill，可被复盘 agent 或投研 agent 调用。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-ml-purged-cv](https://github.com/quantskills/skill-ml-purged-cv) | 审计任意金融特征、可训练时序模型或候选策略收益，并执行防泄漏的 Purged K-Fold、Embargo、CPCV、Causal Walk-Forward、PBO、DSR、Governed Holdout 与 Temporal Forward Evidence。用于检查未来函数、信息区间重叠、特征可用时间和血缘、Fold-Local 预处理、CPCV Path 稳健性、策略选择过拟合、预测是否在标签成熟前登记，以及在接受金融模型或策略前生成结构化验证证据。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-model-hpo-evidence-driven](https://github.com/quantskills/skill-model-hpo-evidence-driven) | 以固定验证流程和试验级证据优化量化多因子模型超参数。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-pair-correlation](https://github.com/quantskills/skill-pair-correlation) | 计算和解释资产对的相关性、滚动关系及其研究用途。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-simons-pairs-trading](https://github.com/quantskills/skill-simons-pairs-trading) | 研究 A 股配对交易的协整、价差和执行约束。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-statistical-arbitrage-time-series](https://github.com/quantskills/skill-statistical-arbitrage-time-series) | 构建统计套利时间序列研究并生成可追溯报告。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-time-series-analysis](https://github.com/quantskills/skill-time-series-analysis) | 对金融时间序列进行诊断并生成分析报告。 | modeling | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-time-series-analysis.png"><img src="assets/skill-time-series-analysis.png" width="260"></a> |

### 投资者研究模型（15）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-ah-share-relative-value-montior](https://github.com/quantskills/skill-ah-share-relative-value-montior) | 监控A/H双重上市股票的汇率调整溢价、历史极值、脱钩与日频价格发现关系。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-etf-flow-radar](https://github.com/quantskills/skill-etf-flow-radar) | 每日盘后 ETF 资金流雷达 —— 用户问「今天/最近 ETF 有什么异动」「ETF 资金流看下」「哪些 ETF 在被大量申购/赎回」「ETF 净申赎异动」类问题时触发。扫描主流权益 ETF，输出三类信号（净申赎异动 / 折溢价背离 / 连续多日大额同向），以「样式② 结构化播报」呈现给用户。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-gaetano-crux-capital-research-model](https://github.com/quantskills/skill-gaetano-crux-capital-research-model) | 以公开资料拆解光子、光网络和AI基础设施公司的研究证据与风险。 | modeling | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-gaetano-crux-capital-research-model.png"><img src="assets/skill-gaetano-crux-capital-research-model.png" width="260"></a> |
| [skill-gao-shanwen-research-model](https://github.com/quantskills/skill-gao-shanwen-research-model) | 整理、检索和学习高善文公开著作与文章。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-investment-decision](https://github.com/quantskills/skill-investment-decision) | 整合研究证据、估值和风险信息，形成可追溯的投资决策报告。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-keynes-contrarian-investment](https://github.com/quantskills/skill-keynes-contrarian-investment) | 运用长期预期和反共识框架识别过度乐观、悲观及价值陷阱。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-kline-pattern-vision](https://github.com/quantskills/skill-kline-pattern-vision) | 用截图或只读 PandaData 行情识别股票/期货K线趋势结构、蜡烛线和候选图表形态，支持日线与1/5/10/15/30/60分钟线，输出证据、确认条件、失效条件和不确定性。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-munger-mental-model](https://github.com/quantskills/skill-munger-mental-model) | 运用多元思维模型框架生成公司投资研究和判断报告。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-performance-attribution](https://github.com/quantskills/skill-performance-attribution) | A股量化策略绩效归因：三层综合归因（Alpha/Beta/择时 + Brinson 配置/选择/交互 + 因子收益归因含风格行业与 Alpha 残差），输出统一归因报告并做分解对账。与 skill-risk-model（风险归因）互补。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-rotation-radar](https://github.com/quantskills/skill-rotation-radar) | 当需要分析市场状态、行业轮动、ETF 强弱排序、市场宽度、风格切换或战术配置信号时，使用此 skill。适用于 A 股、港股、美股和 ETF 池的行业轮动分析、risk-on/risk-off 状态识别、相对强弱排名、宽度确认、假突破过滤和轮动失效条件设计。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-serenity-research-model](https://github.com/quantskills/skill-serenity-research-model) | 从公开 X/Twitter 证据重建 Serenity 风格的研究逻辑。 | modeling | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-serenity-research-model.png"><img src="assets/skill-serenity-research-model.png" width="260"></a> |
| [skill-shortterm-mean-reversal](https://github.com/quantskills/skill-shortterm-mean-reversal) | A 股五交易日收益率横截面反转因子与成本敏感回测。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-tqx-research](https://github.com/quantskills/skill-tqx-research) | skill tqx research | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-trendline-breakdown-reversal](https://github.com/quantskills/skill-trendline-breakdown-reversal) | 计算A股日线下跌突破划线压力位反转因子，识别下破下降压力线后反转确认的个股；当用户提供交易日期、要求自动获取当日全市场A股行情、量化选股、因子研究或回测时使用。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-x-trader-builder](https://github.com/quantskills/skill-x-trader-builder) | 从公开 X/Twitter 帖子数据构建交易者专属研究模型技能。 | orchestration | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-x-trader-builder.png"><img src="assets/skill-x-trader-builder.png" width="260"></a> |

### 实验登记与可重复研究（2）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-quant-research](https://github.com/quantskills/skill-quant-research) | 指导量化研究、回测设计和统计验证工作流。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-quant-research-experiment-registry](https://github.com/quantskills/skill-quant-research-experiment-registry) | 登记量化实验并审计其可复现性证据。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |

</details>

<a id="cat-07"></a>
<details>
<summary><strong>07 研究验证与质量工具</strong> — 12 项资产，含截图 1</summary>

### 前视与数据泄漏（2）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-backtesting-bias-avoidance](https://github.com/quantskills/skill-backtesting-bias-avoidance) | 构建无前视偏差的回测并审计前视、幸存者、过拟合、成本和样本外检验风险。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-numerical-leak-check](https://github.com/quantskills/skill-numerical-leak-check) | 通过数值测试检测量化研究流程中的前视和数据泄漏。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |

### 幸存者偏差（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-survivorship-universe-auditor](https://github.com/quantskills/skill-survivorship-universe-auditor) | 审计回测前的点时证券池成员、标识和退市收益数据。 | data-quality | — | — | 待维护者审核 / 无公开端点 |  |

### Walk-forward 与 OOS（2）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-backtest-overfit](https://github.com/quantskills/skill-backtest-overfit) | 评估回测过拟合与多重检验风险，计算 DSR、PBO、净化交叉验证和 Harvey-Liu 折减。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-walk-forward-validator](https://github.com/quantskills/skill-walk-forward-validator) | 用净化和隔离的滚动窗口验证截面信号的样本外表现。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |

### 信号稳定性（3）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-calendar-anomaly-scanner](https://github.com/quantskills/skill-calendar-anomaly-scanner) | 从带日期收益序列扫描日历异常，结合稳健检验、Bootstrap 和多重检验校正输出结果。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-factor-decay](https://github.com/quantskills/skill-factor-decay) | 分析多期限Rank IC、换手和分组收益的衰减，并估计半衰期。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-signal-stability-audit](https://github.com/quantskills/skill-signal-stability-audit) | 审计量化信号跨期和跨样本的稳定性。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |

### 预测校准（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-forecast-calibration-audit](https://github.com/quantskills/skill-forecast-calibration-audit) | 审计概率预测的校准程度，而非只评估样本排序。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |

### 数值与模型审计（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-factor-debug](https://github.com/quantskills/skill-factor-debug) | 提供按症状、病因和验证手段组织的因子失效诊断手册。 | evaluation | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-factor-debug.png"><img src="assets/skill-factor-debug.png" width="260"></a> |

### 工作流审计（2）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-backtest-assumption_check](https://github.com/quantskills/skill-backtest-assumption_check) | 独立的回测假设审计师：对回测代码/策略代码/研究报告按九大维度（成交时点、成本、涨跌停停牌、幸存者、多重比较、数据对齐、换手容量、基准、透明）逐条取证，输出缺陷×证据×严重度×影响×修复清单，配套可运行校验脚本。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-pandaai-workflow-audit](https://github.com/quantskills/skill-pandaai-workflow-audit) | 审计PandaAI工作流的图结构、代码、时序、参数和回测验证证据。 | evaluation | — | — | 待维护者审核 / 无公开端点 |  |

</details>

<a id="cat-08"></a>
<details>
<summary><strong>08 资讯搜索与知识分析</strong> — 10 项资产，含截图 1</summary>

### 新闻与公告（5）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-disclosure-event-extractor](https://github.com/quantskills/skill-disclosure-event-extractor) | Turn unstructured A-share disclosure text from cninfo (巨潮) and the SSE/SZSE exchanges into a traceable, structured event table (监管问询/诉讼担保/重组/治理/ 停牌控制权变更/增减持/质押/业绩预告). Use when the user asks to scan A-share announcements, find 关注函/问询函/诉讼/停牌/易主 events, build an event table for factor or alert pipelines, or backtest disclosure events. Fills the information-search gap Pandadata does not cover. | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-earnings-event-study](https://github.com/quantskills/skill-earnings-event-study) | 对财报/公司事件做正式 CAR 事件研究：异常收益、多窗口累计异常收益、截面 t 检验与符号检验；披露样本量与模型，不输出买卖建议。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-earnings-season-tracker](https://github.com/quantskills/skill-earnings-season-tracker) | 在财报季扫描业绩预告、行业分布和审计非标事项。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-fin-news](https://github.com/quantskills/skill-fin-news) | 聚合财经快讯和市场数据，精选头条并撰写分析文章。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-news-sentiment-analyst](https://github.com/quantskills/skill-news-sentiment-analyst) | 采集、核验并分析A股财经新闻情绪，生成研究报告。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |

### 机构研究（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-institutional-research-tracker](https://github.com/quantskills/skill-institutional-research-tracker) | 监测A股机构调研活动、关注度及其变化。 | monitoring | — | — | 待维护者审核 / 无公开端点 |  |

### 每日复盘（4）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-daily-report](https://github.com/quantskills/skill-daily-report) | 汇总多个市场的行情、板块、资金和新闻数据，生成每日 Markdown 复盘报告。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-market-daily-review](https://github.com/quantskills/skill-market-daily-review) | 生成基于Pandadata的A股收盘后每日市场复盘报告。 | reporting | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-market-daily-review.png"><img src="assets/skill-market-daily-review.png" width="260"></a> |
| [skill-strategy-performance-report](https://github.com/quantskills/skill-strategy-performance-report) | Use when an agent needs to generate a periodic performance report for a LIVE A-share quant strategy — 日报/周报/月报/半年报/年报 or custom period — covering returns, risk, trade analysis, and position/turnover detail, with embedded visualizations. Outputs a self-contained offline HTML dashboard (interactive ECharts) plus Markdown + JSON. | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-trade-review](https://github.com/quantskills/skill-trade-review) | 把交易流水转成结构化复盘结果，包含归因、逐笔点评、错误模式、建议和可选 LLM 总结。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |

</details>

<a id="cat-09"></a>
<details>
<summary><strong>09 量化智能体与自动化</strong> — 14 项资产，含截图 5</summary>

### 研究 Agent（3）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [agent-correlation-break-research](https://github.com/quantskills/agent-correlation-break-research) | 用 Pandadata 多资产收益相关性变化识别风格切换、分散化压力与结构性行情。 | monitoring | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-correlation-break-research.png"><img src="assets/agent-correlation-break-research.png" width="260"></a> |
| [agent-feng-reverse](https://github.com/quantskills/agent-feng-reverse) | 追踪微博"峰哥亡命天涯"的发言，提取股票/市场观点，生成反向操作信号。峰哥是A股知名反向指标，其公开观点具有稳定的反向参考价值。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [agent-macro-driven-rotation](https://github.com/quantskills/agent-macro-driven-rotation) | 以改进美林时钟定相、景气 Nowcast 和估值过滤生成宏观驱动行业轮动研究材料。 | modeling | — | — | 待维护者审核 / 无公开端点 |  |

### 监控与风险 Agent（7）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [agent-alpha-portfolio-guardian](https://github.com/quantskills/agent-alpha-portfolio-guardian) | 多因子组合健康度守卫：健康度矩阵 + 拥挤警示 + 退休/重构候选 + IC 衰减曲线，含守卫规则有效性回测 L4。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [agent-corporate-governance-scanner](https://github.com/quantskills/agent-corporate-governance-scanner) | 公司治理综合评分 Agent，9维度治理风险打分+证据链 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [agent-crowding-risk-monitor](https://github.com/quantskills/agent-crowding-risk-monitor) | 用 Pandadata 价格、成交、融资和龙虎榜热度识别抱团、过热、踩踏与去杠杆风险。 | monitoring | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-crowding-risk-monitor.png"><img src="assets/agent-crowding-risk-monitor.png" width="260"></a> |
| [agent-derivatives-skew-sentiment-monitor](https://github.com/quantskills/agent-derivatives-skew-sentiment-monitor) | 用期权隐含波动率和标的历史波动率观察衍生品市场风险偏好。 | monitoring | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-derivatives-skew-sentiment-monitor.png"><img src="assets/agent-derivatives-skew-sentiment-monitor.png" width="260"></a> |
| [agent-earnings-surprise-hunter](https://github.com/quantskills/agent-earnings-surprise-hunter) | 财报季 Surprise/暴雷猎手 Agent。获取财报预告、一致预期、审计意见，计算偏离度并生成分析报告。支持A股/港股/美股。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [agent-intraday-rl-timing](https://github.com/quantskills/agent-intraday-rl-timing) | 纯研究的日内强化学习实验台：分钟数据建 Gym 环境 + 基线策略(TWAP/动量/反转) + 防泄漏 walk-forward 训练评估，绝不实盘下单。 | reporting | — | — | 待维护者审核 / 无公开端点 |  |
| [agent-market-regime-monitor](https://github.com/quantskills/agent-market-regime-monitor) | 用 Pandadata 行情、指数宽度、波动率和资金证据判断趋势、震荡、退潮或风险扩张状态。 | monitoring | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-market-regime-monitor.png"><img src="assets/agent-market-regime-monitor.png" width="260"></a> |

### 交易执行 Agent（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [agent-ssquant](https://github.com/quantskills/agent-ssquant) | SSQuant Agent 组织期货策略、数据服务、CTP 门禁检查和中文回测报告工作流。 | execution | — | — | 待维护者审核 / 无公开端点 |  |

### 工作流编排 Agent（3）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [agent-for-liangshuyuan-tasks](https://github.com/quantskills/agent-for-liangshuyuan-tasks) | 面向量枢院任务的多 Agent 协作框架，组织量化交易工具、构建流程与任务分工。 | orchestration | — | — | 待维护者审核 / 无公开端点 |  |
| [agent-future-trading](https://github.com/quantskills/agent-future-trading) | 多智能体期货研究、策略生成、历史回测与研究反馈工作流 | orchestration | — | — | 待维护者审核 / 无公开端点 |  |
| [agent-quantspace](https://github.com/quantskills/agent-quantspace) | 面向 AI 编码代理的量化研究框架，组织数据、技能、策略、回测和报告工作流。 | orchestration | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/agent-quantspace.png"><img src="assets/agent-quantspace.png" width="260"></a> |

</details>

<a id="cat-10"></a>
<details>
<summary><strong>10 基础设施与模板</strong> — 6 项资产，含截图 1</summary>

### Skill 模板（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-template](https://github.com/quantskills/skill-template) | 提供 QuantSkills 技能项目的模板结构和说明。 | orchestration | — | — | 待维护者审核 / 无公开端点 |  |

### Agent 模板（1）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [agent-template](https://github.com/quantskills/agent-template) | 用于创建可移植 QuantSkills 智能体项目的规范模板。 | orchestration | — | — | 待维护者审核 / 无公开端点 |  |

### 构建与发布工具（4）

| 项目 | 双语摘要 | 主阶段 | 输入 | 输出 | 接口状态 | 截图 |
|---|---|---|---|---|---|---|
| [skill-jq-to-panda-converter](https://github.com/quantskills/skill-jq-to-panda-converter) | 将聚宽量化策略代码转换为可运行回测的PandaAI JSON策略配置。 | orchestration | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-pandaai-workflow-generator](https://github.com/quantskills/skill-pandaai-workflow-generator) | 根据量化想法生成可导入PandaAI的工作流JSON及策略或因子代码。 | orchestration | — | — | 待维护者审核 / 无公开端点 |  |
| [skill-quant-factor-skill-factory](https://github.com/quantskills/skill-quant-factor-skill-factory) | 批量生成、验证并打包框架中立的 OHLCV 因子技能。 | orchestration | — | — | 待维护者审核 / 无公开端点 | <a href="https://raw.githubusercontent.com/quantskills/quantskills/main/assets/skill-quant-factor-skill-factory.png"><img src="assets/skill-quant-factor-skill-factory.png" width="260"></a> |
| [skill-ssquant-trader-generator](https://github.com/quantskills/skill-ssquant-trader-generator) | 将自然语言交易想法转换为可复用的 Trader Skill，并委托模拟部署流程。 | orchestration | — | — | 待维护者审核 / 无公开端点 |  |

</details>

## 基础设施与社区入口

| Project | Link |
|---|---|
| .github | [https://github.com/quantskills/.github](https://github.com/quantskills/.github) |
| join | [https://github.com/quantskills/join](https://github.com/quantskills/join) |
| quantskills | [https://github.com/quantskills/quantskills](https://github.com/quantskills/quantskills) |
| registry | [https://github.com/quantskills/registry](https://github.com/quantskills/registry) |

---
## 🐼 PandaAI 社群
<div align="center">
  <img src="assets/pandaai-community-qr.jpg" alt="PandaAI 社群二维码" width="220">
  <br>
  <sub>扫码加入 PandaAI 社群，交流 QUANTSKILLS 技能、Agent 工作流与量化研究实践。</sub>
</div>
<!-- CATALOG:END -->

## 维护与许可

维护者：[quantskills-GuoYJ](https://github.com/quantskills-GuoYJ) 与 QuantSkills 社区。目录内容以各资产仓库声明的许可证为准；本导航仓库请参见其 [LICENSE](LICENSE)。
