export const container = {
  width: '100%',
  height: '1000px',
  position: 'relative',
  marginBottom: '24px',
}

export const mainImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  border: '0.5px solid rgba(40, 40, 40, 0.3)',
}

export const textOverlay = {
  position: 'absolute',
  height: { xs: 100, sm: 139, md: 239 },
  bottom: { xs: 10, sm: 20, md: 30 },
  left: { xs: 10, sm: 15, md: 20 },
  right: { xs: 10, sm: 15, md: 20 },
  backgroundColor: 'rgba(67, 72, 81, 0.4)',
  padding: { xs: 2, sm: 3, md: 4 },
  fontFamily: 'Libre Franklin, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: 1, sm: 2, md: 4 },
}

export const title = {
  fontSize: { xs: 10, sm: 12, md: 14 },
  fontWeight: 'bold',
  color: 'surfaceVariant',
  lineHeight: 1.2,
}

export const heading = {
  fontSize: { xs: 12, sm: 16, md: 24 },
  fontWeight: 'bold',
  lineHeight: 1.2,
  marginBottom: { xs: -1, sm: -1, md: -2 },
}

export const subheading = {
  fontSize: { xs: 8, sm: 10, md: 12 },
  lineHeight: 1.2,
}

export const thumbnailContainer = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  position: 'absolute',
  bottom: { xs: 15, sm: 20, md: 50 },
  right: { xs: 25, sm: 30, md: 50 },
  maxWidth: { xs: '100%', sm: '80%', md: '60%' },
  gap: { xs: 1, sm: 2 },
}

export const thumbnailWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: { xs: 1, sm: 2 },
}

export const thumbnailButton = {
  cursor: 'pointer',
  position: 'relative',
  width: { xs: '40px', sm: '50px', md: '100px' },
  height: { xs: '35px', sm: '45px', md: '100px' },
  boxSizing: 'border-box',
  border: 'solid 1px var(--m-3-black)',
  '&.active': {
    border: '1px solid white',
  },
  borderRadius: '4px',
  gap: '50px',
  boxShadow: '0.5px 0.5px 0.5px 0.5px',
}

export const imgCaption = {
  fontSize: { xs: 6, sm: 8, md: 12 },
  textAlign: 'center',
  fontFamily: 'IBMPlexMono',
  color: 'var(--m-3-black)',
  marginTop: { xs: 0.5, sm: 1 },
}

export const activeThumbnail = {
  borderColor: 'white',
  borderWidth: 2,
}
