import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonToolbar } from 'reactstrap';
import * as actions from "../../store/actions";
import './ViewProduct.scss'
import Apple from '../../assets/images/Apples.jpg'
import ViewProductDetail from './ViewProductDetail';
class ViewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: { id: 'id1', title: 'Apples', price: 2.5, discount: 0.2, img: Apple },
            quatily: 0,
            modal: false,

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
    toggle = () => {
        console.log(">>> check toggle ");
        this.setState({
            modal: !this.state.modal,
        })
    }

    render() {
        let { product, quatily } = this.state;


        //JSX
        return (
            <>
                <div className='product-container'>

                    <div className={product.discount === 0 ? 'product-item-displaynon' : 'item-product-discount'}>
                        <div className=''>{product.discount * 100}%</div>
                    </div>
                    <img src={product.img}
                        className='item-image '
                        onClick={() => this.toggle()}
                    />
                    <Modal funk='true' isOpen={this.state.modal} toggle={() => this.toggle()} className='item-product-modal' >
                        <ViewProductDetail />

                    </Modal>


                    <div className='item-info'>
                        <div className='item-price'>

                            {product.discount === 0 ?
                                <span className=''>{product.price}</span>
                                :
                                <>
                                    <span className=''>
                                        {product.price * (1 - product.discount)}&nbsp;&nbsp;&nbsp;
                                    </span>
                                    <span className='item-price-discount'>
                                        <span className=' item-price-line'></span>
                                        ${product.price}
                                    </span>
                                </>
                            }



                        </div>
                        <div className='item-name'><span>{product.title}</span></div>

                        <button className={quatily === 0 ? 'item-btn-quatily' : 'item-btn-quatily item-btn-quatily-active'}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);