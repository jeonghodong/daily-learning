'use client';

import { Button } from '../UI/Button';
import type { BulkActionBarProps } from './types';
import * as styles from './styles.css';

export function BulkActionBar({
  selectedCount,
  actionType,
  onBulkSuspend,
  onBulkActivate,
  isPending,
}: BulkActionBarProps) {
  if (selectedCount === 0) return null;

  return (
    <div className={styles.bar}>
      <span className={styles.label}>{selectedCount}명 선택됨</span>
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
        <span className={styles.hint}>동일한 상태의 고객만 선택해주세요</span>
      )}
    </div>
  );
}
