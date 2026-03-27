/**
 * ai-adapters.js
 *
 * 5 个 AI 能力插槽，统一通过 aihubmix 代理调用。
 * mode: 'mock'     → 走本地假数据（无网络依赖，开发/测试用）
 * mode: 'aihubmix' → 走 aihubmix 代理（OpenAI 兼容接口 + doubao 图像生成）
 *
 * 切换方式：在 .env 中设置对应变量，见 .env.example
 * 文本模型：gpt-5.3-chat-latest
 * 图像模型：doubao-seedream-5.0-lite（图生图 / 多图融合）
 */

import { randomUUID } from 'node:crypto';
import {
  buildArtisanMatches,
  buildCraftPlan,
  buildDesignConfirmation,
  buildPreviewResult,
  buildStructuredRequirement,
} from './mock-data.js';

// ── aihubmix 配置 ─────────────────────────────────────────────────
const AIHUBMIX_BASE_URL = 'https://aihubmix.com';
const TEXT_MODEL        = 'gpt-5.3-chat-latest';
const IMAGE_MODEL       = 'doubao-seedream-5.0-lite';

function isRemoteHttpUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url);
}

function normalizeImageOutputUrl(value) {
  if (typeof value === 'string') {
    return value;
  }

  if (value && typeof value === 'object') {
    if (typeof value.url === 'string') {
      return value.url;
    }

    if (typeof value.image_url === 'string') {
      return value.image_url;
    }
  }

  return null;
}

function getApiKey() {
  const key = process.env.AIHUBMIX_API_KEY;
  if (!key) throw new Error('未设置 AIHUBMIX_API_KEY 环境变量');
  return key;
}

// ── 工具函数：调用文本模型，要求返回 JSON ─────────────────────────
/**
 * messages: OpenAI 格式的 messages 数组
 * 支持多模态 content（text + image_url）
 */
async function callText({ messages, maxTokens = 1500 }) {
  const apiKey = getApiKey();
  const res = await fetch(`${AIHUBMIX_BASE_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: TEXT_MODEL,
      max_completion_tokens: maxTokens,
      messages,
    }),
  });

  const json = await res.json();
  if (!res.ok) {
    const errMsg = json?.error?.message ?? `请求失败 (${res.status})`;
    throw new Error(`aihubmix 文本接口错误：${errMsg}`);
  }

  const text = json.choices?.[0]?.message?.content ?? '';
  // 提取第一个 JSON 对象块
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error(`AI 返回内容无法解析为 JSON：${text.slice(0, 300)}`);
  return { parsed: JSON.parse(match[0]), raw: text };
}

// ── 工具函数：调用 doubao 图像生成（图生图 / 多图融合）────────────
/**
 * prompt: 生成提示词
 * imageUrls: 灵感图 URL 数组（第一张作为主参考图，多张则多图融合）
 * 返回生成图片 URL 数组
 */
async function callImageGen({ prompt, imageUrls = [] }) {
  const apiKey = getApiKey();

  // 构造 input，有图则走图生图/多图融合，无图则走文生图
  const input = { prompt };
  if (imageUrls.length === 1) {
    input.image = imageUrls[0];
  } else if (imageUrls.length > 1) {
    input.images = imageUrls;
  }

  const res = await fetch(
    `${AIHUBMIX_BASE_URL}/v1/models/doubao/${IMAGE_MODEL}/predictions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ input }),
    },
  );

  const json = await res.json();
  if (!res.ok) {
    const errMsg = json?.error?.message ?? `请求失败 (${res.status})`;
    throw new Error(`aihubmix 图像接口错误：${errMsg}`);
  }

  // 兼容同步返回（output 字段）和异步轮询（status === 'succeeded'）
  const output = json.output ?? json.data?.output ?? [];
  const urls = (Array.isArray(output) ? output : [output])
    .map(normalizeImageOutputUrl)
    .filter(Boolean);

  if (urls.length === 0) {
    throw new Error('aihubmix 图像接口返回为空或格式不正确');
  }

  return urls;
}

// ── 环境变量控制各 adapter 是否走真实 AI ─────────────────────────
const USE_AI_REQUIREMENT = process.env.AI_REQUIREMENT_PARSER  === 'aihubmix';
const USE_AI_CRAFT_PLAN  = process.env.AI_CRAFT_PLAN_GEN      === 'aihubmix';
const USE_AI_PREVIEW     = process.env.AI_PREVIEW_RENDERER    === 'aihubmix';
const USE_AI_MATCHER     = process.env.AI_ARTISAN_MATCHER     === 'aihubmix';
const USE_AI_CONFIRM     = process.env.AI_DESIGN_CONFIRM      === 'aihubmix';

// ═══════════════════════════════════════════════════════════════════
// 1. requirementParser
//    多模态：把用户灵感图 + 文字描述一起发给 gpt-5.3-chat-latest
// ═══════════════════════════════════════════════════════════════════
async function runRequirementParser(submission) {
  if (!USE_AI_REQUIREMENT) {
    return buildStructuredRequirement(submission);
  }

  const imageContent = (submission.images ?? [])
    .slice(0, 3)
    .map((img) => img?.url)
    .filter(isRemoteHttpUrl)
    .map((url) => ({
      type: 'image_url',
      image_url: { url },
    }));

  // 多模态 content：图片在前，文字在后
  const userContent = [
    ...imageContent,
    {
      type: 'text',
      text: `用户填写的信息：
工艺偏好：${submission.preferredCraft}
预算：${submission.budgetRange}
期望交期：${submission.expectedDeliveryDate}
需求描述：${submission.requirementText}`,
    },
  ];

  try {
    const { parsed, raw } = await callText({
      messages: [
        {
          role: 'system',
          content: `你是非遗工艺定制平台的需求分析 AI，专业领域：刺绣、扎染、蜡染、香云纱、苗绣等传统工艺服饰定制。
请仔细阅读用户提交的文字描述和参考图，输出结构化需求 JSON，字段说明如下：
- category: 品类（高定单品 / 日常休闲 / 家居软装 等）
- style: 风格方向，尽量具体（如"东方轮廓 / 轻礼服气质"）
- craftPreference: 工艺偏好（与用户 preferredCraft 一致但可扩充描述）
- materialPreference: 面料偏好（如"真丝混纺 / 手作肌理面料"）
- colorPreference: 颜色偏好
- budgetRange: 原样保留用户预算
- deliveryDate: 原样保留用户期望交期
- acceptableVariance: 用户对手作差异的接受度
- acceptsModification: boolean，是否接受调整

只输出 JSON 对象，不加注释或 markdown。`,
        },
        { role: 'user', content: userContent },
      ],
    });

    return {
      id: `structured-${randomUUID()}`,
      submissionId: submission.id,
      category:            parsed.category            ?? '高定单品',
      style:               parsed.style               ?? '',
      craftPreference:     parsed.craftPreference     ?? submission.preferredCraft,
      materialPreference:  parsed.materialPreference  ?? '',
      colorPreference:     parsed.colorPreference     ?? '',
      budgetRange:         parsed.budgetRange         ?? submission.budgetRange,
      deliveryDate:        parsed.deliveryDate        ?? submission.expectedDeliveryDate,
      acceptableVariance:  parsed.acceptableVariance  ?? '允许 10% 以内手作差异',
      acceptsModification: parsed.acceptsModification ?? true,
      status: 'ready',
      aiMode: 'aihubmix',
      rawResponse: { raw },
    };
  } catch (err) {
    console.error('[requirementParser] AI 失败，降级 mock：', err.message);
    return buildStructuredRequirement(submission);
  }
}

// ═══════════════════════════════════════════════════════════════════
// 2. craftPlanGenerator
//    纯文本：根据结构化需求生成工艺方案
// ═══════════════════════════════════════════════════════════════════
async function runCraftPlanGenerator(submission, structuredRequirement) {
  if (!USE_AI_CRAFT_PLAN) {
    return buildCraftPlan(submission, structuredRequirement);
  }

  const req = structuredRequirement;
  const { parsed, raw } = await callText({
    messages: [
      {
        role: 'system',
        content: `你是非遗工艺定制平台的工艺方案设计 AI。
根据用户的结构化需求，生成一份合理的工艺定制方案，字段说明：
- recommendedCraft: 推荐工艺（具体工艺名称，如"分区扎染 + 局部手工固色"）
- recommendationReason: 推荐理由（1-2 句，说明与需求的匹配点）
- planSummary: 方案概述（2-3 句，讲清楚工艺路径和视觉效果方向）
- riskNotes: 风险说明 Array<string>（每项 1 句，最多 3 条）
- timelineRange: 制作周期（如"18 - 24 天"）
- priceRange: 价格区间（参考用户预算，合理上下浮动，如"¥7,200 - ¥8,600"）

只输出 JSON 对象，不加注释或 markdown。`,
      },
      {
        role: 'user',
        content: `结构化需求如下：
品类：${req.category}
风格：${req.style}
工艺偏好：${req.craftPreference}
面料偏好：${req.materialPreference}
颜色偏好：${req.colorPreference}
预算：${req.budgetRange}
交期：${req.deliveryDate}
手作差异接受度：${req.acceptableVariance}`,
      },
    ],
  });

  return {
    id: `plan-${randomUUID()}`,
    submissionId: submission.id,
    structuredRequirementId: structuredRequirement.id,
    recommendedCraft:     parsed.recommendedCraft     ?? '',
    recommendationReason: parsed.recommendationReason ?? '',
    planSummary:          parsed.planSummary          ?? '',
    riskNotes:            Array.isArray(parsed.riskNotes) ? parsed.riskNotes : [],
    timelineRange:        parsed.timelineRange        ?? '',
    priceRange:           parsed.priceRange           ?? req.budgetRange,
    status: 'generated',
    aiMode: 'aihubmix',
    rawResponse: { raw },
  };
}

// ═══════════════════════════════════════════════════════════════════
// 3. previewRenderer
//    图像生成：doubao-seedream-5.0-lite
//    把用户灵感图 + 工艺方案描述组合，生成效果预览图
// ═══════════════════════════════════════════════════════════════════
async function runPreviewRenderer(submission, plan) {
  if (!USE_AI_PREVIEW) {
    return buildPreviewResult(submission, plan);
  }

  const imageUrls = (submission.images ?? [])
    .slice(0, 3)
    .map((img) => img.url)
    .filter(Boolean);

  const prompt = `非遗传统工艺服饰设计效果图，工艺方向：${plan.recommendedCraft}，
风格定位：${plan.planSummary}，
呈现高端定制服装的整体气质，真实质感，工笔细节，白底展示。`;

  let previewImages;
  try {
    const urls = await callImageGen({ prompt, imageUrls });
    previewImages = urls.map((url, i) => ({
      id: `preview-image-${i + 1}`,
      url,
      caption: i === 0 ? '方向预览图（AI 生成，仅供参考）' : `备选方向 ${i + 1}`,
    }));
  } catch (err) {
    console.error('[previewRenderer] 图像生成失败，降级为 mock：', err.message);
    return buildPreviewResult(submission, plan);
  }

  return {
    id: `preview-${randomUUID()}`,
    submissionId: submission.id,
    planId: plan.id,
    sourceImages: submission.images ?? [],
    previewImages: previewImages.length > 0 ? previewImages : [
      {
        id: `preview-placeholder-${submission.id}`,
        url: 'mock://preview/fallback',
        caption: '图像生成返回为空，占位显示',
      },
    ],
    description: `基于 ${plan.recommendedCraft} 工艺方向，结合灵感参考图生成的效果预览。`,
    status: 'generated',
    aiMode: 'aihubmix',
  };
}

// ═══════════════════════════════════════════════════════════════════
// 4. artisanMatcher
//    纯文本：根据工艺方案推荐传承人
// ═══════════════════════════════════════════════════════════════════
async function runArtisanMatcher(submission, structuredRequirement) {
  if (!USE_AI_MATCHER) {
    return buildArtisanMatches(submission, structuredRequirement);
  }

  const req = structuredRequirement;
  const { parsed, raw } = await callText({
    messages: [
      {
        role: 'system',
        content: `你是非遗定制平台的传承人匹配 AI。
根据工艺需求，虚构 2-3 位传承人推荐结果。请输出 JSON 数组，每个元素字段：
- id: 唯一标识（如 "artisan-1"）
- name: 传承人/工作室名称
- craftExpertise: 工艺专长（1-2 句）
- priceRange: 价格区间
- timelineRange: 参考工期
- matchReason: 推荐理由（1-2 句，说明与本次需求的匹配点）
- rank: 排序（从 1 开始）

只输出 JSON 数组，不加注释或 markdown。`,
      },
      {
        role: 'user',
        content: `需求如下：
工艺偏好：${req.craftPreference}
风格：${req.style}
预算：${req.budgetRange}
交期：${req.deliveryDate}`,
      },
    ],
  });

  // parsed 应为数组
  const matches = Array.isArray(parsed) ? parsed : [parsed];
  return matches.map((m, i) => ({
    id:             m.id              ?? `artisan-ai-${i + 1}`,
    planId:         '',               // service 层会填充
    name:           m.name            ?? `传承人 ${i + 1}`,
    craftExpertise: m.craftExpertise  ?? req.craftPreference,
    priceRange:     m.priceRange      ?? req.budgetRange,
    timelineRange:  m.timelineRange   ?? '20 - 28 天',
    matchReason:    m.matchReason     ?? '',
    rank:           m.rank            ?? i + 1,
  }));
}

// ─── artisanMatcher 返回数组，需要包一层 JSON 解析兼容 ────────────
// callText 里只处理 JSON 对象，这里单独处理数组
async function callTextArray({ messages, maxTokens = 1500 }) {
  const apiKey = getApiKey();
  const res = await fetch(`${AIHUBMIX_BASE_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: TEXT_MODEL,
      max_completion_tokens: maxTokens,
      messages,
    }),
  });

  const json = await res.json();
  if (!res.ok) {
    const errMsg = json?.error?.message ?? `请求失败 (${res.status})`;
    throw new Error(`aihubmix 文本接口错误：${errMsg}`);
  }

  const text = json.choices?.[0]?.message?.content ?? '';
  // 提取 JSON 数组或对象
  const match = text.match(/(\[[\s\S]*\]|\{[\s\S]*\})/);
  if (!match) throw new Error(`AI 返回内容无法解析为 JSON：${text.slice(0, 300)}`);
  return { parsed: JSON.parse(match[0]), raw: text };
}

// 重新实现 artisanMatcher，使用 callTextArray
async function runArtisanMatcherImpl(submission, structuredRequirement) {
  if (!USE_AI_MATCHER) {
    return buildArtisanMatches(submission, structuredRequirement);
  }

  const req = structuredRequirement;
  let parsed, raw;
  try {
    ({ parsed, raw } = await callTextArray({
      messages: [
        {
          role: 'system',
          content: `你是非遗定制平台的传承人匹配 AI。
根据工艺需求，虚构 2-3 位传承人推荐结果。请输出 JSON 数组，每个元素字段：
- id: 唯一标识（如 "artisan-1"）
- name: 传承人/工作室名称
- craftExpertise: 工艺专长（1-2 句）
- priceRange: 价格区间
- timelineRange: 参考工期
- matchReason: 推荐理由（1-2 句，说明与本次需求的匹配点）
- rank: 排序（从 1 开始）

只输出 JSON 数组，不加注释或 markdown。`,
        },
        {
          role: 'user',
          content: `需求如下：
工艺偏好：${req.craftPreference}
风格：${req.style}
预算：${req.budgetRange}
交期：${req.deliveryDate}`,
        },
      ],
    }));
  } catch (err) {
    console.error('[artisanMatcher] AI 失败，降级 mock：', err.message);
    return buildArtisanMatches(submission, structuredRequirement);
  }

  const matches = Array.isArray(parsed) ? parsed : [parsed];
  return matches.map((m, i) => ({
    id:             `artisan-${randomUUID()}`,
    planId:         '',
    name:           m.name            ?? `传承人 ${i + 1}`,
    craftExpertise: m.craftExpertise  ?? req.craftPreference,
    priceRange:     m.priceRange      ?? req.budgetRange,
    timelineRange:  m.timelineRange   ?? '20 - 28 天',
    matchReason:    m.matchReason     ?? '',
    rank:           m.rank            ?? i + 1,
  }));
}

// ═══════════════════════════════════════════════════════════════════
// 5. designConfirmationBuilder
//    纯文本：生成设计确认单各章节内容
// ═══════════════════════════════════════════════════════════════════
async function runDesignConfirmationBuilder(submission, plan) {
  if (!USE_AI_CONFIRM) {
    return buildDesignConfirmation(submission, plan);
  }

  const { parsed, raw } = await callText({
    messages: [
      {
        role: 'system',
        content: `你是非遗定制平台的设计确认单生成 AI。
根据工艺方案，生成一份设计确认单，输出 JSON 对象：
- title: 确认单标题（如"${plan.recommendedCraft ?? '工艺'} 设计确认单 V1"）
- sections: Array，每项字段：
  - id: 唯一标识（如 "sec-concept"）
  - title: 章节标题
  - value: 章节内容（1-3 句）

sections 应包含：设计方向、推荐工艺、面料建议、价格区间、工期区间，共 5 项。

只输出 JSON 对象，不加注释或 markdown。`,
      },
      {
        role: 'user',
        content: `工艺方案：
推荐工艺：${plan.recommendedCraft}
方案概述：${plan.planSummary}
价格区间：${plan.priceRange}
制作周期：${plan.timelineRange}
推荐理由：${plan.recommendationReason}`,
      },
    ],
  });

  return {
    id: `confirmation-${randomUUID()}`,
    submissionId: submission.id,
    planId: plan.id,
    title:    parsed.title    ?? `${plan.recommendedCraft} 设计确认单 V1`,
    sections: Array.isArray(parsed.sections) ? parsed.sections : [
      { id: 'concept',  title: '设计方向', value: plan.planSummary },
      { id: 'craft',    title: '推荐工艺', value: plan.recommendedCraft },
      { id: 'budget',   title: '价格区间', value: plan.priceRange },
      { id: 'timeline', title: '工期区间', value: plan.timelineRange },
    ],
    status: 'draft',
    aiMode: 'aihubmix',
    rawResponse: { raw },
  };
}

// ═══════════════════════════════════════════════════════════════════
// 导出
// ═══════════════════════════════════════════════════════════════════
export const aiAdapters = {
  requirementParser: {
    get mode() { return USE_AI_REQUIREMENT ? 'aihubmix' : 'mock'; },
    run: runRequirementParser,
  },
  craftPlanGenerator: {
    get mode() { return USE_AI_CRAFT_PLAN ? 'aihubmix' : 'mock'; },
    run: runCraftPlanGenerator,
  },
  previewRenderer: {
    get mode() { return USE_AI_PREVIEW ? 'aihubmix' : 'mock'; },
    run: runPreviewRenderer,
  },
  artisanMatcher: {
    get mode() { return USE_AI_MATCHER ? 'aihubmix' : 'mock'; },
    run: runArtisanMatcherImpl,
  },
  designConfirmationBuilder: {
    get mode() { return USE_AI_CONFIRM ? 'aihubmix' : 'mock'; },
    run: runDesignConfirmationBuilder,
  },
};
