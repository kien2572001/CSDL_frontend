import React, { Component } from 'react'

export default class SubOrder extends Component {
  render() {
    return (
      <>
        <div className='ph-sub-orders'>
          <h2 className='detail-heading'>Sub Order</h2>
          <div className='box-note'>
            <div className='box-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20.894'
                height='16'
                viewBox='0 0 20.894 16'
                className='w-2 h-2 text-light flex-shrink-0'
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
              <span className='note-bold'>Note</span>: This order has products
              from multiple vendors. So we divided this order into multiple
              vendor orders
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
      </>
    )
  }
}
