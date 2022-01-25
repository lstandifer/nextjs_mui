import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#E30613',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#f50057',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {},
      },
      styleOverrides: `
      *{
        box-sizing: border-box;
      }
      html,
      body {
        height: 100vh;
        width: calc(100vw - (100vw - 100%));;
      }
      #__next {
        height: 100vh;
        width: 100%;
      }
     `,
    },
  },
});

export default theme;
