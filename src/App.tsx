import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import useToggleTheme from './hooks/useToggleTheme'
import Routes from './pages/Routes'

function App () {
  const { theme } = useToggleTheme()

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
