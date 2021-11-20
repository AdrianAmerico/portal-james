import * as React from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useToggleTheme from '../../../hooks/useToggleTheme'
import { useStyles } from './styles'
interface Props {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    anchorEl: HTMLElement | null
    handleClose: () => void
}

export const UserMenu = ({ handleClose, handleClick, anchorEl }: Props) => {
  const { colors, title } = React.useContext(ThemeContext)
  const { toggleTheme } = useToggleTheme()
  const classes = useStyles()
  return (
        <div className={classes.root}>
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
                <MenuItem onClick={handleClose}>Meu perfil</MenuItem>
                <MenuItem onClick={handleClose}>Configurações</MenuItem>
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
