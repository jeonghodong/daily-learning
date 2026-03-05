'use client';

import { FormField } from './FormField';

const inputClassName =
  'w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500';

type DateInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export function DateInput({ id, label, value, onChange }: DateInputProps) {
  return (
    <FormField id={id} label={label}>
      <input
        id={id}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClassName}
      />
    </FormField>
  );
}
