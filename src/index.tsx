import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeContextProvider } from './context/toggleTheme'

ReactDOM.render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
    document.getElementById('root')
)
