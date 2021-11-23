import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { VerticalDot } from '../styles'
import { useAddProductCard } from '../../../hooks/useProductCard'
import { Product } from '../../../global/types'
import { EditItem } from '../EditItem'
import { MenuStyled } from '../../MenuStyled'

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
  const [isOpenEditModal, setIsOpenEditModal] = React.useState(false)
  const { removeProduct } = useAddProductCard()
  const handleOpenEditModal = () => {
    setIsOpenEditModal(true)
  }

  const handleCloseEditModal = () => {
    setIsOpenEditModal(false)
  }

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
      <MenuStyled
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        handleClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <EditItem open={isOpenEditModal} handleOpen={handleOpenEditModal} handleClose={handleCloseEditModal} item={item} setProductList={setProductList}/>
        </MenuItem>
        <MenuItem
          onClick={() => removeProduct(item, productList, setProductList)}
        >
          Excluir
        </MenuItem>
      </MenuStyled>
    </React.Fragment>
  )
}
