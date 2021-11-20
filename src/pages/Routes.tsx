import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'

const Routes = () => {
  return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>
  )
}

export default Routes
