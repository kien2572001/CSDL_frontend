import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class YourOrder extends Component {
  render() {
    return (
      <div className='co-order'>
        <h4 className='your-order'>Your order</h4>
        <div className='list-order'>
          <div className='list-item'>
            <span>1 x Apples | 1lb</span>
            <span>$1.60</span>
          </div>
        </div>
        <hr />
        <div className='list-order'>
          <div className='item-calc'>
            <span>Sub Total</span>
            <span>$1.60</span>
          </div>
          <div className='item-calc'>
            <span>Shipping</span>
            <span>$0.00</span>
          </div>
        </div>
        <hr />
        <div className='list-order'>
          <div className='item-calc'>
            <h4>Total</h4>
            <h4>$1.60</h4>
          </div>
        </div>
        {/* <button className='btn btn-primary btn-order btn-lg'> */}
        <Link to='/placeorder' className='btn btn-primary link-order btn-lg'>
          Place Order
        </Link>
        {/* </button> */}
      </div>
    )
  }
}
