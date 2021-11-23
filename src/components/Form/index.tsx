import styled from 'styled-components'

export const Form = styled.form`
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
