import { useCallback } from 'react';

import { ApiRequestError, api } from '../../../services/api';

export function useFlowErrorReporter() {
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

  return {
    reportFlowError,
  };
}
