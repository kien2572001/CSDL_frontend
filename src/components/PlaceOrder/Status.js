import React, { Component } from 'react'

export default class Status extends Component {
  render() {
    return (
      <>
        <div className='ph-status'>
          <div className='status'>
            <h6 className='status-title'>Status: </h6>
            <div className='status-order'>
              <p>Order Received</p>
            </div>
          </div>
          <a href=''>Back to Home</a>
        </div>
      </>
    )
  }
}
