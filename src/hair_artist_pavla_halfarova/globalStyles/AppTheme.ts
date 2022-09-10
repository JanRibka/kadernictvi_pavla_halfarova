import createTheme from '@mui/material/styles/createTheme';

// Colors
const palettePrimaryLight = "rgb(120, 120, 120)";
const palettePrimaryMain = "rgb(64, 64, 64)";
const palettePrimaryDark = "rgb(80, 99, 43)";
const paletteSecondaryMain = "rgb(212, 120, 168)";
const paletteSecondaryDark = "rgb(197, 71, 137)";
const paletteTextPrimary = "rgb(112, 112, 112)";
const paletteTextSecondary = "rgb(212, 120, 168)";

// Base theme
const AppThemeBase = createTheme({
  typography: {},
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          // fontWeight: 700,
          color: "white",
        },
      },
    },
    MuiSpeedDial: {
      styleOverrides: {
        actions: {
          // zIndex: 1051,
        },
      },
    },
  },
});

// App theme
export const AppTheme = createTheme(AppThemeBase, {
  palette: {
    // mode: "light",
    primary: {
      light: palettePrimaryLight,
      main: palettePrimaryMain,
      dark: palettePrimaryDark,
    },
    secondary: {
      main: paletteSecondaryMain,
      dark: paletteSecondaryDark,
    },
    text: {
      primary: paletteTextPrimary,
      secondary: paletteTextSecondary,
    },
  },
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: palettePrimaryMain,
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: paletteTextPrimary,
        },
      },
    },
  },
});
