import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
const Typograph = styled.span`
  color: #00d0b3;
  font-family: "Poppins", Sans-serif;
  letter-spacing: -0.5px;
`
export const TypographH1 = styled(Typograph)`
  font-size: 42px;
  font-weight: 800;
  line-height: 58px;
`
export const TypographH2 = styled(Typograph)`
  font-size: 30px;
  font-weight: 600;
`

export const SectionStyled = styled.section`
  display: flex;
  @media(max-width: 950px){
      flex-direction: column;
  }
`

export const DivLeftSide = styled.div`
  flex: 1;
  padding: 10px;
`

export const DivRightSide = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
`
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  label, input {
      color: ${props => props.theme.colors.text};
  }
  > div {
      margin: 5px 0;
  }
@media(min-width: 950px){
    justify-content: space-between;
}
`
export const TypographP = styled.p`
  line-height: 1.5;
  font-size: 1rem;
`

export const ButtonStyled = styled.button`
      margin: 10px 0;
      background-color: #61CE70;
      color: ${props => props.theme.colors.text};
      padding: 15px 10px;
      border: none;
      border-radius: 8px;
      :hover {
        cursor: pointer;
      }
`
