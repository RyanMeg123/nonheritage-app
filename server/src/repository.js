const state = {
  submissions: new Map(),
  structuredRequirements: new Map(),
  plans: new Map(),
  previews: new Map(),
  artisanMatches: new Map(),
  confirmations: new Map(),
};

export const repository = {
  saveSubmission(submission) {
    state.submissions.set(submission.id, submission);
    return submission;
  },
  getSubmission(id) {
    return state.submissions.get(id) ?? null;
  },
  saveStructuredRequirement(entity) {
    state.structuredRequirements.set(entity.id, entity);
    return entity;
  },
  savePlan(entity) {
    state.plans.set(entity.id, entity);
    return entity;
  },
  getPlan(id) {
    return state.plans.get(id) ?? null;
  },
  savePreview(entity) {
    state.previews.set(entity.id, entity);
    return entity;
  },
  saveMatches(planId, entities) {
    state.artisanMatches.set(planId, entities);
    return entities;
  },
  getMatches(planId) {
    return state.artisanMatches.get(planId) ?? [];
  },
  saveConfirmation(entity) {
    state.confirmations.set(entity.id, entity);
    return entity;
  },
  reset() {
    Object.values(state).forEach((collection) => collection.clear());
  },
};
