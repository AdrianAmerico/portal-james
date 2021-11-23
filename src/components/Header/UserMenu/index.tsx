import * as React from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import useToggleTheme from '../../../hooks/useToggleTheme'
import { MenuStyled } from '../../MenuStyled'

interface Props {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}

export const UserMenu = ({ handleClose, handleClick, anchorEl }: Props) => {
  const { colors, title } = React.useContext(ThemeContext)
  const { toggleTheme } = useToggleTheme()
  return (
    <div>
      <span onClick={handleClick}>
        <AccountCircleIcon fontSize="large" />
      </span>

      <MenuStyled
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        handleClose={handleClose}
      >
        <MenuItem>
          <strong>Modo Noturno</strong>
        </MenuItem>
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
      </MenuStyled>
    </div>
  )
}
