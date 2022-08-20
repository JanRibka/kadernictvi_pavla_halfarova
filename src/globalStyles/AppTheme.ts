import createTheme from '@mui/material/styles/createTheme';

// Colors
const palettePrimaryMain = "rgb(121, 149, 64)";
const palettePrimaryDark = "rgb(80, 99, 43)";
const paletteSecondaryMain = "rgb(255, 255, 255)";
const paletteTextPrimary = "rgb(112, 112, 112)";
const paletteTextSecondary = "rgb(125, 125, 125)";

// Base theme
const AppThemeBase = createTheme({
  typography: {},
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          // fontWeight: 700,
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
      main: palettePrimaryMain,
      dark: palettePrimaryDark,
    },
    secondary: {
      main: paletteSecondaryMain,
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
