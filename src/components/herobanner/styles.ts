export const container = {
  width: '98%',
  height: 600,
  position: 'relative',
  marginBottom: '24px',
}

export const mainImage = {
  width: '100%',
  height: '98%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  border: '0.5px solid rgba(40, 40, 40, 0.3)',
}

export const textOverlay = {
  position: 'absolute',
  bottom: 30,
  left: 20,
  right: 20,
  backgroundColor: 'rgba(110, 110, 110, 0.4)',
  padding: 5,
  fontFamily: 'Libre Franklin, sans-serif',
}

export const title = {
  fontSize: 15,
  fontWeight: 'bold',
  marginBottom: 2,
  color: 'white',
}

export const heading = {
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
}

export const subheading = {
  fontSize: 12,
  color: 'white',
}

export const imgCaption = {
  fontSize: 9,
  textAlign: 'center',
  color: 'white',
}

export const thumbnailContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: '10%',
  right: '3.5%',
}

export const thumbnailWrapper = {
  textAlign: 'center',
  marginLeft: '7px',
}

export const thumbnailButton = {
  borderWidth: 2,
  borderColor: 'grey',
  cursor: 'pointer',
  position: 'relative',
  width: '75px',
  height: '70px',
  boxSizing: 'border-box',
  border: 'none',
  '&.active': {
    border: '2px solid black',
  },
  borderRadius: '4px',
  boxShadow: '0.5px 0.5px 0.5px 0.5px',
  right: '9%',
}

export const activeThumbnail = {
  borderColor: 'black',
  borderWidth: 2,
}
