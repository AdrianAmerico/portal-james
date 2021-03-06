import * as React from 'react'
import { HeaderStyled, ImgStyled, SpanStyled, NavStyled, ImgMobileStyled } from './styles'
import { LOGO } from '../../constants'
import { UserMenu } from './UserMenu'
import { useHistory } from 'react-router-dom'

const Header: React.FC = () => {
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <HeaderStyled>
      <NavStyled>
        <ImgStyled src={LOGO.URL} alt={LOGO.ALT} onClick={() => history.push('/')} />
        <ImgMobileStyled src={LOGO.MOBILE} alt={LOGO.ALT} onClick={() => history.push('/')}/>
        <SpanStyled onClick={() => history.push('/produtos')}>Estoque</SpanStyled>
        <SpanStyled onClick={() => history.push('/produtos/adicionar')}>Adicionar Produtos</SpanStyled>
      </NavStyled>
      <UserMenu handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} />
    </HeaderStyled>
  )
}

export default Header
