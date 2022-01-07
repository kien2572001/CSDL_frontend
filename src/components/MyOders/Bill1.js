import React from "react";
import {
    NavLink,
    Link
} from "react-router-dom";
import './Bill.scss'

class Bill1 extends React.Component {
    render() {
        return (
            <>
                <div className="Container_Items">
                    <div className="container_Item">
                        <div className="View_Item">
                            <div>
                                <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F6%2Fconversions%2Fclementines-thumbnail.jpg&w=1920&q=75"></img>
                            </div>
                            <div className="name_price">
                                <div className="img_text">
                                    <div className="name_item">Clementines x</div>
                                    <span>1lb</span>
                                </div>
                                <span className="price_item">$2.50</span>
                            </div>
                        </div>
                        <div className="View_Quantity">
                            <p>1</p>
                        </div>
                        <div className="View_Price">
                            <p>$2.50</p>
                        </div>
                    </div>
                    <div className="container_Item">
                        <div className="View_Item">
                            <div>
                                <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F7%2Fconversions%2FCorn-thumbnail.jpg&w=1920&q=75"></img>
                            </div>
                            <div className="name_price">
                                <div className="img_text">
                                    <div className="name_item">Sweet Corn x</div>
                                    <span>1lb</span>
                                </div>
                                <span className="price_item">$4.00</span>
                            </div>
                        </div>
                        <div className="View_Quantity">
                            <p>1</p>
                        </div>
                        <div className="View_Price">
                            <p>$4.00</p>
                        </div>
                    </div>
                    <div className="container_Item">
                        <div className="View_Item">
                            <div>
                                <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2Fconversions%2FApples-thumbnail.jpg&w=1920&q=75"></img>
                            </div>
                            <div className="name_price">
                                <div className="img_text">
                                    <div className="name_item">Apples x</div>
                                    <span>1lb</span>
                                </div>
                                <span className="price_item">$1.60</span>
                            </div>
                        </div>
                        <div className="View_Quantity">
                            <p>1</p>
                        </div>
                        <div className="View_Price">
                            <p>$1.60</p>
                        </div>
                    </div>
                    <div className="container_Item">
                        <div className="View_Item">
                            <div>
                                <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F4%2Fconversions%2FBrusselsSprouts-thumbnail.jpg&w=1920&q=75"></img>
                            </div>
                            <div className="name_price">
                                <div className="img_text">
                                    <div className="name_item">Brussels Sprout x</div>
                                    <span>1lb</span>
                                </div>
                                <span className="price_item">$3.00</span>
                            </div>
                        </div>
                        <div className="View_Quantity">
                            <p>1</p>
                        </div>
                        <div className="View_Price">
                            <p>$3.00</p>
                        </div>
                    </div>
                    <div className="container_Item">
                        <div className="View_Item">
                            <div>
                                <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F8%2Fconversions%2FCucumber-thumbnail.jpg&w=1920&q=75"></img>
                            </div>
                            <div className="name_price">
                                <div className="img_text">
                                    <div className="name_item">Cucumber x</div>
                                    <span>2.5lb</span>
                                </div>
                                <span className="price_item">$2.50</span>
                            </div>
                        </div>
                        <div className="View_Quantity">
                            <p>1</p>
                        </div>
                        <div className="View_Price">
                            <p>$2.50</p>
                        </div>
                    </div>
                    <div className="container_Item">
                        <div className="View_Item">
                            <div>
                                <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F10%2Fconversions%2FDates-thumbnail.jpg&w=1920&q=75"></img>
                            </div>
                            <div className="name_price">
                                <div className="img_text">
                                    <div className="name_item">Dates x</div>
                                    <span>1.5lb</span>
                                </div>
                                <span className="price_item">$8.00</span>
                            </div>
                        </div>
                        <div className="View_Quantity">
                            <p>1</p>
                        </div>
                        <div className="View_Price">
                            <p>$8.00</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Bill1