'use client';

import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import {
  AccountStatus,
  Customer,
  FetchCustomersParams,
  MockApi,
  PaginatedResponse,
} from '../_mocks/mockApi';

const DEFAULT_LIMIT = 10;

export type SearchFilters = {
  name: string;
  phone: string;
  status: AccountStatus | '';
  startDate: string;
  endDate: string;
  page: number;
  limit: number;
};

function parseFiltersFromSearchParams(
  searchParams: URLSearchParams,
): SearchFilters {
  return {
    name: searchParams.get('name') || '',
    phone: searchParams.get('phone') || '',
    status: (searchParams.get('status') as AccountStatus | null) || '',
    startDate: searchParams.get('startDate') || '',
    endDate: searchParams.get('endDate') || '',
    page: Math.max(1, Number(searchParams.get('page')) || 1),
    limit: DEFAULT_LIMIT,
  };
}

function filtersToParams(
  filters: Partial<SearchFilters>,
): FetchCustomersParams {
  const params: FetchCustomersParams = {
    page: filters.page ?? 1,
    limit: filters.limit ?? DEFAULT_LIMIT,
  };
  if (filters.name) params.name = filters.name;
  if (filters.phone) params.phone = filters.phone;
  if (filters.status) params.status = filters.status;
  if (filters.startDate) params.startDate = filters.startDate;
  if (filters.endDate) params.endDate = filters.endDate;
  return params;
}

function buildSearchString(filters: Partial<SearchFilters>): string {
  const params = new URLSearchParams();
  if (filters.name) params.set('name', filters.name);
  if (filters.phone) params.set('phone', filters.phone);
  if (filters.status) params.set('status', filters.status);
  if (filters.startDate) params.set('startDate', filters.startDate);
  if (filters.endDate) params.set('endDate', filters.endDate);
  if (filters.page && filters.page > 1)
    params.set('page', String(filters.page));
  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

export function useCustomerSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const filters = parseFiltersFromSearchParams(searchParams);

  const { data, isLoading, isPlaceholderData, error } = useQuery({
    queryKey: ['customers', filters],
    queryFn: () => MockApi.fetchCustomers(filtersToParams(filters)),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (data && filters.page < data.totalPages) {
      const nextFilters = { ...filters, page: filters.page + 1 };
      queryClient.prefetchQuery({
        queryKey: ['customers', nextFilters],
        queryFn: () => MockApi.fetchCustomers(filtersToParams(nextFilters)),
      });
    }
  }, [data, filters, queryClient]);

  const updateSearch = useCallback(
    (newFilters: Partial<SearchFilters>) => {
      const merged = { ...filters, ...newFilters, page: 1 };
      const path = `/toss-stock-2${buildSearchString(merged)}`;
      router.push(path);
    },
    [filters, router],
  );

  const updatePage = useCallback(
    (page: number) => {
      const merged = { ...filters, page };
      const path = `/toss-stock-2${buildSearchString(merged)}`;
      router.push(path);
    },
    [filters, router],
  );

  return {
    filters,
    data: data ?? null,
    isLoading,
    isPlaceholderData: isPlaceholderData ?? false,
    error: error
      ? error instanceof Error
        ? error.message
        : '알 수 없는 오류'
      : null,
    updateSearch,
    updatePage,
  };
}
