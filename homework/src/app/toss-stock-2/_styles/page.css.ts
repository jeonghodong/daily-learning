import { style } from '@vanilla-extract/css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '1.5rem',
});

export const heading = style({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#111827',
});

export const error = style({
  padding: '1rem',
  color: '#dc2626',
});

export const loadingFallback = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3rem',
  color: '#6b7280',
});
