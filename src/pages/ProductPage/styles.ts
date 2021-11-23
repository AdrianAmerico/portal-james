import styled from 'styled-components'

export const ProductPageContainer = styled.div`
display: flex;
flex-wrap: wrap;

> section {
    width: 100%;
    text-align: center;
}

@media(max-width: 600px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
}
`
