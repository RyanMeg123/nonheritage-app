import { randomUUID } from 'node:crypto';

import { aiAdapters } from '../ai-adapters.js';
import { saveStructuredRequirement, saveSubmission } from '../repository.js';

export async function submitRequirement(payload) {
  const submission = await saveSubmission({
    id: `submission-${randomUUID()}`,
    images: payload.images,
    requirementText: payload.requirementText,
    preferredCraft: payload.preferredCraft,
    budgetRange: payload.budgetRange,
    expectedDeliveryDate: payload.expectedDeliveryDate,
    status: 'submitted',
  });

  const structuredRequirement = await saveStructuredRequirement(
    await aiAdapters.requirementParser.run(submission),
  );

  return {
    submission,
    structuredRequirement,
    nextAction: 'generate_craft_plan',
  };
}
