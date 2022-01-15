import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import './Register.scss'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      validated: false,
      name: '',
      email: '',
      username: '',
      password: '',
    }
  }

  handleClose = () => this.setState({ show: false }) //ẩn form
  handleShow = () => this.setState({ show: true }) //hiện form
  handleRegister = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }

    this.setState({ validated: true })
  }

  render() {
    return (
      <>
        <Button variant='primary' onClick={this.handleShow}>
          Register
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <div className='center mt-32'>
            <img
              src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75'
              alt=''
            />
          </div>
          <Modal.Header className='center'>
            <p className='text-muted center'>
              By signing up, you agree to our <a href='#'>terms</a> &{' '}
              <a href='#'>policy</a>
            </p>
          </Modal.Header>
          <Modal.Body>
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleRegister}
            >
              <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='Name'
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({
                      name: e.target.value,
                    })
                  }}
                />
                <Form.Control.Feedback type='invalid'>
                  Vui lòng điền họ và tên
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type='email'
                  placeholder='email@address.com'
                  value={this.state.email}
                  onChange={(e) => {
                    return this.setState({
                      email: e.target.value,
                    })
                  }}
                />
                <Form.Control.Feedback type='invalid'>
                  {this.state.email
                    ? 'Sai định dạng email'
                    : 'Vui lòng điền email'}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicUserName'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type='text'
                  placeholder='username'
                  value={this.state.username}
                  onChange={(e) => {
                    this.setState({
                      username: e.target.value,
                    })
                  }}
                />
                <Form.Control.Feedback type='invalid'>
                  Vui lòng điền username
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={(e) => {
                    return this.setState({
                      password: e.target.value,
                    })
                  }}
                />
                <Form.Control.Feedback type='invalid'>
                  Vui lòng điền mật khẩu
                </Form.Control.Feedback>
              </Form.Group>

              <div className='d-grid gap-2 pt-15'>
                <Button variant='success bold register' type='submit'>
                  Register
                </Button>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <p className='text-muted justify-between'>
              Already have an account? <a href='#'>Login</a>
            </p>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
