import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import AuthRoute from '../config'
import HomePage from './HomePage'

const Routes = () => {
  return (
        <BrowserRouter>
            <Switch>
                <AuthRoute path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>
  )
}

export default Routes
