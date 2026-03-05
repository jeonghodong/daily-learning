'use client';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  variant?: ButtonVariant;
  type?: 'button' | 'submit';
  onClick?: () => void;
  children: React.ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  secondary:
    'rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
};

export function Button({
  variant = 'primary',
  type = 'button',
  onClick,
  children,
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={variantClasses[variant]}>
      {children}
    </button>
  );
}
