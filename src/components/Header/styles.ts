import styled from 'styled-components'

export const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 999;
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
`

export const SpanStyled = styled.span`
font-size: 1rem;
cursor: pointer;
:hover {
  text-decoration: underline;
}
`
