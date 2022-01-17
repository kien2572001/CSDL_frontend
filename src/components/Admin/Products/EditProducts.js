import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class EditProducts extends Component {
  render() {
    return (
      <Modal
        show={this.props.state.show}
        onHide={this.props.state.handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.state.handleClose}>
            Close
          </Button>
          <Button variant='primary'>Understood</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default EditProducts
