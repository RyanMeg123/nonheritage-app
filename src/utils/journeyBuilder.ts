import { publishPreset } from '../data/mockData';
import type {
  ActionCard,
  ArtisanMatch,
  ConversationMessage,
  CraftPlanData,
  InfoPair,
  JourneyFlowData,
  ProfileScreenData,
  ProgressStage,
  PublishFormState,
} from '../types';

const craftStyleLabel: Record<string, string> = {
  'tie-dye': '更偏雾染和流动层次',
  'su-embroidery': '更偏细节和高级感表达',
  silver: '更偏结构与配件强化',
};

const artisanMatchesByCraft: Record<string, ArtisanMatch[]> = {
  'tie-dye': [
    {
      id: 'artisan-main',
      name: '周染工坊',
      role: '扎染主理人',
      highlight: '更擅长做大面积雾感层次',
      note: '适合先把花影和整体轮廓做稳，再决定是否叠加绣片。',
    },
    {
      id: 'artisan-alt-1',
      name: '岚布实验室',
      role: '面料染整方向',
      highlight: '擅长更轻、更柔的颜色控制',
      note: '适合想把对比度再压低一点的方向。',
    },
    {
      id: 'artisan-alt-2',
      name: '南谷手作',
      role: '扎染与样衣结合',
      highlight: '打样节奏更快',
      note: '适合首轮快速看方向，但精细度略弱一点。',
    },
  ],
  'su-embroidery': [
    {
      id: 'artisan-main',
      name: '绣影工作室',
      role: '苏绣传承人',
      highlight: '擅长把花影层次做得克制而高级',
      note: '局部盘金和绣线密度控制更稳，适合你当前方向。',
    },
    {
      id: 'artisan-alt-1',
      name: '水南绣坊',
      role: '细节纹样方向',
      highlight: '更适合强化局部细节',
      note: '如果你后续想把花影变得更锐利，可以考虑这一位。',
    },
    {
      id: 'artisan-alt-2',
      name: '拾绣实验室',
      role: '现代成衣转化',
      highlight: '样衣推进节奏更明确',
      note: '适合更强调交付节点和版本推进的合作方式。',
    },
  ],
  silver: [
    {
      id: 'artisan-main',
      name: '银枝工坊',
      role: '银饰结构传承人',
      highlight: '擅长做扣件和轮廓强调',
      note: '更适合把服装结构识别点先立起来，再决定布面细节。',
    },
    {
      id: 'artisan-alt-1',
      name: '山石银作',
      role: '手工打磨方向',
      highlight: '金属质感更细腻',
      note: '适合偏克制、精致的饰件路线。',
    },
    {
      id: 'artisan-alt-2',
      name: '岭南金工',
      role: '配件搭配方向',
      highlight: '擅长小体量部件延展',
      note: '适合后续往披肩扣、挂件和配饰方向延伸。',
    },
  ],
};

function getLabelValue(label: string, value: string): InfoPair {
  return {
    id: `${label}-${value}`,
    label,
    value,
  };
}

function buildSummary(formState: PublishFormState): string {
  const budget = publishPreset.budgetOptions.find((item) => item.id === formState.budgetId)?.value ?? '预算待定';
  const timeline =
    publishPreset.timelineOptions.find((item) => item.id === formState.timelineId)?.value ?? '时间待定';
  const fallback =
    '你想做一件偏东方轮廓、花影层次明显的短外套。整体希望高级、克制，不要太艳。';
  const requirement = formState.requirementText.trim() || fallback;

  return `${requirement} 预算希望控制在 ${budget}，交付时间希望在 ${timeline}。`;
}

function buildActionCards(plan: CraftPlanData): ActionCard[] {
  return [
    {
      id: 'action-1',
      title: '回看输入',
      description: '如果方向偏了，可以先回去补图或改文字。',
    },
    {
      id: 'action-2',
      title: plan.craftLabel,
      description: '当前方案会先围绕这个工艺继续往下推进。',
    },
  ];
}

function buildMessages(plan: CraftPlanData): ConversationMessage[] {
  return [
    {
      id: 'user-1',
      speaker: '用户',
      tone: 'user',
      text: '我希望袖口层次更轻一点，别太满，整体还是要克制。',
    },
    {
      id: 'artisan-1',
      speaker: '传承人',
      tone: 'artisan',
      text: `可以把层次再往下收一档，主视觉仍保留 ${plan.craftLabel} 的核心感觉，但会更接近你要的高级感。`,
    },
  ];
}

function buildStages(): ProgressStage[] {
  return [
    {
      id: 'stage-1',
      title: '需求确认',
      detail: '已完成',
      state: 'done',
    },
    {
      id: 'stage-2',
      title: '确认单 V2',
      detail: '已锁定',
      state: 'done',
    },
    {
      id: 'stage-3',
      title: '打样准备',
      detail: '当前进行中',
      state: 'current',
    },
    {
      id: 'stage-4',
      title: '打样反馈',
      detail: '等待进入',
      state: 'upcoming',
    },
  ];
}

export function buildJourneyFlow(formState: PublishFormState, plan: CraftPlanData): JourneyFlowData {
  const summary = buildSummary(formState);
  const craftId = formState.preferredCraftId || publishPreset.defaultCraftId;
  const budget = publishPreset.budgetOptions.find((item) => item.id === formState.budgetId)?.value ?? '¥8,000';
  const timeline =
    publishPreset.timelineOptions.find((item) => item.id === formState.timelineId)?.value ?? '5 月中旬前';
  const logicItems: InfoPair[] = [
    getLabelValue('工艺适配', plan.craftLabel),
    getLabelValue('预算区间', plan.priceValue),
    getLabelValue('交付节奏', plan.durationValue),
  ];
  const details: InfoPair[] = [
    getLabelValue('核心工艺', plan.craftLabel),
    getLabelValue('辅助处理', plan.supportLabel),
    getLabelValue('参考价格', plan.priceValue),
    getLabelValue('参考工期', plan.durationValue),
  ];
  const timelineItems: InfoPair[] = [
    getLabelValue('本周', '确认版本并准备打样'),
    getLabelValue('下周', '完成首轮样衣或工艺样片'),
    getLabelValue('随后', '根据打样反馈进入下一轮确认'),
  ];

  return {
    structuredResult: {
      headerTitle: '整理后的需求',
      headerSubtitle: '先把原始输入整理成可判断、可报价、可继续推进的底稿',
      badgeLabel: '步骤 2',
      summary,
      summaryNote: '这一步不是最终方案，而是把原始输入收成后续可继续推进的版本。',
      keyInfoTitle: '已明确的关键信息',
      keyInfo: [
        getLabelValue('方向偏好', craftStyleLabel[craftId] ?? plan.craftLabel),
        getLabelValue('预算上限', budget),
        getLabelValue('交付时间', timeline),
      ],
      focusTitle: '当前建议重点',
      focusItems: [
        `先围绕 ${plan.craftLabel} 继续判断，不要一开始就把工艺做散。`,
        '先把整体气质和主要细节锁住，再决定局部增强做法。',
      ],
      confirmTitle: '仍需你确认的地方',
      confirmText: '花影更偏柔和还是更偏锐利？外套长度是否需要到腰上？这些会影响后面的工艺取向和预览方向。',
      ctaLabel: '继续生成预览底稿',
      footerNote: '如果理解有偏差，可以先回去修改输入，再继续生成方案。',
    },
    preview: {
      headerTitle: '方向预览',
      headerSubtitle: '先看成品气质和细节方向，不是最终交付承诺',
      badgeLabel: '步骤 3',
      heroTitle: `${plan.title} · 方向预览`,
      heroNote: '这张图用于帮助你理解成品气质和细节方向，不是最终交付承诺。',
      noticeTitle: '重要说明',
      noticeText:
        '仅供方向参考，不承诺与成品完全一致。真实成品会受面料、手工密度、染绣细节和打样结果影响。',
      actions: buildActionCards(plan),
      ctaLabel: '进入匹配结果',
      footerNote: '平台会结合工艺、风格、价格和周期继续往下筛。',
    },
    match: {
      headerTitle: '推荐传承人',
      headerSubtitle: '平台会先给出更适合的对象，再进入下一步确认',
      badgeLabel: '匹配结果',
      leadTitle: artisanMatchesByCraft[craftId]?.[0]?.name ?? '推荐对象',
      leadSummary: artisanMatchesByCraft[craftId]?.[0]?.note ?? '更适合当前方向。',
      reasonText: '推荐原因：工艺适配度高，风格处理克制，预算和交付时间都在可控范围内。',
      logicTitle: '平台如何判断匹配',
      logicItems,
      alternativesTitle: '另外两位可选对象',
      alternatives: artisanMatchesByCraft[craftId]?.slice(1) ?? [],
      noticeTitle: '确认前提醒',
      noticeText:
        '当前是平台推荐结果，不代表最终接单意向。进入下一步后，会围绕设计确认单继续沟通，再决定是否真正合作。',
      ctaLabel: '查看设计确认单',
      footerNote: '接下来会围绕确认单继续沟通，不会直接变成普通聊天。',
    },
    designConfirm: {
      headerTitle: '设计确认单',
      headerSubtitle: '把方向、工艺、价格和周期先定成一个可继续推进的版本',
      badgeLabel: 'V1',
      leadTitle: `${plan.title} / 设计确认单 V1`,
      leadSummary: `当前版本会把“东方轮廓、花影层次、克制高级感”作为核心方向，先按 ${plan.craftLabel} 推进。`,
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
    },
    conversation: {
      headerTitle: '版本沟通',
      headerSubtitle: '讨论会先沉淀进版本，再继续往后推进',
      badgeLabel: '沟通中',
      quoteLabel: '当前引用：设计确认单 V1',
      quoteText: '本次沟通默认基于确认单 V1。若修改方向、价格或工艺，系统会生成新版本再继续沟通。',
      statusTitle: '当前沟通节点',
      statusItems: [
        getLabelValue('当前目标', '确认袖口层次和花影密度'),
        getLabelValue('当前版本', 'V1'),
        getLabelValue('下一动作', '确认后升级到 V2'),
      ],
      introTitle: '本轮沟通目标',
      introText: '先确认袖口层次和花影密度是否需要再收一点，再决定是否更新确认单 V2。',
      introNote: '所有讨论都会落回版本更新，不会停留在口头描述。',
      messages: buildMessages(plan),
      actions: [
        {
          id: 'conversation-update',
          title: '更新确认单',
          description: '把本轮讨论沉淀成 V2，再继续推进。',
        },
        {
          id: 'conversation-keep',
          title: '保持当前方向',
          description: '如果现在就满意，可以直接进入后续进度。',
        },
      ],
      ctaLabel: '进入订单进度',
      footerNote: '新的讨论结果会先沉淀进版本，再继续往后推进。',
    },
    orderProgress: {
      headerTitle: '订单进度',
      headerSubtitle: '确认单 V2 已锁定，当前进入打样准备阶段',
      badgeLabel: '进行中',
      leadTitle: '确认单 V2 已锁定，进入打样准备',
      leadSummary:
        '当前传承人会按更新后的袖口层次和花影密度推进首轮打样。你的主要动作是确认打样反馈，而不是重新回到开放式需求描述。',
      statusTitle: '当前进度状态',
      stages: buildStages(),
      timelineTitle: '推进时间线',
      timeline: timelineItems,
      actions: [
        {
          id: 'progress-version',
          title: '查看当前版本',
          description: '随时回看 V2 确认内容，避免后续理解偏差。',
        },
        {
          id: 'progress-feedback',
          title: '等待打样反馈',
          description: '打样返回后，页面会进入新的确认节点。',
        },
      ],
      noticeTitle: '阶段说明',
      noticeText:
        '当前订单还处在打样前准备阶段，平台会优先保证版本一致和制作边界清楚，再进入更深的制作推进。',
      ctaLabel: '回到首页',
      footerNote: '当打样结果返回后，页面会进入新的确认节点。',
    },
  };
}

export function buildProfileData(plan: CraftPlanData): ProfileScreenData {
  return {
    headerTitle: '我的',
    headerSubtitle: '版本、进度和最近动态都会先在这里汇总',
    badgeLabel: '账户中心',
    leadTitle: plan.title,
    leadSummary: '当前已完成确认单 V2，并进入打样准备。下一次关键节点是查看打样反馈。',
    versionTitle: '最近版本更新',
    versionTag: 'V2',
    versionSummary: '最新一次更新把袖口层次继续收轻，当前版本已进入打样准备。',
    quickEntries: [
      {
        id: 'entry-1',
        title: '当前订单',
        description: '查看确认单、价格区间和最新推进状态。',
      },
      {
        id: 'entry-2',
        title: '最近消息',
        description: '围绕当前版本的沟通记录会先收在这里。',
      },
    ],
    recentTitle: '最近动态',
    recentItems: [
      '设计确认单 V2 已锁定，当前进入打样准备。',
      '传承人已确认可按当前方向推进首轮样衣。',
      '下一关键节点是查看打样反馈并确认是否继续调整。',
    ],
    accountTitle: '账户与服务',
    accountItems: [
      {
        id: 'account-1',
        title: '我的确认单',
        description: '回看每次版本更新，避免理解偏差。',
      },
      {
        id: 'account-2',
        title: '联系客服',
        description: '遇到交付、沟通或版本问题时可以直接处理。',
      },
      {
        id: 'account-3',
        title: '传承人入驻',
        description: '如果你也有工坊或团队，可以申请入驻平台。',
      },
    ],
  };
}
