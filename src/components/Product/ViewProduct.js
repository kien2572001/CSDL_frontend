import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonToolbar } from 'reactstrap';
import * as actions from "../../store/actions";

import './ViewProduct.scss'
import Apple from '../../assets/images/Apples.jpg'
class ViewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quatily: '',
        }
    }

    render() {
        //JSX
        return (
            <>
                <div className='product-background'>
                    <div className='product-container'>
                        <div className='item-product-discount'>
                            <div className=''>20%</div>
                        </div>
                        <img src={Apple} className='item-image' />

                        <div className='item-info'>
                            <div className='item-price'>1.60</div>
                            <div className='item-name'><span>Apples</span></div>

                            <button className='item-btn-quatily'>
                                <span className='item-btn-quatily-iconminus'><i className="fas fa-minus item-btn-icon"></i></span>
                                <span className='item-btn-quatilt-content'>{`Add`}</span>
                                <span className='item-btn-quatily-iconadd'><i className="fas fa-plus item-btn-icon"></i></span>
                            </button>


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
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
