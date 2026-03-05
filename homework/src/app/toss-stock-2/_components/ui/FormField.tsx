'use client';

type FormFieldProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

export function FormField({ id, label, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}
