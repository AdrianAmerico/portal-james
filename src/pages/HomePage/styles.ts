import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
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
