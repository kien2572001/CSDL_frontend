import React, { Component } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap'
import { handleGetProductByCategory } from '../../services/productService'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      phoneNumber: '',
    }
  }
  render() {
    return (
      <>
        <div className='co-contact'>
          <div className='co-item'>
            <div className='co-item-box'>
              <span className='item-index'>1</span>
              <h3 className='item-text'>Contact Number</h3>
            </div>
            <button
              className='btn item-btn'
              type='button'
              onClick={() => this.setState({ modal: true })}
            >
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
          <div className='co-content active'>
            <p className='item-linenumber'>19365141641631</p>
          </div>
        </div>
        <Modal
          toggle={() => this.setState({ modal: !this.state.modal })}
          isOpen={this.state.modal}
          centered
          className='contact-modal'
        >
          <ModalHeader className='contact-modal-header'>
            <h6 className='contact-modal-title'>Update Contact Number</h6>
          </ModalHeader>
          <ModalBody className='contact-modal-body'>
            <FormGroup>
              <InputGroup>
                <InputGroupText>+84</InputGroupText>
                <Input
                  type='number'
                  value={this.state.phoneNumber}
                  onChange={(e) =>
                    this.setState({ phoneNumber: e.target.value })
                  }
                />
                <Button color='success btn-custom h-auto'>SEND OTP</Button>
              </InputGroup>
            </FormGroup>
          </ModalBody>
        </Modal>
      </>
    )
  }
}
