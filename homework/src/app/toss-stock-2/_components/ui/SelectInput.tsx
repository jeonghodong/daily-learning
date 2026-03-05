'use client';

import { FormField } from './FormField';

const selectClassName =
  'w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500';

export type SelectOption<T extends string = string> = {
  value: T;
  label: string;
};

type SelectInputProps<T extends string = string> = {
  id: string;
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: SelectOption<T>[];
};

export function SelectInput<T extends string>({
  id,
  label,
  value,
  onChange,
  options,
}: SelectInputProps<T>) {
  return (
    <FormField id={id} label={label}>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className={selectClassName}
      >
        {options.map((opt) => (
          <option key={opt.value || 'all'} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}
