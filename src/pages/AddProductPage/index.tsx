/* eslint-disable no-unused-vars */
import { TextField } from '@material-ui/core'
import React from 'react'
import { ButtonStyled } from '../../components/Button'
import { SnackBar } from '../../components/SnackBar'
import useForm from '../../hooks/useForm'
import { useAddProductCard } from '../../hooks/useProductCard'
import { FormStyled } from '../HomePage/styles'
import { DivStyled, SpanStyled } from './styles'

const AddProductPage = () => {
  const { body, onChange, clear } = useForm({
    name: '',
    category: '',
    productId: '',
    manufacturer: '',
    productPrice: ''
  })
  const { addProductItem } = useAddProductCard()

  const snackbarRef = React.useRef<any | null>(null)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { name, category, productId, manufacturer, productPrice } = body
    addProductItem({ name, category, productId, manufacturer, productPrice }, clear)
    snackbarRef.current.show()
  }

  return (
    <DivStyled>
      <h1>Cadastro de produtos</h1>
      <FormStyled onSubmit={(event) => onSubmit(event)}>
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
          label="ID do prduto"
          onChange={onChange}
          value={body.productId}
          name="productId"
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
          value={body.productPrice}
          name="productPrice"
        />
        <SpanStyled>
          <ButtonStyled>Enviar</ButtonStyled>
        </SpanStyled>
      </FormStyled>
      <SnackBar ref={snackbarRef} />
    </DivStyled>
  )
}

export default AddProductPage
