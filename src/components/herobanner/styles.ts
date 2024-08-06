export const container = {
  width: '100%',
  height: { xs: 400, sm: 500, md: 600 },
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
  bottom: { xs: 10, sm: 20, md: 30 },
  left: { xs: 10, sm: 15, md: 20 },
  right: { xs: 10, sm: 15, md: 20 },
  backgroundColor: 'rgba(110, 110, 110, 0.4)',
  padding: { xs: 2, sm: 3, md: 4 },
  fontFamily: 'Libre Franklin, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: 1, sm: 2, md: 3 },
}

export const title = {
  fontSize: { xs: 10, sm: 12, md: 14 },
  fontWeight: 'bold',
  color: 'white',
  lineHeight: 1.2,
}

export const heading = {
  fontSize: { xs: 12, sm: 14, md: 16 },
  fontWeight: 'bold',
  color: 'white',
  lineHeight: 1.2,
  marginBottom: { xs: -1, sm: -1, md: -2 },
}

export const subheading = {
  fontSize: { xs: 8, sm: 10, md: 12 },
  color: 'white',
  lineHeight: 1.2,
}

export const thumbnailContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  position: 'absolute',
  bottom: { xs: 15, sm: 20, md: 30 },
  right: { xs: 15, sm: 20, md: 30 },
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
  width: { xs: '40px', sm: '50px', md: '60px' },
  height: { xs: '35px', sm: '45px', md: '55px' },
  boxSizing: 'border-box',
  border: 'none',
  '&.active': {
    border: '2px solid white',
  },
  borderRadius: '4px',
  boxShadow: '0.5px 0.5px 0.5px 0.5px',
}

export const imgCaption = {
  fontSize: { xs: 6, sm: 7, md: 8 },
  textAlign: 'center',
  color: 'white',
  marginTop: { xs: 0.5, sm: 1 },
}

export const activeThumbnail = {
  borderColor: 'white',
  borderWidth: 2,
}
