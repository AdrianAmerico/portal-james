import React from 'react'
import { CardMenu } from './CardMenu'
import {
  Card as DivStyled,
  CardHeader,
  CardContent,
  CardFooter
} from './styles'

export const Card = () => {
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
      />
      <CardHeader>
        <section className="header-title">
          <h1>product name</h1>
          <small>product category</small>
        </section>
      </CardHeader>
      <CardContent>
        <ul>
          <li>
            <h3>fornecedor name</h3>
          </li>
          <li>
            <p> product code </p>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <h1>R$25,50</h1>
      </CardFooter>
    </DivStyled>
  )
}
