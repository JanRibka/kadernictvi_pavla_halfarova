import createTheme from '@mui/material/styles/createTheme';

// Colors
const palettePrimaryLight = "rgb(61, 61, 61)";
const palettePrimaryMain = "rgb(42, 42, 42)";
const palettePrimaryDark = "rgb(0, 0, 0)";
const paletteSecondaryMain = "rgb(238, 238, 238)";
const paletteSecondaryDark = "rgb(197, 71, 137)";
const paletteTextPrimary = "rgb(238, 238, 238)";
const paletteTextSecondary = "rgb(42, 42, 42)";
const paletteCustomThirdLight = "rgb(184, 103, 33)";
const paletteCustomThirdMain = "rgb(163, 91, 29)";
const paletteCustomThirdDark = "rgb(140, 78, 25)";

// Custom theme
// Colors
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    third: {
      light: string;
      main: string;
      dark: string;
    };
  }
}

// Breakpoints
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
  }
}

// Typography theme
const AppThemeTypography = createTheme({
  typography: {
    // fontFamily: "'Didact Gothic', sans-serif",
  },
});

// Components theme
const AppThemeComponents = createTheme(AppThemeTypography, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

// Breakpoints
// TODO: Breakpoint nefunguje. Opravit
const AppThemeBreakpoints = createTheme(AppThemeComponents, {
  breakpoints: {
    values: {
      xxl: 1921,
    },
  },
});

// Palette theme
const AppThemePalette = createTheme(AppThemeBreakpoints, {
  palette: {
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
    common: {
      third: {
        light: paletteCustomThirdLight,
        main: paletteCustomThirdMain,
        dark: paletteCustomThirdDark,
      },
    },
  },
});

export const AppTheme = createTheme(AppThemePalette, {});
