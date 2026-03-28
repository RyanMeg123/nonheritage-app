/** @format */

import { StatusBar } from 'expo-status-bar'
import { useEffect, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { homeData as defaultHomeData, publishPreset } from './src/data/mockData'
import { AppNavigator } from './src/application/AppNavigator'
import { useAppEntryGate } from './src/application/useAppEntryGate'
import { useAppNavigation } from './src/application/useAppNavigation'
import { useAppScreenData } from './src/application/useAppScreenData'
import { useSplashGate } from './src/application/useSplashGate'
import {
    readStoredFeaturedCases,
    saveGeneratedFeaturedCase,
} from './src/features/home/storage/featuredCasesStorage'
import { useAuthFlow } from './src/features/auth/hooks/useAuthFlow'
import { useOrderFlow } from './src/features/orders/hooks/useOrderFlow'
import { PublishFlowStateScreen } from './src/features/publish/components/PublishFlowStateScreen'
import { usePublishFlow } from './src/features/publish/hooks/usePublishFlow'
import { useFlowErrorReporter } from './src/features/shared/hooks/useFlowErrorReporter'
import { LaunchScreen } from './src/screens/LaunchScreen'
import type { FeaturedCase, HomeData, PublishFormState } from './src/types'

const INITIAL_FORM: PublishFormState = {
    entryMode: 'reference-image',
    uploadedImages: publishPreset.initialUploadedImages,
    requirementText: publishPreset.initialRequirementText,
    preferredCraftId: publishPreset.defaultCraftId,
    budgetId: publishPreset.defaultBudgetId,
    timelineId: publishPreset.defaultTimelineId,
}

export default function App() {
    const { screen, goTo, goToTab } = useAppNavigation('auth')
    const { reportFlowError } = useFlowErrorReporter()
    const splashGate = useSplashGate()
    const authFlow = useAuthFlow({ goTo, sessionEnabled: splashGate.isFinished })
    const [onboardingStatus, setOnboardingStatus] = useState<
        'idle' | 'draft' | 'submitted'
    >('idle')
    const [featuredCases, setFeaturedCases] = useState<FeaturedCase[]>([])
    const savedSubmissionRef = useRef<string | null>(null)

    const appEntryGate = useAppEntryGate({
        screen,
        goTo,
        splashFinished: splashGate.isFinished,
        isSessionHydrated: authFlow.isHydrated,
        hasValidSession: Boolean(authFlow.session?.user.id),
    })

    const publishFlow = usePublishFlow({
        initialForm: INITIAL_FORM,
        onPlanReady: () => goTo('craft-plan'),
        reportFlowError,
    })

    const orderFlow = useOrderFlow({
        formState: publishFlow.formState,
        planResult: publishFlow.planResult,
        currentUserId: authFlow.currentUserId,
        goTo,
        onRequireAuth: () => authFlow.openAuthScreen('conversation'),
        reportFlowError,
    })

    const screenData = useAppScreenData({
        formState: publishFlow.formState,
        submitResult: publishFlow.submitResult,
        planResult: publishFlow.planResult,
        orderRecord: orderFlow.orderRecord,
        orderContext: orderFlow.orderContext,
    })

    const publishLoading = publishFlow.loadingStage !== 'idle'
    const orderLoading = orderFlow.loadingStage !== 'idle'
    const mergedHomeData = buildHomeData(featuredCases)

    useEffect(() => {
        let active = true

        void readStoredFeaturedCases().then((storedCases) => {
            if (!active) {
                return
            }

            setFeaturedCases(storedCases)
        })

        return () => {
            active = false
        }
    }, [])

    useEffect(() => {
        const submitResult = publishFlow.submitResult
        const planResult = publishFlow.planResult
        if (!submitResult || !planResult) {
            return
        }

        const recordId = `${submitResult.submission.id}:${planResult.plan.id}`
        if (savedSubmissionRef.current === recordId) {
            return
        }

        savedSubmissionRef.current = recordId
        void saveGeneratedFeaturedCase(submitResult, planResult)
            .then((storedCases) => {
                setFeaturedCases(storedCases)
            })
            .catch(() => {
                savedSubmissionRef.current = null
            })
    }, [publishFlow.planResult, publishFlow.submitResult])

    return (
        <SafeAreaProvider>
            {appEntryGate.showSplash ? (
                <SafeAreaView style={styles.safeArea}>
                    <StatusBar style="dark" />
                    <LaunchScreen />
                </SafeAreaView>
            ) : orderLoading ? (
                <SafeAreaView style={styles.safeArea}>
                    <StatusBar style="dark" />
                    <View style={styles.appFrame}>
                        <PublishFlowStateScreen
                            badge="订单处理中"
                            title="正在准备订单信息"
                            message="这一步会先创建订单，再读取详情页需要的核心字段。"
                            primaryLabel="请稍候"
                            onPrimaryPress={() => undefined}
                        />
                    </View>
                </SafeAreaView>
            ) : (
                <SafeAreaView style={styles.safeArea}>
                    <StatusBar style="dark" />
                    <AppNavigator
                        screen={screen}
                        homeData={mergedHomeData}
                        appFrameStyle={styles.appFrame}
                        formState={publishFlow.formState}
                        onFormChange={publishFlow.handleFormChange}
                        onPublishContinue={() => {
                            void publishFlow.handlePublishContinue()
                        }}
                        onPublishContinueReuse={() => {
                            void publishFlow.handlePublishContinue({
                                reuseSubmission: Boolean(publishFlow.submitResult),
                            })
                        }}
                        publishLoading={publishLoading}
                        goTo={goTo}
                        goToTab={goToTab}
                        submitResult={publishFlow.submitResult}
                        planResult={publishFlow.planResult}
                        serverPlanData={screenData.serverPlanData}
                        serverStructuredData={screenData.serverStructuredData}
                        serverPreviewData={screenData.serverPreviewData}
                        serverPreviewUri={screenData.serverPreviewUri}
                        serverPreviewUris={screenData.serverPreviewUris}
                        serverSourceImageUris={screenData.serverSourceImageUris}
                        serverMatchData={screenData.serverMatchData}
                        serverDesignConfirmData={screenData.serverDesignConfirmData}
                        serverOrderDetailData={screenData.serverOrderDetailData}
                        journeyData={screenData.journeyData}
                        profileData={screenData.profileData}
                        onboardingData={screenData.onboardingData}
                        orderBackScreen={orderFlow.orderBackScreen}
                        onboardingStatus={onboardingStatus}
                        onSetOnboardingStatus={setOnboardingStatus}
                        onOpenOrderProgress={orderFlow.handleOpenOrderProgress}
                        onCreateOrder={() => {
                            void orderFlow.handleCreateOrder()
                        }}
                        authBindings={authFlow.navigatorProps}
                    />
                </SafeAreaView>
            )}
        </SafeAreaProvider>
    )
}

function buildHomeData(featuredCases: FeaturedCase[]): HomeData {
    if (!featuredCases.length) {
        return defaultHomeData
    }

    const mergedCases = [
        ...featuredCases,
        ...defaultHomeData.featuredCases.filter(
            (item) => !featuredCases.some((saved) => saved.id === item.id),
        ),
    ].slice(0, Math.max(defaultHomeData.featuredCases.length, 6))

    return {
        ...defaultHomeData,
        featuredCases: mergedCases,
    }
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#FFF9F5' },
    appFrame: { flex: 1, backgroundColor: '#FFF9F5' },
})
