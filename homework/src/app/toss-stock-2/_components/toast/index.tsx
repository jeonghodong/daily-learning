'use client';

import { ToastContextProvider, useToast } from './context';
import type { ToastType } from './types';

const typeStyles: Record<ToastType, string> = {
  success: 'bg-green-600 text-white',
  error: 'bg-red-600 text-white',
};

function ToastList() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed right-4 top-4 z-50 flex flex-col gap-2"
      role="region"
      aria-label="알림"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex min-w-[280px] max-w-md items-center justify-between rounded-lg px-4 py-3 shadow-lg transition-opacity ${typeStyles[toast.type]}`}
          role="alert"
        >
          <span className="text-sm font-medium">{toast.message}</span>
          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            className="ml-2 rounded p-1 opacity-80 hover:opacity-100"
            aria-label="닫기"
          >
            <span className="text-lg leading-none">&times;</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <ToastContextProvider>
      {children}
      <ToastList />
    </ToastContextProvider>
  );
}

export { useToast } from './context';
export type { ToastItem, ToastType, AddToastOptions } from './types';
