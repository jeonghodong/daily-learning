import type { AccountStatus, Customer } from '../../_mocks/mockApi';
import * as tableStyles from './styles.css';

export type { AccountStatus, Customer };

export type CustomerTableProps = {
  customers: Customer[];
  loading: boolean;
  isStale?: boolean;
  selectedIds?: Set<string>;
  onToggle?: (id: string) => void;
  onToggleAll?: () => void;
  isAllSelected?: boolean;
};

export const STATUS_LABELS: Record<AccountStatus, string> = {
  NORMAL: '정상',
  SUSPENDED: '정지',
  DORMANT: '휴면',
};

export const STATUS_CLASSES: Record<AccountStatus, string> = {
  NORMAL: tableStyles.badgeNormal,
  SUSPENDED: tableStyles.badgeSuspended,
  DORMANT: tableStyles.badgeDormant,
};
