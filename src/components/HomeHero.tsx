/** @format */

import { useEffect, useRef } from 'react'
import {
    Animated,
    Easing,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import { colors, radii, typography } from '../theme/tokens'
import type { HomeProcessStep } from '../types'

const heroIllustration = require('../../assets/home-card.png')
const processCollage = require('../../assets/lc.png')
const processCollageAsset = Image.resolveAssetSource(processCollage)

type Props = {
    eyebrow: string
    title: string
    footnote: string
    summaryTitle: string
    summaryText: string
    processSteps: HomeProcessStep[]
    artisanCount: number
    artisanLabel: string
}

export function HomeHero({
    eyebrow,
    title,
    footnote,
    artisanCount,
    artisanLabel,
}: Props) {
    const cloudShift = useRef(new Animated.Value(0)).current
    const haloPulse = useRef(new Animated.Value(0)).current
    const figureFloat = useRef(new Animated.Value(0)).current

    useEffect(() => {
        const cloudLoop = Animated.loop(
            Animated.sequence([
                Animated.timing(cloudShift, {
                    toValue: 1,
                    duration: 4200,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
                Animated.timing(cloudShift, {
                    toValue: 0,
                    duration: 4200,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
            ]),
        )

        const haloLoop = Animated.loop(
            Animated.sequence([
                Animated.timing(haloPulse, {
                    toValue: 1,
                    duration: 2600,
                    easing: Easing.inOut(Easing.quad),
                    useNativeDriver: true,
                }),
                Animated.timing(haloPulse, {
                    toValue: 0,
                    duration: 2600,
                    easing: Easing.inOut(Easing.quad),
                    useNativeDriver: true,
                }),
            ]),
        )

        const figureLoop = Animated.loop(
            Animated.sequence([
                Animated.timing(figureFloat, {
                    toValue: 1,
                    duration: 3000,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
                Animated.timing(figureFloat, {
                    toValue: 0,
                    duration: 3000,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
            ]),
        )

        cloudLoop.start()
        haloLoop.start()
        figureLoop.start()

        return () => {
            cloudLoop.stop()
            haloLoop.stop()
            figureLoop.stop()
        }
    }, [cloudShift, figureFloat, haloPulse])

    const cloudLargeTransform = {
        transform: [
            {
                translateX: cloudShift.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 14],
                }),
            },
        ],
    }
    const cloudSmallTransform = {
        transform: [
            {
                translateX: cloudShift.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -10],
                }),
            },
        ],
    }
    const haloTransform = {
        transform: [
            {
                scale: haloPulse.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.08],
                }),
            },
        ],
        opacity: haloPulse.interpolate({
            inputRange: [0, 1],
            outputRange: [0.72, 0.96],
        }),
    }
    const figureTransform = {
        transform: [
            {
                translateY: figureFloat.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -8],
                }),
            },
        ],
    }

    return (
        <View style={styles.shell}>
            <View style={styles.heroSurface}>
                <View style={styles.skyWash} />
                <Animated.View
                    style={[styles.cloudLarge, cloudLargeTransform]}
                />
                <Animated.View
                    style={[styles.cloudSmall, cloudSmallTransform]}
                />
                <Animated.View style={[styles.sunHalo, haloTransform]} />
                <View style={styles.heroHeader}>
                    <Text style={styles.eyebrow}>{eyebrow}</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>灵感首页</Text>
                    </View>
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.footnote}>{footnote}</Text>

                <Animated.View style={[styles.figureWrap, figureTransform]}>
                    <Image
                        source={heroIllustration}
                        style={styles.figureImage}
                        resizeMode="cover"
                    />
                </Animated.View>

                <View style={styles.floatingRow}>
                    <View style={[styles.floatBadge, styles.floatBadgeWarm]}>
                        <Text style={styles.floatBadgeValue}>
                            {artisanCount}
                        </Text>
                        <Text style={styles.floatBadgeLabel}>
                            {artisanLabel}
                        </Text>
                    </View>
                    <View style={[styles.floatBadge, styles.floatBadgeSoft]}>
                        <Text style={styles.floatBadgeValue}>24h</Text>
                        <Text style={styles.floatBadgeLabel}>灵感上新</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export function HomeHeroDetails({
    summaryTitle,
}: Pick<Props, 'summaryTitle'>) {
    return (
        <View style={styles.collageOnlyCard}>
            <View style={styles.summaryCopy}>
                <Text style={styles.summaryTitle}>{summaryTitle}</Text>
                <Text style={styles.summaryText}>
                    系统会先整理需求，再给出可执行工艺方案、预估价格和匹配传承人。
                </Text>
            </View>
            <View style={styles.collageOnlyWrap}>
                <Image
                    source={processCollage}
                    style={styles.collageOnlyImage}
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shell: {},
    heroSurface: {
        minHeight: 360,
        borderRadius: 42,
        overflow: 'hidden',
        paddingHorizontal: 24,
        paddingTop: 22,
        backgroundColor: '#FDF9F4',
        borderWidth: 1,
        borderColor: 'rgba(241,223,210,0.88)',
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 18 },
        shadowOpacity: 0.95,
        shadowRadius: 30,
        elevation: 8,
    },
    skyWash: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.sky,
        opacity: 0.45,
    },
    cloudLarge: {
        position: 'absolute',
        left: -8,
        top: 86,
        width: 170,
        height: 64,
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,0.85)',
    },
    cloudSmall: {
        position: 'absolute',
        right: 28,
        top: 54,
        width: 104,
        height: 42,
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    sunHalo: {
        position: 'absolute',
        right: -20,
        top: 132,
        width: 154,
        height: 154,
        borderRadius: 77,
        backgroundColor: 'rgba(255,233,171,0.45)',
    },
    heroHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eyebrow: {
        color: colors.accentBurgundy,
        fontFamily: typography.body,
        fontSize: 13,
        fontWeight: '600',
        letterSpacing: 0.4,
    },
    badge: {
        borderRadius: radii.pill,
        paddingHorizontal: 12,
        paddingVertical: 7,
        backgroundColor: 'rgba(255,255,255,0.72)',
    },
    badgeText: {
        color: colors.textPrimary,
        fontFamily: typography.body,
        fontSize: 13,
        fontWeight: '500',
    },
    title: {
        marginTop: 24,
        color: colors.textPrimary,
        fontFamily: typography.display,
        fontSize: 32,
        lineHeight: 38,
        letterSpacing: -0.6,
        fontWeight: '600',
        width: 242,
    },
    footnote: {
        marginTop: 10,
        color: colors.textSecondary,
        fontFamily: typography.body,
        fontSize: 16,
        lineHeight: 24,
        width: 224,
    },
    figureWrap: {
        position: 'absolute',
        right: -8,
        bottom: 18,
        width: 190,
        height: 190,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    floatingRow: {
        position: 'absolute',
        left: 10,
        bottom: 86,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-end',
    },
    floatBadge: {
        borderRadius: 18,
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: 'rgba(255,255,255,0.86)',
        minWidth: 96,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.75,
        shadowRadius: 18,
        elevation: 5,
    },
    floatBadgeWarm: {
        backgroundColor: 'rgba(255,245,239,0.94)',
    },
    floatBadgeSoft: {
        backgroundColor: 'rgba(245,232,232,0.94)',
    },
    floatBadgeValue: {
        color: colors.textPrimary,
        fontFamily: typography.display,
        fontSize: 20,
        fontWeight: '600',
    },
    floatBadgeLabel: {
        color: colors.textSecondary,
        fontFamily: typography.body,
        fontSize: 13,
        fontWeight: '500',
    },
    figureImage: {
        width: 220,
        height: 290,
        borderRadius: 26,
    },
    summaryCard: {
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.96)',
        padding: 18,
        borderWidth: 1,
        borderColor: colors.lineSoft,
        gap: 14,
    },
    summaryCopy: {
        gap: 6,
    },
    summaryTitle: {
        color: colors.textPrimary,
        fontFamily: typography.body,
        fontSize: 17,
        fontWeight: '600',
    },
    summaryText: {
        color: colors.textSecondary,
        fontFamily: typography.body,
        fontSize: 15,
        lineHeight: 22,
    },
    collageCard: {
        width: '100%',
        height: 188,
        borderRadius: 24,
        overflow: 'hidden',
        backgroundColor: '#F7EEE7',
    },
    collageImage: {
        width: '100%',
        height: '100%',
    },
    collageOnlyCard: {
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.96)',
        padding: 14,
        borderWidth: 1,
        borderColor: colors.lineSoft,
    },
    collageOnlyWrap: {
        width: '100%',
        aspectRatio:
            processCollageAsset.width / processCollageAsset.height,
        borderRadius: 24,
        overflow: 'hidden',
        backgroundColor: '#F7EEE7',
    },
    collageOnlyImage: {
        width: '100%',
        height: '100%',
    },
    metricsRow: {
        flexDirection: 'row',
        gap: 10,
    },
    metricCard: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#FFF7F1',
        paddingHorizontal: 14,
        paddingVertical: 16,
        gap: 4,
    },
    metricCardSky: {
        backgroundColor: '#EFF8FF',
    },
    metricCardWarm: {
        backgroundColor: '#FFF5EF',
    },
    metricValue: {
        color: colors.textPrimary,
        fontFamily: typography.display,
        fontSize: 20,
        fontWeight: '600',
    },
    metricLabel: {
        color: colors.textSecondary,
        fontFamily: typography.body,
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 18,
    },
    processSection: {
        flexDirection: 'row',
        gap: 10,
    },
    processCard: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 14,
        backgroundColor: '#FFF7F1',
        gap: 10,
    },
    processIconWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    processIcon: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFF8FF',
    },
    processIconText: {
        color: colors.textPrimary,
        fontFamily: typography.body,
        fontSize: 12,
        fontWeight: '700',
    },
    processIndex: {
        color: colors.textSecondary,
        fontFamily: typography.body,
        fontSize: 11,
        fontWeight: '700',
    },
    processTitle: {
        color: colors.textPrimary,
        fontFamily: typography.body,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 18,
    },
    processDescription: {
        color: colors.textSecondary,
        fontFamily: typography.body,
        fontSize: 12,
        lineHeight: 18,
    },
})
