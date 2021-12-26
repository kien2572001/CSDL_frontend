import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ViewProduct from '../Product/ViewProduct';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            modal: false,
        }
    }
    handleShowLogin = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };
    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        //console.log(event.target.value);

    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        //console.log(event.target.value);

    }
    handleLogin = () => {
        console.log('username: ', this.state.username, 'password: ', this.state.password)
        console.log('all stage: ', this.state);
    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }


    render() {
        //JSX
        return (
            <>

                <div >
                    <Button color="danger" onClick={() => this.handleShowLogin()} className='btn-formLogin'>
                        Join
                    </Button>
                    <Modal funk='true' isOpen={this.state.modal} toggle={() => this.handleShowLogin()} className={'abcModalClass'} >
                        <div className='login-background'>
                            <div className='login-container'>
                                <div className='login-content'>
                                    <div className='col-12  text-login'>PickBazar
                                    </div>
                                    <div className='col-12 text-contentlogin'>
                                        Login with your email &amp; password
                                    </div>


                                    <div className='col-12 form-group login-input'>
                                        <label>
                                            <span>Username</span></label>
                                        <input type='text' className='form-control login-input--text' placeholder='Enter you username'
                                            value={this.state.username}
                                            onChange={(event) => this.handleOnChangeUsername(event)}
                                        />
                                    </div>
                                    <div className='col-12 form-group login-input'>
                                        <label className='login-input-password'>
                                            <span>Password</span>
                                            <span><a className='forgot-password'>Forgot password?</a></span>
                                        </label>
                                        <div className='custom-input-password'>
                                            <input type={this.state.isShowPassword ? 'text' : 'password'} className='form-control login-input--text' placeholder='Enter you password'
                                                value={this.state.password}
                                                onChange={(event) => this.handleOnChangePassword(event)}
                                            />
                                            <span
                                                onClick={() => this.handleShowHidePassword()}
                                            >
                                                <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                            </span>
                                        </div>

                                    </div>
                                    <button className='btn-login btn-login-normal'
                                        onClick={() => this.handleLogin()}
                                    >Login</button>
                                    <div className='col-12'>

                                    </div>
                                    <div className='col-12  login-orther'>
                                        <span className='text-orther-login '>
                                            <span>Or</span>
                                        </span>

                                    </div>
                                    <div className='col-12 social-login'>
                                        <button className='btn-login btn-login--google'>
                                            <i className="fab fa-google social-login-icon"></i>
                                            Login with Google
                                        </button>
                                        <button className='btn-login btn-login--mobile'>
                                            <i className="fas fa-mobile-alt social-login-icon"></i>
                                            Login with Mobile number
                                        </button>
                                    </div>
                                    <div className='col-12  login-line'>

                                    </div>
                                    <div className='login-register-user '>
                                        <span>Don't have any account?</span>
                                        <a>Register</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Modal>
                </div>
                {/*  <ViewProduct />
                <ViewProduct /> */}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
