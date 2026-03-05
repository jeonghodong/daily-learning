import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  right: '1rem',
  top: '1rem',
  zIndex: 50,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const itemBase = style({
  display: 'flex',
  minWidth: 280,
  maxWidth: '28rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '0.5rem',
  padding: '0.75rem 1rem',
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
});

export const itemSuccess = style([
  itemBase,
  {
    backgroundColor: '#16a34a',
    color: 'white',
  },
]);

export const itemError = style([
  itemBase,
  {
    backgroundColor: '#dc2626',
    color: 'white',
  },
]);

export const message = style({
  fontSize: '0.875rem',
  fontWeight: 500,
});

export const closeButton = style({
  marginLeft: '0.5rem',
  padding: '0.25rem',
  borderRadius: '0.25rem',
  opacity: 0.8,
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
  color: 'inherit',
  selectors: {
    '&:hover': {
      opacity: 1,
    },
  },
});

export const closeIcon = style({
  fontSize: '1.125rem',
  lineHeight: 1,
});
