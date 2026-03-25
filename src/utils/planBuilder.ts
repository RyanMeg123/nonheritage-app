import { publishPreset } from '../data/mockData';
import type { CraftPlanData, PublishFormState } from '../types';

const planMap: Record<string, Omit<CraftPlanData, 'priceValue' | 'durationValue'>> = {
  'tie-dye': {
    headerTitle: '工艺实现方案',
    headerSubtitle: '系统根据你的需求生成的专业判断',
    badgeLabel: '方案 A',
    craftLabel: '扎染为主',
    supportLabel: '方向样衣可打样',
    title: '雾染渐层披肩外套',
    summary:
      '保留灵感里的流动感和晕染层次，用分区扎染控制主视觉，再把高对比部分压柔，成品更稳。',
    durationLabel: '参考工期',
    priceLabel: '参考价格',
    reasonsTitle: '为什么推荐这套工艺',
    reasons: [
      {
        id: 'reason-1',
        index: 1,
        title: '层次保留完整',
        description: '扎染更适合把大面积花影和雾感过渡做出来，方向不会被压扁。',
      },
      {
        id: 'reason-2',
        index: 2,
        title: '视觉更接近灵感',
        description: '颜色晕染和布面肌理可以一起表达，适合先做首发方向验证。',
      },
      {
        id: 'reason-3',
        index: 3,
        title: '改款空间更大',
        description: '后续若要叠加刺绣或银饰，也能在扎染底层上继续推进。',
      },
    ],
    riskTitle: '风险与边界',
    risks: [
      '手工染色会有天然深浅波动，不承诺与参考图完全一致。',
      '若改成大面积高饱和颜色，工期和返工成本都会明显增加。',
    ],
    ctaLabel: '生成效果预览',
    footerNote: '预览图仅供方向参考，下一页会明确标注这一点。',
  },
  'su-embroidery': {
    headerTitle: '工艺实现方案',
    headerSubtitle: '系统根据你的需求生成的专业判断',
    badgeLabel: '方案 A',
    craftLabel: '苏绣为主',
    supportLabel: '局部盘金收边',
    title: '苏绣叠层花影短外套',
    summary:
      '保留你想要的花影层次和东方轮廓，用苏绣做局部高密度表达，比整件扎染更稳，也更容易控制成品质感。',
    durationLabel: '参考工期',
    priceLabel: '参考价格',
    reasonsTitle: '为什么推荐这套工艺',
    reasons: [
      {
        id: 'reason-1',
        index: 1,
        title: '轮廓更稳',
        description: '苏绣适合保留你想要的局部花影，不会像大面积扎染那样受色差影响太大。',
      },
      {
        id: 'reason-2',
        index: 2,
        title: '成品更高级',
        description: '局部盘金和细密平针能把视觉重点收住，成衣更克制，适合高定方向。',
      },
      {
        id: 'reason-3',
        index: 3,
        title: '工期可控',
        description: '相比重度手染，这个方案更容易按节点推进，适合首发阶段标准化接单。',
      },
    ],
    riskTitle: '风险与边界',
    risks: [
      '仅供方向参考，不承诺与成品完全一致。手工绣线密度、盘金反光和打样布料会带来细微差异。',
      '若改成整件扎染，价格和工期都会明显上升。',
    ],
    ctaLabel: '生成效果预览',
    footerNote: '预览图仅供方向参考，下一页会明确标注这一点。',
  },
  silver: {
    headerTitle: '工艺实现方案',
    headerSubtitle: '系统根据你的需求生成的专业判断',
    badgeLabel: '方案 A',
    craftLabel: '银饰为主',
    supportLabel: '可叠加局部绣片',
    title: '银扣结构披肩短夹克',
    summary:
      '先用银饰结构件把整体轮廓立起来，再让布面细节保持克制，适合强调配件和扣合逻辑的方向。',
    durationLabel: '参考工期',
    priceLabel: '参考价格',
    reasonsTitle: '为什么推荐这套工艺',
    reasons: [
      {
        id: 'reason-1',
        index: 1,
        title: '结构辨识度高',
        description: '银扣和局部金属件能快速建立识别点，适合首发样款呈现。',
      },
      {
        id: 'reason-2',
        index: 2,
        title: '细节可迭代',
        description: '银饰位置和造型能分阶段确认，不必一次锁死整件布面工艺。',
      },
      {
        id: 'reason-3',
        index: 3,
        title: '适合搭配系列化',
        description: '后续可以延展到扣件、披肩挂件或小型配饰，更利于平台接单。',
      },
    ],
    riskTitle: '风险与边界',
    risks: [
      '金属件反光和打磨纹理存在自然差异，成品会有少量手作变化。',
      '如果再加大面积绣片或扎染，会同步增加样衣和调试成本。',
    ],
    ctaLabel: '生成效果预览',
    footerNote: '预览图仅供方向参考，下一页会明确标注这一点。',
  },
};

const priceByBudget: Record<string, string> = {
  'budget-6800': '¥5,600 - 6,800',
  'budget-8000': '¥6,800 - 8,400',
  'budget-12000': '¥8,600 - 11,800',
};

const durationByTimeline: Record<string, string> = {
  'timeline-apr': '12 - 18 天',
  'timeline-may': '18 - 24 天',
  'timeline-june': '24 - 32 天',
};

export function buildCraftPlanFromForm(formState: PublishFormState): CraftPlanData {
  const craftId = formState.preferredCraftId || publishPreset.defaultCraftId;
  const selectedPlan = planMap[craftId] ?? planMap['su-embroidery'];

  return {
    ...selectedPlan,
    priceValue: priceByBudget[formState.budgetId] ?? priceByBudget[publishPreset.defaultBudgetId],
    durationValue:
      durationByTimeline[formState.timelineId] ?? durationByTimeline[publishPreset.defaultTimelineId],
  };
}
