import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6b00',
      contrastText: '#fff',
    },
    secondary: {
      main: '#111111',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans KR", "Helvetica", "Arial", sans-serif',
  },
  spacing: 8,
});

export default theme;
