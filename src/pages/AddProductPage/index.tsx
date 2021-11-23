import React from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '../../components/Button'
import { SnackBar } from '../../components/SnackBar'
import useForm from '../../hooks/useForm'
import { useProductCard } from '../../hooks/useProductCard'
import { DivStyled } from './styles'
import { Form } from '../../components/Form'
import { Span } from '../../components/Typograph'

const AddProductPage = () => {
  document.title = 'Adicionar Estoque'
  const { body, onChange, clear } = useForm({
    name: '',
    category: '',
    productId: '',
    manufacturer: '',
    productPrice: 0
  })
  const { addProductItem } = useProductCard()

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
      <Form onSubmit={(event) => onSubmit(event)}>
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
        <Span>
          <Button>Enviar</Button>
        </Span>
      </Form>
      <SnackBar ref={snackbarRef} />
    </DivStyled>
  )
}

export default AddProductPage
