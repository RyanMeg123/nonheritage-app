import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { ordersApi } from '../../../services/orders';
import type { AppScreen, PublishFormState } from '../../../types';
import type { GenerateCraftPlanResponse } from '../../../services/api';
import type { OrderEntryContext, OrderRecord } from '../../../types/orders';
import { buildCreateOrderPayload } from '../utils/buildOrderPayload';

type ReportFlowError = (
  error: unknown,
  screenName: string,
  stage: string,
  fallbackMessage: string,
) => Promise<void>;

export type OrderFlowLoadingStage = 'idle' | 'creating-order' | 'loading-order';

export function useOrderFlow({
  formState,
  planResult,
  currentUserId,
  goTo,
  onRequireAuth,
  reportFlowError,
}: {
  formState: PublishFormState;
  planResult: GenerateCraftPlanResponse | null;
  currentUserId: string | null | undefined;
  goTo: (next: AppScreen) => void;
  onRequireAuth: () => void;
  reportFlowError: ReportFlowError;
}) {
  const [loadingStage, setLoadingStage] = useState<OrderFlowLoadingStage>('idle');
  const [orderRecord, setOrderRecord] = useState<OrderRecord | null>(null);
  const [orderContext, setOrderContext] = useState<OrderEntryContext | null>(null);
  const [orderBackScreen, setOrderBackScreen] = useState<AppScreen>('conversation');

  const openOrderDetail = useCallback(
    async (targetOrderId: string, backScreen: AppScreen) => {
      try {
        setLoadingStage('loading-order');
        const detail = await ordersApi.getOrderDetail(targetOrderId);
        setOrderRecord(detail);
        setOrderBackScreen(backScreen);
        goTo('order-progress');
      } catch (error) {
        const message = error instanceof Error ? error.message : '网络错误，请稍后重试';
        await reportFlowError(error, 'OrderDetailScreen', 'get_order_detail', '订单详情加载失败');
        Alert.alert('加载失败', message, [
          { text: '取消', style: 'cancel' },
          {
            text: '重试',
            onPress: () => {
              void openOrderDetail(targetOrderId, backScreen);
            },
          },
        ]);
      } finally {
        setLoadingStage('idle');
      }
    },
    [goTo, reportFlowError],
  );

  const handleOpenOrderProgress = useCallback(
    (backScreen: AppScreen) => {
      if (!orderRecord) {
        goTo('order-progress');
        return;
      }

      void openOrderDetail(orderRecord.id, backScreen);
    },
    [goTo, openOrderDetail, orderRecord],
  );

  const handleCreateOrder = useCallback(async () => {
    if (!currentUserId) {
      onRequireAuth();
      return;
    }

    const currentDesignConfirmation = planResult?.designConfirmation;

    if (!currentDesignConfirmation) {
      Alert.alert('暂时无法创建', '当前还缺少确认单或承接方信息，请先返回上一页重新生成结果。');
      return;
    }

    if (orderRecord?.designConfirmationId === currentDesignConfirmation.id) {
      void openOrderDetail(orderRecord.id, 'conversation');
      return;
    }

    const nextOrderDraft = buildCreateOrderPayload(planResult, formState, currentUserId);
    if (!nextOrderDraft) {
      Alert.alert('暂时无法创建', '当前缺少创建订单所需信息，请稍后重试。');
      return;
    }

    try {
      setLoadingStage('creating-order');
      const createdOrder = await ordersApi.createOrder(nextOrderDraft.payload);
      setOrderContext(nextOrderDraft.context);
      setOrderRecord(createdOrder);
      await openOrderDetail(createdOrder.id, 'conversation');
    } catch (error) {
      const message = error instanceof Error ? error.message : '网络错误，请稍后重试';
      await reportFlowError(error, 'ConversationScreen', 'create_order', '创建订单失败');
      Alert.alert('创建失败', message, [
        { text: '取消', style: 'cancel' },
        {
          text: '重试',
          onPress: () => {
            void handleCreateOrder();
          },
        },
      ]);
    } finally {
      setLoadingStage('idle');
    }
  }, [currentUserId, formState, onRequireAuth, openOrderDetail, orderRecord, planResult, reportFlowError]);

  return {
    loadingStage,
    orderRecord,
    orderContext,
    orderBackScreen,
    handleOpenOrderProgress,
    handleCreateOrder,
  };
}
