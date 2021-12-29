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
            product: { id: 'id1', title: 'Apples', price: 2.5, discount: 0.2, img: Apples },
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
                            <div className='slider-discount'>{product.discount * 100}%</div>
                            <div><img className='slider-discount-img' src={Apples}></img></div>
                        </div>
                        <div className='productDetail-item '>
                            <div className='item-title'>Apples</div>
                            <div className='item-id'>1lb</div>
                            <div className='item-content'><span>An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.</span></div>
                            <div className='item-price'>

                                <span className='item-price--nodiscount '>$1.60 </span>
                                <span className='item-price--discount'><span className=' item-price-line'></span>$2.00</span>

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