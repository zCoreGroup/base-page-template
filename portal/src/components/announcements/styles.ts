export const containerStyles = {
    alignSelf: 'stretch',
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
};

export const chip = {
    height: '48px',
    width: '160px',
    color: 'white',
    gap: '8px',
    marginRight: '12px',
    backgroundColor: '#526474',
    flexGrow: 0,
    fontSize: '12px',
    '&:hover': {
        backgroundColor: '#0a1d2b'
    },
    '&:focus': {
        backgroundColor: '#526474'
    }
};

export const title = {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#526474',
    fontSize: '25px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left'
}