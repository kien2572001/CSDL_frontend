import React, { Component } from 'react'
import './PlaceOrder.scss'

class PlaceOrder extends Component {
  render() {
    return (
      <section className='ph-page'>
        <div className='ph-container'>
          <div className='ph-status'>
            <div className='status'>
              <h6 className='status-title'>Status: </h6>
              <div className='status-order'>
                <p>Order Received</p>
              </div>
            </div>
            <a href=''>Back to Home</a>
          </div>
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
                <span className='detail-info pl-66'>$0.00</span>
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
          <table className='table bgc-grey'>
            <thead>
              <tr>
                <th className='w-58'>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
          </table>
          <div className='ph-items overflow-auto'>
            <table className='table table-borderless'>
              <tbody>
                <tr>
                  <td>
                    <div className='list-items'>
                      <img
                        src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fconversions%2Fclementines-thumbnail.jpg&w=1920&q=75'
                        alt=''
                      />
                      <div className='item-info'>
                        <span className='item-name'>
                          Clementines x <span className='item-unit'>1lb</span>
                        </span>
                        <span className='item-price'>$2.50</span>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td className='text-center'>$2.50</td>
                </tr>
                <tr>
                  <td>
                    <div className='list-items'>
                      <img
                        src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fconversions%2Fclementines-thumbnail.jpg&w=1920&q=75'
                        alt=''
                      />
                      <div className='item-info'>
                        <span className='item-name'>
                          Clementines x <span className='item-unit'>1lb</span>
                        </span>
                        <span className='item-price'>$2.50</span>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td className='text-center'>$2.50</td>
                </tr>
                <tr>
                  <td>
                    <div className='list-items'>
                      <img
                        src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fconversions%2Fclementines-thumbnail.jpg&w=1920&q=75'
                        alt=''
                      />
                      <div className='item-info'>
                        <span className='item-name'>
                          Clementines x <span className='item-unit'>1lb</span>
                        </span>
                        <span className='item-price'>$2.50</span>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td className='text-center'>$2.50</td>
                </tr>
                <tr>
                  <td>
                    <div className='list-items'>
                      <img
                        src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fconversions%2Fclementines-thumbnail.jpg&w=1920&q=75'
                        alt=''
                      />
                      <div className='item-info'>
                        <span className='item-name'>
                          Clementines x <span className='item-unit'>1lb</span>
                        </span>
                        <span className='item-price'>$2.50</span>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td className='text-center'>$2.50</td>
                </tr>
                <tr>
                  <td>
                    <div className='list-items'>
                      <img
                        src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fconversions%2Fclementines-thumbnail.jpg&w=1920&q=75'
                        alt=''
                      />
                      <div className='item-info'>
                        <span className='item-name'>
                          Clementines x <span className='item-unit'>1lb</span>
                        </span>
                        <span className='item-price'>$2.50</span>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td className='text-center'>$2.50</td>
                </tr>
                <tr>
                  <td>
                    <div className='list-items'>
                      <img
                        src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fconversions%2Fclementines-thumbnail.jpg&w=1920&q=75'
                        alt=''
                      />
                      <div className='item-info'>
                        <span className='item-name'>
                          Clementines x <span className='item-unit'>1lb</span>
                        </span>
                        <span className='item-price'>$2.50</span>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td className='text-center'>$2.50</td>
                </tr>
                <tr>
                  <td>
                    <div className='list-items'>
                      <img
                        src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fconversions%2Fclementines-thumbnail.jpg&w=1920&q=75'
                        alt=''
                      />
                      <div className='item-info'>
                        <span className='item-name'>
                          Clementines x <span className='item-unit'>1lb</span>
                        </span>
                        <span className='item-price'>$2.50</span>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td className='text-center'>$2.50</td>
                </tr>
                <tr>
                  <td>
                    <div className='list-items'>
                      <img
                        src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fconversions%2Fclementines-thumbnail.jpg&w=1920&q=75'
                        alt=''
                      />
                      <div className='item-info'>
                        <span className='item-name'>
                          Clementines x <span className='item-unit'>1lb</span>
                        </span>
                        <span className='item-price'>$2.50</span>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td className='text-center'>$2.50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='ph-sub-orders'>
            <h2 className='detail-heading'>Sub Order</h2>
            <div className='box-note'>
              <div className='box-icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20.894'
                  height='16'
                  viewBox='0 0 20.894 16'
                  class='w-2 h-2 text-light flex-shrink-0'
                  className='checkbox-icon'
                >
                  <path
                    data-name='_ionicons_svg_ios-checkmark (3)'
                    d='M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z'
                    transform='translate(-148.4 -173.6)'
                    fill='currentColor'
                  ></path>
                </svg>
              </div>
              <p className='note-content'>
                <h6>Note</h6>: This order has products from multiple vendors. So
                we divided this order into multiple vendor orders
              </p>
            </div>
            <table className='table bgc-grey'>
              <thead>
                <tr>
                  <th className='w-25'>Tracking Number</th>
                  <th className='w-21'>Date</th>
                  <th className='w-22'>Status</th>
                  <th className='w-9'>Item</th>
                  <th>Total Price</th>
                  <th></th>
                </tr>
              </thead>
            </table>
            <div className='ph-sub overflow-auto'>
              <table className='table table-borderless'>
                <tbody>
                  <tr>
                    <td>bVH8G97r6wSC</td>
                    <td>January 6, 2022</td>
                    <td>
                      <div className='status-order'>
                        <p>Order Received</p>
                      </div>
                    </td>
                    <td>6 Items</td>
                    <td>$21.60</td>
                    <td>
                      <button className='btn btn-dark btn-custom'>View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default PlaceOrder
