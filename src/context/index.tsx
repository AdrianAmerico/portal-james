import React from 'react'
import { DefaultTheme } from 'styled-components'
import { Product } from '../global/types'
import usePersistentState from '../hooks/usePersistentState'
import { dark } from '../styles/themes/dark'
import { light } from '../styles/themes/light'

interface IThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
  message: string;
  type: 'success' | 'fail';
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<'success' | 'fail'>>;
  productList: Product[];
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
}

const GlobalContext = React.createContext<IThemeContextData>(
  {} as IThemeContextData
)

const GlobalContextProvider: React.FC = ({ children }) => {
  const [message, setMessage] = React.useState<string>('')
  const [type, setType] = React.useState<'success' | 'fail'>('success')
  const [productList, setProductList] = React.useState<Product[]>([])
  const [theme, setTheme] = usePersistentState<DefaultTheme>('theme', light)

  function toggleTheme () {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <GlobalContext.Provider
      value={{
        toggleTheme,
        theme,
        message,
        setMessage,
        type,
        setType,
        productList,
        setProductList
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }
