import React from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { TextField } from '@material-ui/core'
import { FormStyled } from '../../../pages/HomePage/styles'
import { ButtonStyled } from '../../Button'
import { SpanStyled } from '../../../pages/AddProductPage/styles'
import { Product } from '../../../global/types'
import { useStyles } from './useStyles'
import useForm from '../../../hooks/useForm'
import { useAddProductCard } from '../../../hooks/useProductCard'

interface Props {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  item: Product;
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const EditItem = ({
  open,
  handleOpen,
  handleClose,
  item,
  setProductList
}: Props) => {
  const classes = useStyles()
  const { editProduct } = useAddProductCard()
  const { body, onChange } = useForm({
    name: item.name,
    category: item.category,
    productId: item.productId,
    manufacturer: item.manufacturer,
    productPrice: item.productPrice
  })

  React.useEffect(() => {
    console.log(item)
  }, [])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    editProduct(body, setProductList)
    handleClose()
  }

  return (
    <>
      <span onClick={handleOpen}>Editar</span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <FormStyled onSubmit={(event) => onSubmit(event)}>
              <TextField
                variant="outlined"
                label="ID do prduto"
                onChange={onChange}
                value={body.productId}
                name="productId"
                disabled
              />
              <TextField
                variant="outlined"
                label="Nome"
                onChange={onChange}
                value={body.name}
                name="name"
              />
              <TextField
                variant="outlined"
                label="Categoria"
                onChange={onChange}
                value={body.category}
                name="category"
              />
              <TextField
                variant="outlined"
                label="Fabricante"
                onChange={onChange}
                value={body.manufacturer}
                name="manufacturer"
              />
              <TextField
                variant="outlined"
                label="Preço"
                onChange={onChange}
                value={body.productPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}
                name="productPrice"
              />
              <SpanStyled>
                <ButtonStyled>Enviar</ButtonStyled>
              </SpanStyled>
            </FormStyled>
          </div>
        </Fade>
      </Modal>
    </>
  )
}
