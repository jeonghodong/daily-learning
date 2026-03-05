'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useToast } from '../_components/toast';
import { MockApi } from '../mocks/mockApi';

export type BulkActionType = 'suspend' | 'activate';

export function useBulkAction(clearSelection: () => void) {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const suspendMutation = useMutation({
    mutationFn: (customerIds: string[]) =>
      MockApi.bulkSuspendAccounts(customerIds),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      addToast({ type: 'success', message: data.message });
      clearSelection();
    },
    onError: (error) => {
      addToast({
        type: 'error',
        message:
          error instanceof Error ? error.message : '처리에 실패했습니다.',
      });
    },
  });

  const activateMutation = useMutation({
    mutationFn: (customerIds: string[]) =>
      MockApi.bulkActivateAccounts(customerIds),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      addToast({ type: 'success', message: data.message });
      clearSelection();
    },
    onError: (error) => {
      addToast({
        type: 'error',
        message:
          error instanceof Error ? error.message : '처리에 실패했습니다.',
      });
    },
  });

  const bulkSuspend = useCallback(
    (customerIds: string[]) => {
      if (customerIds.length === 0) return;
      suspendMutation.mutate(customerIds);
    },
    [suspendMutation],
  );

  const bulkActivate = useCallback(
    (customerIds: string[]) => {
      if (customerIds.length === 0) return;
      activateMutation.mutate(customerIds);
    },
    [activateMutation],
  );

  return {
    bulkSuspend,
    bulkActivate,
    isPending: suspendMutation.isPending || activateMutation.isPending,
  };
}
