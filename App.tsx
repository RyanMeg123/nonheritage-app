/** @format */

import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { publishPreset } from './src/data/mockData'
import { AppNavigator } from './src/application/AppNavigator'
import { useAppEntryGate } from './src/application/useAppEntryGate'
import { useAppNavigation } from './src/application/useAppNavigation'
import { useAppScreenData } from './src/application/useAppScreenData'
import { useSplashGate } from './src/application/useSplashGate'
import { useAuthFlow } from './src/features/auth/hooks/useAuthFlow'
import { useOrderFlow } from './src/features/orders/hooks/useOrderFlow'
import { PublishFlowStateScreen } from './src/features/publish/components/PublishFlowStateScreen'
import { usePublishFlow } from './src/features/publish/hooks/usePublishFlow'
import { useFlowErrorReporter } from './src/features/shared/hooks/useFlowErrorReporter'
import { LaunchScreen } from './src/screens/LaunchScreen'
import type { PublishFormState } from './src/types'

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

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#FFF9F5' },
    appFrame: { flex: 1, backgroundColor: '#FFF9F5' },
})
