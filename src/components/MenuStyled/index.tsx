import React from 'react'
import { Menu } from '@material-ui/core'
import { ThemeContext } from 'styled-components'
import { useStyles } from './styles'

interface Props {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

export const MenuStyled: React.FC<Props> = ({
  children,
  anchorEl,
  open,
  handleClose
}) => {
  const { colors } = React.useContext(ThemeContext)
  const classes = useStyles(colors)
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      className={classes.root}
    >
      {children}
    </Menu>
  )
}
