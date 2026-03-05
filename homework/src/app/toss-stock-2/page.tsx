/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Suspense, useMemo } from 'react';
import { BulkActionBar } from './_components/BulkActionBar';
import type { BulkActionType } from './_components/BulkActionBar/types';
import { CustomerTable } from './_components/CustomerTable';
import { Pagination } from './_components/Pagination';
import { SearchForm } from './_components/SearchForm';
import { ToastProvider } from './_components/Toast';
import { useBulkAction } from './_hooks/useBulkSuspend';
import { useCustomerSearch } from './_hooks/useCustomerSearch';
import { useRowSelection } from './_hooks/useRowSelection';
import * as styles from './_styles/page.css';

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
  const { selectedIds, toggle, toggleAll, clearSelection, isAllSelected } =
    useRowSelection(customerIds);
  const { bulkSuspend, bulkActivate, isPending } =
    useBulkAction(clearSelection);

  const actionType: BulkActionType = useMemo(() => {
    if (selectedIds.size === 0) return 'mixed';
    const selectedCustomers = customers.filter((c) => selectedIds.has(c.id));
    const allNormal = selectedCustomers.every((c) => c.status === 'NORMAL');
    const allSuspended = selectedCustomers.every(
      (c) => c.status === 'SUSPENDED',
    );
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
    return <div className={styles.error}>에러: {error}</div>;
  }

  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>고객 관리</h1>
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
      fallback={<div className={styles.loadingFallback}>Loading...</div>}
    >
      <ToastProvider>
        <TossStock2Content />
      </ToastProvider>
    </Suspense>
  );
}
