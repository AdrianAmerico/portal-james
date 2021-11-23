import React from 'react'
import { Product } from '../../global/types'
import { CardMenu } from './CardMenu'
import {
  Card as DivStyled,
  CardHeader,
  CardContent,
  CardFooter
} from './styles'

interface Props {
  product: Product;
}
export const Card = ({ product }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <DivStyled>
      <CardMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleClick={handleClick}
        item={product}
      />
      <CardHeader>
        <section>
          <h1>{product?.name}</h1>
          <span>{product?.category}</span>
        </section>
      </CardHeader>
      <CardContent>
        <ul>
          <li>
            <h3>{product?.manufacturer}</h3>
          </li>
          <li>
            <p>{product?.productId} </p>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <h1>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(product?.productPrice)
          }
        </h1>
      </CardFooter>
    </DivStyled>
  )
}
