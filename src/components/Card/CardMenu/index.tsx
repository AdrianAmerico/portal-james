import React from 'react'
// import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { VerticalDot } from '../styles'

interface Props {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}

export const CardMenu = ({ handleClick, anchorEl, handleClose }: Props) => {
  return (
    <React.Fragment>
      <span
        onClick={handleClick}
        style={{ position: 'absolute', top: '3.5%', right: '2.5%' }}
      >
        <VerticalDot>
          <div />
        </VerticalDot>
      </span>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Editar</MenuItem>
        <MenuItem onClick={handleClose}>Excluir</MenuItem>
      </Menu>
    </React.Fragment>
  )
}
