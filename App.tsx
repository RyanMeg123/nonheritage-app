import { StatusBar } from 'expo-status-bar';
import { startTransition, useCallback, useMemo, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';

import { homeData, publishPreset } from './src/data/mockData';
import { PublishProcessingState } from './src/features/publish/components/PublishProcessingState';
import { ArtisanOnboardingScreen } from './src/screens/ArtisanOnboardingScreen';
import { ChatHomeScreen } from './src/screens/ChatHomeScreen';
import { ConversationScreen } from './src/screens/ConversationScreen';
import { CraftPlanScreen } from './src/screens/CraftPlanScreen';
import { DesignConfirmScreen } from './src/screens/DesignConfirmScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { MatchScreen } from './src/screens/MatchScreen';
import { OrderProgressScreen } from './src/screens/OrderProgressScreen';
import { PreviewScreen } from './src/screens/PreviewScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { PublishScreen } from './src/screens/PublishScreen';
import { StructuredResultScreen } from './src/screens/StructuredResultScreen';
import { api, type GenerateCraftPlanResponse, type SubmitRequirementResponse } from './src/services/api';
import { mapArtisanMatches, mapCraftPlan, mapDesignConfirmation, mapStructuredRequirement } from './src/services/mappers';
import type { AppScreen, CraftPlanData, DesignConfirmScreenData, MainTabId, MatchScreenData, PublishFormState, StructuredResultData } from './src/types';
import { buildCraftPlanFromForm } from './src/utils/planBuilder';
import { buildJourneyFlow, buildOnboardingData, buildProfileData } from './src/utils/journeyBuilder';

type ServerData = {
  submitResult: SubmitRequirementResponse;
  planResult: GenerateCraftPlanResponse;
};

const INITIAL_FORM: PublishFormState = {
  entryMode: 'reference-image',
  uploadedImages: publishPreset.initialUploadedImages,
  requirementText: publishPreset.initialRequirementText,
  preferredCraftId: publishPreset.defaultCraftId,
  budgetId: publishPreset.defaultBudgetId,
  timelineId: publishPreset.defaultTimelineId,
};

const budgetLabelMap: Record<string, string> = {
  'budget-6800': '¥6,800 以内',
  'budget-8000': '¥8,000 以内',
  'budget-12000': '¥12,000 以内',
};
const deliveryLabelMap: Record<string, string> = {
  'timeline-apr': '4 月下旬前',
  'timeline-may': '5 月中旬前',
  'timeline-june': '6 月上旬前',
};
const craftLabelMap: Record<string, string> = {
  'tie-dye': '扎染',
  'su-embroidery': '苏绣',
  silver: '银饰',
};

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('home');
  const [formState, setFormState] = useState<PublishFormState>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [serverData, setServerData] = useState<ServerData | null>(null);
  const [onboardingStatus, setOnboardingStatus] = useState<'idle' | 'draft' | 'submitted'>('idle');

  // mock fallback
  const mockPlanData = useMemo(() => buildCraftPlanFromForm(formState), [formState]);
  const mockJourneyData = useMemo(() => buildJourneyFlow(formState, mockPlanData), [formState, mockPlanData]);
  const leadPreviewUri = formState.uploadedImages[0]?.uri;

  // 服务端数据映射
  const serverPlanData = useMemo<CraftPlanData | null>(() => {
    if (!serverData) return null;
    return mapCraftPlan(serverData.planResult.plan);
  }, [serverData]);

  const serverStructuredData = useMemo<StructuredResultData | null>(() => {
    if (!serverData) return null;
    return mapStructuredRequirement(serverData.submitResult.structuredRequirement);
  }, [serverData]);

  const serverMatchData = useMemo<MatchScreenData | null>(() => {
    if (!serverData) return null;
    return mapArtisanMatches(serverData.planResult.matches, serverData.planResult.plan);
  }, [serverData]);

  const serverDesignConfirmData = useMemo<DesignConfirmScreenData | null>(() => {
    if (!serverData) return null;
    return mapDesignConfirmation(serverData.planResult.designConfirmation, serverData.planResult.plan);
  }, [serverData]);

  // 实际使用：优先服务端，fallback mock
  const planData = serverPlanData ?? mockPlanData;
  const journeyData = mockJourneyData;
  const profileData = useMemo(() => buildProfileData(planData), [planData]);
  const onboardingData = useMemo(() => buildOnboardingData(), []);

  const goTo = useCallback((next: AppScreen) => {
    startTransition(() => setScreen(next));
  }, []);

  const goToTab = useCallback((tabId: MainTabId) => {
    const map: Record<string, AppScreen> = {
      home: 'home', custom: 'publish', chat: 'chat', mine: 'profile',
    };
    goTo((map[tabId] ?? 'home') as AppScreen);
  }, [goTo]);

  // 提交需求 → 生成方案（两个串行 API 调用）
  const handlePublishContinue = useCallback(async () => {
    setLoading(true);
    try {
      const submitPayload = {
        images: formState.uploadedImages.map((img) => ({ url: img.uri })),
        requirementText: formState.requirementText,
        preferredCraft: craftLabelMap[formState.preferredCraftId] ?? formState.preferredCraftId,
        budgetRange: budgetLabelMap[formState.budgetId] ?? formState.budgetId,
        expectedDeliveryDate: deliveryLabelMap[formState.timelineId] ?? formState.timelineId,
      };
      const submitResult = await api.submitRequirement(submitPayload);
      const planResult = await api.generateCraftPlan(submitResult.submission.id);
      setServerData({ submitResult, planResult });
      goTo('craft-plan');
    } catch (err) {
      const msg = err instanceof Error ? err.message : '网络错误，请稍后重试';
      Alert.alert('提交失败', msg);
    } finally {
      setLoading(false);
    }
  }, [formState, goTo]);

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <PublishProcessingState formState={formState} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.appFrame}>
        {screen === 'home' && <HomeScreen homeData={homeData} onTabPress={goToTab} />}
        {screen === 'publish' && (
          <PublishScreen
            formState={formState}
            tabs={homeData.bottomTabs}
            onBack={() => goTo('home')}
            onChange={setFormState}
            onContinue={handlePublishContinue}
            onTabPress={goToTab}
          />
        )}
        {screen === 'chat' && (
          <ChatHomeScreen
            data={journeyData.conversation}
            tabs={homeData.bottomTabs}
            onTabPress={goToTab}
            onOpenProgress={() => goTo('order-progress')}
          />
        )}
        {screen === 'profile' && (
          <ProfileScreen
            data={profileData}
            tabs={homeData.bottomTabs}
            onTabPress={goToTab}
            onOpenProgress={() => goTo('order-progress')}
            onOpenOnboarding={() => goTo('artisan-onboarding')}
          />
        )}
        {screen === 'artisan-onboarding' && (
          <ArtisanOnboardingScreen
            data={onboardingData}
            status={onboardingStatus}
            onBack={() => goTo('profile')}
            onSaveDraft={() =>
              setOnboardingStatus((current) => (current === 'submitted' ? current : 'draft'))
            }
            onSubmit={() => setOnboardingStatus('submitted')}
            onFinish={() => goTo('profile')}
          />
        )}
        {screen === 'craft-plan' && (
          <CraftPlanScreen
            plan={planData}
            onBack={() => goTo('publish')}
            onNext={() => goTo('structured-result')}
          />
        )}
        {screen === 'structured-result' && (
          <StructuredResultScreen
            data={serverStructuredData ?? journeyData.structuredResult}
            onBack={() => goTo('craft-plan')}
            onNext={() => goTo('preview')}
          />
        )}
        {screen === 'preview' && (
          <PreviewScreen
            data={journeyData.preview}
            previewUri={leadPreviewUri}
            onBack={() => goTo('structured-result')}
            onNext={() => goTo('match')}
          />
        )}
        {screen === 'match' && (
          <MatchScreen
            data={serverMatchData ?? journeyData.match}
            onBack={() => goTo('preview')}
            onNext={() => goTo('design-confirm')}
          />
        )}
        {screen === 'design-confirm' && (
          <DesignConfirmScreen
            data={serverDesignConfirmData ?? journeyData.designConfirm}
            onBack={() => goTo('match')}
            onNext={() => goTo('conversation')}
          />
        )}
        {screen === 'conversation' && (
          <ConversationScreen
            data={journeyData.conversation}
            onBack={() => goTo('design-confirm')}
            onNext={() => goTo('order-progress')}
          />
        )}
        {screen === 'order-progress' && (
          <OrderProgressScreen
            data={journeyData.orderProgress}
            onBack={() => goTo('conversation')}
            onNext={() => goTo('home')}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFF9F5' },
  appFrame: { flex: 1, backgroundColor: '#FFF9F5' },
});
