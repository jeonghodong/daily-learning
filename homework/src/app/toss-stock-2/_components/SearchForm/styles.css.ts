import { style } from '@vanilla-extract/css';

export const form = style({
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  backgroundColor: 'white',
  padding: '1rem',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1rem',
  '@media': {
    'screen and (min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
  },
});

export const actions = style({
  marginTop: '1rem',
  display: 'flex',
  gap: '0.5rem',
});
