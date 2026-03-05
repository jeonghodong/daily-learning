'use client';

import { Suspense, useMemo } from 'react';
import { BulkActionBar } from './_components/bulk-action-bar';
import type { BulkActionType } from './_components/bulk-action-bar/types';
import { CustomerTable } from './_components/customer-table';
import { Pagination } from './_components/pagination';
import { SearchForm } from './_components/search-form';
import { ToastProvider } from './_components/toast';
import { useBulkAction } from './_hooks/useBulkSuspend';
import { useCustomerSearch } from './_hooks/useCustomerSearch';
import { useRowSelection } from './_hooks/useRowSelection';

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

  const customers = data?.data ?? [];
  const customerIds = customers.map((c) => c.id);
  const {
    selectedIds,
    toggle,
    toggleAll,
    clearSelection,
    isAllSelected,
  } = useRowSelection(customerIds);
  const { bulkSuspend, bulkActivate, isPending } =
    useBulkAction(clearSelection);

  const actionType: BulkActionType = useMemo(() => {
    if (selectedIds.size === 0) return 'mixed';
    const selectedCustomers = customers.filter((c) => selectedIds.has(c.id));
    const allNormal = selectedCustomers.every((c) => c.status === 'NORMAL');
    const allSuspended = selectedCustomers.every((c) => c.status === 'SUSPENDED');
    if (allNormal) return 'suspend';
    if (allSuspended) return 'activate';
    return 'mixed';
  }, [selectedIds, customers]);

  const handleBulkSuspend = () => {
    bulkSuspend(Array.from(selectedIds));
  };

  const handleBulkActivate = () => {
    bulkActivate(Array.from(selectedIds));
  };

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
      <BulkActionBar
        selectedCount={selectedIds.size}
        actionType={actionType}
        onBulkSuspend={handleBulkSuspend}
        onBulkActivate={handleBulkActivate}
        isPending={isPending}
      />
      <CustomerTable
        customers={customers}
        loading={isLoading}
        isStale={isPlaceholderData}
        selectedIds={selectedIds}
        onToggle={toggle}
        onToggleAll={toggleAll}
        isAllSelected={isAllSelected}
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
      <ToastProvider>
        <TossStock2Content />
      </ToastProvider>
    </Suspense>
  );
}
