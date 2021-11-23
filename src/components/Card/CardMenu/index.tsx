import React from 'react'
// import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { VerticalDot } from '../styles'
import { useAddProductCard } from '../../../hooks/useProductCard'
import { Product } from '../../../global/types'

interface Props {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  item: Product;
  productList: Product[];
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CardMenu = ({
  handleClick,
  anchorEl,
  handleClose,
  item,
  productList,
  setProductList
}: Props) => {
  const { removeProduct } = useAddProductCard()
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
        <MenuItem
          onClick={() => removeProduct(item, productList, setProductList)}
        >
          Excluir
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
