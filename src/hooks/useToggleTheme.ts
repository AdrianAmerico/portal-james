import { useContext } from 'react'
import { GlobalContext } from '../context'

function useToggleTheme () {
  const context = useContext(GlobalContext)
  return context
}

export default useToggleTheme
