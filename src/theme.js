import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    allVariants: {
      color: '#f4f4f4',
    },

    h2: {
      fontSize: 36,
      marginBottom: 20,
    },
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#f4f4f4',
    },
    secondary: {
      main: '#3e0d57',
      dark: '#002884',
    },
  },
});
