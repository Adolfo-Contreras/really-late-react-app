import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#216869',
    },
    goodLightGreen: {
      main: '#9CC5A1',
    },
    darkGreen:{
      main: '#49A078',
    },
    blackish:{
      main: '#1F2421',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;