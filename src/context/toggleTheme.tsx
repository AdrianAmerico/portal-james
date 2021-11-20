import React, { createContext } from 'react'
import { DefaultTheme } from 'styled-components'
import usePersistentState from '../hooks/usePersistentState'
import { dark } from '../styles/themes/dark'
import { light } from '../styles/themes/light'

interface IThemeContextData {
    toggleTheme(): void;
    theme: DefaultTheme;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData)

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistentState<DefaultTheme>(
    'theme',
    light
  )

  function toggleTheme () {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
