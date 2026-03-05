import { style } from '@vanilla-extract/css';

export const base = style({
  borderRadius: '0.375rem',
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  outline: 'none',
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});

export const primary = style([
  base,
  {
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: '#1d4ed8',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px white, 0 0 0 4px #3b82f6',
      },
    },
  },
]);

export const secondary = style([
  base,
  {
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    color: '#374151',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: '#f9fafb',
      },
      '&:focus': {
        boxShadow: '0 0 0 2px white, 0 0 0 4px #3b82f6',
      },
    },
  },
]);
