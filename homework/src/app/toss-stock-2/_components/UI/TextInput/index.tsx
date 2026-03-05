'use client';

import { FormField } from '../FormField';
import * as styles from './TextInput.css';

type TextInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function TextInput({
  id,
  label,
  value,
  onChange,
  placeholder,
}: TextInputProps) {
  return (
    <FormField id={id} label={label}>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
    </FormField>
  );
}
