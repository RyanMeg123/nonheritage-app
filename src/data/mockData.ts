/** @format */

import type { HomeData, PublishPreset } from '../types'

export const homeData: HomeData = {
    brandName: '非遗撮合',
    brandTagline: 'AI 设计与接单平台',
    archiveLabel: '',
    heroEyebrow: 'HERITAGE AI / 高定工坊',
    heroTitle: '先看方向\n再做定制',
    heroFootnote: '扎染 · 苏绣 · 银饰定制',
    heroSummaryTitle: '灵感图、预算和交付时间',
    heroSummaryText:
        '系统会先整理需求，再给出可执行工艺方案、预估价格和匹配传承人。',
    startLabel: '发布需求',
    artisanCount: 126,
    artisanLabel: '合作传承人',
    processSteps: [
        {
            id: 'step-1',
            index: '01',
            title: '上传灵感',
            description: '图或文字都可以',
        },
        {
            id: 'step-2',
            index: '02',
            title: '生成方案',
            description: '价格和工期一起看',
        },
        {
            id: 'step-3',
            index: '03',
            title: '匹配传承人',
            description: '确认后进入制作',
        },
    ],
    featuredCrafts: [
        {
            id: 'tie-dye',
            name: '扎染',
            description: '更适合轮廓柔和、色层变化明显的方向。',
        },
        {
            id: 'su-embroidery',
            name: '苏绣',
            description: '适合细节、层次和局部高级感表达。',
        },
        {
            id: 'silver',
            name: '银饰',
            description: '更适合配件、扣件和局部结构强化。',
        },
    ],
    featuredCases: [
        {
            id: 'case-1',
            title: '花影叠层短外套',
            craft: '苏绣',
            summary: '以局部高密度刺绣还原花影层次，控制整体高级感。',
        },
        {
            id: 'case-2',
            title: '雾感晕染披肩',
            craft: '扎染',
            summary: '保留流动感，同时把综合色差压进可控范围。',
        },
        {
            id: 'case-3',
            title: '银扣结构披肩',
            craft: '银饰',
            summary: '用定制银饰强化轮廓和扣合逻辑，适合配件方向。',
        },
    ],
    bottomTabs: [
        { id: 'home', label: '首页', glyph: '⌂', active: true },
        { id: 'custom', label: '定制', glyph: '✦' },
        { id: 'chat', label: '沟通', glyph: '◌' },
        { id: 'mine', label: '我的', glyph: '◯' },
    ],
}

export const publishPreset: PublishPreset = {
    progressLabel: '1 / 3',
    headerTitle: '发布需求',
    headerSubtitle: '先选一种发布方式，再补充对应信息',
    uploadGuideLabel: '参考图',
    uploadGuideTitle: '上传灵感图',
    uploadGuideDescription: '适合已经有参考图，想直接进入判断的人',
    requirementHintTitle: '文字需求',
    requirementHintSubtitle: '用一两句话说清楚你想做什么、最在意什么',
    requirementPlaceholder:
        '例如：我想做一件偏东方轮廓的短外套，保留花影层次，但不要太艳。预算在 8 千以内，希望 5 月中旬前拿到。',
    craftOptions: [
        { id: 'tie-dye', label: '扎染' },
        { id: 'su-embroidery', label: '苏绣' },
        { id: 'silver', label: '银饰' },
    ],
    budgetOptions: [
        { id: 'budget-6800', label: '预算上限', value: '¥6,800' },
        { id: 'budget-8000', label: '预算上限', value: '¥8,000' },
        { id: 'budget-12000', label: '预算上限', value: '¥12,000' },
    ],
    timelineOptions: [
        { id: 'timeline-apr', label: '交付时间', value: '4 月下旬前' },
        { id: 'timeline-may', label: '交付时间', value: '5 月中旬前' },
        { id: 'timeline-june', label: '交付时间', value: '6 月上旬前' },
    ],
    initialUploadedImages: [],
    initialRequirementText: '',
    defaultCraftId: 'tie-dye',
    defaultBudgetId: 'budget-8000',
    defaultTimelineId: 'timeline-may',
}
