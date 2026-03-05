import type { SelectOption } from '../ui/SelectInput';
import type { SearchFilters } from '../../_hooks/useCustomerSearch';

export type SearchFormProps = {
  filters: SearchFilters;
  onSearch: (filters: Partial<SearchFilters>) => void;
};

export const STATUS_OPTIONS: SelectOption<SearchFilters['status']>[] = [
  { value: '', label: '전체' },
  { value: 'NORMAL', label: '정상' },
  { value: 'SUSPENDED', label: '정지' },
  { value: 'DORMANT', label: '휴면' },
];
