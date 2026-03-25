import {
  buildArtisanMatches,
  buildCraftPlan,
  buildDesignConfirmation,
  buildPreviewResult,
  buildStructuredRequirement,
} from './mock-data.js';

export const aiAdapters = {
  requirementParser: {
    mode: 'mock',
    run(submission) {
      return buildStructuredRequirement(submission);
    },
  },
  craftPlanGenerator: {
    mode: 'mock',
    run(submission, structuredRequirement) {
      return buildCraftPlan(submission, structuredRequirement);
    },
  },
  previewRenderer: {
    mode: 'mock',
    run(submission) {
      return buildPreviewResult(submission);
    },
  },
  artisanMatcher: {
    mode: 'mock',
    run(submission) {
      return buildArtisanMatches(submission);
    },
  },
  designConfirmationBuilder: {
    mode: 'mock',
    run(submission, plan) {
      return buildDesignConfirmation(submission, plan);
    },
  },
};
