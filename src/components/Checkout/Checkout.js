import React, { Component } from 'react'
import './Checkout.scss'

class Checkout extends Component {
  render() {
    return (
      <section className='co-page'>
        <div className='co-container'>
          <div className='co-list'>
            <div className='co-contact'>
              <div className='co-item'>
                <div className='co-item-box'>
                  <span className='item-index'>1</span>
                  <h3 className='item-text'>Contact Number</h3>
                </div>
                <button className='btn item-btn'>
                  <svg
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='w-4 h-4 stroke-2 me-0.5'
                    data-selected='true'
                    data-label-id='0'
                    // data-metatip='true'
                    className='svg-plus'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                    ></path>
                  </svg>
                  Update
                </button>
              </div>
              <div className='co-content'>
                <p className='item-linenumber'>19365141641631</p>
              </div>
            </div>
            <div className='co-shipping-address'>
              <div className='co-item'>
                <div className='co-item-box'>
                  <span className='item-index'>2</span>
                  <h3 className='item-text'>Shipping Address</h3>
                </div>
                <button className='btn item-btn'>
                  <svg
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='w-4 h-4 stroke-2 me-0.5'
                    data-selected='true'
                    data-label-id='0'
                    // data-metatip='true'
                    className='svg-plus'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                    ></path>
                  </svg>
                  Add
                </button>
              </div>
              <div className='co-content h-126'>
                <p className='item-title'>
                  Shipping
                  <button className='add-address'>
                    <svg
                      class='w-3 h-3'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='icon-add'
                    >
                      <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'></path>
                    </svg>
                  </button>
                  <button className='delete-address'>
                    <svg
                      class='w-3 h-3'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='icon-delete'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </p>
                <p className='item-address'>
                  2148 Straford Park, KY, Winchester, 40391, United States
                </p>
              </div>
            </div>
            <div className='co-delivery'>
              <div className='co-item'>
                <div className='co-item-box'>
                  <span className='item-index'>3</span>
                  <h3 className='item-text'>Delivery Schedule</h3>
                </div>
              </div>
              <div className='item-delivery'>
                <div className='co-content h-82 ml-12'>
                  <p className='item-title'>Express Delivery</p>
                  <p className='item-address'>90 min express delivery</p>
                </div>
                <div className='co-content h-82 ml-12'>
                  <p className='item-title'>Morning</p>
                  <p className='item-address'>8:00 AM - 11:00 AM</p>
                </div>
                <div className='co-content h-82 ml-12'>
                  <p className='item-title'>Noon</p>
                  <p className='item-address'>11:00 AM - 2:00 PM</p>
                </div>
                <div className='co-content h-82 ml-12'>
                  <p className='item-title'>Afternoon</p>
                  <p className='item-address'>2:00 PM - 5:00 PM</p>
                </div>
                <div className='co-content h-82 ml-12'>
                  <p className='item-title'>Evening</p>
                  <p className='item-address'>5:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
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
            <button className='btn btn-primary btn-order btn-lg'>
              Place Order
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default Checkout
