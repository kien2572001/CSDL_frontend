import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.scss';
import { Link } from 'react-router-dom'
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

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalContact: false,
            modalAddress: false,

        }
    }

    render() {
        let { titleProduct, removeSearchData, checkDropdow } = this.state;
        console.log(">>check ", this.state.modalContact)
        return (
            <>
                <div className='container__profile'>
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

                                    <Link to={'/profile'} className="user_sidebar-list-item-link user_sidebar-list-item-link-profile"><span>Profile</span></Link>
                                </li>
                                <li className='user_sidebar-list-item'>

                                    <Link to={'/change-password'} className="user_sidebar-list-item-link "><span>Change Password</span></Link>

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

                    <div className='userLogin__profile'>
                        <div className='profile__infor'>

                            <div className='profile__infor-avatar'>
                                <label htmlFor="avatar" className='profile__infor-avatar-title'>
                                    <i className="fas fa-cloud-upload-alt avatar_upload-icon"></i>
                                    <br />
                                    <span className='avatar-title-bold'>UpLoad an image</span>
                                    &nbsp; or drag and drop
                                    <br></br>
                                    <span>PNG, JPG</span>
                                </label>

                                <input type="file"
                                    id="avatar" name="avatar"
                                    accept="image/png, image/jpeg"
                                    className='profile__infor-avatar-input'
                                />
                            </div>
                            <div className='profile__infor-form'>
                                <label className='profile__infor-title' htmlFor='profile__infor-name'>Name</label>
                                <input className='profile__infor-input' id='profile__infor-name'></input>
                            </div>
                            <div className='profile__infor-form'>
                                <label className='profile__infor-title' htmlFor='profile__infor-bio'>Bio</label>
                                <textarea className='profile__infor-text' id='profile__infor-bio'></textarea>
                            </div>
                            <div className='profile__infor-btn'>
                                <button className='profile__infor-btn--save'>Save</button>
                            </div>
                        </div>
                        <div className='profile__contact'>
                            <div className='profile__contact-header'>
                                <span className='profile__contact-header-title'>Contact Number</span>
                                <button className='profile__contact-header-btn'
                                    onClick={() => this.setState({ modalContact: !this.state.modalContact })}
                                >+ Update</button>

                            </div>
                            <div className='profile__contact-phone'>
                                <span>19365141641631</span>
                            </div>

                        </div>
                        <div className='profile__contact'>
                            <div className='profile__contact-header'>
                                <span className='profile__contact-header-title'>Addresses</span>
                                <button className='profile__contact-header-btn'
                                    onClick={() => this.setState({ modalAddress: !this.state.modalAddress })}

                                >+ Add</button>

                            </div>
                            <div className='profile__address'>
                                <div className='profile__address-bill'>
                                    <p className='profile__address-title'>Billing</p>
                                    <p className='profile__address-content'>2231 Kidd Avenue, AK, Kipnuk, 99614, United States</p>
                                </div>
                                <div className='profile__address-bill'>
                                    <p className='profile__address-title'>Billing</p>
                                    <p className='profile__address-content'>2231 Kidd Avenue, AK, Kipnuk, 99614, United States</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <Modal
                    toggle={() => this.setState({ modalContact: !this.state.modalContact })}
                    isOpen={this.state.modalContact}
                    centered
                    className='contact-modal'
                >
                    <div className='profile__update-contact'>
                        <p className='profile__update-contact-title'>Add New Contact Number</p>
                        <div className='profile__update-contacts'>
                            <input type='tel' className='profile__update-contact-input'></input>
                            <button className='profile__update-contact-btn'>Send OTP</button>
                        </div>

                    </div>
                </Modal>
                <Modal
                    toggle={() => this.setState({ modalAddress: !this.state.modalAddress })}
                    isOpen={this.state.modalAddress}
                    centered
                    className='address-modal'
                >
                    <form className='form__address'>
                        <h3 className='form__address-title'>Add New Address</h3>
                        <div className='form__address-radio'>
                            <p className='form__address-radio-title'>Type</p>
                            <div className='form__address-radio-group'>
                                <input type='radio' name='address-radio-type' id="Billing" />
                                <label className='address-radio-type-label' htmlFor='Billing'>Billing</label>

                                <input type='radio' name='address-radio-type' id="Shipping" />
                                <label className='address-radio-type-label' htmlFor='Shipping'>Shipping</label>
                            </div>

                        </div>

                        <div className='form__address-item'>
                            <label className='form__address-item-title'>Title</label>
                            <input className='form__address-item-input' />
                        </div>
                        <div className='form__address-group' >

                            <div className='form__address-item'>
                                <label className='form__address-item-title'>Country</label>
                                <input className='form__address-item-input' />
                            </div>
                            <div className='form__address-item'>
                                <label className='form__address-item-title'>City</label>
                                <input className='form__address-item-input' />
                            </div>
                        </div>


                        <div className='form__address-group' >
                            <div className='form__address-item'>
                                <label className='form__address-item-title'>State</label>
                                <input className='form__address-item-input' />
                            </div>
                            <div className='form__address-item'>
                                <label className='form__address-item-title'>Zip</label>
                                <input className='form__address-item-input' />
                            </div>

                        </div>

                        <div className='form__address-item'>
                            <label className='form__address-item-title'>Street Address</label>
                            <textarea className='form__address-item-text'></textarea>
                        </div>
                        <button className='form__address-btn'>Save Address</button>
                    </form>
                </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);