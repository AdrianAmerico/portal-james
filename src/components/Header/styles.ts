import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.background_secundary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 999;
  max-height: 90px;
  @media(max-width: 600px){
    padding: 20px 10px;
  }
`
export const NavStyled = styled.nav`
display: flex;
justify-content: center;
align-items: center;
`
export const ImgStyled = styled.img`
  vertical-align: middle;
  display: inline-block;
  height: 100%;
  :hover {
    cursor: pointer;
  }
  @media(max-width: 600px){
    display: none;
    width: 20%;
  }
`
export const ImgMobileStyled = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  padding-right: 5px;
@media(min-width: 600px){
  display: none;
}
`

export const SpanStyled = styled.span`
font-size: 1rem;
cursor: pointer;
padding: 0 5px;
:hover {
  text-decoration: underline;
}
`
