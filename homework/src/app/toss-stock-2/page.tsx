'use client';

import { Suspense } from 'react';
import { CustomerTable } from './_components/customer-table';
import { Pagination } from './_components/pagination';
import { SearchForm } from './_components/search-form';
import { useCustomerSearch } from './_hooks/useCustomerSearch';

function TossStock2Content() {
  const {
    filters,
    data,
    isLoading,
    isPlaceholderData,
    error,
    updateSearch,
    updatePage,
  } = useCustomerSearch();

  if (error) {
    return <div className="p-4 text-red-600">에러: {error}</div>;
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-xl font-semibold text-gray-900">고객 관리</h1>
      <SearchForm
        key={[
          filters.name,
          filters.phone,
          filters.status,
          filters.startDate,
          filters.endDate,
        ].join('|')}
        filters={filters}
        onSearch={updateSearch}
      />
      <CustomerTable
        customers={data?.data ?? []}
        loading={isLoading}
        isStale={isPlaceholderData}
      />
      {data && data.totalPages > 0 && (
        <Pagination
          currentPage={filters.page}
          totalPages={data.totalPages}
          onPageChange={updatePage}
        />
      )}
    </div>
  );
}

export default function TossStock2() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center p-12 text-gray-500">
          Loading...
        </div>
      }
    >
      <TossStock2Content />
    </Suspense>
  );
}
