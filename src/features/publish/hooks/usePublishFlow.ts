import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { api, type GenerateCraftPlanResponse, type SubmitRequirementResponse } from '../../../services/api';
import type { PublishFormState, UploadImagePlaceholder } from '../../../types';

type ReportFlowError = (
  error: unknown,
  screenName: string,
  stage: string,
  fallbackMessage: string,
) => Promise<void>;

export type PublishFlowLoadingStage = 'idle' | 'uploading' | 'submitting' | 'planning';

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

export function usePublishFlow({
  initialForm,
  onPlanReady,
  reportFlowError,
}: {
  initialForm: PublishFormState;
  onPlanReady: () => void;
  reportFlowError: ReportFlowError;
}) {
  const [formState, setFormState] = useState<PublishFormState>(initialForm);
  const [loadingStage, setLoadingStage] = useState<PublishFlowLoadingStage>('idle');
  const [submitResult, setSubmitResult] = useState<SubmitRequirementResponse | null>(null);
  const [planResult, setPlanResult] = useState<GenerateCraftPlanResponse | null>(null);

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
        onPlanReady();
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
    [formState, onPlanReady, reportFlowError, submitResult, uploadImages],
  );

  return {
    formState,
    handleFormChange,
    loadingStage,
    submitResult,
    planResult,
    handlePublishContinue,
  };
}
