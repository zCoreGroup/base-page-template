import {createTheme, ThemeOptions} from "@mui/material/styles";
import colors from "@/designtokens/colors";

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
  },
  typography: {
    fontFamily: 'LibreFranklin, IBM Plex Mono, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
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
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
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
          borderRadius: 16,
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