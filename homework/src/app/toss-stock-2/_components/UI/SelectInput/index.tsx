'use client';

import { FormField } from '../FormField';
import * as styles from './SelectInput.css';

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
        className={styles.select}
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
