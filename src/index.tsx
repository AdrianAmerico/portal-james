import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from '@material-ui/styles'
import { ThemeContextProvider } from './context/toggleTheme'
import { theme } from './styles/materialTheme'

ReactDOM.render(
  <ThemeContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ThemeContextProvider>,
  document.getElementById('root')
)
