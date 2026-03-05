import { style } from '@vanilla-extract/css';

export const bar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  backgroundColor: '#f9fafb',
  padding: '0.75rem 1rem',
});

export const label = style({
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#374151',
});

export const hint = style({
  fontSize: '0.875rem',
  color: '#6b7280',
});
