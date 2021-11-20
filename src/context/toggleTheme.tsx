import React, { createContext } from 'react'
import { DefaultTheme } from 'styled-components'
import usePersistentState from '../hooks/usePersistentState'
import { dark } from '../styles/themes/dark'
import { light } from '../styles/themes/light'

interface IThemeContextData {
    toggleTheme(): void;
    theme: DefaultTheme;
    message: string
    type: 'success' | 'fail'
    setMessage: React.Dispatch<React.SetStateAction<string>>
    setType: React.Dispatch<React.SetStateAction<'success' | 'fail'>>
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData)

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistentState<DefaultTheme>(
    'theme',
    light
  )
  const [message, setMessage] = React.useState<string>('')
  const [type, setType] = React.useState<'success' | 'fail'>('success')

  function toggleTheme () {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
        <ThemeContext.Provider value={{ toggleTheme, theme, message, setMessage, type, setType }}>
            {children}
        </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
