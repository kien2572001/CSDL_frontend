import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditProducts from './EditProducts'
import ProductsContainer from './ProductsContainer'

class Products extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/admin'>
            <ProductsContainer />
          </Route>
          <Route exact path='/admin/product/:id'>
            <EditProducts />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default Products
