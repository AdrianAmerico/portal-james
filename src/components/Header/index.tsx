import * as React from 'react'
import { Container } from './styles'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import useToggleTheme from '../../hooks/useToggleTheme'

const Header: React.FC = () => {
  const { colors, title } = React.useContext(ThemeContext)
  const { toggleTheme } = useToggleTheme()

  return (
        <Container>
            Hello World
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={true}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={colors.secundary}
            />
        </Container>
  )
}

export default Header
