/** @format */

import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import {
    ActivityIndicator,
    Animated,
    Easing,
    Image,
    type ImageSourcePropType,
    LayoutChangeEvent,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    type StyleProp,
    type ViewStyle,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { colors, radii, typography } from '../theme/tokens'
import type { MainTabId } from '../types'

const publishHeaderFigure = require('../../assets/illustrations/dz-hero.png')
const publishHeaderFlowers = require('../../assets/illustrations/huaban.jpeg')
const conversationHeaderFigure = require('../../assets/illustrations/email-girl.jpeg')
const profileHeaderFigure = require('../../assets/bar/profile.png')
const mainTabIcons = {
    home: require('../../assets/bar/home.png'),
    custom: require('../../assets/bar/icon-flower.jpeg'),
    chat: require('../../assets/bar/copy.jpeg'),
    mine: require('../../assets/bar/person.jpeg'),
} as const

export function ScreenShell({
    children,
    footer,
    scrollContentStyle,
}: {
    children: ReactNode
    footer?: ReactNode
    scrollContentStyle?: StyleProp<ViewStyle>
}) {
    const [footerHeight, setFooterHeight] = useState(0)
    const insets = useSafeAreaInsets()

    const flattenedScrollStyle = StyleSheet.flatten(scrollContentStyle)
    const customPaddingBottom =
        flattenedScrollStyle &&
        typeof flattenedScrollStyle.paddingBottom === 'number'
            ? flattenedScrollStyle.paddingBottom
            : 0
    const customPaddingTop =
        flattenedScrollStyle &&
        typeof flattenedScrollStyle.paddingTop === 'number'
            ? flattenedScrollStyle.paddingTop
            : 0

    const finalScrollContentStyle = useMemo(() => {
        const reservedFooterSpace = footer ? footerHeight + 28 : 0
        const paddingBottom = Math.max(
            styles.scrollContent.paddingBottom,
            customPaddingBottom,
            reservedFooterSpace,
        )
        const paddingTop = Math.max(
            styles.scrollContent.paddingTop,
            insets.top + -100,
            customPaddingTop,
        )

        return [styles.scrollContent, scrollContentStyle, { paddingTop, paddingBottom }]
    }, [customPaddingBottom, customPaddingTop, footer, footerHeight, insets.top, scrollContentStyle])

    const handleFooterLayout = (event: LayoutChangeEvent) => {
        const nextHeight = Math.ceil(event.nativeEvent.layout.height)
        if (nextHeight !== footerHeight) {
            setFooterHeight(nextHeight)
        }
    }

    return (
        <View style={styles.screen}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={finalScrollContentStyle}
                showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
            {footer ? (
                <View style={styles.footerWrap} onLayout={handleFooterLayout}>
                    {footer}
                </View>
            ) : null}
        </View>
    )
}

export function BackChip({ onPress }: { onPress: () => void }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.backChip,
                pressed && styles.pressed,
            ]}
        >
            <Text style={styles.backChipText}>←</Text>
        </Pressable>
    )
}

export function SectionCard({
    children,
    style,
    bordered = true,
    tone = 'cream',
}: {
    children: ReactNode
    style?: StyleProp<ViewStyle>
    bordered?: boolean
    tone?: 'cream' | 'paper' | 'deep' | 'warn'
}) {
    return (
        <View
            style={[
                styles.card,
                styles.creamCard,
                tone === 'paper' ? styles.paperCard : null,
                tone === 'deep' ? styles.deepCard : null,
                tone === 'warn' ? styles.warnCard : null,
                bordered ? styles.borderedCard : null,
                style,
            ]}
        >
            {children}
        </View>
    )
}

export function CardTitle({
    children,
    inverse = false,
}: {
    children: ReactNode
    inverse?: boolean
}) {
    return (
        <Text style={[styles.cardTitle, inverse ? styles.textInverse : null]}>
            {children}
        </Text>
    )
}

export function BodyText({
    children,
    style,
    inverse = false,
}: {
    children: ReactNode
    style?: any
    inverse?: boolean
}) {
    return (
        <Text
            style={[
                styles.bodyText,
                inverse ? styles.bodyTextInverse : null,
                style,
            ]}
        >
            {children}
        </Text>
    )
}

export function DisplayText({
    children,
    inverse = false,
    style,
}: {
    children: ReactNode
    inverse?: boolean
    style?: any
}) {
    return (
        <Text
            style={[
                styles.displayText,
                inverse ? styles.textInverse : null,
                style,
            ]}
        >
            {children}
        </Text>
    )
}

export function PillButton({
    label,
    onPress,
    inverse = false,
    trailing = false,
    isLoading = false,
    disabled = false,
}: {
    label: string
    onPress: () => void
    inverse?: boolean
    trailing?: boolean
    isLoading?: boolean
    disabled?: boolean
}) {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled || isLoading}
            style={({ pressed }) => [
                styles.pillButton,
                inverse ? styles.pillButtonInverse : styles.pillButtonDefault,
                (pressed || disabled || isLoading) && styles.pressed,
            ]}
        >
            <View style={styles.buttonContent}>
                <View>
                    {trailing ? (
                        <BodyText inverse style={styles.buttonEyebrow}>
                            下一步
                        </BodyText>
                    ) : null}
                    <Text
                        style={[
                            styles.buttonLabel,
                            inverse ? styles.textInverse : null,
                        ]}
                    >
                        {label}
                    </Text>
                </View>
                {isLoading ? (
                    <ActivityIndicator
                        size="small"
                        color={inverse ? colors.textInverse : colors.accentBurgundy}
                    />
                ) : trailing ? (
                    <Text style={styles.buttonArrow}>→</Text>
                ) : null}
            </View>
        </Pressable>
    )
}

export function ToggleChip({
    label,
    active,
    onPress,
}: {
    label: string
    active?: boolean
    onPress: () => void
}) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.toggleChip,
                active ? styles.toggleChipActive : styles.toggleChipIdle,
                pressed && styles.pressed,
            ]}
        >
            <Text
                style={[
                    styles.toggleChipText,
                    active ? styles.toggleChipTextActive : null,
                ]}
            >
                {label}
            </Text>
        </Pressable>
    )
}

export function InputField({
    value,
    onChangeText,
    placeholder,
}: {
    value: string
    onChangeText: (value: string) => void
    placeholder: string
}) {
    return (
        <View style={styles.inputWrap}>
            <TextInput
                multiline
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#9A8674"
                style={styles.input}
                textAlignVertical="top"
            />
        </View>
    )
}

export function MainTabBar({
    tabs,
    activeTab,
    onTabPress,
    compact = false,
}: {
    tabs: Array<{ id: string; label: string }>
    activeTab: MainTabId
    onTabPress: (tabId: MainTabId) => void
    compact?: boolean
}) {
    return (
        <View style={[styles.tabWrap, compact ? styles.tabWrapCompact : null]}>
            {tabs.map((tab) => {
                const typedId = tab.id as MainTabId
                const active = typedId === activeTab

                return (
                    <Pressable
                        key={tab.id}
                        onPress={() => onTabPress(typedId)}
                        style={[
                            styles.tabItem,
                            compact ? styles.tabItemCompact : null,
                        ]}
                    >
                        <View
                            style={[
                                styles.tabIcon,
                                compact ? styles.tabIconCompact : null,
                                active ? styles.tabIconActive : null,
                            ]}
                        >
                            <Image
                                resizeMode="contain"
                                source={mainTabIcons[typedId]}
                                style={[
                                    styles.tabIconImage,
                                    compact ? styles.tabIconImageCompact : null,
                                    active ? styles.tabIconImageActive : null,
                                ]}
                            />
                        </View>
                        <Text
                            style={[
                                styles.tabLabel,
                                compact ? styles.tabLabelCompact : null,
                                active ? styles.tabLabelActive : null,
                            ]}
                        >
                            {tab.label}
                        </Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

export function PageHeaderCard({
    title,
    subtitle,
    eyebrow,
    badge,
    badgeIcon,
    onBack,
    style,
    animatedHero = false,
    showPublishIllustration = false,
    showConversationIllustration = false,
    showProfileIllustration = false,
}: {
    title: string
    subtitle: string
    eyebrow: string
    badge?: string
    badgeIcon?: ReactNode
    onBack?: () => void
    style?: StyleProp<ViewStyle>
    animatedHero?: boolean
    showPublishIllustration?: boolean
    showConversationIllustration?: boolean
    showProfileIllustration?: boolean
}) {
    const titlePlatePulse = useRef(new Animated.Value(0)).current
    const glowFloat = useRef(new Animated.Value(0)).current
    const badgeEnter = useRef(new Animated.Value(animatedHero ? 0 : 1)).current
    const flowerMotion = useRef(new Animated.Value(0)).current
    const publishGlowPulse = useRef(new Animated.Value(0)).current
    const conversationFigureFloat = useRef(new Animated.Value(0)).current
    const profileFigureFloat = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (!animatedHero) {
            titlePlatePulse.setValue(0)
            glowFloat.setValue(0)
            badgeEnter.setValue(1)
            return
        }

        const titlePlateLoop = Animated.loop(
            Animated.sequence([
                Animated.timing(titlePlatePulse, {
                    toValue: 1,
                    duration: 1700,
                    easing: Easing.inOut(Easing.quad),
                    useNativeDriver: true,
                }),
                Animated.timing(titlePlatePulse, {
                    toValue: 0,
                    duration: 1700,
                    easing: Easing.inOut(Easing.quad),
                    useNativeDriver: true,
                }),
            ]),
        )

        const glowLoop = Animated.loop(
            Animated.sequence([
                Animated.timing(glowFloat, {
                    toValue: 1,
                    duration: 2400,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
                Animated.timing(glowFloat, {
                    toValue: 0,
                    duration: 2400,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
            ]),
        )

        const badgeEnterAnimation = Animated.timing(badgeEnter, {
            toValue: 1,
            duration: 620,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
        })

        titlePlateLoop.start()
        glowLoop.start()
        badgeEnterAnimation.start()

        return () => {
            titlePlateLoop.stop()
            glowLoop.stop()
            badgeEnterAnimation.stop()
        }
    }, [animatedHero, badgeEnter, glowFloat, titlePlatePulse])

    useEffect(() => {
        if (!showPublishIllustration) {
            flowerMotion.setValue(0)
            publishGlowPulse.setValue(0)
            return
        }

        const flowerLoop = Animated.loop(
            Animated.sequence([
                Animated.timing(flowerMotion, {
                    toValue: 1,
                    duration: 4300,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
                Animated.timing(flowerMotion, {
                    toValue: 0,
                    duration: 3900,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
            ]),
        )

        const glowPulseLoop = Animated.loop(
            Animated.sequence([
                Animated.timing(publishGlowPulse, {
                    toValue: 1,
                    duration: 3000,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
                Animated.timing(publishGlowPulse, {
                    toValue: 0,
                    duration: 3400,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
            ]),
        )

        flowerLoop.start()
        glowPulseLoop.start()

        return () => {
            flowerLoop.stop()
            glowPulseLoop.stop()
        }
    }, [flowerMotion, publishGlowPulse, showPublishIllustration])

    useEffect(() => {
        if (!showConversationIllustration) {
            conversationFigureFloat.setValue(0)
            return
        }

        const conversationLoop = Animated.loop(
            Animated.sequence([
                Animated.timing(conversationFigureFloat, {
                    toValue: 1,
                    duration: 3200,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
                Animated.timing(conversationFigureFloat, {
                    toValue: 0,
                    duration: 3200,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
            ]),
        )

        conversationLoop.start()

        return () => conversationLoop.stop()
    }, [conversationFigureFloat, showConversationIllustration])

    useEffect(() => {
        if (!showProfileIllustration) {
            profileFigureFloat.setValue(0)
            return
        }

        const profileLoop = Animated.loop(
            Animated.sequence([
                Animated.timing(profileFigureFloat, {
                    toValue: 1,
                    duration: 3600,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
                Animated.timing(profileFigureFloat, {
                    toValue: 0,
                    duration: 3600,
                    easing: Easing.inOut(Easing.sin),
                    useNativeDriver: true,
                }),
            ]),
        )

        profileLoop.start()

        return () => profileLoop.stop()
    }, [profileFigureFloat, showProfileIllustration])

    const titlePlateStyle: any = animatedHero
        ? {
              opacity: titlePlatePulse.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.24, 0.76],
              }),
              transform: [
                  {
                      scale: titlePlatePulse.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 1.05],
                      }),
                  },
              ],
          }
        : null

    const glowMotionStyle: any = showConversationIllustration
        ? {
              opacity: glowFloat.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.52, 0.74],
              }),
              transform: [
                  {
                      translateY: glowFloat.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -8],
                      }),
                  },
                  {
                      scale: glowFloat.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 1.05],
                      }),
                  },
              ],
          }
        : animatedHero
          ? {
                transform: [
                    {
                        translateY: glowFloat.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -10],
                        }),
                    },
                    {
                        scale: glowFloat.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.085],
                        }),
                    },
                ],
            }
          : showPublishIllustration
            ? {
                  opacity: publishGlowPulse.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.88, 1],
                  }),
                  transform: [
                      {
                          translateY: publishGlowPulse.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, -5],
                          }),
                      },
                      {
                          scale: publishGlowPulse.interpolate({
                              inputRange: [0, 1],
                              outputRange: [1, 1.06],
                          }),
                      },
                  ],
              }
            : null

    const badgeMotionStyle: any = animatedHero
        ? {
              opacity: badgeEnter,
              transform: [
                  {
                      translateY: badgeEnter.interpolate({
                          inputRange: [0, 1],
                          outputRange: [6, 0],
                      }),
                  },
                  {
                      scale: badgeEnter.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.68, 1],
                      }),
                  },
              ],
          }
        : null

    const flowerMotionStyle: any = showPublishIllustration
        ? {
              opacity: flowerMotion.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.6, 0.76],
              }),
              transform: [
                  {
                      translateY: flowerMotion.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, -5],
                      }),
                  },
                  {
                      translateX: flowerMotion.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-1, 2],
                      }),
                  },
                  {
                      scale: flowerMotion.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.992, 1.022],
                      }),
                  },
                  {
                      rotate: flowerMotion.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['-1deg', '2.4deg'],
                      }),
                  },
              ],
          }
        : null

    const conversationFigureMotionStyle: any = showConversationIllustration
        ? {
              transform: [
                  {
                      translateY: conversationFigureFloat.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, -4],
                      }),
                  },
                  {
                      rotate: conversationFigureFloat.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['-5deg', '-2deg'],
                      }),
                  },
              ],
          }
        : null

    const profileFigureMotionStyle: any = showProfileIllustration
        ? {
              transform: [
                  {
                      translateY: profileFigureFloat.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, -4],
                      }),
                  },
              ],
          }
        : null

    const headerIllustrationSource: ImageSourcePropType | null =
        showPublishIllustration
            ? publishHeaderFigure
            : showConversationIllustration
              ? conversationHeaderFigure
              : showProfileIllustration
                ? profileHeaderFigure
                : null

    return (
        <View style={[styles.pageHeaderCard, style]}>
            <View style={styles.pageHeaderSky} />
            <Animated.View
                style={[
                    styles.pageHeaderGlow,
                    showConversationIllustration
                        ? styles.pageHeaderGlowConversation
                        : null,
                    glowMotionStyle,
                ]}
            />
            <View style={styles.pageHeaderCloud} />
            {headerIllustrationSource ? (
                <View
                    pointerEvents="none"
                    style={[
                        styles.pageHeaderIllustrationScene,
                        showConversationIllustration
                            ? styles.pageHeaderIllustrationSceneConversation
                            : null,
                        showProfileIllustration
                            ? styles.pageHeaderIllustrationSceneProfile
                            : null,
                    ]}
                >
                    {showPublishIllustration ? (
                        <Animated.View
                            style={[
                                styles.pageHeaderFlowerWrap,
                                flowerMotionStyle,
                            ]}
                        >
                            <Image
                                resizeMode="contain"
                                source={publishHeaderFlowers}
                                style={styles.pageHeaderFlowerImage}
                            />
                        </Animated.View>
                    ) : null}
                    <Animated.View
                        style={[
                            styles.pageHeaderFigureWrap,
                            showConversationIllustration
                                ? [
                                      styles.pageHeaderFigureWrapConversation,
                                      conversationFigureMotionStyle,
                                  ]
                                : null,
                            showProfileIllustration
                                ? [
                                      styles.pageHeaderFigureWrapProfile,
                                      profileFigureMotionStyle,
                                  ]
                                : null,
                        ]}
                    >
                        <Image
                            resizeMode="contain"
                            source={headerIllustrationSource}
                            style={[
                                styles.pageHeaderFigureImage,
                                showConversationIllustration
                                    ? styles.pageHeaderFigureImageConversation
                                    : null,
                                showProfileIllustration
                                    ? styles.pageHeaderFigureImageProfile
                                    : null,
                            ]}
                        />
                    </Animated.View>
                </View>
            ) : null}
            <View style={styles.pageHeaderTop}>
                {onBack ? (
                    <BackChip onPress={onBack} />
                ) : (
                    <View style={styles.pageHeaderSpacer} />
                )}
                {badge ? (
                    <Animated.View style={badgeMotionStyle}>
                        <View style={styles.pageHeaderBadge}>
                            {badgeIcon ? (
                                <View style={styles.pageHeaderBadgeIcon}>
                                    {badgeIcon}
                                </View>
                            ) : null}
                            <Text style={styles.pageHeaderBadgeText}>
                                {badge}
                            </Text>
                        </View>
                    </Animated.View>
                ) : null}
            </View>
            <View style={styles.pageHeaderCopy}>
                {animatedHero ? (
                    <Animated.View
                        pointerEvents="none"
                        style={[
                            styles.pageHeaderTitlePlate,
                            showConversationIllustration
                                ? styles.pageHeaderTitlePlateConversation
                                : null,
                            titlePlateStyle,
                        ]}
                    />
                ) : null}
                <Text style={styles.pageHeaderEyebrow}>{eyebrow}</Text>
                <DisplayText
                    style={[
                        styles.pageHeaderTitle,
                        showPublishIllustration
                            ? styles.pageHeaderTitleWithArt
                            : showConversationIllustration
                              ? styles.pageHeaderTitleWithConversationArt
                              : showProfileIllustration
                                ? styles.pageHeaderTitleWithProfileArt
                                : null,
                    ]}
                >
                    {title}
                </DisplayText>
                <BodyText
                    style={[
                        styles.pageHeaderSubtitle,
                        showPublishIllustration
                            ? styles.pageHeaderSubtitleWithArt
                            : showConversationIllustration
                              ? styles.pageHeaderSubtitleWithConversationArt
                              : showProfileIllustration
                                ? styles.pageHeaderSubtitleWithProfileArt
                                : null,
                    ]}
                >
                    {subtitle}
                </BodyText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.bgBase,
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: 26,
        paddingHorizontal: 20,
        paddingBottom: 160,
        gap: 18,
    },
    footerWrap: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 14,
        paddingHorizontal: 14,
        paddingTop: 10,
        paddingBottom: 14,
        borderRadius: 30,
        backgroundColor: 'rgba(255,253,250,0.94)',
        borderWidth: 1,
        borderColor: 'rgba(241,223,210,0.8)',
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 1,
        shadowRadius: 24,
        elevation: 10,
    },
    backChip: {
        borderRadius: radii.pill,
        minWidth: 44,
        minHeight: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.lineSoft,
        backgroundColor: 'rgba(255,255,255,0.92)',
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 18,
        elevation: 6,
    },
    backChipText: {
        color: colors.textPrimary,
        fontFamily: typography.body,
        fontSize: 18,
        fontWeight: '600',
    },
    pressed: {
        opacity: 0.9,
        transform: [{ scale: 0.98 }],
    },
    card: {
        borderRadius: 28,
        padding: 20,
        gap: 12,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.85,
        shadowRadius: 24,
        elevation: 7,
    },
    creamCard: {
        backgroundColor: colors.mutedCream,
    },
    paperCard: {
        backgroundColor: colors.mutedPaper,
    },
    deepCard: {
        backgroundColor: '#F4D8D6',
    },
    warnCard: {
        backgroundColor: colors.warnBg,
    },
    borderedCard: {
        borderWidth: 1,
        borderColor: colors.lineSoft,
    },
    cardTitle: {
        color: colors.textPrimary,
        fontFamily: typography.body,
        fontSize: 16,
        fontWeight: '600',
    },
    displayText: {
        color: colors.textPrimary,
        fontFamily: typography.display,
        fontSize: 30,
        fontWeight: '600',
        letterSpacing: -0.9,
    },
    textInverse: {
        color: colors.textInverse,
    },
    bodyText: {
        color: colors.textSecondary,
        fontFamily: typography.body,
        fontSize: 13,
        lineHeight: 20,
    },
    bodyTextInverse: {
        color: 'rgba(255,253,250,0.82)',
    },
    pillButton: {
        borderRadius: 24,
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    pillButtonDefault: {
        backgroundColor: colors.surfaceCream,
        borderWidth: 1,
        borderColor: colors.lineSoft,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.7,
        shadowRadius: 20,
        elevation: 5,
    },
    pillButtonInverse: {
        backgroundColor: colors.accentBurgundy,
        shadowColor: 'rgba(216, 150, 142, 0.45)',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 1,
        shadowRadius: 22,
        elevation: 8,
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonEyebrow: {
        color: 'rgba(240,228,213,0.64)',
        marginBottom: 4,
    },
    buttonLabel: {
        color: colors.textPrimary,
        fontFamily: typography.body,
        fontSize: 16,
        fontWeight: '600',
    },
    buttonArrow: {
        color: colors.textInverse,
        fontSize: 20,
        fontWeight: '600',
    },
    toggleChip: {
        borderRadius: radii.pill,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    toggleChipIdle: {
        backgroundColor: colors.chipIdle,
        borderWidth: 1,
        borderColor: colors.lineSoft,
    },
    toggleChipActive: {
        backgroundColor: colors.chipActive,
    },
    toggleChipText: {
        color: colors.textPrimary,
        fontFamily: typography.body,
        fontSize: 13,
        fontWeight: '600',
    },
    toggleChipTextActive: {
        color: colors.textPrimary,
    },
    inputWrap: {
        borderRadius: 22,
        padding: 14,
        borderWidth: 1,
        borderColor: colors.lineSoft,
        backgroundColor: colors.surfaceCream,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.55,
        shadowRadius: 18,
        elevation: 4,
    },
    input: {
        minHeight: 110,
        color: colors.textPrimary,
        fontFamily: typography.body,
        fontSize: 14,
        lineHeight: 22,
    },
    tabWrap: {
        flexDirection: 'row',
        gap: 6,
    },
    tabWrapCompact: {
        gap: 4,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        gap: 6,
        paddingVertical: 6,
    },
    tabItemCompact: {
        gap: 4,
        paddingVertical: 2,
    },
    tabIcon: {
        width: 44,
        height: 44,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF4EC',
    },
    tabIconCompact: {
        width: 38,
        height: 38,
        borderRadius: 14,
        backgroundColor: '#FFF7F1',
    },
    tabIconActive: {
        backgroundColor: colors.accentBurgundy,
    },
    tabIconImage: {
        width: 21,
        height: 21,
        tintColor: colors.textSecondary,
    },
    tabIconImageCompact: {
        width: 18,
        height: 18,
    },
    tabIconImageActive: {
        tintColor: colors.textInverse,
    },
    tabLabel: {
        color: colors.textSecondary,
        fontFamily: typography.body,
        fontSize: 11,
        fontWeight: '600',
    },
    tabLabelCompact: {
        fontSize: 10,
    },
    tabLabelActive: {
        color: colors.textPrimary,
    },
    pageHeaderCard: {
        minHeight: 172,
        borderRadius: 32,
        overflow: 'hidden',
        paddingHorizontal: 20,
        paddingTop: 18,
        paddingBottom: 20,
        backgroundColor: '#FDF9F4',
        borderWidth: 1,
        borderColor: 'rgba(241,223,210,0.88)',
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 14 },
        shadowOpacity: 0.85,
        shadowRadius: 24,
        elevation: 8,
        gap: 6,
    },
    pageHeaderSky: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.sky,
        opacity: 0.36,
    },
    pageHeaderGlow: {
        position: 'absolute',
        right: -22,
        top: 26,
        width: 132,
        height: 132,
        borderRadius: 66,
        backgroundColor: 'rgba(255,232,184,0.5)',
    },
    pageHeaderGlowConversation: {
        right: 12,
        top: 28,
        width: 128,
        height: 128,
        borderRadius: 64,
        backgroundColor: 'rgba(255,232,184,0.34)',
    },
    pageHeaderCloud: {
        position: 'absolute',
        left: -16,
        top: 98,
        width: 136,
        height: 44,
        borderRadius: 24,
        backgroundColor: 'rgba(255,255,255,0.84)',
    },
    pageHeaderIllustrationScene: {
        position: 'absolute',
        right: -4,
        bottom: -10,
        width: 190,
        height: 196,
    },
    pageHeaderIllustrationSceneConversation: {
        right: -10,
        top: 2,
        width: 208,
        height: 208,
        zIndex: 1,
    },
    pageHeaderIllustrationSceneProfile: {
        right: -8,
        bottom: -2,
        width: 194,
        height: 168,
    },
    pageHeaderFlowerWrap: {
        position: 'absolute',
        top: -8,
        right: -30,
        width: 182,
        height: 182,
    },
    pageHeaderFlowerImage: {
        width: '100%',
        height: '100%',
    },
    pageHeaderFigureWrap: {
        position: 'absolute',
        right: 6,
        bottom: -6,
        width: 150,
        height: 186,
    },
    pageHeaderFigureWrapConversation: {
        top: -8,
        right: -18,
        width: 228,
        height: 228,
    },
    pageHeaderFigureWrapProfile: {
        right: -2,
        bottom: -4,
        width: 176,
        height: 164,
    },
    pageHeaderFigureImage: {
        width: '100%',
        height: '100%',
    },
    pageHeaderFigureImageConversation: {
        width: '116%',
        height: '116%',
        marginLeft: -14,
        marginTop: -12,
        opacity: 1,
        shadowColor: 'rgba(142,101,76,0.18)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 18,
    },
    pageHeaderFigureImageProfile: {
        opacity: 0.98,
    },
    pageHeaderTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        minHeight: 44,
        marginBottom: 6,
        zIndex: 3,
    },
    pageHeaderBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        borderRadius: radii.pill,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: 'rgba(255,255,255,0.72)',
    },
    pageHeaderBadgeIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageHeaderSpacer: {
        width: 44,
        height: 44,
    },
    pageHeaderBadgeText: {
        color: colors.textPrimary,
        fontFamily: typography.body,
        fontSize: 11,
        fontWeight: '600',
    },
    pageHeaderEyebrow: {
        color: colors.accentBurgundy,
        fontFamily: typography.body,
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.4,
    },
    pageHeaderCopy: {
        position: 'relative',
        zIndex: 2,
    },
    pageHeaderTitlePlate: {
        position: 'absolute',
        left: -4,
        top: 22,
        width: '82%',
        height: 60,
        borderRadius: 24,
        backgroundColor: 'rgba(255,255,255,0.92)',
    },
    pageHeaderTitlePlateConversation: {
        width: '54%',
    },
    pageHeaderTitle: {
        fontSize: 24,
        lineHeight: 30,
        maxWidth: '86%',
    },
    pageHeaderTitleWithArt: {
        maxWidth: '58%',
    },
    pageHeaderTitleWithConversationArt: {
        maxWidth: '44%',
    },
    pageHeaderTitleWithProfileArt: {
        maxWidth: '56%',
    },
    pageHeaderSubtitle: {
        fontSize: 14,
        lineHeight: 20,
        maxWidth: '78%',
    },
    pageHeaderSubtitleWithArt: {
        maxWidth: '54%',
    },
    pageHeaderSubtitleWithConversationArt: {
        maxWidth: '40%',
    },
    pageHeaderSubtitleWithProfileArt: {
        maxWidth: '52%',
    },
})
