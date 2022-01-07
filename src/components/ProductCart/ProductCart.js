import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonToolbar } from 'reactstrap';
import * as actions from "../../store/actions";
import './ProductCart.scss'
import NoProduct from '../../assets/images/zyro-image.png'
import ItemInCart from './ItemInCart';
class ProductCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,

        }
    }
    toggle = () => {
        console.log(">>>modal: ", this.state.modal);
        this.setState({
            modal: !this.state.modal,
        });
    };

    render() {
        let { modal } = this.state;


        //JSX
        return (
            <>
                <button className='cart-btn'
                    onClick={() => this.toggle()}
                >
                    <span className='cart-btn-info'>
                        <i className="fas fa-shopping-bag cart-btn-icon"></i>
                        <span className='cart-btn-quatily'>4 Items</span>
                    </span>
                    <span className='cart-btn-bill'>$12.40</span>
                </button>
                {modal === true ?
                    <div className='cart-modal '>
                        <div className={'modal__overlay'}
                            onClick={() => this.toggle()}
                        ></div>

                        <div className={'modal__body'}>
                            <div className=' modal__inner'>
                                <div className='cart__header'>
                                    <div className='cart__header-quantity'>
                                        <i className="fas fa-shopping-bag cart__header-quantity-icon"></i>
                                        <span className='cart__header-quantity-item'>0 Item</span>
                                    </div>
                                    <button className='cart__header-btn'
                                        onClick={() => this.toggle()}
                                    >
                                        <i className="fas fa-times cart__header-btn-icon"></i>
                                    </button>
                                </div>


                                <div className='cart__body'>
                                    {/* <div className='cart__body-noproduct'>
                                    <img src={NoProduct} className='cart__body-noproduct-img' />
                                    <div className='cart__body-noproduct-title'>No products found</div>
                                </div> */}
                                    <div className='cart__body-item'>
                                        <ItemInCart />
                                        <ItemInCart />

                                    </div>
                                </div>

                                <div className='cart__footer'>
                                    <button className='cart__footer-btn'>
                                        <span className='cart__footer-btn-title'>Checkout</span>
                                        <span className='cart__footer-btn-price'>$0.00</span>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                    :
                    <div className='cart-modal__outRight'></div>

                }

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
        userLoginSuccess: (adminInfo) => dispatch(actions.userLoginSuccess(adminInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);