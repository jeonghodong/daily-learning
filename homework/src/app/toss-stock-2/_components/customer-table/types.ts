import type { AccountStatus, Customer } from '../../mocks/mockApi';

export type { AccountStatus, Customer };

export type CustomerTableProps = {
  customers: Customer[];
  loading: boolean;
  isStale?: boolean;
};

export const STATUS_LABELS: Record<AccountStatus, string> = {
  NORMAL: '정상',
  SUSPENDED: '정지',
  DORMANT: '휴면',
};

export const STATUS_CLASSES: Record<AccountStatus, string> = {
  NORMAL: 'bg-green-100 text-green-800',
  SUSPENDED: 'bg-red-100 text-red-800',
  DORMANT: 'bg-gray-100 text-gray-700',
};
