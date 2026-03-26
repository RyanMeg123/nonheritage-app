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
  ApiStructuredRequirement,
} from './api';
import type {
  CraftPlanData,
  DesignConfirmScreenData,
  MatchScreenData,
  StructuredResultData,
} from '../types';

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
    summaryNote: `工艺偏好：${req.craftPreference}`,
    keyInfoTitle: '核心参数',
    keyInfo: [
      { id: 'kv-material', label: '面料偏好', value: req.materialPreference },
      { id: 'kv-color', label: '颜色偏好', value: req.colorPreference },
      { id: 'kv-budget', label: '预算区间', value: req.budgetRange },
      { id: 'kv-delivery', label: '期望交期', value: req.deliveryDate },
      { id: 'kv-variance', label: '手作差异接受度', value: req.acceptableVariance },
    ],
    focusTitle: '重点方向',
    focusItems: [req.style, req.craftPreference, req.materialPreference].filter(Boolean),
    confirmTitle: '系统理解确认',
    confirmText: req.acceptsModification
      ? '系统会在这个方向上生成工艺方案，如有偏差可以返回调整。'
      : '方向已固定，系统将直接按当前参数生成方案。',
    ctaLabel: '查看工艺方案',
    footerNote: '方案会在下一页详细展开，包括工艺逻辑、风险和价格区间。',
  };
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
