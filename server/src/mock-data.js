export const supportedCrafts = [
  { id: 'tie-dye', label: '扎染' },
  { id: 'su-embroidery', label: '苏绣' },
  { id: 'silver', label: '银饰' },
];

export const mockHomeFeed = {
  heroTitle: '先把需求说清楚，再进入非遗高定',
  heroSummary: '当前阶段先跑通发布需求到工艺方案的第一段流程。',
  supportedCrafts,
};

const craftProfiles = {
  'tie-dye': {
    recommendedCraft: '分区扎染 + 局部手工固色',
    reason:
      '适合保留灵感里的层次和流动感，能在首轮验证里更稳地还原大面积色层变化。',
    summary:
      '建议先做一版方向样衣，把主视觉放在面料层次和色阶过渡上，减少过早叠加复杂辅料。',
    risks: [
      '每批染料会有轻微色差，需要允许成品存在手作浮动。',
      '如果追加复杂绣片，工期和成本会明显上升。',
    ],
    timelineRange: '18 - 24 天',
    priceRange: '¥6,800 - ¥8,400',
    artisanCraft: '扎染、面料晕染、色阶控制',
  },
  'su-embroidery': {
    recommendedCraft: '苏绣主工艺 + 轻量面料整理',
    reason: '适合表现细节、纹样层次和局部高级感，适合偏礼服或局部精修方向。',
    summary: '建议控制大面积刺绣比例，先让重点区域出效果，避免首轮就把制作复杂度拉满。',
    risks: ['线色细节需要二次确认。', '大面积绣面会显著增加制作期。'],
    timelineRange: '20 - 28 天',
    priceRange: '¥8,600 - ¥12,000',
    artisanCraft: '苏绣、局部花纹细化、礼服细节处理',
  },
  silver: {
    recommendedCraft: '银饰结构件 + 局部纹样雕刻',
    reason: '适合做扣件、配饰和局部结构强化，先做重点部位比整套铺开更稳。',
    summary: '建议先把主要结构件和佩戴感确认，再决定是否加复杂纹样和混合工艺。',
    risks: ['打磨纹理会有自然差异。', '若需联动服装主料，需增加配合打样时间。'],
    timelineRange: '16 - 22 天',
    priceRange: '¥5,800 - ¥8,800',
    artisanCraft: '银饰结构、局部雕刻、配件定制',
  },
};

export function buildStructuredRequirement(submission) {
  return {
    id: `structured-${submission.id}`,
    submissionId: submission.id,
    category: '高定单品',
    style: '东方轮廓 / 轻礼服气质',
    craftPreference: submission.preferredCraft,
    materialPreference: '真丝混纺 / 手作肌理面料',
    colorPreference: '低饱和暖色层次',
    budgetRange: submission.budgetRange,
    deliveryDate: submission.expectedDeliveryDate,
    acceptableVariance: '允许 10% 以内手作差异',
    acceptsModification: true,
    status: 'ready',
  };
}

export function buildCraftPlan(submission, structuredRequirement) {
  const profile = craftProfiles[submission.preferredCraft] ?? craftProfiles['tie-dye'];

  return {
    id: `plan-${submission.id}`,
    submissionId: submission.id,
    structuredRequirementId: structuredRequirement.id,
    recommendedCraft: profile.recommendedCraft,
    recommendationReason: profile.reason,
    planSummary: profile.summary,
    riskNotes: profile.risks,
    timelineRange: profile.timelineRange,
    priceRange: profile.priceRange,
    status: 'generated',
    aiMode: 'mock',
  };
}

export function buildPreviewResult(submission, plan, options = {}) {
  const failureMessage = typeof options.failureMessage === 'string' ? options.failureMessage.trim() : '';
  const description = failureMessage
    ? `预览生成失败：${failureMessage}`
    : '当前阶段先返回占位结果，前端可以先把预览卡片和说明区跑通。';

  return {
    id: `preview-${submission.id}`,
    submissionId: submission.id,
    planId: plan.id,
    sourceImages: submission.images,
    previewImages: [
      {
        id: `preview-image-${submission.id}`,
        url: 'mock://preview/look-1',
        caption: failureMessage
          ? '预览生成失败，当前返回占位结果。'
          : '方向预览图占位，后续接真实生成能力后替换为正式地址。',
      },
    ],
    description,
    status: 'pending_generation',
  };
}

export function buildArtisanMatches(submission) {
  const profile = craftProfiles[submission.preferredCraft] ?? craftProfiles['tie-dye'];

  return [
    {
      id: `artisan-${submission.id}-1`,
      name: '周师傅工作室',
      craftExpertise: profile.artisanCraft,
      priceRange: profile.priceRange,
      timelineRange: profile.timelineRange,
      matchReason: '与当前工艺方向一致，首轮样衣经验稳定，适合先做方向验证。',
    },
    {
      id: `artisan-${submission.id}-2`,
      name: '静山手作工坊',
      craftExpertise: '高定改版、样衣打样、细节复核',
      priceRange: '¥7,200 - ¥9,600',
      timelineRange: '20 - 26 天',
      matchReason: '适合对细节复核要求较高的首单，沟通节奏更稳。',
    },
  ];
}

export function buildDesignConfirmation(submission, plan) {
  return {
    id: `confirmation-${submission.id}`,
    submissionId: submission.id,
    planId: plan.id,
    title: '设计确认单（草案）',
    sections: [
      { id: 'concept', title: '设计方向', value: plan.planSummary },
      { id: 'craft', title: '推荐工艺', value: plan.recommendedCraft },
      { id: 'budget', title: '价格区间', value: plan.priceRange },
      { id: 'timeline', title: '工期区间', value: plan.timelineRange },
    ],
    status: 'draft',
  };
}
