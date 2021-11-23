import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from '@material-ui/styles'
import { GlobalContextProvider } from './context'
import { theme } from './styles/materialTheme'

ReactDOM.render(
  <React.StrictMode>
  <GlobalContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
