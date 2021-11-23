/* eslint-disable no-unused-vars */
import { createTheme } from '@material-ui/core/styles'
import { DefaultTheme } from 'styled-components'

const selectedTheme = JSON.parse(localStorage.getItem('theme')!) as DefaultTheme

export const theme = createTheme({
  palette: {
    primary: {
      light: selectedTheme.title === 'light' ? '#fff' : '#000',
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
