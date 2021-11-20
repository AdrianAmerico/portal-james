import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import AuthRoute from '../config'
import HomePage from './HomePage'
import ProductPage from './ProductPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/" exact component={HomePage} />
        <AuthRoute path="/produtos" exact component={ProductPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
