import React from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Button } from '../../Button'
import { Product } from '../../../global/types'
import { DivStyled, useStyles } from './useStyles'
import useForm from '../../../hooks/useForm'
import { useProductCard } from '../../../hooks/useProductCard'
import { ThemeContext } from 'styled-components'
import { Form } from '../../Form'
import { Span } from '../../Typograph'
import { TextInput } from '../../TextInput'
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
  const { colors } = React.useContext(ThemeContext)
  const classes = useStyles(colors)
  const { editProduct } = useProductCard()
  const { body, onChange } = useForm({
    name: item.name,
    category: item.category,
    productId: item.productId,
    manufacturer: item.manufacturer,
    productPrice: item.productPrice
  })

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
          <DivStyled>
            <Form onSubmit={(event) => onSubmit(event)}>
              <TextInput
                label="ID"
                onChange={onChange}
                value={body.productId}
                name="productId"
                disabled
              />
              <TextInput
                label="Nome"
                onChange={onChange}
                value={body.name}
                name="name"
              />
              <TextInput
                label="Categoria"
                onChange={onChange}
                value={body.category}
                name="category"
              />
              <TextInput
                label="Fabricante"
                onChange={onChange}
                value={body.manufacturer}
                name="manufacturer"
              />
              <TextInput
                label="Preço"
                onChange={onChange}
                value={body.productPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}
                name="productPrice"
              />
              <Span>
                <Button>Enviar</Button>
              </Span>
            </Form>
          </DivStyled>
        </Fade>
      </Modal>
    </>
  )
}
