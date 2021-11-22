import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import AuthRoute from '../config'
import AddProductPage from './AddProductPage'
import HomePage from './HomePage'
import ProductPage from './ProductPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/" exact component={HomePage} />
        <AuthRoute path="/produtos" exact component={ProductPage} />
        <AuthRoute path="/produtos/adicionar" exact component={AddProductPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
