import React from 'react'
import { TextField } from '@material-ui/core'
import { ButtonStyled } from '../../components/Button'
import { SnackBar } from '../../components/SnackBar'
import useForm from '../../hooks/useForm'
import { useAddProductCard } from '../../hooks/useProductCard'
import { FormStyled } from '../HomePage/styles'
import { DivStyled, SpanStyled } from './styles'

const AddProductPage = () => {
  document.title = 'Adicionar Estoque'
  const { body, onChange, clear } = useForm({
    name: '',
    category: '',
    productId: '',
    manufacturer: '',
    productPrice: 0
  })
  const { addProductItem } = useAddProductCard()

  const snackbarRef = React.useRef<any | null>(null)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { name, category, productId, manufacturer, productPrice } = body
    addProductItem(
      { name, category, productId, manufacturer, productPrice },
      clear
    )
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
          required
        />
        <TextField
          variant="outlined"
          label="Categoria"
          onChange={onChange}
          value={body.category}
          name="category"
          required
        />
        <TextField
          variant="outlined"
          label="ID do prduto"
          onChange={onChange}
          value={body.productId}
          name="productId"
          type="number"
          required
        />
        <TextField
          variant="outlined"
          label="Fabricante"
          onChange={onChange}
          value={body.manufacturer}
          name="manufacturer"
          required
        />
        <TextField
          variant="outlined"
          label="Preço"
          onChange={onChange}
          value={body.productPrice}
          name="productPrice"
          type="number"
          required
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
