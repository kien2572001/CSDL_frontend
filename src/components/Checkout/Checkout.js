import React, { Component } from 'react'
import './Checkout.scss'
import Contact from './Contact'
import Shipping from './Shipping'
import Delivery from './Delivery'
import YourOrder from './YourOrder'
class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
  }

  render() {
    return (
      <section className='co-page'>
        <div className='co-container'>
          <div className='co-list'>
            <Contact />
            <Shipping />
            <Delivery />
          </div>
          <YourOrder />
        </div>
      </section>
    )
  }
}

export default Checkout
