import { style } from '@vanilla-extract/css';

export const input = style({
  width: '100%',
  borderRadius: '0.375rem',
  border: '1px solid #d1d5db',
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  outline: 'none',
  selectors: {
    '&:focus': {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 1px #3b82f6',
    },
  },
});
