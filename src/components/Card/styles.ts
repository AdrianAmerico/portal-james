import styled from 'styled-components'

export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.63);
  position: relative;
  margin: 10px;
  width: 200px;

  h1, small, h3, li, p, span {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }

  @media(max-width: 600px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`

export const CardHeader = styled.div`
  display: flex;
  padding: 15px;
  position: relative;
  section {
    width: 100%;
  }
  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.6rem;
    font-weight: lighter;
  }
  span {
    display: block;
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
    background-image: radial-gradient(
      circle,
      ${(props) => props.theme.colors.text} 0.1rem,
      transparent 0.1rem
    );
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
    text-align: center;
    align-items: center;
  }
  p {
    color: ${(props) => props.theme.colors.text};
    width: 100%;
  }
  h3 {
    font-weight: 500;
    font-size: 1rem;
    width: 100%;
    padding: 5px;
  }
`

export const CardFooter = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  h1 {
    font-size: 1.5rem;
  }
`
