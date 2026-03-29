import { supportedCrafts, mockHomeFeed } from '../mock-data.js';

export function getBootstrapPayload() {
  return {
    home: mockHomeFeed,
    publishForm: {
      maxImages: 6,
      supportedCrafts,
      budgetHints: ['¥6,800 以内', '¥8,000 以内', '¥12,000 以内'],
      deliveryHints: ['4 月下旬前', '5 月中旬前', '6 月上旬前'],
    },
  };
}
