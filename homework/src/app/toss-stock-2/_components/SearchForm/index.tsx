'use client';

import { Button } from '../UI/Button';
import { DateInput } from '../UI/DateInput';
import { SelectInput } from '../UI/SelectInput';
import { TextInput } from '../UI/TextInput';
import { useSearchFormState } from './hooks';
import * as styles from './styles.css';
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
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
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
      <div className={styles.actions}>
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
