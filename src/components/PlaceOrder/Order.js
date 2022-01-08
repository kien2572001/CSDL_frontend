import React, { Component } from 'react'

export default class Order extends Component {
  render() {
    return (
      <>
        <div className='ph-order'>
          <div className='order-info'>
            <h3 className='info-title'>Order Number</h3>
            <p className='info-content'>KN72GQqD4jJ0</p>
          </div>
          <div className='order-info'>
            <h3 className='info-title'>Date</h3>
            <p className='info-content'>August 26, 2021</p>
          </div>
          <div className='order-info'>
            <h3 className='info-title'>Total</h3>
            <p className='info-content'>$72.03</p>
          </div>
          <div className='order-info'>
            <h3 className='info-title'>Payment Method</h3>
            <p className='info-content'>cod</p>
          </div>
        </div>
      </>
    )
  }
}
