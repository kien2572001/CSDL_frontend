import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonToolbar } from 'reactstrap';
import * as actions from "../../store/actions";
import './ProductCart.scss'
import NoProduct from '../../assets/images/zyro-image.png'
import ItemInCart from './ItemInCart';
import { v4 as uuidv4 } from 'uuid';
class ProductCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            checkOutRight: false,


        }
    }
    toggle = () => {
        console.log(">>>modal: ", this.state.modal);
        this.setState({
            modal: !this.state.modal,
            checkOutRight: true,
        });
    };

    sumCart() {
        let Carts = this.props.Carts
        let sum = 0
        Carts.map((item, key) => {
            sum = item.quantity * item.price + sum
        })
        return ((Math.round(sum * 100) / 100)).toFixed(2)
    }

    render() {
        let { modal, checkOutRight } = this.state;

        //JSX
        return (
            <>
                <button className='cart-btn'
                    onClick={() => this.toggle()}
                >
                    <span className='cart-btn-info'>
                        <i className="fas fa-shopping-bag cart-btn-icon"></i>
                        <span className='cart-btn-quatily'>{this.props.numberCart} Items</span>
                    </span>
                    <span className='cart-btn-bill'>${this.sumCart()}</span>
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
                                        <span className='cart__header-quantity-item'>{this.props.numberCart} Item</span>
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
                                        {this.props.Carts.map((item) => {
                                            return <ItemInCart item={item} key={uuidv4()} />
                                        })}
                                    </div>
                                </div>

                                <div className='cart__footer'>
                                    <button className='cart__footer-btn'>
                                        <span className='cart__footer-btn-title'>Checkout</span>
                                        <span className='cart__footer-btn-price'>${this.sumCart()}</span>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                    :
                    <div className={checkOutRight === true ? 'cart-modal__outRight' : ''}></div>


                }

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        numberCart: state.cart.numberCart,
        Carts: state.cart.Carts
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