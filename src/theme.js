import { createTheme } from '@mui/material/styles';
export default createTheme({
  palette: { primary: { main: '#262626', dark: '#000', light: '#1c1b19' }, secondary: { main: '#d98b2b' }, text: { primary: '#1c1b19', secondary: '#57534e' }, background: { default: '#faf7ef' } },
  shape: { borderRadius: 14 },
  typography: { fontFamily: 'Inter, system-ui, sans-serif', button: { textTransform: 'none', fontWeight: 600 } },
  components: { MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { borderRadius: 14, padding: '11px 24px' } } }, MuiTab: { styleOverrides: { root: { fontWeight: 600, fontSize: 15 } } } },
});
