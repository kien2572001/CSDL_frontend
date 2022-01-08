import React, { Component } from 'react'
import NavigatorBar from '../NAV/NavigatorBar'
import Checkout from './Checkout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer)

class CheckoutOrder extends Component {
  render() {
    return (
      <>
        <NavigatorBar />
        <Checkout />
      </>
      //   <Provider store={store}>
      //   </Provider>
    )
  }
}

export default CheckoutOrder
