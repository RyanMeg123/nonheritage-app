import { StatusBar } from 'expo-status-bar';
import { startTransition, useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { homeData, publishPreset } from './src/data/mockData';
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
import type { AppScreen, MainTabId, PublishFormState } from './src/types';
import { buildCraftPlanFromForm } from './src/utils/planBuilder';
import { buildJourneyFlow, buildProfileData } from './src/utils/journeyBuilder';

const INITIAL_FORM: PublishFormState = {
  uploadedImages: publishPreset.initialUploadedImages,
  requirementText: publishPreset.initialRequirementText,
  preferredCraftId: publishPreset.defaultCraftId,
  budgetId: publishPreset.defaultBudgetId,
  timelineId: publishPreset.defaultTimelineId,
};

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('home');
  const [formState, setFormState] = useState<PublishFormState>(INITIAL_FORM);

  const planData = useMemo(() => buildCraftPlanFromForm(formState), [formState]);
  const journeyData = useMemo(() => buildJourneyFlow(formState, planData), [formState, planData]);
  const profileData = useMemo(() => buildProfileData(planData), [planData]);
  const leadPreviewUri = formState.uploadedImages[0]?.uri;

  const goTo = (next: AppScreen) => {
    startTransition(() => {
      setScreen(next);
    });
  };

  const goToTab = (tabId: MainTabId) => {
    if (tabId === 'home') {
      goTo('home');
      return;
    }
    if (tabId === 'custom') {
      goTo('publish');
      return;
    }
    if (tabId === 'chat') {
      goTo('chat');
      return;
    }
    goTo('profile');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.appFrame}>
        {screen === 'home' ? (
          <HomeScreen homeData={homeData} onTabPress={goToTab} />
        ) : null}
        {screen === 'publish' ? (
          <PublishScreen
            formState={formState}
            tabs={homeData.bottomTabs}
            onBack={() => goTo('home')}
            onChange={setFormState}
            onContinue={() => goTo('craft-plan')}
            onTabPress={goToTab}
          />
        ) : null}
        {screen === 'chat' ? (
          <ChatHomeScreen
            data={journeyData.conversation}
            tabs={homeData.bottomTabs}
            onTabPress={goToTab}
            onOpenProgress={() => goTo('order-progress')}
          />
        ) : null}
        {screen === 'profile' ? (
          <ProfileScreen
            data={profileData}
            tabs={homeData.bottomTabs}
            onTabPress={goToTab}
            onOpenProgress={() => goTo('order-progress')}
          />
        ) : null}
        {screen === 'craft-plan' ? (
          <CraftPlanScreen
            plan={planData}
            onBack={() => goTo('publish')}
            onNext={() => goTo('structured-result')}
          />
        ) : null}
        {screen === 'structured-result' ? (
          <StructuredResultScreen
            data={journeyData.structuredResult}
            onBack={() => goTo('craft-plan')}
            onNext={() => goTo('preview')}
          />
        ) : null}
        {screen === 'preview' ? (
          <PreviewScreen
            data={journeyData.preview}
            previewUri={leadPreviewUri}
            onBack={() => goTo('structured-result')}
            onNext={() => goTo('match')}
          />
        ) : null}
        {screen === 'match' ? (
          <MatchScreen
            data={journeyData.match}
            onBack={() => goTo('preview')}
            onNext={() => goTo('design-confirm')}
          />
        ) : null}
        {screen === 'design-confirm' ? (
          <DesignConfirmScreen
            data={journeyData.designConfirm}
            onBack={() => goTo('match')}
            onNext={() => goTo('conversation')}
          />
        ) : null}
        {screen === 'conversation' ? (
          <ConversationScreen
            data={journeyData.conversation}
            onBack={() => goTo('design-confirm')}
            onNext={() => goTo('order-progress')}
          />
        ) : null}
        {screen === 'order-progress' ? (
          <OrderProgressScreen
            data={journeyData.orderProgress}
            onBack={() => goTo('conversation')}
            onNext={() => goTo('home')}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF9F5',
  },
  appFrame: {
    flex: 1,
    backgroundColor: '#FFF9F5',
  },
});
