import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './ItemInCart.scss'
import Apples from "../../assets/images/Apples.jpg"
class ItemInCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        }
    }
    handleUpItem = () => {
        this.setState({
            quantity: this.state.quantity + 1,
        })
    }
    handleDownItem = () => {
        this.setState({
            quantity: this.state.quantity - 1,
        })
    }
    handleCloseItem = () => {
        this.setState({
            quantity: 0,
        })
    }

    render() {
        let { quantity } = this.state;


        //JSX
        return (
            <>
                <div className={quantity === 0 ? 'cart__hide-card' : 'item__cart'}>
                    <div className='item__cart-add'>
                        <button className='item__cart-add-btn'>
                            <span className='item-btn-quatily-icon-up'
                                onClick={() => this.handleUpItem()}
                            >
                                <i className="fas fa-plus item-btn-icon"></i>
                            </span>
                            <span className='item-btn-quatilt-content'>
                                {quantity}
                            </span>

                            <span className='item-btn-quatily-icon-down'
                                onClick={() => this.handleDownItem()}
                            >
                                <i className="fas fa-minus item-btn-icon"></i>
                            </span>
                        </button>

                    </div>
                    <div className='item__cart-img'>
                        <img src={Apples} className='item__cart-image' />
                    </div>
                    <div className='item__cart-body'>
                        <div className='item__cart-infor'>
                            <span className='item__cart-product-title'>Apples</span>
                            <span className='item__cart-product-price'>$1.60</span>
                            <span className='item__cart-product-quantity'>4 X 1lb</span>


                        </div>
                        <div className='item__cart-total'>
                            <span>$6.40</span>
                            <div className='item__cart-close'
                                onClick={() => this.handleCloseItem()}
                            ><i className="fas fa-times   item__cart-close-icon "></i></div>
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
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (adminInfo) => dispatch(actions.userLoginSuccess(adminInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemInCart);