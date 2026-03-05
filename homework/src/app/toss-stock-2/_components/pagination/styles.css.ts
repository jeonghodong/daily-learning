import { style } from '@vanilla-extract/css';

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',
  padding: '1rem 0',
});

export const buttonGroup = style({
  display: 'flex',
  gap: '0.25rem',
});

export const button = style({
  borderRadius: '0.375rem',
  border: '1px solid #d1d5db',
  backgroundColor: 'white',
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#374151',
  cursor: 'pointer',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: '#f9fafb',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});

export const buttonActive = style([
  button,
  {
    borderColor: '#2563eb',
    backgroundColor: '#2563eb',
    color: 'white',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: '#1d4ed8',
      },
    },
  },
]);
