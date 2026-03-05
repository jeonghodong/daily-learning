import { keyframes, style } from '@vanilla-extract/css';

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.5 },
});

export const wrapper = style({
  overflow: 'hidden',
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  backgroundColor: 'white',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  transition: 'opacity 0.15s',
});

export const wrapperStale = style([
  wrapper,
  { opacity: 0.5 },
]);

export const wrapperFresh = style([
  wrapper,
  { opacity: 1 },
]);

export const tableWrap = style({
  overflowX: 'auto',
});

export const table = style({
  minWidth: '100%',
  borderCollapse: 'collapse',
  borderBottom: '1px solid #e5e7eb',
});

export const thead = style({
  backgroundColor: '#f9fafb',
});

export const th = style({
  padding: '0.75rem 1rem',
  textAlign: 'left',
  fontSize: '0.75rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '#4b5563',
});

export const thCheckbox = style([
  th,
  { width: '2.5rem' },
]);

export const tbody = style({
  backgroundColor: 'white',
});

export const tr = style({
  borderBottom: '1px solid #e5e7eb',
  selectors: {
    '&:hover': {
      backgroundColor: '#f9fafb',
    },
  },
});

export const td = style({
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  color: '#111827',
  whiteSpace: 'nowrap',
});

export const tdMuted = style([
  td,
  { color: '#4b5563', fontWeight: 400 },
]);

export const tdMedium = style([
  td,
  { fontWeight: 500 },
]);

export const tdCheckbox = style([
  td,
  { width: '2.5rem' },
]);

export const emptyCell = style({
  padding: '2rem 1rem',
  textAlign: 'center',
  fontSize: '0.875rem',
  color: '#6b7280',
});

export const skeletonRow = style({
  borderBottom: '1px solid #e5e7eb',
});

export const skeletonTd = style({
  padding: '0.75rem 1rem',
});

export const skeletonTdCheckbox = style([
  skeletonTd,
  { width: '2.5rem' },
]);

export const skeletonPulse = style({
  backgroundColor: '#e5e7eb',
  borderRadius: '0.25rem',
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const skeletonPulseSm = style([
  skeletonPulse,
  { height: '1rem', width: '1rem' },
]);

export const skeletonPulseMd = style([
  skeletonPulse,
  { height: '1rem' },
]);

export const skeletonPulseBadge = style([
  skeletonPulse,
  { height: '1.25rem', width: '3.5rem', borderRadius: '9999px' },
]);

export const badgeBase = style({
  display: 'inline-flex',
  borderRadius: '9999px',
  padding: '0.125rem 0.625rem',
  fontSize: '0.75rem',
  fontWeight: 500,
});

export const badgeNormal = style([
  badgeBase,
  { backgroundColor: '#dcfce7', color: '#166534' },
]);

export const badgeSuspended = style([
  badgeBase,
  { backgroundColor: '#fee2e2', color: '#991b1b' },
]);

export const badgeDormant = style([
  badgeBase,
  { backgroundColor: '#f3f4f6', color: '#374151' },
]);
