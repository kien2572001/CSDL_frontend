import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChangePassword.scss';
import { Link } from 'react-router-dom'

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowPassword1: false,
            isShowPassword2: false,
            isShowPassword3: false,
        }
    }

    render() {
        let { titleProduct, removeSearchData, checkDropdow } = this.state;
        return (
            <>
                <div className='container__changePassword'>
                    <div className='userLogin'>
                        <div className='user__wallet'>
                            <h3 className='user__wallet-title'>Wallet</h3>
                            <div className='user__wallet-list'>
                                <div className='user__wallet-list-item'>
                                    <span>Total Points</span>
                                    <span>0</span>
                                </div>
                                <div className='user__wallet-list-item'>
                                    <span>Points Used</span>
                                    <span>0</span>
                                </div>
                                <div className='user__wallet-list-item'>
                                    <span>Available Points</span>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                        <div className='user_sidebar'>
                            <ul className='user_sidebar-list'>
                                <li className='user_sidebar-list-item'>

                                    <Link to={'/profile'} className="user_sidebar-list-item-link"><span>Profile</span></Link>
                                </li>
                                <li className='user_sidebar-list-item'>

                                    <Link to={'/change-password'} className="user_sidebar-list-item-link user_sidebar-list-item-link-profile"><span>Change Password</span></Link>

                                </li>
                                <li className='user_sidebar-list-item'>

                                    <Link to={'/my-order'} className="user_sidebar-list-item-link"><span>My Orders</span></Link>
                                </li>
                                <li className='user_sidebar-list-item'>
                                    <a className='user_sidebar-list-item-link'>
                                        My Refunds
                                    </a>
                                </li>
                                <li className='user_sidebar-list-item'>
                                    <a className='user_sidebar-list-item-link'>
                                        Need Help
                                    </a>
                                </li>

                            </ul>
                            <div className='user_sidebar-logout'>
                                <a className='user_sidebar-logout-link'>
                                    Logout
                                </a>

                            </div>

                        </div>
                    </div>


                    <div className='change__password'>
                        <div className='change__password-form'>
                            <h3 className='change__password-title'>Change Password</h3>
                            <div className='change__password-item'>
                                <label className='change__password-item-title' htmlFor='OldPassword'>Old Password</label>
                                <input type={this.state.isShowPassword1 ? 'text' : 'password'} className='change__password-item-input' id='OldPassword<' >
                                </input>
                                <span className='change__password-item-icon'
                                    onClick={() => this.setState({ isShowPassword1: !this.state.isShowPassword1 })}
                                ><i className={this.state.isShowPassword1 ? 'far fa-eye' : 'far fa-eye-slash'}></i> </span>
                            </div>
                            <div className='change__password-item'>
                                <label className='change__password-item-title' htmlFor='NewPassword'>New Password</label>
                                <input type={this.state.isShowPassword2 ? 'text' : 'password'} className='change__password-item-input' id='NewPassword'>
                                </input>
                                <span className='change__password-item-icon'
                                    onClick={() => this.setState({ isShowPassword2: !this.state.isShowPassword2 })}
                                ><i className={this.state.isShowPassword2 ? 'far fa-eye' : 'far fa-eye-slash'}></i> </span>
                            </div>
                            <div className='change__password-item'>
                                <label className='change__password-item-title' htmlFor='ConfirmPassword'>Confirm Password</label>
                                <input type={this.state.isShowPassword3 ? 'text' : 'password'} className='change__password-item-input' id='ConfirmPassword'>
                                </input>
                                <span className='change__password-item-icon'
                                    onClick={() => this.setState({ isShowPassword3: !this.state.isShowPassword3 })}
                                ><i className={this.state.isShowPassword3 ? 'far fa-eye' : 'far fa-eye-slash'}></i> </span>
                            </div>
                            <div className='change__password-btn--right'>
                                <button className='change__password-btn'>Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);