import React, { Component } from 'react'

export default class Details extends Component {
  render() {
    return (
      <>
        <div className='ph-details'>
          <div className='total-amount'>
            <h2 className='detail-heading'>Total Amount</h2>
            <div className='mb-15'>
              <strong className='detail-body'>Sub Total</strong>
              <span className='detail-info pl-62'>$21.60</span>
            </div>
            <div className='mb-15'>
              <strong className='detail-body'>Shipping Charge</strong>
              <span className='detail-info'>$50.00</span>
            </div>
            <div className='mb-15'>
              <strong className='detail-body'>Discount</strong>
              <span className='detail-info pl-64'>$0.00</span>
            </div>
            <div className='mb-15'>
              <strong className='detail-body'>Total</strong>
              <span className='detail-info pl-91'>$71.60</span>
            </div>
          </div>
          <div className='order-details'>
            <h2 className='detail-heading'>Order Details</h2>
            <div className='mb-15'>
              <strong className='detail-body'>Total Item</strong>
              <span className='detail-info pl-40'>6 Items</span>
            </div>
            <div className='mb-15'>
              <strong className='detail-body'>Delivery Time</strong>
              <span className='detail-info'>11:00 AM - 2:00 PM</span>
            </div>
            <div className='mb-15'>
              <strong className='detail-body'>Shipping Address</strong>
              <div className='ship'>
                <span className='detail-address'>
                  2148 Straford Park, KY, Winchester, 40391, United States
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
