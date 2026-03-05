/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import {
  AccountStatus,
  Customer,
  FetchCustomersParams,
  MockApi,
  PaginatedResponse,
} from '../mocks/mockApi';

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

  const [data, setData] = useState<PaginatedResponse<Customer> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filters = parseFiltersFromSearchParams(searchParams);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = filtersToParams(filters);
        const result = await MockApi.fetchCustomers(params);
        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : '알 수 없는 오류');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [
    filters.name,
    filters.phone,
    filters.status,
    filters.startDate,
    filters.endDate,
    filters.page,
    filters.limit,
  ]);

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
    data,
    loading,
    error,
    updateSearch,
    updatePage,
  };
}
