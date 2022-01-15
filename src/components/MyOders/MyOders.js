import React from "react";
import './MyOders.scss';
import Bill from "./Bill";

import * as actions from "../../store/actions";
import { connect } from 'react-redux';
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";

import { handleGetOrderByUserId } from '../../services/userService'
import { v4 as uuidv4 } from 'uuid';

class MyOders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: null,
            orderId: null
        }
    }

    async componentDidMount() {
        //console.log('CID: ',this.props.userInfo.cid)
        let data = await handleGetOrderByUserId(this.props.userInfo.cid)
        console.log(data)
        this.setState({
            order: data.reverse()
        })
    }

    handleOnClickOrder = (order) => {
        this.setState({
            orderId: order.orderId,
        })
    }

    render() {
        return (
            <div>
                <div className="MyOders">
                    <div className="slogan-content">
                        <div className="san">
                            <div className="Folderbar">
                                <div className="Wallet">
                                    <div className="WalletA">Wallet</div>
                                    <div className="WalletB">
                                        <span className="text">Total Points</span>
                                        <span>0</span>
                                    </div>
                                    <div className="WalletB">
                                        <span className="text">Points Used</span>
                                        <span>0</span>
                                    </div>
                                    <div className="WalletB">
                                        <span className="text">Available Points</span>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className="Func-Category">
                                    <ul className="Func-CategoryA">
                                        <div className="Func-Categorya">Profile</div>
                                        <div className="Func-Categorya">Change Password</div>
                                        <div className="Func-Categorya">My Orders</div>
                                        <div className="Func-Categorya">My Refunds</div>
                                        <div className="Func-Categorya">Need Help</div>
                                    </ul>
                                    <ul className="Func-CategoryB">
                                        <div className="Func-Categoryb">Logout</div>
                                    </ul>
                                </div>
                            </div>
                            <div className="Infor">
                                <div className="Orders">
                                    <div className="List-Order">
                                        <h3>My Orders</h3>
                                        <div className="Piece-Orders">
                                            <div className="scrollbar" id="style-3">
                                                <div className="force-overflow">
                                                    {this.state.order?.map((item, key) => {
                                                        return (
                                                            <div activeclassName="selected" className="navlink" key={uuidv4()} onClick={() => this.handleOnClickOrder(item)}>
                                                                <div className="Piece-Order-Top Piece-Order">
                                                                    <div className="id_Order">
                                                                        <span className="id_save">
                                                                            Orders
                                                                            <span className="id">#{key + 1}</span>
                                                                        </span>
                                                                        <span className="status">Order Received</span>
                                                                    </div>
                                                                    <div className="infor_Order">
                                                                        <div>
                                                                            <span>
                                                                                <span className="infor_name">Order Date</span>
                                                                                <span>:</span>
                                                                            </span>
                                                                            <span>{new Date(item.createdAt).toLocaleDateString('en-US', {
                                                                                year: 'numeric',
                                                                                month: 'long',
                                                                                day: 'numeric',
                                                                            })}</span>
                                                                        </div>
                                                                        <div>
                                                                            <span>
                                                                                <span className="infor_name">Delivery Time</span>
                                                                                <span>:</span>
                                                                            </span>
                                                                            <span>{item.delivery}</span>
                                                                        </div>
                                                                        <div className="Bolder">
                                                                            <span>
                                                                                <span className="infor_name">Amount</span>
                                                                                <span>:</span>
                                                                            </span>
                                                                            <span>${item.total}</span>
                                                                        </div>
                                                                        <div className="Bolder">
                                                                            <span>
                                                                                <span className="infor_name">Total Price</span>
                                                                                <span>:</span>
                                                                            </span>
                                                                            <span>${item.total}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Details">
                                    {this.state.order?.map((item) => {
                                        if (item.orderId === this.state.orderId) {
                                            return (
                                                <div className="Order-Details">
                                                    <div className="title">
                                                        <h4>
                                                            Order Details
                                                            <span>-</span>
                                                            {item.orderId}
                                                        </h4>
                                                        <div>
                                                            <button>
                                                                <i className="far fa-frown"></i>
                                                                Ask for a refund
                                                            </button>
                                                            <a>
                                                                <i className="fas fa-eye"></i>
                                                                Sub Orders
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="Add_Total">
                                                        <div className="Address">
                                                            <div className="Shipping_Add">
                                                                <div className="Shipping">Shipping Address</div>
                                                                <span>
                                                                    {item.address}
                                                                </span>
                                                            </div>
                                                            {/* <div className="Billing_Add">
                                                                <div className="Billing">Billing Address</div>
                                                                <span>
                                                                    2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                                                                </span>
                                                            </div> */}
                                                        </div>
                                                        <div className="Total">
                                                            <div>
                                                                <span>Sub Total</span>
                                                                <span> ${item.total}</span>
                                                            </div>
                                                            {/* <div>
                                                                <span>Discount</span>
                                                                <span> $0.00</span>
                                                            </div> */}
                                                            <div>
                                                                <span>Delivery Fee</span>
                                                                <span> $0.00</span>
                                                            </div>
                                                            {/* <div>
                                                                <span>Tax</span>
                                                                <span> $0.06</span>
                                                            </div> */}
                                                            <div className="total">
                                                                <span>Total</span>
                                                                <span> ${item.total}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                    <div className="Space-White"></div>
                                    <div className="Order-Items">
                                        <tr>
                                            <div className="Item">Item</div>
                                            <div className="Quantity">Quantity</div>
                                            <th className="Price">Price</th>
                                            <div className="Scrollbar"></div>
                                        </tr>
                                        <Bill orderId={this.state.orderId} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOders);
