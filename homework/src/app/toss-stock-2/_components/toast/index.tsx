'use client';

import { ToastContextProvider, useToast } from './context';
import type { ToastType } from './types';
import * as styles from './styles.css';

const itemStyles: Record<ToastType, string> = {
  success: styles.itemSuccess,
  error: styles.itemError,
};

function ToastList() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      className={styles.container}
      role="region"
      aria-label="알림"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={itemStyles[toast.type]}
          role="alert"
        >
          <span className={styles.message}>{toast.message}</span>
          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            className={styles.closeButton}
            aria-label="닫기"
          >
            <span className={styles.closeIcon}>&times;</span>
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
