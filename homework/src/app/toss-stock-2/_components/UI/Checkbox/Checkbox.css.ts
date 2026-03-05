import { style } from '@vanilla-extract/css';

export const input = style({
  height: '1rem',
  width: '1rem',
  borderRadius: '0.25rem',
  borderColor: '#d1d5db',
  color: '#2563eb',
  outline: 'none',
  selectors: {
    '&:focus': {
      boxShadow: '0 0 0 1px #3b82f6',
    },
  },
});
