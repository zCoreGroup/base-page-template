import { createTheme, ThemeOptions } from '@mui/material/styles'
import colors from '@/design-tokens/colors'

declare module '@mui/material/styles' {
  interface Palette {
    footer: Palette['primary']
  }
  interface PaletteOptions {
    footer: PaletteOptions['primary']
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: colors.m3SysLightPrimary,
      light: colors.m3SysLightPrimaryContainer,
      dark: colors.m3SysLightOnPrimary,
      contrastText: colors.m3White,
    },
    secondary: {
      main: colors.m3SysLightSecondary,
      light: colors.m3SysLightSecondaryContainer,
      dark: colors.m3SysLightOnSecondary,
      contrastText: colors.m3White,
    },
    error: {
      main: colors.m3SysLightError,
      light: colors.m3SysLightErrorContainer,
      dark: colors.m3SysLightOnError,
      contrastText: colors.m3White,
    },
    background: {
      default: colors.m3SysLightBackground,
      paper: colors.m3SysLightSurface,
    },
    text: {
      primary: colors.m3SysLightOnSurface,
      secondary: colors.m3SysLightOnSurfaceVariant,
    },
    footer: {
      main: colors.m3SysLightSurfaceContainerHighest,
      dark: colors.m3SysLightOnBackground,
    },
  },
  typography: {
    fontFamily: '"Libre Franklin", "IBM Plex Mono", Arial, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.m3SysLightSurfaceBright,
          height: 72,
          boxShadow: 'none',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: colors.m3SysLightPrimaryContainer,
          color: colors.m3White,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          width: 160,
          color: 'white',
          gap: 8,
          borderRadius: '6px',
          fontSize: '12px',
          // '&:hover': {
          //   backgroundColor: '#425464',
          // },
          '&:focus': {
            backgroundColor: '#526474',
          },
        },
        contained: {
          backgroundColor: colors.m3SysLightPrimaryContainer,
          color: colors.m3White,
        },
        outlined: {
          borderColor: colors.m3SysLightPrimaryContainer,
          color: colors.m3SysLightPrimaryContainer,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.m3SysLightInverseSurface,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: colors.m3SysLightPrimaryContainer,
          height: 48,
          width: 160,
          color: 'white',
          gap: 8,
          borderRadius: '6px',
          fontSize: '12px',
          '&:hover': {
            backgroundColor: '#0a1d2b',
          },
          '&:focus': {
            backgroundColor: '#526474',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
}

const theme = createTheme(themeOptions)

export default theme
