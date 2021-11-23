import * as React from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useToggleTheme from '../../../hooks/useToggleTheme'
interface Props {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    anchorEl: HTMLElement | null
    handleClose: () => void
}

export const UserMenu = ({ handleClose, handleClick, anchorEl }: Props) => {
  const { colors, title } = React.useContext(ThemeContext)
  const { toggleTheme } = useToggleTheme()
  return (
        <div>
            <span onClick={handleClick}>
                <AccountCircleIcon fontSize='large' />
            </span>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem><strong>Modo Noturno</strong></MenuItem>
                <MenuItem>
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
                </MenuItem>
            </Menu>
        </div>
  )
}
