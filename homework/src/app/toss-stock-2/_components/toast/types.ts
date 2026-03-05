export type ToastType = 'success' | 'error';

export type ToastItem = {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
};

export type AddToastOptions = {
  message: string;
  type: ToastType;
  duration?: number;
};
