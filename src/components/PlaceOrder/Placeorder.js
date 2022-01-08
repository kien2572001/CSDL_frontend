import React, { Component } from 'react'
import './PlaceOrder.scss'
import Status from './Status'
import Order from './Order'
import Details from './Details'
import TableItems from './TableItems'
import SubOrder from './SubOrder'
class PlaceOrder extends Component {
  render() {
    return (
      <section className='ph-page'>
        <div className='ph-container'>
          <Status />
          <Order />
          <Details />
          <TableItems />
          <SubOrder />
        </div>
      </section>
    )
  }
}

export default PlaceOrder
