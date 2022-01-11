import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ViewProduct from '../Product/ViewProduct';
import { handleLogin } from '../../services/userService'
import 'bootstrap'
import LogoShop from '../../assets/images/Logo.png';
import {
    Link,
    withRouter
  } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            modal: false,
            errMessage: '',
            isShowUserOption: false
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
    handleLoginButton = async () => {
        console.log('username: ', this.state.username, 'password: ', this.state.password)
        //console.log('all stage: ', this.state);
        this.setState({
            errMessage: ''
        })


        try {
            let response = await handleLogin(this.state.username, this.state.password)
            console.log('tra loi: ', response)
            if (response && response.errCode !== 0) {
                this.setState({
                    errMessage: response.errMessage
                })
                //this.props.userLoginFail()
            }
            else if (response && response.errCode === 0) {
                //console.log(response)
                console.log('Check ')
                this.props.userLoginSuccess(response.user)
                console.log('Check')
                this.setState({
                    modal: !this.state.modal
                })
            }
        } catch (e) {
            //console.log(e.response)
            if (e.response) {
                this.setState({
                    errMessage: e.response.message
                })
            }
        }


    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    hanldeShowUserOption = () => {
        this.setState({
            isShowUserOption: !this.state.isShowUserOption
        })
    }

    handleLogoutButton = () => {
        this.props.processLogout()
    }

    render() {
        //JSX
        return (
            <>
                <div >
                    {this.props.isLoggedIn
                        ?
                        <>
                            <div className='dropdown-container'>
                                <div className='dropdown-btn' onClick={() => this.hanldeShowUserOption()}>
                                    <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fplaceholders%2Favatar.2a4ed68cad8ebe21317b04e155b6b245.svg&w=1920&q=75" alt="Avatar" />
                                </div>
                                <div className={this.state.isShowUserOption ? 'dropdown-box' : 'dropdown-box display-none'}>
                                    <div className='dropdown-username'>
                                        Username
                                    </div>
                                    <div className='dropdown-item'>
                                        Profile
                                    </div>
                                    <Link to='/my-order' className='dropdown-item'>
                                        My orders
                                    </Link>
                                    <div className='dropdown-item' onClick={() => this.handleLogoutButton()}>
                                        Logout
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <button
                            type="button"
                            className="btn btn-danger"
                            style={{ width: '50px', height: '30px', fontSize: '14px', backgroundColor: '#009F7F' }}
                            onClick={() => this.handleShowLogin()} >
                            Join
                        </button>}
                    <Modal funk='true' isOpen={this.state.modal} toggle={() => this.handleShowLogin()} className={'abcModalClass'} >
                        <div className='login-background'>
                            <div className='login-container'>
                                <div className='login-content'>
                                    <div className='col-12  text-login'>
                                        <img src={LogoShop} />
                                    </div>
                                    <div className='col-12 text-contentlogin'>
                                        Login with your email &amp; password
                                    </div>


                                    <div className='col-12 form-group login-input'>
                                        <label>
                                            <span>Username</span></label>
                                        <input type='email' className='form-control login-input--text' placeholder='Enter you username'
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
                                        <div className='mt-3' style={{ color: 'red' }}>{this.state.errMessage}</div>
                                    </div>
                                    <button className='btn-login btn-login-normal'
                                        onClick={() => this.handleLoginButton()}
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

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        processLogout: () => dispatch(actions.processLogout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
