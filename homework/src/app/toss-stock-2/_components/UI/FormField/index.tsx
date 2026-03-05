'use client';

import * as styles from './FormField.css';

type FormFieldProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

export function FormField({ id, label, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {children}
    </div>
  );
}
