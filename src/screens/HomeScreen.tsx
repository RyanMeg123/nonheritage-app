/** @format */

import { useEffect, useRef, useState } from 'react'
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    type ImageSourcePropType,
} from 'react-native'

import { HomeHero, HomeHeroDetails } from '../components/HomeHero'
import {
    BodyText,
    CardTitle,
    DisplayText,
    MainTabBar,
    ScreenShell,
    SectionCard,
} from '../components/common'
import { colors, radii, typography } from '../theme/tokens'
import type { HomeData, MainTabId } from '../types'

const craftTints = [colors.blush, colors.butter, colors.lilac]
const carouselLeadImage = require('../../assets/lunbo4.png')
const carouselDrapeImage = require('../../assets/lunbo3.png')
const carouselSilverImage = require('../../assets/lunbo5.png')
const hotCraftImage1 = require('../../assets/hotlunbo1.png')
const hotCraftImage2 = require('../../assets/hotlunbo2.png')
const hotCraftImage3 = require('../../assets/hotlunbo3.png')
const inspirationTabs = [
    { id: 'cases', label: '最近灵感' },
    { id: 'crafts', label: '本周热门工艺' },
] as const
const carouselGap = 12

type CarouselSlide = {
    id: string
    chip: string
    title: string
    description: string
    indexLabel: string
    imageSource?: ImageSourcePropType
    imageFit?: 'contain' | 'cover'
    cardStyle: object
}

export function HomeScreen({
    homeData,
    onTabPress,
}: {
    homeData: HomeData
    onTabPress: (tabId: MainTabId) => void
}) {
    const [activeInspirationTab, setActiveInspirationTab] =
        useState<(typeof inspirationTabs)[number]['id']>('cases')
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    const [renderedSlideIndex, setRenderedSlideIndex] = useState(1)
    const [carouselWidth, setCarouselWidth] = useState(0)
    const carouselRef = useRef<ScrollView>(null)
    const { width: screenWidth } = useWindowDimensions()
    const showingCrafts = activeInspirationTab === 'crafts'

    const activeSlides: CarouselSlide[] =
        activeInspirationTab === 'cases'
            ? homeData.featuredCases.map((item, index) => ({
                  id: item.id,
                  chip: item.craft,
                  title: item.title,
                  description: item.summary,
                  indexLabel: String(index + 1).padStart(2, '0'),
                  imageSource:
                      index === 0
                          ? carouselLeadImage
                          : index === 1
                            ? carouselDrapeImage
                            : index === 2
                              ? carouselSilverImage
                              : undefined,
                  imageFit: index === 2 ? 'cover' : 'contain',
                  cardStyle:
                      index === 0
                          ? styles.carouselCardLead
                          : styles.carouselCardCase,
              }))
            : homeData.featuredCrafts.map((craft, index) => ({
                  id: craft.id,
                  chip: '热门工艺',
                  title: craft.name,
                  description: craft.description,
                  indexLabel: String(index + 1).padStart(2, '0'),
                  imageSource:
                      index === 0
                          ? hotCraftImage1
                          : index === 1
                            ? hotCraftImage2
                            : index === 2
                              ? hotCraftImage3
                              : undefined,
                  imageFit: 'cover',
                  cardStyle: {
                      backgroundColor: craftTints[index % craftTints.length],
                  },
              }))

    const slideWidth = carouselWidth || Math.max(screenWidth - 80, 280)
    const shouldLoop = activeSlides.length > 1
    const renderedSlides = shouldLoop
        ? [
              activeSlides[activeSlides.length - 1],
              ...activeSlides,
              activeSlides[0],
          ]
        : activeSlides

    useEffect(() => {
        const resetIndex = shouldLoop ? 1 : 0
        setActiveSlideIndex(0)
        setRenderedSlideIndex(resetIndex)

        if (!carouselWidth) {
            return
        }

        requestAnimationFrame(() => {
            carouselRef.current?.scrollTo({
                x: (slideWidth + carouselGap) * resetIndex,
                animated: false,
            })
        })
    }, [activeInspirationTab, carouselWidth, shouldLoop, slideWidth])

    useEffect(() => {
        if (!carouselWidth || !shouldLoop) {
            return
        }

        const intervalId = setInterval(() => {
            const nextRenderedIndex = renderedSlideIndex + 1

            carouselRef.current?.scrollTo({
                x: (slideWidth + carouselGap) * nextRenderedIndex,
                animated: true,
            })
        }, 3200)

        return () => clearInterval(intervalId)
    }, [carouselWidth, renderedSlideIndex, shouldLoop, slideWidth])

    function handleTabPress(tabId: (typeof inspirationTabs)[number]['id']) {
        setActiveInspirationTab(tabId)
    }

    function handleCarouselEnd(event: any) {
        const pageWidth = slideWidth + carouselGap
        const nextRenderedIndex = Math.round(
            event.nativeEvent.contentOffset.x / pageWidth,
        )

        if (!shouldLoop) {
            setRenderedSlideIndex(nextRenderedIndex)
            setActiveSlideIndex(nextRenderedIndex)
            return
        }

        if (nextRenderedIndex === 0) {
            setRenderedSlideIndex(activeSlides.length)
            setActiveSlideIndex(activeSlides.length - 1)
            carouselRef.current?.scrollTo({
                x: pageWidth * activeSlides.length,
                animated: false,
            })
            return
        }

        if (nextRenderedIndex === activeSlides.length + 1) {
            setRenderedSlideIndex(1)
            setActiveSlideIndex(0)
            carouselRef.current?.scrollTo({
                x: pageWidth,
                animated: false,
            })
            return
        }

        setRenderedSlideIndex(nextRenderedIndex)
        setActiveSlideIndex(nextRenderedIndex - 1)
    }

    return (
        <ScreenShell
            footer={
                <MainTabBar
                    tabs={homeData.bottomTabs}
                    activeTab="home"
                    onTabPress={onTabPress}
                />
            }
        >
            <View style={styles.header}>
                <View style={styles.brandCopy}>
                    <DisplayText style={styles.brandTitle}>
                        {homeData.brandName}
                    </DisplayText>
                    <BodyText style={styles.brandSubtitle}>
                        {homeData.brandTagline}
                    </BodyText>
                </View>
            </View>

            <HomeHero
                eyebrow={homeData.heroEyebrow}
                title={homeData.heroTitle}
                footnote={homeData.heroFootnote}
                artisanCount={homeData.artisanCount}
                artisanLabel={homeData.artisanLabel}
                summaryTitle={homeData.heroSummaryTitle}
                summaryText={homeData.heroSummaryText}
                processSteps={homeData.processSteps}
            />

            <SectionCard tone="paper" style={styles.inspirationCard}>
                <View style={styles.sectionHeader}>
                    <CardTitle>方向速览</CardTitle>
                </View>
                <View style={styles.tabRow}>
                    {inspirationTabs.map((tab) => {
                        const active = tab.id === activeInspirationTab
                        return (
                            <Pressable
                                key={tab.id}
                                onPress={() => handleTabPress(tab.id)}
                                style={({ pressed }) => [
                                    styles.tabChip,
                                    active
                                        ? styles.tabChipActive
                                        : styles.tabChipIdle,
                                    pressed && styles.pressed,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.tabChipText,
                                        active
                                            ? styles.tabChipTextActive
                                            : null,
                                    ]}
                                >
                                    {tab.label}
                                </Text>
                            </Pressable>
                        )
                    })}
                </View>

                <View
                    style={styles.carouselViewport}
                    onLayout={(event) =>
                        setCarouselWidth(event.nativeEvent.layout.width)
                    }
                >
                    <ScrollView
                        ref={carouselRef}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        decelerationRate="fast"
                        snapToInterval={slideWidth + carouselGap}
                        snapToAlignment="start"
                        disableIntervalMomentum
                        onMomentumScrollEnd={handleCarouselEnd}
                        contentContainerStyle={styles.carouselTrack}
                    >
                        {renderedSlides.map((slide, index) => (
                            <View
                                key={`${slide.id}-${index}`}
                                style={[
                                    styles.carouselCard,
                                    slide.cardStyle,
                                    {
                                        width: slideWidth,
                                        marginRight:
                                            index === renderedSlides.length - 1
                                                ? 0
                                                : carouselGap,
                                    },
                                ]}
                            >
                                <View style={styles.carouselTop}>
                                    <View style={styles.caseTag}>
                                        <Text style={styles.caseCraft}>
                                            {slide.chip}
                                        </Text>
                                    </View>
                                    <Text style={styles.caseIndex}>
                                        {slide.indexLabel}
                                    </Text>
                                </View>
                                {slide.imageSource ? (
                                    <View
                                        style={[
                                            styles.carouselImageWrap,
                                            slide.imageFit === 'cover'
                                                ? styles.carouselImageWrapCraft
                                                : null,
                                        ]}
                                    >
                                        <Image
                                            source={slide.imageSource}
                                            style={[
                                                styles.carouselImage,
                                                slide.imageFit === 'cover'
                                                    ? styles.carouselImageCraft
                                                    : null,
                                            ]}
                                            resizeMode={
                                                slide.imageFit === 'cover'
                                                    ? 'cover'
                                                    : 'contain'
                                            }
                                        />
                                    </View>
                                ) : null}
                                <Text
                                    style={[
                                        styles.carouselTitle,
                                        showingCrafts
                                            ? styles.carouselTitleCraft
                                            : null,
                                    ]}
                                >
                                    {slide.title}
                                </Text>
                                <BodyText style={styles.carouselSummary}>
                                    {slide.description}
                                </BodyText>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.carouselFooter}>
                    <View style={styles.dotRow}>
                        {activeSlides.map((slide, index) => (
                            <View
                                key={slide.id}
                                style={[
                                    styles.dot,
                                    index === activeSlideIndex
                                        ? styles.dotActive
                                        : null,
                                ]}
                            />
                        ))}
                    </View>
                    <Text style={styles.carouselCount}>
                        {String(activeSlideIndex + 1).padStart(2, '0')} /{' '}
                        {String(activeSlides.length).padStart(2, '0')}
                    </Text>
                </View>
            </SectionCard>

            {/* <HomeHeroDetails summaryTitle={homeData.heroSummaryTitle} /> */}
        </ScreenShell>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    brandCopy: {
        gap: 4,
        flex: 1,
    },
    brandTitle: {
        fontSize: 34,
        lineHeight: 41,
    },
    brandSubtitle: {
        fontSize: 15,
        lineHeight: 22,
    },
    sectionHeader: {
        gap: 4,
    },
    inspirationCard: {
        backgroundColor: colors.mutedPaper,
    },
    pressed: {
        opacity: 0.92,
    },
    tabRow: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: colors.surfaceCream,
        borderRadius: radii.pill,
        padding: 6,
        borderWidth: 1,
        borderColor: colors.lineSoft,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 16,
        elevation: 4,
    },
    tabChip: {
        flex: 1,
        borderRadius: radii.pill,
        paddingVertical: 11,
        paddingHorizontal: 22,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 148,
    },
    tabChipIdle: {
        backgroundColor: 'transparent',
    },
    tabChipActive: {
        backgroundColor: colors.accentBurgundy,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 12,
        elevation: 3,
    },
    tabChipText: {
        color: colors.textSecondary,
        fontFamily: typography.body,
        fontSize: 13,
        fontWeight: '700',
    },
    tabChipTextActive: {
        color: colors.textInverse,
    },
    carouselViewport: {
        marginHorizontal: -4,
    },
    carouselTrack: {
        paddingHorizontal: 4,
    },
    carouselCard: {
        minHeight: 280,
        borderRadius: 24,
        padding: 22,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.lineSoft,
        justifyContent: 'space-between',
    },
    carouselCardCase: {
        backgroundColor: '#FFF8F1',
    },
    carouselCardLead: {
        backgroundColor: '#FDF1EE',
    },
    carouselTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    carouselTitle: {
        color: colors.textPrimary,
        fontFamily: typography.display,
        fontSize: 26,
        fontWeight: '600',
        lineHeight: 34,
        marginTop: 14,
    },
    carouselTitleCraft: {
        marginTop: 18,
    },
    carouselSummary: {
        fontSize: 15,
        lineHeight: 23,
        maxWidth: '88%',
    },
    carouselImageWrap: {
        width: '100%',
        height: 220,
        borderRadius: 18,
        marginTop: 16,
        overflow: 'hidden',
        backgroundColor: '#F7EEE7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    carouselImageWrapCraft: {
        height: 248,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    carouselImage: {
        width: '100%',
        height: '100%',
    },
    carouselImageCraft: {
        width: '118%',
    },
    caseTag: {
        borderRadius: radii.pill,
        backgroundColor: colors.sky,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    caseCraft: {
        color: colors.textPrimary,
        fontFamily: typography.body,
        fontSize: 12,
        fontWeight: '700',
    },
    caseIndex: {
        color: colors.textSecondary,
        fontFamily: typography.body,
        fontSize: 14,
        fontWeight: '600',
    },
    carouselFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dotRow: {
        flexDirection: 'row',
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.lineSoft,
    },
    dotActive: {
        width: 22,
        backgroundColor: colors.accentBurgundy,
    },
    carouselCount: {
        color: colors.textSecondary,
        fontFamily: typography.body,
        fontSize: 12,
        fontWeight: '700',
    },
})
