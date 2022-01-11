import React from "react";
import './MyOders.scss';
import Bill1 from "./Bill1";
import Bill2 from "./Bill2";
import Bill3 from "./Bill3";

import {
    BrowserRouter,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";

class MyOders extends React.Component {
    render() {
        return (
            <BrowserRouter>
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
                                                <div class="force-overflow">
                                                    <NavLink to="/Bill1" activeClassName="selected" className="navlink">
                                                        <div className="Piece-Order">
                                                            <div className="id_Order">
                                                                <span className="id_save">
                                                                    Orders
                                                                    <span className="id">#21</span>
                                                                </span>
                                                                <span className="status">Order Received</span>
                                                            </div>
                                                            <div className="infor_Order">
                                                                <div>
                                                                    <span>
                                                                        <span className="infor_name">Order Date</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>August 26, 2021</span>
                                                                </div>
                                                                <div>
                                                                    <span>
                                                                        <span className="infor_name">Delivery Time</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>11.00 AM - 2.00 PM</span>
                                                                </div>
                                                                <div className="Bolder">
                                                                    <span>
                                                                        <span className="infor_name">Amount</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>$21.60</span>
                                                                </div>
                                                                <div className="Bolder">
                                                                    <span>
                                                                        <span className="infor_name">Total Price</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>$72.03</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to="/Bill2" activeClassName="selected" className="navlink">
                                                        <div className="Piece-Order" href="/Bill2">
                                                            <div className="id_Order">
                                                                <span className="id_save">
                                                                    Orders
                                                                    <span className="id">#21</span>
                                                                </span>
                                                                <span className="status">Order Received</span>
                                                            </div>
                                                            <div className="infor_Order">
                                                                <div>
                                                                    <span>
                                                                        <span className="infor_name">Order Date</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>August 26, 2021</span>
                                                                </div>
                                                                <div>
                                                                    <span>
                                                                        <span className="infor_name">Delivery Time</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>11.00 AM - 2.00 PM</span>
                                                                </div>
                                                                <div className="Bolder">
                                                                    <span>
                                                                        <span className="infor_name">Amount</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>$21.60</span>
                                                                </div>
                                                                <div className="Bolder">
                                                                    <span>
                                                                        <span className="infor_name">Total Price</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>$72.03</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to="/Bill3" activeClassName="selected" className="navlink">
                                                        <div className="Piece-Order" href="/Bill3">
                                                            <div className="id_Order">
                                                                <span className="id_save">
                                                                    Orders
                                                                    <span className="id">#21</span>
                                                                </span>
                                                                <span className="status">Order Received</span>
                                                            </div>
                                                            <div className="infor_Order">
                                                                <div>
                                                                    <span>
                                                                        <span className="infor_name">Order Date</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>August 26, 2021</span>
                                                                </div>
                                                                <div>
                                                                    <span>
                                                                        <span className="infor_name">Delivery Time</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>11.00 AM - 2.00 PM</span>
                                                                </div>
                                                                <div className="Bolder">
                                                                    <span>
                                                                        <span className="infor_name">Amount</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>$21.60</span>
                                                                </div>
                                                                <div className="Bolder">
                                                                    <span>
                                                                        <span className="infor_name">Total Price</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>$72.03</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to="/Bill4" activeClassName="selected" className="navlink">
                                                        <div className="Piece-Order">
                                                            <div className="id_Order">
                                                                <span className="id_save">
                                                                    Orders
                                                                    <span className="id">#21</span>
                                                                </span>
                                                                <span className="status">Order Received</span>
                                                            </div>
                                                            <div className="infor_Order">
                                                                <div>
                                                                    <span>
                                                                        <span className="infor_name">Order Date</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>August 26, 2021</span>
                                                                </div>
                                                                <div>
                                                                    <span>
                                                                        <span className="infor_name">Delivery Time</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>11.00 AM - 2.00 PM</span>
                                                                </div>
                                                                <div className="Bolder">
                                                                    <span>
                                                                        <span className="infor_name">Amount</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>$21.60</span>
                                                                </div>
                                                                <div className="Bolder">
                                                                    <span>
                                                                        <span className="infor_name">Total Price</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>$72.03</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                    <NavLink to="/Bill5" activeClassName="selected" className="navlink">
                                                        <div className="Piece-Order">
                                                            <div className="id_Order">
                                                                <span className="id_save">
                                                                    Orders
                                                                    <span className="id">#21</span>
                                                                </span>
                                                                <span className="status">Order Received</span>
                                                            </div>
                                                            <div className="infor_Order">
                                                                <div>
                                                                    <span>
                                                                        <span className="infor_name">Order Date</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>August 26, 2021</span>
                                                                </div>
                                                                <div>
                                                                    <span>
                                                                        <span className="infor_name">Delivery Time</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>11.00 AM - 2.00 PM</span>
                                                                </div>
                                                                <div className="Bolder">
                                                                    <span>
                                                                        <span className="infor_name">Amount</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>$21.60</span>
                                                                </div>
                                                                <div className="Bolder">
                                                                    <span>
                                                                        <span className="infor_name">Total Price</span>
                                                                        <span>:</span>
                                                                    </span>
                                                                    <span>$72.03</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Details">
                                    <div className="Order-Details">
                                        <div className="title">
                                            <h4>
                                                Order Details
                                                <span>-</span>
                                                KN72GQqD4jJ0
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
                                                        2148 Straford Park, KY, Winchester, 40391, United States
                                                    </span>
                                                </div>
                                                <div className="Billing_Add">
                                                    <div className="Billing">Billing Address</div>
                                                    <span>
                                                        2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="Total">
                                                <div>
                                                    <span>Sub Total</span>
                                                    <span> $3.00</span>
                                                </div>
                                                <div>
                                                    <span>Discount</span>
                                                    <span> $0.00</span>
                                                </div>
                                                <div>
                                                    <span>Delivery Fee</span>
                                                    <span> $50.00</span>
                                                </div>
                                                <div>
                                                    <span>Tax</span>
                                                    <span> $0.06</span>
                                                </div>
                                                <div className="total">
                                                    <span>Total</span>
                                                    <span> $53.06</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Space-White"></div>
                                    <div className="Order-Items">
                                        <tr>
                                            <div className="Item">Item</div>
                                            <div className="Quantity">Quantity</div>
                                            <th className="Price">Price</th>
                                            <div className="Scrollbar"></div>
                                        </tr>
                                        {/* <Bill2 /> */}
                                        {/* <Bill3 /> */}
                                        <Switch>
                                            <Route path="/Bill1">
                                                <Bill1 />
                                            </Route>
                                            <Route path="/Bill2">
                                                <Bill2 />
                                            </Route>
                                            <Route path="/Bill3">
                                                <Bill3 />
                                            </Route>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </BrowserRouter>
        )
    }
}

export default MyOders