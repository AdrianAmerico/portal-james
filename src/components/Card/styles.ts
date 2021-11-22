import styled from 'styled-components'

export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.63);
  position: relative;
`

export const CardHeader = styled.div`
  display: flex;
  padding: 15px;
  position: relative;
  h1 {
    color: white;
    font-size: 1.6rem;
    font-weight: lighter;
  }
  small {
    color: grey;
    font-size: 1rem;
  }
`

export const VerticalDot = styled.div`
  position: relative;
  inset: 0;
  transition: all 0.2s ease;
   div {
    width: 1.15rem;
    height: 1.15rem;
    background-image: radial-gradient(circle, white 0.1rem, transparent 0.1rem);
    background-size: 100% 33.33%;
    }
    :hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
    }
`

export const CardContent = styled.section`
  padding: 10px 15px;
  ul {
    list-style: none;
  }
  li {
    display: flex;
    line-height: 1.5;
  }
  span {
    color: white;
  }
`

export const CardFooter = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.8rem !important;
  color: white;
`
