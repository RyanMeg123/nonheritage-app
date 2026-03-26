import type { PublishEntryMode, PublishPreset } from '../../types';

export type PublishSectionKind = 'upload' | 'requirement' | 'constraints' | 'craft';

export const publishEntryModes: Array<{
  id: PublishEntryMode;
  title: string;
  description: string;
  helper: string;
}> = [
  {
    id: 'reference-image',
    title: '我有参考图',
    description: '先传图，再补一句你最想保留什么。',
    helper: '适合已经有清晰方向的人',
  },
  {
    id: 'idea-only',
    title: '我只有想法',
    description: '先把需求说出来，再慢慢补条件。',
    helper: '适合还在梳理方向的人',
  },
  {
    id: 'find-artisan',
    title: '我想找传承人',
    description: '先选工艺方向，再补预算和合作要求。',
    helper: '适合目标很明确的人',
  },
];

export const publishModeConfig: Record<
  PublishEntryMode,
  {
    modeLabel: string;
    heroTitle: string;
    heroDescription: string;
    helperBullets: string[];
    primarySection: PublishSectionKind;
    optionalSections: PublishSectionKind[];
    requirementTitle: string;
    requirementHint: string;
    requirementPlaceholder: string;
    craftTitle: string;
    craftHint: string;
    uploadTitle: string;
    uploadDescription: string;
    ctaLabel: string;
    craftStyle: 'chips' | 'cards';
    accentColor: string;
    accentSoft: string;
    accentTint: string;
    accentBorder: string;
  }
> = {
  'reference-image': {
    modeLabel: '图像发起',
    heroTitle: '按参考图发布',
    heroDescription: '先上传你最想实现的方向图，再补一句最关键的要求。',
    helperBullets: ['至少上传 1 张整体图', '再补 1 张细节图会更准', '一句话写清楚你最在意什么'],
    primarySection: 'upload',
    optionalSections: ['requirement', 'constraints', 'craft'],
    requirementTitle: '你最想保留什么',
    requirementHint: '例如轮廓、花影层次、颜色克制感，写最重要的两三点就够了。',
    requirementPlaceholder:
      '例如：想保留花影层次和东方轮廓，但整体不要太艳，成品看起来要更轻一点。',
    craftTitle: '如果你已有工艺偏好',
    craftHint: '不确定也没关系，系统会先帮你判断方向。',
    uploadTitle: '上传灵感图',
    uploadDescription: '支持 1-6 张图，建议包含整体参考和你最在意的局部细节。',
    ctaLabel: '整理图片需求',
    craftStyle: 'chips',
    accentColor: '#C97878',
    accentSoft: '#F7EEE7',
    accentTint: '#FFF5EF',
    accentBorder: '#E8C9BE',
  },
  'idea-only': {
    modeLabel: '文字发起',
    heroTitle: '按想法发布',
    heroDescription: '先把你想做的东西说清楚，再决定要不要补图。',
    helperBullets: ['先说用途和感觉', '预算和时间后面再补', '没有图也可以直接继续'],
    primarySection: 'requirement',
    optionalSections: ['constraints', 'craft', 'upload'],
    requirementTitle: '先说你的想法',
    requirementHint: '从用途、风格、最在意的细节开始说，AI 会先帮你整理成可执行需求。',
    requirementPlaceholder:
      '例如：我想做一件偏东方气质的短外套，适合春天穿，想要花影层次但不要太华丽，整体更高级一点。',
    craftTitle: '如果你有大概方向',
    craftHint: '可以先选一个你更想尝试的工艺。',
    uploadTitle: '如果你有参考图，也可以补一张',
    uploadDescription: '没有图片也能继续，补图只是为了让判断更具体。',
    ctaLabel: '整理文字需求',
    craftStyle: 'chips',
    accentColor: '#9C6440',
    accentSoft: '#F7F0E6',
    accentTint: '#FFF7ED',
    accentBorder: '#E6D0BE',
  },
  'find-artisan': {
    modeLabel: '传承人发起',
    heroTitle: '按工艺找传承人',
    heroDescription: '先选你想找哪类工艺，再补预算、时间和合作要求。',
    helperBullets: ['先选工艺范围', '预算和交付时间一起补', '最好写清合作要求和擅长点'],
    primarySection: 'craft',
    optionalSections: ['constraints', 'requirement', 'upload'],
    requirementTitle: '你想找什么样的传承人',
    requirementHint: '写清楚你想做什么、希望对方擅长什么，后面匹配会更准。',
    requirementPlaceholder:
      '例如：我想找擅长苏绣和成衣落地的老师傅，重点是能把花影做得克制高级，最好能接受版本沟通。',
    craftTitle: '先选工艺方向',
    craftHint: '这一步最关键，决定后面的匹配范围。',
    uploadTitle: '如果你有参考图，也可以补一张',
    uploadDescription: '补图能让后面的判断更具体，但不是这一模式的起点。',
    ctaLabel: '开始匹配传承人',
    craftStyle: 'cards',
    accentColor: '#4D7A73',
    accentSoft: '#EAF5F1',
    accentTint: '#F4FBF8',
    accentBorder: '#CBE4DA',
  },
};

export function getPublishHeaderCopy(preset: PublishPreset) {
  return {
    title: preset.headerTitle,
    subtitle: preset.headerSubtitle,
    badge: preset.progressLabel,
  };
}
