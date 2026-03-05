'use client';

import { Button } from '../ui/Button';
import type { BulkActionBarProps } from './types';

export function BulkActionBar({
  selectedCount,
  actionType,
  onBulkSuspend,
  onBulkActivate,
  isPending,
}: BulkActionBarProps) {
  if (selectedCount === 0) return null;

  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
      <span className="text-sm font-medium text-gray-700">
        {selectedCount}명 선택됨
      </span>
      {actionType === 'suspend' && (
        <Button
          type="button"
          variant="primary"
          onClick={onBulkSuspend}
          disabled={isPending}
        >
          {isPending ? '처리 중...' : '일괄 정지'}
        </Button>
      )}
      {actionType === 'activate' && (
        <Button
          type="button"
          variant="primary"
          onClick={onBulkActivate}
          disabled={isPending}
        >
          {isPending ? '처리 중...' : '일괄 활성화'}
        </Button>
      )}
      {actionType === 'mixed' && (
        <span className="text-sm text-gray-500">
          동일한 상태의 고객만 선택해주세요
        </span>
      )}
    </div>
  );
}
