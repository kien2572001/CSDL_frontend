import React from "react";
import './Dashbroad.scss'
import EditShop from "../EditShop/EditShop";

class Dashbroad extends React.Component {
    // HandleEditShop = render(){<EditShop />}
    render() {
        return (
            <div className="order-container">
                <div className="order-12">
                    <div className="order-1">
                        <div className="logoShop">
                            <img src="https://pickbazar-react-admin.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F891%2Fconversions%2FGroup-36321-thumbnail.jpg&w=1920&q=75" />
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h1>Grocery Shop</h1>
                        <div>The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.</div>
                        <div className="Address">
                            <span className="logo_add"><i class="fas fa-map-marker-alt"></i></span>
                            <address>1986 Spinnaker Lane, Illinois, Freeport, 61032, USA</address>
                        </div>
                        <div className="Phone_number">
                            <span className="logo_phone"><i class="fas fa-phone"></i></span>
                            <a href="tel:018927525111">018927525111</a>
                        </div>
                        <div className="but-visit">
                            <button className="visit_Shop">Visit Shop</button>
                        </div>
                    </div>
                    <div className="order-2">
                        <div className="but_edit">
                            <span className="logo_edit"><i class="far fa-edit"></i></span>
                            <button className="edit_Shop">Edit Shop</button>
                        </div>
                        <img src="https://pickbazar-react-admin.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F892%2FUntitled-2.jpg&w=1920&q=75" />
                    </div>
                </div>
                <div className="order-34">
                    <div className="order-3">
                        <div className="Products">
                            <div className="title_Box">Products</div>
                            <div className="element_Box">
                                <div className="element bor_bot">
                                    <div className="item_box" style={{ backgroundColor: '#FC9EC6' }}>
                                        <i class="fas fa-box" style={{ color: '#fff' }}></i>
                                    </div>
                                    <div className="text_box">
                                        <p className="Number">249</p>
                                        <p className="Name">Total Products</p>
                                    </div>
                                </div>
                                <div className="element">
                                    <div className="item_box" style={{ backgroundColor: '#6EBBFD' }}>
                                        <i class="fas fa-clipboard-list" style={{ color: '#fff' }}></i>
                                    </div>
                                    <div className="text_box">
                                        <p className="Number">0</p>
                                        <p className="Name">Total Orders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Products">
                            <div className="title_Box">Revenue</div>
                            <div className="element_Box">
                                <div className="element bor_bot">
                                    <div className="item_box" style={{ backgroundColor: '#C7AF99' }}>
                                        <i class="fas fa-wallet" style={{ color: '#fff' }}></i>
                                    </div>
                                    <div className="text_box1">
                                        {/* <p className="Number">249</p> */}
                                        <p className="Name">Gross Sales</p>
                                    </div>
                                </div>
                                <div className="element">
                                    <div className="item_box" style={{ backgroundColor: '#FFA7AE' }}>
                                        <i class="fas fa-dollar-sign" style={{ color: '#fff' }}></i>
                                    </div>
                                    <div className="text_box1">
                                        {/* <p className="Number">249</p> */}
                                        <p className="Name">Current Balance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Products">
                            <div className="title_Box">Others</div>
                            <div className="element_Box">
                                <div className="element bor_bot">
                                    <div className="item_box" style={{ backgroundColor: '#D59066' }}>
                                        <i class="fas fa-percent" style={{ color: '#fff' }}></i>
                                    </div>
                                    <div className="text_box">
                                        <p className="Number">0 %</p>
                                        <p className="Name">Admin Commission Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-4">
                        <div className="Registered">
                            <div className="Registered_Since">Registered Since</div>
                            <div className="Registered_Time">June 27, 2021</div>
                        </div>
                        <div className="Payment">
                            <div className="Payment_Infor">Payment Information</div>
                            <div className="Payment_elements">
                                <div className="Payment_element">Name:</div>
                                <div className="Payment_element heading">Email:</div>
                                <div className="Payment_element heading">Bank:</div>
                                <div className="Payment_element heading">Account No.:</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Dashbroad