'use client';

import { Button } from '../ui/Button';
import { DateInput } from '../ui/DateInput';
import { SelectInput } from '../ui/SelectInput';
import { TextInput } from '../ui/TextInput';
import { useSearchFormState } from './hooks';
import type { SearchFormProps } from './types';
import { STATUS_OPTIONS } from './types';

export function SearchForm({ filters, onSearch }: SearchFormProps) {
  const {
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
  } = useSearchFormState(filters, onSearch);

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <TextInput
          id="name"
          label="고객 이름"
          value={name}
          onChange={setName}
          placeholder="이름 검색"
        />
        <TextInput
          id="phone"
          label="전화번호"
          value={phone}
          onChange={setPhone}
          placeholder="010-0000-0000"
        />
        <SelectInput
          id="status"
          label="계좌 상태"
          value={status}
          onChange={setStatus}
          options={STATUS_OPTIONS}
        />
        <DateInput
          id="startDate"
          label="가입일 시작"
          value={startDate}
          onChange={setStartDate}
        />
        <DateInput
          id="endDate"
          label="가입일 종료"
          value={endDate}
          onChange={setEndDate}
        />
      </div>
      <div className="mt-4 flex gap-2">
        <Button type="submit" variant="primary">
          검색
        </Button>
        <Button type="button" variant="secondary" onClick={handleReset}>
          초기화
        </Button>
      </div>
    </form>
  );
}
