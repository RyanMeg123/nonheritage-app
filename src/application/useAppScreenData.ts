import { useMemo } from 'react';

import { buildJourneyFlow, buildOnboardingData, buildProfileData } from '../utils/journeyBuilder';
import { buildCraftPlanFromForm } from '../utils/planBuilder';
import {
  getPreviewImageUri,
  mapArtisanMatches,
  mapCraftPlan,
  mapDesignConfirmation,
  mapOrderDetail,
  mapPreviewResult,
  mapStructuredRequirement,
} from '../services/mappers';
import type { GenerateCraftPlanResponse, SubmitRequirementResponse } from '../services/api';
import type { PublishFormState, OrderDetailScreenData, CraftPlanData, StructuredResultData, PreviewScreenData, MatchScreenData, DesignConfirmScreenData } from '../types';
import type { OrderEntryContext, OrderRecord } from '../types/orders';

export function useAppScreenData({
  formState,
  submitResult,
  planResult,
  orderRecord,
  orderContext,
}: {
  formState: PublishFormState;
  submitResult: SubmitRequirementResponse | null;
  planResult: GenerateCraftPlanResponse | null;
  orderRecord: OrderRecord | null;
  orderContext: OrderEntryContext | null;
}) {
  const serverData = submitResult && planResult ? { submitResult, planResult } : null;

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

  const serverOrderDetailData = useMemo<OrderDetailScreenData | null>(() => {
    if (!orderRecord) return null;
    return mapOrderDetail(orderRecord, orderContext);
  }, [orderContext, orderRecord]);

  const planData = serverPlanData ?? mockPlanData;
  const journeyData = useMemo(() => buildJourneyFlow(formState, planData), [formState, planData]);
  const profileData = useMemo(() => buildProfileData(planData), [planData]);
  const onboardingData = useMemo(() => buildOnboardingData(), []);

  return {
    serverPlanData,
    serverStructuredData,
    serverPreviewData,
    serverPreviewUri,
    serverMatchData,
    serverDesignConfirmData,
    serverOrderDetailData,
    journeyData,
    profileData,
    onboardingData,
  };
}
