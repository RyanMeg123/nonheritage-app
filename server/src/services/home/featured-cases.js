import { getPlan, getRecentPreviews, getStructuredRequirementBySubmissionId, getSubmission } from '../../repository.js';

function isHttpUrl(value) {
  return typeof value === 'string' && /^https?:\/\//i.test(value);
}

function isPreferredPreviewUrl(value) {
  if (!isHttpUrl(value)) {
    return false;
  }

  const preferredBase = (process.env.QINIU_BUCKET_DOMAIN ?? '').trim().replace(/\/$/, '');
  if (!preferredBase) {
    return true;
  }

  return value.startsWith(`${preferredBase}/`);
}

function normalizeImageUrl(value) {
  if (isHttpUrl(value)) {
    return value;
  }

  if (value && typeof value === 'object') {
    if (isHttpUrl(value.url)) {
      return value.url;
    }

    if (isHttpUrl(value.image_url)) {
      return value.image_url;
    }
  }

  return undefined;
}

export async function getFeaturedCases() {
  const previews = await getRecentPreviews(24);
  const featuredCases = [];

  for (const preview of previews) {
    const previewImageUris = Array.isArray(preview.previewImages)
      ? preview.previewImages
          .map((item) => normalizeImageUrl(item?.url))
          .filter((item) => isPreferredPreviewUrl(item))
          .filter((item) => Boolean(item))
      : [];

    if (!previewImageUris.length) {
      continue;
    }

    const [plan, submission, structuredRequirement] = await Promise.all([
      getPlan(preview.planId),
      getSubmission(preview.submissionId),
      getStructuredRequirementBySubmissionId(preview.submissionId),
    ]);

    if (!plan || !submission || !structuredRequirement) {
      continue;
    }

    const sourceImageUris = Array.isArray(preview.sourceImages)
      ? preview.sourceImages
          .map((item) => normalizeImageUrl(item?.url ?? item))
          .filter((item) => Boolean(item))
      : [];

    featuredCases.push({
      id: submission.id,
      title: structuredRequirement.style || plan.recommendedCraft || '最新定制方向',
      craft: plan.recommendedCraft || structuredRequirement.craftPreference || submission.preferredCraft,
      summary: plan.planSummary || preview.description || submission.requirementText,
      imageUri: previewImageUris[0],
      requirementText: submission.requirementText,
      budgetRange: submission.budgetRange,
      expectedDeliveryDate: submission.expectedDeliveryDate,
      priceRange: plan.priceRange,
      timelineRange: plan.timelineRange,
      sourceImageUris,
      previewImageUris,
      createdAt:
        submission.createdAt instanceof Date
          ? submission.createdAt.toISOString()
          : String(submission.createdAt),
    });

    if (featuredCases.length >= 12) {
      break;
    }
  }

  return featuredCases;
}
