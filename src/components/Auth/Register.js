import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
// import { connect } from 'react-redux'
// import { push } from 'connected-react-router'
// import * as actions from '../../store/actions'
import './Register.scss'
import 'bootstrap'
import LogoShop from '../../assets/images/PickBazar.png'
// import adminService from '../../services/adminService'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      email: '',
      modal: false,
      validated: false,
      isShowUserOption: false,
      isShowPassword: false,
      err: 4,
      message: '',
    }
  }
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
      message: '',
    })
  }

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
      message: '',
    })
  }

  handleRegister = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    this.setState({ validated: true })
    // let userName = this.state.name
    // let passWord = this.state.password
    // let data = await adminService.login(userName, passWord)
    // console.log(data)
    // if (data.err !== 4) {
    //   this.setState({
    //     err: data.err,
    //     message: data.message,
    //   })
    // } else {
    //   //Thanh cong
    //   this.props.processLogout()
    //   this.props.adminLoginSuccess(data.admin)
    // }
  }

  // componentDidMount() {
  //   this.props.changeAppMode('adminMode')
  // }

  render() {
    //JSX

    return (
      <>
        <div className='login-admin'>
          <div className='login-container'>
            <div className='login-content'>
              <div className='col-12  text-login'>
                <img src={LogoShop} className='login-logo' />
              </div>
              <div className='col-12 text-contentlogin'></div>
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleRegister}
                className='col-12 form-group login-input'
              >
                <Form.Group md='4' controlId='validationCustom01'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Enter you name'
                    defaultValue={this.state.name}
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                  />
                  <Form.Control.Feedback type='invalid'>
                    Name is required !
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group md='4' controlId='validationCustom01'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type='email'
                    placeholder='Enter you email'
                    defaultValue={this.state.email}
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  />
                  <Form.Control.Feedback type='invalid'>
                    {this.state.email
                      ? 'The provided email address format is not valid '
                      : 'You must need to provide your email address'}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group md='4' controlId='validationCustom01'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type='password'
                    placeholder='Enter you password'
                    defaultValue={this.state.password}
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                  <Form.Control.Feedback type='invalid'>
                    Password is required !
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type='submit' className='btn-login btn-login-normal'>
                  Register
                </Button>
              </Form>

              <div className='col-12  login-orther'>
                <span className='text-orther-login '>
                  <span>Or</span>
                </span>
              </div>

              <div className='login-register-user '>
                <span>Already have an account? </span>
                <a>Login</a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     language: state.app.language,
//     isLoggedIn: state.admin.isLoggedIn,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     navigate: (path) => dispatch(push(path)),
//     adminLoginSuccess: (adminInfo) =>
//       dispatch(actions.adminLoginSuccess(adminInfo)),
//     adminLoginFail: () => dispatch(actions.adminLoginFail()),
//     processLogout: () => dispatch(actions.processLogout()),
//     changeAppMode: (payload) => dispatch(actions.changeAppMode(payload)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Register)
export default Register
