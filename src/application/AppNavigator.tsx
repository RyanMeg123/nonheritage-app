import { View } from 'react-native';

import { PublishFlowStateScreen } from '../features/publish/components/PublishFlowStateScreen';
import { ArtisanOnboardingScreen } from '../screens/ArtisanOnboardingScreen';
import { AuthScreen } from '../screens/AuthScreen';
import { ChatHomeScreen } from '../screens/ChatHomeScreen';
import { ConversationScreen } from '../screens/ConversationScreen';
import { CraftPlanScreen } from '../screens/CraftPlanScreen';
import { DesignConfirmScreen } from '../screens/DesignConfirmScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { MatchScreen } from '../screens/MatchScreen';
import { OrderDetailScreen } from '../screens/OrderDetailScreen';
import { OrderProgressScreen } from '../screens/OrderProgressScreen';
import { PreviewScreen } from '../screens/PreviewScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { PublishScreen } from '../screens/PublishScreen';
import { StructuredResultScreen } from '../screens/StructuredResultScreen';
import type {
  AppScreen,
  DesignConfirmScreenData,
  MainTabId,
  MatchScreenData,
  OrderDetailScreenData,
  PreviewScreenData,
  PublishFormState,
  StructuredResultData,
  CraftPlanData,
  JourneyFlowData,
  HomeData,
  OnboardingScreenData,
  ProfileScreenData,
} from '../types';
import type { GenerateCraftPlanResponse, SubmitRequirementResponse } from '../services/api';
import type { AuthLoadingStage } from '../features/auth/hooks/useAuthSession';
import type { PhoneCheckResult } from '../types/auth';

type AuthNavigatorBindings = {
  authLoadingStage: AuthLoadingStage;
  onCheckPhone: (phone: string) => Promise<PhoneCheckResult>;
  onRegisterLogin: (payload: { phone: string; password: string }) => Promise<unknown>;
  onLogin: (payload: { phone: string; password: string }) => Promise<unknown>;
  onAuthSuccess: () => void;
  onDeleteAccount: () => Promise<void>;
  onReturnToAuth: () => void;
};

export function AppNavigator({
  screen,
  homeData,
  appFrameStyle,
  formState,
  onFormChange,
  onPublishContinue,
  onPublishContinueReuse,
  publishLoading,
  goTo,
  goToTab,
  submitResult,
  planResult,
  serverPlanData,
  serverStructuredData,
  serverPreviewData,
  serverPreviewUri,
  serverPreviewUris,
  serverSourceImageUris,
  serverMatchData,
  serverDesignConfirmData,
  serverOrderDetailData,
  journeyData,
  profileData,
  onboardingData,
  orderBackScreen,
  onboardingStatus,
  onSetOnboardingStatus,
  onOpenOrderProgress,
  onCreateOrder,
  authBindings,
}: {
  screen: AppScreen;
  homeData: HomeData;
  appFrameStyle: object;
  formState: PublishFormState;
  onFormChange: (nextState: PublishFormState) => void;
  onPublishContinue: () => void;
  onPublishContinueReuse: () => void;
  publishLoading: boolean;
  goTo: (next: AppScreen) => void;
  goToTab: (tabId: MainTabId) => void;
  submitResult: SubmitRequirementResponse | null;
  planResult: GenerateCraftPlanResponse | null;
  serverPlanData: CraftPlanData | null;
  serverStructuredData: StructuredResultData | null;
  serverPreviewData: PreviewScreenData | null;
  serverPreviewUri?: string;
  serverPreviewUris: string[];
  serverSourceImageUris: string[];
  serverMatchData: MatchScreenData | null;
  serverDesignConfirmData: DesignConfirmScreenData | null;
  serverOrderDetailData: OrderDetailScreenData | null;
  journeyData: JourneyFlowData;
  profileData: ProfileScreenData;
  onboardingData: OnboardingScreenData;
  orderBackScreen: AppScreen;
  onboardingStatus: 'idle' | 'draft' | 'submitted';
  onSetOnboardingStatus: (next: 'idle' | 'draft' | 'submitted' | ((current: 'idle' | 'draft' | 'submitted') => 'idle' | 'draft' | 'submitted')) => void;
  onOpenOrderProgress: (backScreen: AppScreen) => void;
  onCreateOrder: () => void;
  authBindings: AuthNavigatorBindings;
}) {
  return (
    <View style={appFrameStyle}>
      {screen === 'auth' && (
        <AuthScreen
          loadingStage={authBindings.authLoadingStage}
          onCheckPhone={authBindings.onCheckPhone}
          onRegisterLogin={authBindings.onRegisterLogin}
          onLogin={authBindings.onLogin}
          onSuccess={authBindings.onAuthSuccess}
        />
      )}

      {screen === 'home' && <HomeScreen homeData={homeData} onTabPress={goToTab} />}

      {screen === 'publish' && (
        <PublishScreen
          formState={formState}
          tabs={homeData.bottomTabs}
          onBack={() => goTo('home')}
          onChange={onFormChange}
          onContinue={onPublishContinue}
          isLoading={publishLoading}
          onTabPress={goToTab}
        />
      )}

      {screen === 'chat' && (
        <ChatHomeScreen
          data={journeyData.conversation}
          tabs={homeData.bottomTabs}
          onTabPress={goToTab}
          onOpenProgress={() => onOpenOrderProgress('chat')}
        />
      )}

      {screen === 'profile' && (
        <ProfileScreen
          data={profileData}
          tabs={homeData.bottomTabs}
          onTabPress={goToTab}
          onOpenProgress={() => onOpenOrderProgress('profile')}
          onOpenOnboarding={() => goTo('artisan-onboarding')}
          isDeletingAccount={authBindings.authLoadingStage === 'deleting-account'}
          onDeleteAccount={authBindings.onDeleteAccount}
          onReturnToAuth={authBindings.onReturnToAuth}
        />
      )}

      {screen === 'artisan-onboarding' && (
        <ArtisanOnboardingScreen
          data={onboardingData}
          status={onboardingStatus}
          onBack={() => goTo('profile')}
          onSaveDraft={() =>
            onSetOnboardingStatus((current) => (current === 'submitted' ? current : 'draft'))
          }
          onSubmit={() => onSetOnboardingStatus('submitted')}
          onFinish={() => goTo('profile')}
        />
      )}

      {screen === 'craft-plan' &&
        (serverPlanData ? (
          <CraftPlanScreen
            plan={serverPlanData}
            onBack={() => goTo('publish')}
            onNext={() => goTo('structured-result')}
          />
        ) : (
          <PublishFlowStateScreen
            badge="缺少方案"
            title="工艺方案还没准备好"
            message="这一步现在只吃后端方案结果。后端没有返回可展示内容时，不再继续混用本地方案。"
            primaryLabel={submitResult ? '重新生成方案' : '重新提交需求'}
            onPrimaryPress={submitResult ? onPublishContinueReuse : onPublishContinue}
            secondaryLabel="返回发布页"
            onSecondaryPress={() => goTo('publish')}
          />
        ))}

      {screen === 'structured-result' &&
        (serverStructuredData ? (
          <StructuredResultScreen
            data={serverStructuredData}
            onBack={() => goTo('craft-plan')}
            onNext={() => goTo('preview')}
          />
        ) : (
          <PublishFlowStateScreen
            badge="缺少解读"
            title="需求解读结果暂时不可用"
            message="后端没有返回这一步的结果，所以这里先停下，并允许你重新发起当前流程。"
            primaryLabel="重新提交需求"
            onPrimaryPress={onPublishContinue}
            secondaryLabel="返回发布页"
            onSecondaryPress={() => goTo('publish')}
          />
        ))}

      {screen === 'preview' &&
        (serverPreviewData && serverPreviewUri ? (
          <PreviewScreen
            data={serverPreviewData}
            previewUri={serverPreviewUri}
            previewUris={serverPreviewUris}
            sourceImageUris={serverSourceImageUris}
            onBack={() => goTo('structured-result')}
            onNext={() => goTo('match')}
          />
        ) : (
          <PublishFlowStateScreen
            badge="预览为空"
            title="当前还没有可展示的预览"
            message={
              planResult?.preview.description ||
              '这一步优先展示后端返回的预览结果。没有可用预览时，不再默认拿本地首图冒充结果。'
            }
            primaryLabel={submitResult ? '重新生成预览' : '重新提交需求'}
            onPrimaryPress={submitResult ? onPublishContinueReuse : onPublishContinue}
            secondaryLabel="返回上一页"
            onSecondaryPress={() => goTo('structured-result')}
          />
        ))}

      {screen === 'match' &&
        (serverMatchData && planResult?.matches.length ? (
          <MatchScreen
            data={serverMatchData}
            previewUri={serverPreviewUri}
            onBack={() => goTo('preview')}
            onNext={() => goTo('design-confirm')}
          />
        ) : (
          <PublishFlowStateScreen
            badge="匹配为空"
            title="还没有拿到匹配结果"
            message="这一步只展示后端返回的匹配结果。当前为空时，会直接给出重试入口。"
            primaryLabel={submitResult ? '重新生成匹配' : '重新提交需求'}
            onPrimaryPress={submitResult ? onPublishContinueReuse : onPublishContinue}
            secondaryLabel="返回上一页"
            onSecondaryPress={() => goTo('preview')}
          />
        ))}

      {screen === 'design-confirm' &&
        (serverDesignConfirmData ? (
          <DesignConfirmScreen
            data={serverDesignConfirmData}
            previewUri={serverPreviewUri}
            onBack={() => goTo('match')}
            onNext={() => goTo('conversation')}
          />
        ) : (
          <PublishFlowStateScreen
            badge="确认单为空"
            title="设计确认单还没拿到"
            message="这一步已经切成只吃后端结果。后端没有给出确认单时，会停在这里并允许重试。"
            primaryLabel={submitResult ? '重新生成确认单' : '重新提交需求'}
            onPrimaryPress={submitResult ? onPublishContinueReuse : onPublishContinue}
            secondaryLabel="返回上一页"
            onSecondaryPress={() => goTo('match')}
          />
        ))}

      {screen === 'conversation' && (
        <ConversationScreen
          data={journeyData.conversation}
          onBack={() => goTo('design-confirm')}
          onNext={onCreateOrder}
        />
      )}

      {screen === 'order-progress' &&
        (serverOrderDetailData ? (
          <OrderDetailScreen
            data={serverOrderDetailData}
            onBack={() => goTo(orderBackScreen)}
            onDone={() => goTo('home')}
          />
        ) : (
          <OrderProgressScreen
            data={journeyData.orderProgress}
            onBack={() => goTo('conversation')}
            onNext={() => goTo('home')}
          />
        ))}
    </View>
  );
}
