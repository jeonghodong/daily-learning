'use client';

import { FormField } from '../FormField';
import * as styles from './DateInput.css';

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
        className={styles.input}
      />
    </FormField>
  );
}
