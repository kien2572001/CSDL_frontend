import React from "react";
import {
    NavLink,
    Link
} from "react-router-dom";
import './Bill.scss'

class Bill2 extends React.Component {
    render() {
        return (
            <>
                <div className="Container_Items">
                    <div className="container_Item">
                        <div className="View_Item">
                            <div>
                                <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fconversions%2Fblueberries-thumbnail.jpg&w=1920&q=75"></img>
                            </div>
                            <div className="name_price">
                                <div className="img_text">
                                    <div className="name_item">Blueberries x</div>
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
                </div>
            </>
        )
    }
}

export default Bill2