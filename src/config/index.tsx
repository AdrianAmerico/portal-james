import * as React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import { Container, MainStyled } from './styles'

export const AuthRoute = (props: any) => {
  return (
        <Container>
            <Header />
            <MainStyled>
                <Route {...props} />
            </MainStyled>
        </Container>
  )
}

export default AuthRoute
