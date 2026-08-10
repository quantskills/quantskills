# QuantSkills 目录、接口契约与迁移设计

- 状态：已批准的设计定稿；不构成实施或发布授权
- 日期：2026-08-10
- 适用范围：QuantSkills 组织目录、Skill/Agent 项目声明、接口契约、README 与 GitHub Pages 导航

## 1. Context

本设计以 2026-08-10 的盘点为基线。计数是日期快照，会随仓库新增、归档和元数据修订而变化，实施时必须重新生成同口径快照，不得把本文数字写死为长期常量。

| 项目 | 快照 |
|---|---:|
| GitHub 公开仓库 | 162：149 个 `skill-*`、9 个 `agent-*`、4 个组织基础设施仓库 |
| 强制迁移的 Skill/Agent 资产 | 158 |
| 当前本地 registry | 103 条，其中 23 条 `uncategorized` |
| 已设置 Topics | 16 / 158 |
| 可读的 Skill 根 `SKILL.md` | 148 / 149 |
| 显式声明结构化输入契约的 Skill | 41 |
| GitHub description 互斥审计 | 158：仅英文 70、仅中文 5、中英混合 47、空 26、过长 10 |
| 其他描述质量问题 | 另有 10 条泛化或仅复述仓库名；该标记可与非空语言分组重叠 |

当前目录把领域分类、流程位置、展示简介和接口能力混在多处维护，导致分类回退、展示不一致，以及“名称看起来能衔接”却没有机器可验证契约的问题。本设计用契约优先、仓库声明、Registry 生成的单向模型解决这些问题。

## 2. Goals 与 Non-goals

### Goals

1. 为 158 个 Skill/Agent 建立完整、可验证、双语的目录声明。
2. 保留稳定的 01–10 一级领域目录，以二级分类细化发现路径，以 14 个流程阶段支持跨领域组合。
3. 为结构化 Skill 建立统一 Envelope v1、版本化 Profile 和兼容性判定；允许纯自然语言、报告或编排项目明确声明 `not-applicable`。
4. 让 `registry.json`、README、Pages 和经授权更新的 GitHub 元数据都由同一份已验证声明生成。
5. 在迁移过程中保持故障安全、可审计和跨 Cursor、Claude Code、Codex、Hermes、OpenClaw 的结构兼容。

### Non-goals

- 本文不重写各 Skill 的研究逻辑，不以 `qsh-form` 替代数据契约，也不要求所有项目结构化。
- 五段流程视图不是新的一级目录，不能替代 01–10 分类。
- 本文不授予本地批量实施、提交、推送、启用 Pages、修改 GitHub description/Topics 或发布仓库的权限。
- 本设计不执行真实交易，不评价或承诺策略收益，也不授予“官方、认证、已验证、生产可用”等状态。

## 3. 权威来源与生成关系

权威顺序必须保持单向且无循环：

1. **Registry schema 与 Profile schema 是契约规范源**：定义字段、枚举、版本规则、Envelope、Profile 和校验条件。
2. **每个项目根声明是项目数据源**：Skill 使用根 `SKILL.md`，Agent 使用根 `AGENTS.md`；项目维护者在其中声明分类、阶段、双语摘要、运行时和接口。
3. **`registry.json` 是规范化生成物**：构建器读取根声明并按 schema 校验后生成，禁止人工修补。
4. **README、Pages 与 GitHub 元数据是展示镜像**：只消费同一个完整 registry 快照，不反向覆盖项目声明。
5. **`skill-template`、`agent-template` 是规范的适配入口**：模板必须通过 schema 校验，但模板本身不取代 schema。

158 个 `skill-*` / `agent-*` 是强制声明域。4 个组织基础设施仓库不是 Skill/Agent 接口契约对象，可在 10 类下作为受控组织资源显示，但不进入 `149/149`、`9/9` 的接口验收分母，也不得借 GitHub description 反向生成项目声明。

任何爬取、语言模型推断或旧分类只能形成迁移建议，不能成为已发布声明。项目名称、README 文案、Topics 和 `qsh-form` 都不能覆盖根声明。

## 4. 领域分类：稳定的 01–10

每个 Skill/Agent 必须且只能有一个 `category` 和一个属于该 category 的 `subcategory`。编号和机器 ID 是稳定标识；展示名称可做向后兼容的文字修订。09 正式命名为“量化智能体与自动化”。

| ID | 一级分类 | 二级分类（机器 ID：中文名） |
|---|---|---|
| 01 | 数据接口与数据仓库 | `01.data-source-connectors`：数据源与连接器；`01.warehouse-cache`：仓库与缓存；`01.normalization-master-data`：标准化与主数据；`01.market-data-governance`：行情数据治理；`01.pit-data-quality`：PIT 与数据质量 |
| 02 | 因子研发工具箱 | `02.factor-idea-generation`：因子创意；`02.factor-generation`：因子生成；`02.factor-preprocessing`：因子预处理；`02.factor-orthogonalization-blending`：正交与合成；`02.factor-selection`：因子筛选；`02.factor-evaluation`：因子评价；`02.factor-pool-online`：因子池与在线化 |
| 03 | 市场与标的分析 | `03.a-share-equity`：A 股；`03.hk-us-equity`：港股与美股；`03.etf-fund-index`：ETF、基金与指数；`03.futures-commodity`：期货与商品；`03.options-convertible-bond`：期权与可转债；`03.macro-cross-asset`：宏观与跨资产 |
| 04 | 风险监控与预警 | `04.market-regime`：市场状态；`04.flow-crowding`：资金与拥挤；`04.liquidity-risk`：流动性风险；`04.corporate-event`：公司事件；`04.regulatory-compliance`：监管合规；`04.portfolio-stress`：组合压力测试；`04.automated-alerts`：自动预警 |
| 05 | 策略回测与交易工具 | `05.strategy-signal`：策略与信号；`05.portfolio-construction`：组合构建；`05.backtest-engine`：回测引擎；`05.performance-attribution`：绩效归因；`05.transaction-costs`：交易成本；`05.market-microstructure`：微观结构；`05.position-orders`：仓位与订单；`05.paper-live-execution`：模拟与实盘执行 |
| 06 | 投研模型与研究复现 | `06.paper-replication`：论文复现；`06.strategy-replication`：策略复现；`06.statistical-ml-models`：统计与机器学习模型；`06.investor-research-models`：投资者研究模型；`06.experiment-reproducibility`：实验登记与可重复研究 |
| 07 | 研究验证与质量工具 | `07.lookahead-leakage`：前视与数据泄漏；`07.survivorship-bias`：幸存者偏差；`07.walk-forward-oos`：Walk-forward 与 OOS；`07.signal-stability`：信号稳定性；`07.forecast-calibration`：预测校准；`07.numerical-model-audit`：数值与模型审计；`07.workflow-audit`：工作流审计 |
| 08 | 资讯搜索与知识分析 | `08.news-disclosures`：新闻与公告；`08.institutional-research`：机构研究；`08.event-calendar`：事件日历；`08.daily-review`：每日复盘；`08.thematic-brief`：专题简报；`08.document-knowledge`：文档提取与知识整理 |
| 09 | 量化智能体与自动化 | `09.research-agent`：研究 Agent；`09.monitor-risk-agent`：监控与风险 Agent；`09.execution-agent`：交易执行 Agent；`09.workflow-orchestration-agent`：工作流编排 Agent；`09.development-review-agent`：开发与审查 Agent |
| 10 | 基础设施与模板 | `10.registry-navigation`：Registry 与导航；`10.skill-template`：Skill 模板；`10.agent-template`：Agent 模板；`10.governance-community`：组织治理与社区；`10.build-release-tooling`：构建与发布工具 |

不再把未知项目自动塞入 07 或 08。迁移期缺失值显示为“待迁移”，构建报告同时给出原因；最终发布门禁要求 158 项全部落入合法二级分类。

## 5. 流程标签与五段辅助视图

14 个流程阶段是交叉标签，不是目录层级。每仓必须有唯一 `primary_stage`，并可声明多个去重后的 `workflow_stages`；`primary_stage` 必须包含在 `workflow_stages` 中。

| 辅助视图 | 阶段机器值 |
|---|---|
| 数据基础 | `data-ingestion`、`data-quality` |
| 研究与信号 | `feature-engineering`、`factor-generation`、`factor-screening`、`modeling` |
| 组合与验证 | `portfolio-construction`、`backtesting`、`evaluation`、`risk` |
| 监测与交易 | `monitoring`、`execution`、`reporting` |
| 工作流编排 | `orchestration` |

五段名称仅由页面和 README 辅助索引按上述固定映射计算，不写成另一个 `category`。组合筛选允许 category、subcategory、stage、project type、runtime、Profile 和兼容性同时生效。

## 6. 项目声明 schema

新 schema 保留现有 `quantSkills` 命名空间，升级为 semver 管理的声明版本。受控对象使用封闭字段集合；未知键报错，避免拼写错误被静默忽略。以下结构化 Skill 示例展示规范形态：

```yaml
---
name: skill-factor-grouped-wrapper
description: Rank and refine candidate quantitative factors with grouped wrapper selection and reproducible evaluation evidence.
quantSkills:
  schema_version: 2.0.0
  organization: quantskills
  organization_url: https://github.com/quantskills
  repository: skill-factor-grouped-wrapper
  repository_url: https://github.com/quantskills/skill-factor-grouped-wrapper
  project_type: skill
  collection: factor-research
  license: GPL-3.0-only
  maintainer: abgyjaguo
  catalog:
    category: "02"
    subcategory: 02.factor-selection
  workflow:
    primary_stage: factor-screening
    workflow_stages:
      - factor-generation
      - factor-screening
      - modeling
      - backtesting
      - evaluation
  summary_zh: 通过分组 Wrapper、模型训练与可复现评估证据筛选并精炼候选量化因子。
  summary_en: Rank and refine candidate quantitative factors with grouped-wrapper selection, model training, and reproducible evaluation evidence.
  status: active
  validation_level: listed
  maintainer_type: community
  platforms:
    - cursor
    - claude-code
    - codex
    - hermes
    - openclaw
  interface:
    mode: structured
    envelope:
      name: quantskills-envelope
      version: 1.0.0
    inputs:
      - profile: factor-panel
        version_range: ">=1.0.0 <2.0.0"
        required: true
      - profile: market-bar
        version_range: ">=1.0.0 <2.0.0"
        required: true
    outputs:
      - profile: ranked-factor-set
        version: 1.0.0
      - profile: evaluation-result
        version: 1.0.0
    adapters: []
---
```

输入声明版本范围，输出声明精确版本。`schema_version`、Envelope 和每个 Profile 分别独立使用 semver；任一 major 变化均视为潜在破坏性变化。`status`、`validation_level` 和 `maintainer_type` 不得推导出官方认可。`interface.mode` 的枚举为 `structured`、`hybrid`、`natural-language`、`not-applicable`：`hybrid` 表示同时存在机器数据与自然语言入口，`natural-language` 表示自然语言本身是可声明的组合接口，`not-applicable` 表示项目不参与接口组合。

没有机器可消费数据接口的项目使用：

```yaml
interface:
  mode: not-applicable
  reason: orchestration-only
```

`reason` 仅允许 `natural-language-only`、`report-only`、`orchestration-only`。若报告或编排实际接收或输出结构化数据，就必须使用 `structured`。`qsh-form` 只描述 quantskillhub 的交互表单，可与接口声明并存，但不参与 Profile、版本或兼容性判定。

## 7. Envelope v1 与 Profile

Envelope 统一承载契约标识、来源、标准视图、原始数据引用和质量结果；Profile 定义领域字段。二者分开版本化，避免为单一 Profile 变化升级整个 Envelope。

```json
{
  "$contract": {
    "envelope": "quantskills-envelope",
    "envelope_version": "1.0.0",
    "profile": "market-bar",
    "profile_version": "1.0.0"
  },
  "meta": {
    "dataset_id": "cn-equity-daily-2026-08-07",
    "producer": "skill-pandadata-warehouse",
    "generated_at": "2026-08-10T09:00:00+08:00",
    "as_of": "2026-08-07T15:00:00+08:00",
    "timezone": "Asia/Shanghai",
    "currency": "CNY",
    "calendar": "XSHG",
    "provenance": [{
      "provider": "PandaData",
      "dataset": "stock_daily",
      "raw_ref": "warehouse://pandadata/stock_daily/2026-08-07",
      "raw_sha256": "sha256:7d9c0af8207f1e7f3c5ef38f88e1c6204807c454d0fba24c4d77a756b743ea2d"
    }]
  },
  "schema": {
    "primary_key": ["instrument_id", "timestamp"],
    "fields": {
      "instrument_id": {"type": "string"},
      "timestamp": {"type": "string", "format": "date-time"},
      "open": {"type": "number"},
      "high": {"type": "number"},
      "low": {"type": "number"},
      "close": {"type": "number"},
      "volume": {"type": "number", "unit": "share"}
    }
  },
  "payload": {
    "records": [{
      "instrument_id": "XSHG:600000",
      "timestamp": "2026-08-07T15:00:00+08:00",
      "open": 10.21,
      "high": 10.48,
      "low": 10.17,
      "close": 10.42,
      "volume": 18234000
    }],
    "native": {
      "provider": "PandaData",
      "fields": ["symbol", "trade_date", "open", "high", "low", "close", "volume"],
      "raw_ref": "warehouse://pandadata/stock_daily/2026-08-07"
    }
  },
  "quality": {
    "status": "pass",
    "checks": ["primary-key-unique", "ohlc-consistent"],
    "warnings": []
  }
}
```

实际摘要值不得使用示例散列；schema 要求完整 SHA-256。Envelope 必须包含 `$contract`、`meta`、`schema`、`payload`、`quality`，时间使用带时区 ISO 8601，数值单位和币种不得靠上下文猜测。Profile schema 决定必填字段、键、单位和空值语义。

### 7.1 八个基础数据 Profile

| Profile | 主键/时间语义 | 核心内容 |
|---|---|---|
| `market-bar` | `instrument_id + timestamp` | OHLC、成交量/额、复权方式、频率、交易日历 |
| `fundamental-pit` | `instrument_id + period_end + available_at + statement_scope` | 点时可见财务值、公告/修订时间、口径和币种 |
| `factor-panel` | `instrument_id + timestamp + factor_id` | 因子值、方向、频率、截面范围、缺失与中性化说明 |
| `holdings` | `portfolio_id + instrument_id + as_of` | 数量、权重、成本、币种、现金和组合净值 |
| `macro-series` | `series_id + observation_date + vintage_date` | 宏观观测值、发布/修订批次、频率、单位和季调口径 |
| `option-chain` | `underlying_id + quote_time + expiry + strike + option_type` | 买卖价、成交、隐波、Greeks、合约乘数和行权方式 |
| `futures-contract` | `exchange + contract_id + trade_date` | 行情、结算、持仓、到期/交割、连续合约与换月映射 |
| `event-record` | `event_id + event_time + entity_id` | 事件类型、发布时间、来源、证据引用、去重键和置信边界 |

首批结果 Profile 为 `ranked-factor-set`、`model-artifact`、`portfolio-target`、`backtest-result`、`evaluation-result`、`risk-result`、`execution-plan`、`report-artifact`。它们与基础数据 Profile 使用同一 Envelope 和 semver 规则，但单独维护 schema；使用到某个结果 Profile 的链路必须同时提供对应 fixture 与验证测试。

### 7.2 PandaData 保真适配

PandaData provider-native 字段和原始值必须保留，adapter 只生成标准视图，不就地重命名或删列。仓库存储时，`payload.native.raw_ref` 指向不可变原始分区并记录完整散列；不能持久化引用时，使用 `raw_records` 内联完整原始记录。二者至少存在一种。映射表记录源字段、目标字段、单位换算、时区、复权和空值规则。

适配器测试必须证明：记录数与主键集合符合声明；未映射字段仍可从原始层恢复；数值、单位、币种、时区、复权、PIT 可见时间和期货换月语义未被静默改变。允许有损转换时不能标记为兼容，必须得到明确的新 Profile 或判为 `incompatible`。

### 7.3 兼容性状态

- `compatible`：Profile 相同，输出精确版本满足输入范围，Envelope major 相同，且必填字段、类型与语义校验通过。
- `adapter-required`：不能直连，但存在已注册、版本匹配且通过保真测试的 adapter 路径。
- `incompatible`：已知 major、字段或领域语义冲突，且没有合格 adapter；有损转换也归此类。
- `unknown`：声明缺失、版本无法解析、Profile 未识别或尚无验证证据。
- `not-applicable`：项目明确声明无结构化接口；它不是 `compatible` 的弱形式。

兼容性由 provider 的 output 与 consumer 的 input 成对计算，不能根据仓库名、简介、README 或 `qsh-form` 猜测。

## 8. 双语摘要、术语与风险文案

`summary_zh` 与 `summary_en` 是用户展示文案的权威字段。schema 硬限制分别为 8–120 和 8–200 个 Unicode code point；文案风格目标分别为 18–60 个汉字和 12–35 个英文单词。两者均为单行、无 Markdown、无链接。GitHub description 只生成一种格式：`中文｜English`；不截断、不补写，合成后不得超过 350 个 code point，超长即校验失败。

运行时 `description` 独立服务于触发判断，不要求逐字等于摘要，但能力范围、输入要求、输出和限制必须语义一致。术语表固定 `Skill`、`Agent`、`Envelope`、`Profile`、`adapter`、`PIT`、`TCA` 和 14 个阶段机器值；中文首次出现可附英文，机器值不翻译。

未经维护者审核，不得出现或暗示“官方、认证、已验证、背书、生产可用”；所有项目禁止“保证收益、稳赚、无风险、安全策略、构成投资建议”等承诺。涉及因子、策略、回测、信号或交易工作流的仓库，README 与 `SKILL.md`/`AGENTS.md` 限制章节必须同时说明数据来源、假设、参数、已知限制、风险边界，以及仅供研究或教育使用的状态。

## 9. 导航与组件边界

```text
Registry schemas / Profile schemas
              +
各仓根 SKILL.md / AGENTS.md
              ↓ validate + normalize
       完整的版本化 registry snapshot
          ↙          ↓          ↘
 registry.json   README 静态导航   Pages 交互导航
                                 ↓（另行授权）
                     GitHub description / Topics
```

- **Schema 层**：维护声明、Envelope、Profile、adapter registry 和枚举；只定义规范。
- **项目仓库层**：维护自身事实与运行时入口；不编辑生成目录。
- **Registry builder**：只读扫描、校验、规范化、计算兼容性并生成带 `snapshot_id` 的完整快照。
- **Navigation renderer**：同一次构建消费同一 `snapshot_id`。README 提供 10 类、二级目录和静态表格；Pages 提供组合过滤、兼容性和上下游视图。
- **GitHub metadata publisher**：与构建器分离，默认仅生成变更计划；只有单独授权后才写 description/Topics。

Pages 的五段流程入口仅把 14 个阶段分组展示。首页和 URL 的主导航仍是 01–10；阶段过滤不能改变项目的唯一 category/subcategory。

## 10. 迁移波次

| 波次 | 内容 | 退出条件 |
|---|---|---|
| 0 规范冻结 | 冻结 taxonomy、14 阶段、声明 schema、Envelope v1、8 个基础 Profile、结果 Profile 和兼容性规则 | schema 示例、枚举、版本策略内部一致 |
| 1 基础设施 | 更新 registry schema、Skill/Agent 模板、校验器、构建器和同源 renderer | 空白模板与代表项目通过；旧生成物不能绕过校验 |
| 2 目录与摘要 | 为 158 项补齐 category、subcategory、阶段、双语摘要 | 158 / 158 完整；无默认回退 |
| 3 已显式接口 | 优先迁移现有 41 个显式结构化接口 | 每项有版本化 inputs/outputs；原语义与来源可追溯 |
| 4 核心链路 | 打通 `skill-pandadata-warehouse → skill-factor-mining-pandaai → skill-factor-grouped-wrapper → skill-portfolio-optimize → skill-backtest → skill-ssquant-ai-trader` | 冻结 fixture 上端到端通过；需要适配器的边明确显示 `adapter-required`；不连接真实交易账户 |
| 5 全量接口 | 处理其余结构化 Skill；纯自然语言/报告/编排项目给出合规 `not-applicable` | 149 / 149 Skill 有 `interface.mode`，无 `unknown` |
| 6 Agent 与运行时 | 完成 9 个 Agent，并验证五运行时入口 | 9 / 9 有结构化接口或合规 `not-applicable`；五运行时 smoke test 通过 |
| 7 远程同步 | 在另行授权后同步仓库、Pages、description 和 Topics | 预检、审计日志和目标仓库核对完成；失败不冒充全量成功 |

每波先输出差异报告，再修改声明，再运行最小相关测试，最后运行该波全量门禁。波次退出前不得提前发布依赖其结果的生成镜像。

## 11. 故障安全与错误处理

1. 缺失或不可判定字段显示“待迁移”并产生结构化错误，不再自动归入 07、08 或任意旧 fallback。
2. 扫描目标以波次清单为闭集；任一目标缺失、API 失败、限流、声明解析失败或 schema 不通过，都不得用成功子集覆盖上次完整快照。
3. 所有生成物先写入临时目录，校验计数、引用、hash、`snapshot_id` 和 golden diff 后再原子替换；失败时保留上次完整结果。
4. README 与 Pages 必须记录同一 `snapshot_id`，条目集合、分类、摘要和链接不一致即构建失败。
5. Profile、版本或 adapter 证据不足时输出 `unknown`，不得乐观标记 `compatible`。最终验收要求清零 `unknown`，但迁移期必须如实可见。
6. 日志不得包含 token、API key、私有数据或原始敏感载荷。GitHub API 写入器与只读构建器使用分离权限。
7. GitHub 跨仓元数据更新无法提供事务原子性，因此独立采用全量预检、幂等变更计划、逐项审计、遇错停止和可恢复重跑；部分写入不得被报告为完成，且不影响已发布 registry 快照。

## 12. 测试与验收

### 测试层次

- **Schema 单元测试**：合法/非法声明、唯一分类、二级归属、唯一主阶段、阶段包含关系、semver、N/A reason、双语长度和禁用词。
- **Profile 合约测试**：8 个基础 Profile 各有 valid、missing-required、wrong-type、wrong-unit/version fixture；结果 Profile 在首次使用时有同等测试。
- **Adapter 保真测试**：PandaData 原始散列、主键、记录数、未映射字段、数值单位、时区、复权、PIT vintage、期货换月逐项对账。
- **兼容性矩阵测试**：五种状态均有正反例，major 不兼容和 adapter 路径不可被误判。
- **生成 golden 测试**：同一 snapshot 生成 `registry.json`、README、Pages 数据，重复构建字节稳定；静态与交互导航集合一致。
- **故障注入测试**：API 失败、限流、单仓不可达、坏 YAML/JSON、临时目录中断时，旧完整结果保持不变。
- **端到端测试**：上述核心链路使用冻结、脱敏数据，从 `market-bar` 到 `execution-plan` 完成一次组合；不下发真实订单。
- **运行时 smoke test**：五个运行时能发现入口、加载共享说明与所需 assets/scripts/references，且没有相互矛盾的运行时副本。

### 最终验收门禁

1. 158 / 158 有合法 category、subcategory、唯一 primary stage、workflow stages、`summary_zh`、`summary_en`。
2. 149 / 149 Skill 有 `interface.mode`；9 / 9 Agent 有结构化 mode 或带合法 reason 的 `not-applicable`。
3. `uncategorized`、旧 07/08 fallback 和未解释的 `unknown` 均为 0。
4. 8 个基础 Profile 测试全部通过，关键 PandaData adapter 保真测试通过。
5. 一条冻结数据端到端链路通过，所有边的兼容性与 adapter 状态可解释。
6. README 与 Pages 来自同一 snapshot；10 类仍是主导航，五段流程仅为辅助视图。
7. Cursor、Claude Code、Codex、Hermes、OpenClaw 的结构兼容与 smoke test 全部通过。
8. 4 个组织基础设施仓库可在 10 类资源区显示，但不虚增 158 项契约覆盖率。

## 13. 五运行时兼容

根 `SKILL.md` / `AGENTS.md` 保存共享行为和项目声明。运行时文件只做薄适配，遵循目标仓库既有 adapter pattern，指向或同步共享说明，禁止复制后形成不同能力、风险或契约。

| 运行时 | 验收重点 |
|---|---|
| Codex | Skill 有有效根 `SKILL.md`；UI 元数据存在时与共享说明语义一致 |
| Claude Code | 既有 Claude skill/指令入口能加载共享说明与资源 |
| Cursor | 仓库模式提供对应 rule/loader，且不覆盖根声明 |
| Hermes | 既有 Hermes instructions/loader 可发现并调用项目 |
| OpenClaw | 既有 OpenClaw instructions/loader 可发现并调用项目 |

模板、脚本、references 和 assets 必须随项目完整保留。兼容校验检查存在性、可发现性、链接有效性和语义一致性，而不是要求五份大段重复文本。

## 14. 社区规则、许可与发布安全

迁移遵循 `join/COMMUNITY_RULES.md`：仓库使用小写 `skill-` / `agent-` 前缀和连字符；声明上游 organization/repository；尊重作者与第三方许可证；禁止敏感信息、误导性状态和不安全内容。改编论文、策略、数据集、报告或代码时必须保留归因并说明实质改动。

准备发布的独立 Skill 仓库使用 `GPL-3.0-only`，根目录包含完整 GPLv3 `LICENSE`；GitHub 文档中文优先，`README.md` 先中文并链接 `README.en.md`；可见文档标识 `abgyjaguo` 为 creator/maintainer，发布提交使用 `abgyjaguo <213890245+abgyjaguo@users.noreply.github.com>`。这些是发布前门禁，不代表本文已授权发布。

任何远程操作前必须再次核对目标 URL、分支、工作树、许可证、双语 README 和差异计划。严禁使用 CLI、API、脚本或其他自动化删除、转移或破坏 GitHub 仓库；即使未来收到删除请求，也只能由用户在 GitHub Web UI 手工完成。

## 15. 明确延后事项

以下事项全部延后到单独请求与权限确认之后：本地批量修改 158 个项目、修改 registry/template/build 脚本、提交实施性 Git commit、创建或推送远程仓库、启用 GitHub Pages、写入 description、写入 Topics、同步运行时适配器、执行发布或 release。按 brainstorming 流程提交本设计文档不属于实施性提交。本文批准的是架构与迁移顺序，当前交付仅为设计文档。
