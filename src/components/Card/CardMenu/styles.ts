import styled from 'styled-components'
interface Props {
    isOpen: boolean
}

export const MenuContainer = styled.div`
position: absolute;
right: 10%;
top: 2.5%;
padding: 5px;
z-index: 500;
`
export const Menu = styled.div<Props>`
width: 100px;
color: black;
visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
transition: all 1s ease-in-out;
background: white;
font-size: 0.8rem;
border-radius: 8px;
list-style: none;
font-weight: 500;
li{
    padding: 5px;
}
`

