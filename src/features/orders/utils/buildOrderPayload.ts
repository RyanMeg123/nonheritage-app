import type { GenerateCraftPlanResponse } from '../../../services/api';
import { publishPreset } from '../../../data/mockData';
import type { PublishFormState } from '../../../types';
import type { CreateOrderPayload, OrderEntryContext } from '../../../types/orders';

const budgetLabelMap: Record<string, string> = {
  'budget-6800': '¥6,800 以内',
  'budget-8000': '¥8,000 以内',
  'budget-12000': '¥12,000 以内',
};

const agreedDeliveryDateMap: Record<string, { month: number; day: number }> = {
  'timeline-apr': { month: 4, day: 25 },
  'timeline-may': { month: 5, day: 15 },
  'timeline-june': { month: 6, day: 10 },
};

function formatYmd(year: number, month: number, day: number) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function deriveOrderDeliveryDate(timelineId: string) {
  const now = new Date();
  const target =
    agreedDeliveryDateMap[timelineId] ?? agreedDeliveryDateMap[publishPreset.defaultTimelineId];
  return formatYmd(now.getFullYear(), target.month, target.day);
}

function deriveOrderPriceFen(priceRange: string, budgetId: string) {
  const numbers = Array.from(priceRange.matchAll(/\d[\d,]*/g), (match) =>
    Number(match[0].replace(/,/g, '')),
  ).filter((value) => Number.isFinite(value) && value > 0);

  if (numbers.length > 0) {
    return numbers[0] * 100;
  }

  const fallbackBudget = budgetLabelMap[budgetId] ?? budgetId;
  const fallback = Number(fallbackBudget.replace(/[^\d]/g, ''));
  return (Number.isFinite(fallback) && fallback > 0 ? fallback : 8000) * 100;
}

export function buildCreateOrderPayload(
  planResult: GenerateCraftPlanResponse | null,
  formState: PublishFormState,
  userId: string | null | undefined,
): { payload: CreateOrderPayload; context: OrderEntryContext } | null {
  const selectedArtisan = planResult?.matches[0];
  const currentDesignConfirmation = planResult?.designConfirmation;
  const currentPlan = planResult?.plan;

  if (!selectedArtisan || !currentDesignConfirmation || !currentPlan || !userId) {
    return null;
  }

  return {
    payload: {
      userId,
      artisanId: selectedArtisan.id,
      designConfirmationId: currentDesignConfirmation.id,
      totalPriceFen: deriveOrderPriceFen(currentPlan.priceRange, formState.budgetId),
      agreedDeliveryDate: deriveOrderDeliveryDate(formState.timelineId),
      notes: formState.requirementText.trim() || undefined,
    },
    context: {
      artisanName: selectedArtisan.name,
      craftLabel: currentPlan.recommendedCraft,
      planSummary: currentPlan.planSummary,
    },
  };
}
