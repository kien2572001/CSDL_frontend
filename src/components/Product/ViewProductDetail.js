import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonToolbar } from 'reactstrap';
import * as actions from "../../store/actions";
import { Carousel } from 'reactstrap';
import './ViewProductDetail.scss'
import Apples from '../../assets/images/Apples.jpg'
class ViewProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product,
            quatily: 1,
        }
    }
    handleMinusItem = () => {
        if (this.state.quatily === 0) {
            return;
        }
        let quatilyItem = this.state.quatily - 1;
        this.setState({
            quatily: quatilyItem,
        })
    }
    handleAddItem = () => {
        let quatilyItem = this.state.quatily + 1;
        this.setState({
            quatily: quatilyItem,
        })
    }
    render() {
        let { product, quatily } = this.state;

        //JSX
        return (
            <>

                <div className='productDetail'>
                    <div className='productDetail-info '>
                        <div className='productDetail-slider '>
                            <div className='slider-discount'>{product.discount }%</div>
                            <div><img className='slider-discount-img' src={product.img}></img></div>
                        </div>
                        <div className='productDetail-item '>
                            <div className='item-title'>{product.title}</div>
                            <div className='item-id'>{product.unit}</div>
                            <div className='item-content'><span>{product.content}</span></div>
                            <div className='item-price'>
                                {product.discount
                                ?
                                    <>
                                        <span className='item-price--nodiscount '>${((Math.round(product.price * 100) / 100) * (1 - product.discount/100)).toFixed(2)} </span>
                                        <span className='item-price--discount'><span className=' item-price-line'></span>${product.price}</span>
                                    </>
                                :
                                <span className='item-price--nodiscount '>${product.price} </span>
                                }
                                

                            </div>
                            <div className='item-btnAndQuatily'>

                                <button className={quatily === 0 ? 'item-btn' : 'item-btn item-btn-quatily-active'}>
                                    <span className='item-btn-quatily-icon-minus'
                                        onClick={() => this.handleMinusItem()}
                                    >
                                        <i className="fas fa-minus item-btn-icon"></i>
                                    </span>
                                    <span className='item-btn-quatilt-content'>
                                        {quatily === 0 ? 'Add' : quatily}
                                    </span>
                                    <span className='item-btn-quatily-icon-add'
                                        onClick={() => this.handleAddItem()}
                                    >
                                        <i className="fas fa-plus item-btn-icon"></i>
                                    </span>
                                </button>
                                <span className='item-pieces'> 50 pieces available</span>


                            </div>
                            <div className='item-categories'>
                                <div className='item-categories-title' >Categories</div>
                                <div className='item-categories-tag'>
                                    <span>Fruits</span>
                                    <span>Vegetables</span>
                                </div>

                            </div>
                            <div className='sellers'>
                                <span className='sellers-title'>Sellers</span>
                                <div className='sellers-shop'>
                                    <a src='/'> Grocery Shop</a>

                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewProductDetail);