import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#4c8f5f',
      dark: '#427c53',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#999AAD',
      main: '#6B6C7E',
      dark: '#404152',
      contrastText: '#FFFFFF'
    },
    background: {
      paper: '#fff',
      default: '#fafafa'
    }
  }
})
