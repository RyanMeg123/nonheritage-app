import AsyncStorage from '@react-native-async-storage/async-storage';

import type {
  GenerateCraftPlanResponse,
  SubmitRequirementResponse,
} from '../../../services/api';
import type { FeaturedCase } from '../../../types';

const STORAGE_KEY = 'nonheritage.home.featuredCases';
const MAX_STORED_CASES = 12;

function isRemoteHttpUrl(value: unknown): value is string {
  return typeof value === 'string' && /^https?:\/\//i.test(value);
}

function normalizeImageUrl(value: unknown) {
  if (isRemoteHttpUrl(value)) {
    return value;
  }

  if (value && typeof value === 'object') {
    const candidate = value as { url?: unknown; image_url?: unknown };
    if (isRemoteHttpUrl(candidate.url)) {
      return candidate.url;
    }

    if (isRemoteHttpUrl(candidate.image_url)) {
      return candidate.image_url;
    }
  }

  return undefined;
}

function sanitizeStoredCase(value: unknown): FeaturedCase | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const candidate = value as Partial<FeaturedCase>;
  if (
    typeof candidate.id !== 'string' ||
    typeof candidate.title !== 'string' ||
    typeof candidate.craft !== 'string' ||
    typeof candidate.summary !== 'string'
  ) {
    return null;
  }

  return {
    id: candidate.id,
    title: candidate.title,
    craft: candidate.craft,
    summary: candidate.summary,
    imageUri: typeof candidate.imageUri === 'string' ? candidate.imageUri : undefined,
    requirementText:
      typeof candidate.requirementText === 'string'
        ? candidate.requirementText
        : undefined,
    budgetRange:
      typeof candidate.budgetRange === 'string' ? candidate.budgetRange : undefined,
    expectedDeliveryDate:
      typeof candidate.expectedDeliveryDate === 'string'
        ? candidate.expectedDeliveryDate
        : undefined,
    priceRange:
      typeof candidate.priceRange === 'string' ? candidate.priceRange : undefined,
    timelineRange:
      typeof candidate.timelineRange === 'string' ? candidate.timelineRange : undefined,
    sourceImageUris: Array.isArray(candidate.sourceImageUris)
      ? candidate.sourceImageUris.filter(isRemoteHttpUrl)
      : undefined,
    previewImageUris: Array.isArray(candidate.previewImageUris)
      ? candidate.previewImageUris.filter(isRemoteHttpUrl)
      : undefined,
    createdAt: typeof candidate.createdAt === 'string' ? candidate.createdAt : undefined,
  };
}

function createFeaturedCaseRecord(
  submitResult: SubmitRequirementResponse,
  planResult: GenerateCraftPlanResponse,
): FeaturedCase {
  const previewImageUris = planResult.preview.previewImages
    .map((item) => normalizeImageUrl(item.url))
    .filter((item): item is string => Boolean(item));
  const sourceImageUris = planResult.preview.sourceImages
    .map((item) => normalizeImageUrl(item.url))
    .filter((item): item is string => Boolean(item));
  const title =
    submitResult.structuredRequirement.style ||
    planResult.plan.recommendedCraft ||
    '最新定制方向';

  return {
    id: submitResult.submission.id,
    title,
    craft:
      planResult.plan.recommendedCraft ||
      submitResult.structuredRequirement.craftPreference ||
      submitResult.submission.preferredCraft,
    summary:
      planResult.plan.planSummary ||
      planResult.preview.description ||
      submitResult.submission.requirementText,
    imageUri: previewImageUris[0] ?? sourceImageUris[0],
    requirementText: submitResult.submission.requirementText,
    budgetRange: submitResult.submission.budgetRange,
    expectedDeliveryDate: submitResult.submission.expectedDeliveryDate,
    priceRange: planResult.plan.priceRange,
    timelineRange: planResult.plan.timelineRange,
    sourceImageUris,
    previewImageUris,
    createdAt: submitResult.submission.createdAt,
  };
}

export async function readStoredFeaturedCases() {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      await AsyncStorage.removeItem(STORAGE_KEY);
      return [];
    }

    const sanitized = parsed
      .map((item) => sanitizeStoredCase(item))
      .filter((item): item is FeaturedCase => Boolean(item));

    if (sanitized.length !== parsed.length) {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
    }

    return sanitized;
  } catch {
    await AsyncStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

export async function saveGeneratedFeaturedCase(
  submitResult: SubmitRequirementResponse,
  planResult: GenerateCraftPlanResponse,
) {
  const nextRecord = createFeaturedCaseRecord(submitResult, planResult);
  const current = await readStoredFeaturedCases();
  const merged = [nextRecord, ...current.filter((item) => item.id !== nextRecord.id)].slice(
    0,
    MAX_STORED_CASES,
  );

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  return merged;
}
