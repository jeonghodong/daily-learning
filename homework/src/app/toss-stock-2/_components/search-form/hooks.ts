'use client';

import { useState } from 'react';
import type { SearchFilters } from '../../_hooks/useCustomerSearch';

export function useSearchFormState(
  filters: SearchFilters,
  onSearch: (filters: Partial<SearchFilters>) => void,
) {
  const [name, setName] = useState(filters.name);
  const [phone, setPhone] = useState(filters.phone);
  const [status, setStatus] = useState<SearchFilters['status']>(filters.status);
  const [startDate, setStartDate] = useState(filters.startDate);
  const [endDate, setEndDate] = useState(filters.endDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ name, phone, status, startDate, endDate });
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setStatus('');
    setStartDate('');
    setEndDate('');
    onSearch({
      name: '',
      phone: '',
      status: '',
      startDate: '',
      endDate: '',
    });
  };

  return {
    name,
    setName,
    phone,
    setPhone,
    status,
    setStatus,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    handleSubmit,
    handleReset,
  };
}
