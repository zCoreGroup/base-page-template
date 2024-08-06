import spacing from '@/design-tokens/spacing'
export const container = {
  backgroundColor: 'white',
  color: 'black',
  paddingRight: spacing.padding.m,
  paddingLeft: spacing.padding.m,
  paddingBottom: spacing.padding.m,
  marginBottom: spacing.spacing.ml,
}
export const logo = {
  height: 80,
  marginRight: 2,
  marginBottom: 3,
}

export const bannerTitle = {
  fontSize: '40px',
  fontWeight: 'bold',
  textAlign: 'left',
  flexGrow: 0,
  marginTop: spacing.spacing.m,
}

export const tagLine = {
  fontFamily: 'IBM Plex Mono',
  fontSize: '16px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  paddingTop: '10px',
  marginBottom: '28px',
}

export const subFields = {
  display: 'flex',
  justifyContent: {
    xs: 'center',
    sm: 'flex-end',
  },
  flexDirection: {
    xs: 'column',
    sm: 'row',
  },
  gap: '12px',
  marginTop: {
    xs: '10px',
    sm: '10px',
    md: '-20px',
    lg: '-20px',
    xl: '-20px',
  },
}

export const bannerSubFieldTitle = {
  fontFamily: 'Roboto',
  fontSize: '14px',
  fontWeight: 600,
  textAlign: 'right',
  color: '#fec526',
}

export const bannerSubFieldText = {
  fontFamily: 'Roboto',
  fontSize: '12px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: 'var(--m-3-white)',
  height: '32px',
  marginTop: '10px',
}

export const bannerSubFieldBox = {
  flexGrow: 1,
}
