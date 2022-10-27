import createTheme from '@mui/material/styles/createTheme';

// Colors
const pinkMain = "rgb(229, 46, 113)";
// const palettePrimaryLight = "rgb(16, 16, 16)";
const palettePrimaryMain = "rgb(1, 1, 1)";
const palettePrimaryDark = "rgb(40, 40, 40)";
const paletteSecondaryMain = "rgb(212, 120, 168)";
const paletteSecondaryDark = "rgb(197, 71, 137)";
const paletteTextPrimary = "rgb(112, 112, 112)";
const paletteTextSecondary = "rgb(212, 120, 168)";
const paletteCustomTextPinkMain = pinkMain;
const paletteCustomBackgroundPinkMain = pinkMain;

// Custom theme
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    text: {
      pink: string;
    };
    background: {
      pink: string;
    };
    color: {
      pink: string;
    };
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
        root: {
          fontFamily: "'Teko', sans-serif",
        },
      },
    },
  },
});

// Palette theme
const AppThemePalette = createTheme(AppThemeComponents, {
  palette: {
    primary: {
      // light: palettePrimaryLight,
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
      text: {
        pink: paletteCustomTextPinkMain,
      },
      background: {
        pink: paletteCustomBackgroundPinkMain,
      },
      color: {
        pink: paletteCustomBackgroundPinkMain,
      },
    },
  },
});

export const AppTheme = createTheme(AppThemePalette, {});
