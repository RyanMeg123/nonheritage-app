/** @format */

import { Platform } from 'react-native'

const iosChineseFont = 'PingFang SC'

const displayFont = Platform.select({
    ios: iosChineseFont,
    android: 'sans-serif-medium',
    default: 'sans-serif',
})

export const colors = {
    accentBurgundy: '#C97878',
    accentCopper: '#D99883',
    accentGold: '#E7C87A',
    bgBase: '#FFF9F5',
    bgSoft: '#FCEEE5',
    bgWarm: '#F8E4D8',
    lineSoft: '#F1DFD2',
    lineStrong: '#E4C8BE',
    surfaceCream: '#FFFFFF',
    surfaceDeep: 'rgb(249, 199, 205)',
    textInverse: '#FFFDFB',
    textPrimary: '#1F2430',
    textSecondary: '#7C7F8F',
    warnBg: '#FFF3D8',
    warnText: '#906D2A',
    heroFog: 'rgba(255,255,255,0.7)',
    heroGlow: 'rgba(255,215,199,0.45)',
    mutedCream: '#FFFDFB',
    mutedPaper: '#FFF8F2',
    uploadSurface: '#F6FBFF',
    resultTint: '#FBEFEA',
    processSurface: '#F9FBFF',
    chipIdle: '#FFF7F1',
    chipActive: '#E8A4A4',
    cardOverlay: 'rgba(255,255,255,0.55)',
    sky: '#DFF4FF',
    skyStrong: '#C7EAFA',
    lilac: '#F5E8E8',
    blush: '#F8D9D5',
    butter: '#F9ECA7',
    mint: '#DDF2E5',
    shadow: 'rgba(201, 180, 171, 0.22)',
} as const

export const radii = {
    m: 20,
    l: 26,
    xl: 32,
    pill: 999,
} as const

export const typography = {
    display: displayFont,
    body: Platform.select({
        ios: iosChineseFont,
        android: 'sans-serif',
        default: 'sans-serif',
    }),
} as const
