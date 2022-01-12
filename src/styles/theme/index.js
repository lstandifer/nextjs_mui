import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
// const baseTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#556cd6',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//     error: {
//       main: red.A400,
//     },
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     primary: {
//       mode: 'dark',
//       main: '#556cd6',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//     error: {
//       main: red.A400,
//     },
//   },
// });

// const lightTheme = createTheme({
//   palette: {
//     primary: {
//       mode: 'light',
//       main: '#556cd6',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//     error: {
//       main: red.A400,
//     },
//   },
// });

const theme = createTheme({
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});

const darkTheme = createTheme({
  ...theme,
  palette: {
    type: 'dark',
    primary: {
      main: '#26a27b',
    },
    secondary: {
      main: '#fafafa',
    },
  },
});

const lightTheme = createTheme({
  ...theme,
  palette: {
    type: 'light',
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#26a27b',
    },
  },
});

const finalTheme = createTheme({
  ...theme,
  ...darkTheme,
});

export { darkTheme, lightTheme };

export default finalTheme;
