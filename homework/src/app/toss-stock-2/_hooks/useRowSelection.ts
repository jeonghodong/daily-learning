/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useCallback, useEffect, useState } from 'react';

export function useRowSelection(customerIds: string[]) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    setSelectedIds(new Set());
  }, [customerIds.join(',')]);

  const toggle = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const toggleAll = useCallback(() => {
    setSelectedIds((prev) => {
      const allSelected =
        customerIds.length > 0 && customerIds.every((id) => prev.has(id));
      if (allSelected) {
        return new Set<string>();
      }
      return new Set(customerIds);
    });
  }, [customerIds]);

  const clearSelection = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const isAllSelected =
    customerIds.length > 0 && customerIds.every((id) => selectedIds.has(id));

  return {
    selectedIds,
    toggle,
    toggleAll,
    clearSelection,
    isAllSelected,
  };
}
