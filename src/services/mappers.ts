/**
 * mappers.ts — 后端数据 → 前端屏幕数据格式转换
 *
 * 后端返回的是原始 AI 生成内容（recommendedCraft、planSummary 等）
 * 前端屏幕需要特定的展示格式（CraftPlanData、MatchScreenData 等）
 * 这一层专门负责做这个转换，屏幕组件本身不感知后端数据结构
 */

import type {
  ApiArtisanMatch,
  ApiCraftPlan,
  ApiDesignConfirmation,
  ApiPreviewResult,
  ApiStructuredRequirement,
} from './api';
import type {
  CraftPlanData,
  DesignConfirmScreenData,
  MatchScreenData,
  OrderDetailScreenData,
  PreviewScreenData,
  StructuredResultData,
} from '../types';
import type { OrderEntryContext, OrderRecord } from '../types/orders';

const craftLabels: Record<string, string> = {
  'tie-dye': '扎染',
  'su-embroidery': '苏绣',
  silver: '银饰',
};

function getCraftLabel(value: string) {
  return craftLabels[value] ?? value;
}

function formatMoneyFromFen(value: number) {
  const amount = Math.max(0, Math.round(value / 100));
  return `¥${amount.toLocaleString('zh-CN')}`;
}

function formatDateLabel(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(parsed);
}

function formatDateTimeLabel(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(parsed);
}

function getOrderStatusLabel(status: string) {
  if (status === 'pending') {
    return '待确认';
  }
  if (status === 'paid') {
    return '已支付';
  }
  if (status === 'in_progress') {
    return '制作中';
  }
  if (status === 'completed') {
    return '已完成';
  }
  return status;
}

function isRenderableImageUrl(url: string | undefined) {
  if (!url) {
    return false;
  }

  return (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('file://') ||
    url.startsWith('content://') ||
    url.startsWith('data:') ||
    url.startsWith('asset://')
  );
}

// ── CraftPlan ─────────────────────────────────────────────────────

export function mapCraftPlan(plan: ApiCraftPlan): CraftPlanData {
  return {
    headerTitle: '工艺实现方案',
    headerSubtitle: '系统根据你的需求生成的专业判断',
    badgeLabel: '方案 A',
    craftLabel: plan.recommendedCraft,
    supportLabel: `AI ${plan.aiMode === 'claude' ? '生成' : '模拟'}方案`,
    title: plan.planSummary.slice(0, 20).replace(/[，。！？].*/, ''),
    summary: plan.planSummary,
    durationLabel: '参考工期',
    durationValue: plan.timelineRange,
    priceLabel: '参考价格',
    priceValue: plan.priceRange,
    reasonsTitle: '为什么推荐这套工艺',
    reasons: [
      {
        id: 'reason-1',
        index: 1,
        title: '推荐理由',
        description: plan.recommendationReason,
      },
    ],
    riskTitle: '风险与边界',
    risks: plan.riskNotes,
    ctaLabel: '生成效果预览',
    footerNote: '预览图仅供方向参考，下一页会明确标注这一点。',
  };
}

// ── StructuredRequirement ─────────────────────────────────────────

export function mapStructuredRequirement(req: ApiStructuredRequirement): StructuredResultData {
  return {
    headerTitle: '需求解读结果',
    headerSubtitle: '系统已把你的描述整理成可执行方向',
    badgeLabel: '需求确认',
    summary: `${req.category} · ${req.style}`,
    summaryNote: `工艺偏好：${getCraftLabel(req.craftPreference)}`,
    keyInfoTitle: '核心参数',
    keyInfo: [
      { id: 'kv-material', label: '面料偏好', value: req.materialPreference },
      { id: 'kv-color', label: '颜色偏好', value: req.colorPreference },
      { id: 'kv-budget', label: '预算区间', value: req.budgetRange },
      { id: 'kv-delivery', label: '期望交期', value: req.deliveryDate },
      { id: 'kv-variance', label: '手作差异接受度', value: req.acceptableVariance },
    ],
    focusTitle: '重点方向',
    focusItems: [req.style, getCraftLabel(req.craftPreference), req.materialPreference].filter(Boolean),
    confirmTitle: '系统理解确认',
    confirmText: req.acceptsModification
      ? '系统会在这个方向上生成工艺方案，如有偏差可以返回调整。'
      : '方向已固定，系统将直接按当前参数生成方案。',
    ctaLabel: '查看工艺方案',
    footerNote: '方案会在下一页详细展开，包括工艺逻辑、风险和价格区间。',
  };
}

// ── PreviewResult ──────────────────────────────────────────────────

export function mapPreviewResult(
  preview: ApiPreviewResult,
  plan: ApiCraftPlan,
): PreviewScreenData {
  const leadCaption = preview.previewImages.find((item) => item.caption)?.caption;
  const hasPreview = preview.previewImages.some((item) => isRenderableImageUrl(item.url));

  return {
    headerTitle: '方向预览',
    headerSubtitle: '先看成品气质和细节方向，不是最终交付承诺',
    badgeLabel: hasPreview ? '预览结果' : '预览待补全',
    heroTitle: `${plan.recommendedCraft} · 方向预览`,
    heroNote:
      leadCaption ??
      (preview.status === 'pending_generation'
        ? '后端还在补最终预览，当前先给你看可用的方向参考。'
        : '当前先展示后端返回的预览结果，用来帮助理解方向。'),
    noticeTitle: '重要说明',
    noticeText:
      '仅供方向参考，不承诺与成品完全一致。真实成品会受面料、手工密度、染绣细节和打样结果影响。',
    actions: [
      {
        id: 'preview-plan',
        title: hasPreview ? '当前预览已就绪' : '预览结果仍在补齐',
        description: preview.description,
      },
      {
        id: 'preview-source',
        title: '继续看匹配结果',
        description: '平台会结合工艺、风格、价格和周期继续往下筛。',
      },
    ],
    ctaLabel: '进入匹配结果',
    footerNote: hasPreview
      ? '这是后端返回的当前可用预览结果。'
      : '后端暂时没有可直接展示的预览图，当前先用可用参考图兜底。',
  };
}

export function getPreviewImageUri(preview: ApiPreviewResult): string | undefined {
  const previewImage = preview.previewImages.find((item) => isRenderableImageUrl(item.url));
  if (previewImage) {
    return previewImage.url;
  }

  const sourceImage = preview.sourceImages.find((item) => isRenderableImageUrl(item.url));
  return sourceImage?.url;
}

// ── ArtisanMatches ────────────────────────────────────────────────

export function mapArtisanMatches(
  matches: ApiArtisanMatch[],
  plan: ApiCraftPlan,
): MatchScreenData {
  const lead = matches[0];
  const alts = matches.slice(1);

  return {
    headerTitle: '传承人匹配',
    headerSubtitle: '根据工艺方案推荐最合适的制作方',
    badgeLabel: '匹配结果',
    leadTitle: lead?.name ?? '暂无匹配结果',
    leadSummary: lead?.matchReason ?? '',
    reasonText: lead?.craftExpertise ?? '',
    logicTitle: '匹配参数',
    logicItems: [
      { id: 'lv-craft', label: '工艺专长', value: lead?.craftExpertise ?? '-' },
      { id: 'lv-price', label: '价格区间', value: lead?.priceRange ?? plan.priceRange },
      { id: 'lv-time', label: '参考工期', value: lead?.timelineRange ?? plan.timelineRange },
    ],
    alternativesTitle: '其他备选',
    alternatives: alts.map((m) => ({
      id: m.id,
      name: m.name,
      role: m.craftExpertise,
      highlight: m.matchReason,
      note: `工期参考：${m.timelineRange}，价格：${m.priceRange}`,
    })),
    noticeTitle: '确认前提醒',
    noticeText:
      '当前是平台推荐结果，不代表最终接单意向。进入下一步后，会围绕设计确认单继续沟通，再决定是否真正合作。',
    ctaLabel: '查看设计确认单',
    footerNote: '接下来会围绕确认单继续沟通，不会直接变成普通聊天。',
  };
}

// ── DesignConfirmation ────────────────────────────────────────────

export function mapDesignConfirmation(
  confirmation: ApiDesignConfirmation,
  plan: ApiCraftPlan,
): DesignConfirmScreenData {
  const details = confirmation.sections.map((s) => ({
    id: s.id,
    label: s.title,
    value: s.value,
  }));

  return {
    headerTitle: '设计确认单',
    headerSubtitle: '把方向、工艺、价格和周期先定成一个可继续推进的版本',
    badgeLabel: 'V1',
    leadTitle: `${plan.recommendedCraft} / 设计确认单 V1`,
    leadSummary: plan.planSummary,
    confirmTitle: '本次确认范围',
    confirmItems: [
      '确认核心工艺方向和成品气质',
      '确认预算区间和大致交付节奏',
      '确认这轮沟通默认围绕当前版本进行',
    ],
    detailTitle: '确认内容明细',
    details,
    noticeTitle: '版本边界与提醒',
    noticeText:
      '本确认单确认的是方向、工艺和大致价格周期，不代表成品细节已经最终锁死。后续若改动轮廓、工艺或预算，确认单版本也会同步更新。',
    actions: [
      {
        id: 'confirm-edit',
        title: '返回修改',
        description: '如果方向还有偏差，可以回到上一步调整。',
      },
      {
        id: 'confirm-continue',
        title: '继续沟通',
        description: '围绕当前确认单版本继续讨论，不跳回开放式需求。',
      },
    ],
    ctaLabel: '进入沟通页',
    footerNote: '后续沟通会围绕这份确认单版本展开，不会脱离版本直接讨论。',
  };
}

export function mapOrderDetail(
  order: OrderRecord,
  context?: OrderEntryContext | null,
): OrderDetailScreenData {
  const artisanName = context?.artisanName ?? '已选承接方';
  const craftLabel = context?.craftLabel ?? '当前工艺方向';
  const leadSummary =
    context?.planSummary ??
    '订单已经建立，当前先围绕金额、交付日期和确认版本继续往下推进。';

  const contextItems = [
    { id: 'order-id', label: '订单号', value: order.id },
    { id: 'order-artisan', label: '承接方', value: artisanName },
    { id: 'order-created-at', label: '创建时间', value: formatDateTimeLabel(order.createdAt) },
  ];

  if (order.notes) {
    contextItems.push({ id: 'order-notes', label: '备注', value: order.notes });
  }

  return {
    headerTitle: '订单详情',
    headerSubtitle: '先把这笔订单的核心信息看清楚，再继续后续推进',
    badgeLabel: getOrderStatusLabel(order.status),
    leadTitle: `${craftLabel} 已进入订单阶段`,
    leadSummary,
    summaryTitle: '当前先确认这三项',
    summaryItems: [
      { id: 'summary-status', label: '当前状态', value: getOrderStatusLabel(order.status) },
      { id: 'summary-price', label: '订单金额', value: formatMoneyFromFen(order.totalPriceFen) },
      { id: 'summary-date', label: '约定交付日', value: formatDateLabel(order.agreedDeliveryDate) },
    ],
    contextTitle: '订单补充信息',
    contextItems,
    noteTitle: '首版说明',
    noteText: '当前页面只先收订单核心信息，不展开消息、附件和制作阶段，避免首版范围继续变大。',
    primaryNote: '这三项会直接影响后续是否继续推进。',
    secondaryNote: '先确认是谁承接、什么时候建单，以及有没有补充备注。',
    ctaLabel: '回到首页',
    footerNote: '如果后面再接制作进度、附件和沟通记录，可以继续从这笔订单往下展开。',
  };
}
