import * as React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import { MainStyled } from './styles'

export const AuthRoute = (props: any) => {
  return (
        <div style={{ height: '100%', position: 'absolute', inset: 0 }}>
            <Header />
            <MainStyled>
                <Route {...props} />
            </MainStyled>
        </div>
  )
}

export default AuthRoute
