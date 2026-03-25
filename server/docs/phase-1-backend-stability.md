# 第一阶段后端与稳定性结论

## 1. 当前最小后端范围

只覆盖这一段流程：

首页 -> 发布需求 -> 工艺方案页

这一阶段只解决三件事：

1. 给前端一个稳定接口面
2. 给后续 AI 留好接入位置
3. 先把错误采集和压测边界定清楚

## 2. 第一阶段核心数据对象

### 用户提交需求 `RequirementSubmission`

```json
{
  "id": "submission-uuid",
  "images": [{ "url": "https://example.com/look-1.jpg" }],
  "requirementText": "想做一件偏东方轮廓的短外套",
  "preferredCraft": "tie-dye",
  "budgetRange": "¥6,800 - ¥8,000",
  "expectedDeliveryDate": "2026-05-18",
  "status": "submitted",
  "createdAt": "2026-03-25T07:00:00.000Z"
}
```

### 结构化需求结果 `StructuredRequirement`

```json
{
  "id": "structured-submission-uuid",
  "submissionId": "submission-uuid",
  "category": "高定单品",
  "style": "东方轮廓 / 轻礼服气质",
  "craftPreference": "tie-dye",
  "materialPreference": "真丝混纺 / 手作肌理面料",
  "colorPreference": "低饱和暖色层次",
  "budgetRange": "¥6,800 - ¥8,000",
  "deliveryDate": "2026-05-18",
  "acceptableVariance": "允许 10% 以内手作差异",
  "acceptsModification": true,
  "status": "ready"
}
```

### 工艺方案结果 `CraftPlan`

```json
{
  "id": "plan-submission-uuid",
  "submissionId": "submission-uuid",
  "structuredRequirementId": "structured-submission-uuid",
  "recommendedCraft": "分区扎染 + 局部手工固色",
  "recommendationReason": "适合保留灵感里的层次和流动感",
  "planSummary": "先做方向样衣，把主视觉放在层次过渡上",
  "riskNotes": ["每批染料会有轻微色差"],
  "timelineRange": "18 - 24 天",
  "priceRange": "¥6,800 - ¥8,400",
  "status": "generated",
  "aiMode": "mock"
}
```

### 预览图结果 `PreviewResult`

```json
{
  "id": "preview-submission-uuid",
  "submissionId": "submission-uuid",
  "sourceImages": [{ "url": "https://example.com/look-1.jpg" }],
  "previewImages": [
    {
      "id": "preview-image-submission-uuid",
      "url": "mock://preview/look-1",
      "caption": "方向预览图占位"
    }
  ],
  "description": "当前阶段先返回占位结果",
  "status": "pending_generation"
}
```

### 传承人匹配结果 `ArtisanMatch`

```json
{
  "id": "artisan-submission-uuid-1",
  "name": "周师傅工作室",
  "craftExpertise": "扎染、面料晕染、色阶控制",
  "priceRange": "¥6,800 - ¥8,400",
  "timelineRange": "18 - 24 天",
  "matchReason": "与当前工艺方向一致，适合先做方向验证"
}
```

### 设计确认单 `DesignConfirmationDraft`

```json
{
  "id": "confirmation-submission-uuid",
  "submissionId": "submission-uuid",
  "planId": "plan-submission-uuid",
  "title": "设计确认单（草案）",
  "sections": [
    { "id": "concept", "title": "设计方向", "value": "..." }
  ],
  "status": "draft"
}
```

## 3. 第一阶段接口清单

### `GET /v1/bootstrap`

用途：
给首页和发布页拉基础配置，包含可选工艺、预算提示、交付提示。

当前先用 mock。

### `POST /v1/requirements`

用途：
提交用户需求，并返回结构化需求结果。

为什么第一阶段就做它：
这是整条链路的入口，也是后续最容易被 AI 替换的一段。

### `POST /v1/craft-plans`

用途：
基于 `submissionId` 生成工艺方案，并联动返回：

- 工艺方案
- 预览图占位结果
- 匹配结果
- 设计确认单草案

为什么这样设计：
第一阶段前端页面少，合并返回可以减少联调成本。
后面如果流程变复杂，再拆成异步任务接口。

### `GET /v1/craft-plans/:planId`

用途：
单独获取工艺方案详情。

压测时会是重点读接口之一。

### `GET /v1/craft-plans/:planId/matches`

用途：
单独获取传承人匹配结果。

后续如果匹配逻辑复杂，可以独立扩容。

### `POST /v1/client-errors`

用途：
接客户端错误上报，先统一收页面错误、请求错误、上传错误。

## 4. 哪些先用假数据

当前阶段建议先 mock 的部分：

1. 结构化需求提取
2. 工艺方案生成
3. 预览图生成
4. 传承人匹配
5. 设计确认单生成

原因：

- 当前前端主要需要稳定字段，不需要真实 AI
- 真实 AI 还会反复调整 prompt 和返回格式
- 先把接口形态固定下来，开发 thread 可以少返工

## 5. AI 接入点

已经预留在 `src/ai-adapters.js`：

1. `requirementParser`
2. `craftPlanGenerator`
3. `previewRenderer`
4. `artisanMatcher`
5. `designConfirmationBuilder`

后续替换原则：

- 保持对外字段不变
- 只替换 adapter 内部实现
- 所有 AI 返回都先做结构校验
- 空返回、超时、格式错误都归到统一错误码

## 6. 崩溃监控与错误采集边界

第一阶段先统一五类错误：

1. 页面级错误
2. 请求失败
3. 数据结构异常
4. 上传失败
5. AI 返回为空 / 超时 / 格式异常

当前建议：

- Expo App 里加页面级错误边界
- 所有接口请求统一附带 `traceId`
- 图片上传失败单独打点，因为它最影响发布链路
- AI 类异常单独分类，避免和普通网络错误混在一起

Sentry 接入建议：

- App 端抓 JS 崩溃、页面异常、未处理 Promise、导航页面信息
- 服务端抓未捕获异常、接口异常、数据校验异常
- `POST /v1/client-errors` 作为兜底入口

## 7. 未来压测重点

第一阶段先关注这四个接口：

1. `POST /v1/requirements`
2. `POST /v1/craft-plans`
3. `GET /v1/craft-plans/:planId`
4. `GET /v1/craft-plans/:planId/matches`

最容易成为瓶颈的点：

1. 提交需求时的图片上传
2. 生成工艺方案时的 AI 调用耗时
3. 匹配结果查询时的多条件筛选
4. 如果 100 人同时请求，最脆弱的是方案生成链路

原因：

- 它串了最多的下游步骤
- 后续会接真实 AI
- 延迟和失败率都会先在这里暴露

压测前建议先明确这几个边界：

- 单次最多图片数
- 单张图片大小
- 需求文案最大长度
- 接口超时时间
- AI 返回重试次数

## 8. 当前阶段为什么这样设计

这样做的好处是：

- 前端马上能跑
- 数据结构不会很快推倒重来
- 后面加真实 AI 时改动集中
- 监控和压测边界提前清楚

这样做刻意没做的事：

- 支付
- 履约
- 复杂订单状态机
- 复杂推荐系统
- 大规模异步任务平台

因为这些都不属于当前阶段的最小闭环。
