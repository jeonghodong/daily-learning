export type BulkActionType = 'suspend' | 'activate' | 'mixed';

export type BulkActionBarProps = {
  selectedCount: number;
  actionType: BulkActionType;
  onBulkSuspend: () => void;
  onBulkActivate: () => void;
  isPending: boolean;
};
