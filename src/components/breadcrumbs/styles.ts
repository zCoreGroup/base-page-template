import spacing from '@/design-tokens/spacing'

export const container = {
  display: 'flex',
  alignItems: 'center',
  textTransform: 'capitalize',
}

export const link = {
  width: 'auto',
  height: '24px',
  flexGrow: 0,
  fontFamily: 'Libre Franklin, sans-serif',
  fontSize: '16px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.5,
  letterSpacing: '0.05px',
  textAlign: 'left',
  textDecoration: 'none',
  marginTop: spacing.spacing.ml,
  marginBottom: spacing.spacing.ml,
  color: 'var(--schemes-on-background)',
}
