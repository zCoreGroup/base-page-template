 import { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
};

export const link: SxProps<Theme> = {
    width: 'auto',
    height: '24px',
    flexGrow: 0,
    fontFamily: 'PublicSans',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: '0.15px',
    textAlign: 'left',
    color: '#1b1c1d',
    textDecoration: 'none',
};

export const slash: SxProps<Theme> = {
    width: '7px',
    height: '24px',
    flexGrow: 0,
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: '0.15px',
    textAlign: 'left',
    color: '#1b1c1d',
    margin: '0 4px',
};

export const starFilled: SxProps<Theme> = {
    alignSelf: 'stretch',
    flexGrow: 1,
    objectFit: 'contain',
    marginRight: '8px',
};