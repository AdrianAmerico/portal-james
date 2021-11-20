import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body, #root {
    background: ${props => props.theme.colors.background_primary};
    font-size: 12px;
    color: ${props => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
    max-width: 100vw;
    min-height: 100vh;
}
`
