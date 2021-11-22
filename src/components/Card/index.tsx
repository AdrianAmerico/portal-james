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
      <CardMenu anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick}/>
      <CardHeader>
        <section className="header-title">
          <h1>Item name</h1>
          <small>Item category</small>
        </section>
      </CardHeader>
      <CardContent>
        <ul>
          <li>
            <span> product code </span>
          </li>
          <li>
            <span>Fabricante product</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <h1>R$25,50</h1>
      </CardFooter>
    </DivStyled>
  )
}
