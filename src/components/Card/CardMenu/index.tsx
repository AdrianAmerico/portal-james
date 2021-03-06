import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { VerticalDot } from '../styles'
import { useProductCard } from '../../../hooks/useProductCard'
import { Product } from '../../../global/types'
import { EditItem } from '../EditItem'
import { MenuStyled } from '../../MenuStyled'
import { GlobalContext } from '../../../context'

interface Props {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  item: Product;
}

export const CardMenu = ({
  handleClick,
  anchorEl,
  handleClose,
  item
}: Props) => {
  const [isOpenEditModal, setIsOpenEditModal] = React.useState(false)
  const { productList, setProductList } = React.useContext(GlobalContext)
  const { removeProduct } = useProductCard()

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
