import { StatusBar } from 'expo-status-bar';
import { startTransition, useCallback, useMemo, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';

import { homeData, publishPreset } from './src/data/mockData';
import { PublishFlowStateScreen } from './src/features/publish/components/PublishFlowStateScreen';
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
import {
  ApiRequestError,
  api,
  type GenerateCraftPlanResponse,
  type SubmitRequirementResponse,
} from './src/services/api';
import {
  getPreviewImageUri,
  mapArtisanMatches,
  mapCraftPlan,
  mapDesignConfirmation,
  mapPreviewResult,
  mapStructuredRequirement,
} from './src/services/mappers';
import type {
  AppScreen,
  CraftPlanData,
  DesignConfirmScreenData,
  MainTabId,
  MatchScreenData,
  PreviewScreenData,
  PublishFormState,
  StructuredResultData,
  UploadImagePlaceholder,
} from './src/types';
import { buildCraftPlanFromForm } from './src/utils/planBuilder';
import { buildJourneyFlow, buildOnboardingData, buildProfileData } from './src/utils/journeyBuilder';

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

type LoadingStage = 'idle' | 'uploading' | 'submitting' | 'planning';

function inferMimeType(uri: string) {
  const normalized = uri.toLowerCase();
  if (normalized.endsWith('.png')) {
    return 'image/png';
  }
  if (normalized.endsWith('.webp')) {
    return 'image/webp';
  }
  if (normalized.endsWith('.heic')) {
    return 'image/heic';
  }
  return 'image/jpeg';
}

function buildUploadName(image: UploadImagePlaceholder, index: number) {
  const fileName = image.uri.split('/').pop()?.split('?')[0];
  if (fileName && fileName.includes('.')) {
    return fileName;
  }
  return `submission-image-${Date.now()}-${index}.jpg`;
}

function isRemoteUrl(uri: string) {
  return uri.startsWith('http://') || uri.startsWith('https://');
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('home');
  const [formState, setFormState] = useState<PublishFormState>(INITIAL_FORM);
  const [loadingStage, setLoadingStage] = useState<LoadingStage>('idle');
  const [submitResult, setSubmitResult] = useState<SubmitRequirementResponse | null>(null);
  const [planResult, setPlanResult] = useState<GenerateCraftPlanResponse | null>(null);
  const [onboardingStatus, setOnboardingStatus] = useState<'idle' | 'draft' | 'submitted'>('idle');

  const serverData = submitResult && planResult ? { submitResult, planResult } : null;
  const loading = loadingStage !== 'idle';

  const mockPlanData = useMemo(() => buildCraftPlanFromForm(formState), [formState]);

  const serverPlanData = useMemo<CraftPlanData | null>(() => {
    if (!serverData) return null;
    return mapCraftPlan(serverData.planResult.plan);
  }, [serverData]);

  const serverStructuredData = useMemo<StructuredResultData | null>(() => {
    if (!serverData) return null;
    return mapStructuredRequirement(serverData.submitResult.structuredRequirement);
  }, [serverData]);

  const serverPreviewData = useMemo<PreviewScreenData | null>(() => {
    if (!serverData) return null;
    return mapPreviewResult(serverData.planResult.preview, serverData.planResult.plan);
  }, [serverData]);

  const serverPreviewUri = useMemo(() => {
    if (!serverData) return undefined;
    return getPreviewImageUri(serverData.planResult.preview);
  }, [serverData]);

  const serverMatchData = useMemo<MatchScreenData | null>(() => {
    if (!serverData) return null;
    return mapArtisanMatches(serverData.planResult.matches, serverData.planResult.plan);
  }, [serverData]);

  const serverDesignConfirmData = useMemo<DesignConfirmScreenData | null>(() => {
    if (!serverData) return null;
    return mapDesignConfirmation(serverData.planResult.designConfirmation, serverData.planResult.plan);
  }, [serverData]);

  const planData = serverPlanData ?? mockPlanData;
  const journeyData = useMemo(() => buildJourneyFlow(formState, planData), [formState, planData]);
  const profileData = useMemo(() => buildProfileData(planData), [planData]);
  const onboardingData = useMemo(() => buildOnboardingData(), []);

  const goTo = useCallback((next: AppScreen) => {
    startTransition(() => setScreen(next));
  }, []);

  const goToTab = useCallback(
    (tabId: MainTabId) => {
      const map: Record<string, AppScreen> = {
        home: 'home',
        custom: 'publish',
        chat: 'chat',
        mine: 'profile',
      };
      goTo((map[tabId] ?? 'home') as AppScreen);
    },
    [goTo],
  );

  const reportFlowError = useCallback(
    async (error: unknown, screenName: string, stage: string, fallbackMessage: string) => {
      const message = error instanceof Error ? error.message : fallbackMessage;
      const traceId = error instanceof ApiRequestError ? error.traceId : undefined;

      try {
        await api.reportClientError({
          category: 'REQUEST_FAILED',
          message,
          source: 'mobile-app',
          screenName,
          traceId,
          details: { stage },
        });
      } catch {
        // 不阻塞主流程
      }
    },
    [],
  );

  const handleFormChange = useCallback((nextState: PublishFormState) => {
    setFormState(nextState);
    setSubmitResult(null);
    setPlanResult(null);
  }, []);

  const uploadImages = useCallback(async (images: UploadImagePlaceholder[]) => {
    if (!images.length) {
      return [];
    }

    const uploadedImages = [];
    for (const [index, image] of images.entries()) {
      if (isRemoteUrl(image.uri)) {
        uploadedImages.push({ url: image.uri });
        continue;
      }

      const uploaded = await api.uploadImage({
        uri: image.uri,
        name: buildUploadName(image, index),
        type: inferMimeType(image.uri),
      });
      uploadedImages.push(uploaded);
    }

    return uploadedImages;
  }, []);

  const handlePublishContinue = useCallback(
    async (options?: { reuseSubmission?: boolean }) => {
      const reuseSubmission = options?.reuseSubmission ?? false;
      let nextSubmitResult = reuseSubmission ? submitResult : null;

      try {
        if (!nextSubmitResult) {
          setLoadingStage(formState.uploadedImages.length > 0 ? 'uploading' : 'submitting');
          const uploadedImages = await uploadImages(formState.uploadedImages);

          setLoadingStage('submitting');
          nextSubmitResult = await api.submitRequirement({
            images: uploadedImages,
            requirementText: formState.requirementText,
            preferredCraft: formState.preferredCraftId,
            budgetRange: budgetLabelMap[formState.budgetId] ?? formState.budgetId,
            expectedDeliveryDate: deliveryLabelMap[formState.timelineId] ?? formState.timelineId,
          });
          setSubmitResult(nextSubmitResult);
        }

        setLoadingStage('planning');
        const nextPlanResult = await api.generateCraftPlan(nextSubmitResult.submission.id);
        setPlanResult(nextPlanResult);
        goTo('craft-plan');
      } catch (error) {
        const message = error instanceof Error ? error.message : '网络错误，请稍后重试';
        await reportFlowError(
          error,
          'PublishScreen',
          nextSubmitResult ? 'generate_craft_plan' : 'submit_requirement',
          '发布流程失败',
        );
        Alert.alert('提交失败', message, [
          { text: '取消', style: 'cancel' },
          {
            text: '重试',
            onPress: () => {
              void handlePublishContinue({ reuseSubmission: Boolean(nextSubmitResult) });
            },
          },
        ]);
      } finally {
        setLoadingStage('idle');
      }
    },
    [deliveryLabelMap, formState, goTo, reportFlowError, submitResult, uploadImages],
  );

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
            onChange={handleFormChange}
            onContinue={() => {
              void handlePublishContinue();
            }}
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
              onPrimaryPress={() => {
                void handlePublishContinue({ reuseSubmission: Boolean(submitResult) });
              }}
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
              onPrimaryPress={() => {
                void handlePublishContinue();
              }}
              secondaryLabel="返回发布页"
              onSecondaryPress={() => goTo('publish')}
            />
          ))}

        {screen === 'preview' &&
          (serverPreviewData && serverPreviewUri ? (
            <PreviewScreen
              data={serverPreviewData}
              previewUri={serverPreviewUri}
              onBack={() => goTo('structured-result')}
              onNext={() => goTo('match')}
            />
          ) : (
            <PublishFlowStateScreen
              badge="预览为空"
              title="当前还没有可展示的预览"
              message="这一步优先展示后端返回的预览结果。没有可用预览时，不再默认拿本地首图冒充结果。"
              primaryLabel={submitResult ? '重新生成预览' : '重新提交需求'}
              onPrimaryPress={() => {
                void handlePublishContinue({ reuseSubmission: Boolean(submitResult) });
              }}
              secondaryLabel="返回上一页"
              onSecondaryPress={() => goTo('structured-result')}
            />
          ))}

        {screen === 'match' &&
          (serverMatchData && planResult?.matches.length ? (
            <MatchScreen
              data={serverMatchData}
              onBack={() => goTo('preview')}
              onNext={() => goTo('design-confirm')}
            />
          ) : (
            <PublishFlowStateScreen
              badge="匹配为空"
              title="还没有拿到匹配结果"
              message="这一步只展示后端返回的匹配结果。当前为空时，会直接给出重试入口。"
              primaryLabel={submitResult ? '重新生成匹配' : '重新提交需求'}
              onPrimaryPress={() => {
                void handlePublishContinue({ reuseSubmission: Boolean(submitResult) });
              }}
              secondaryLabel="返回上一页"
              onSecondaryPress={() => goTo('preview')}
            />
          ))}

        {screen === 'design-confirm' &&
          (serverDesignConfirmData ? (
            <DesignConfirmScreen
              data={serverDesignConfirmData}
              onBack={() => goTo('match')}
              onNext={() => goTo('conversation')}
            />
          ) : (
            <PublishFlowStateScreen
              badge="确认单为空"
              title="设计确认单还没拿到"
              message="这一步已经切成只吃后端结果。后端没有给出确认单时，会停在这里并允许重试。"
              primaryLabel={submitResult ? '重新生成确认单' : '重新提交需求'}
              onPrimaryPress={() => {
                void handlePublishContinue({ reuseSubmission: Boolean(submitResult) });
              }}
              secondaryLabel="返回上一页"
              onSecondaryPress={() => goTo('match')}
            />
          ))}

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
