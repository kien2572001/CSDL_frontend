import React from "react";
import './OrderDetail.scss';
class OrderDetail extends React.Component {
    render() {
        return (
            <>
                <div className="OrderDetail__container">
                    <div className="OrderDetail">
                        <div className="OrderDetail__header">
                            <h3 className="OrderDetail__header-title">ORDER ID -5ZPLFXC8</h3>
                        </div>
                        <div className="OrderDetail__table">
                            <table>
                                <colgroup>
                                    <col style={{ width: "120px" }}></col>
                                    <col style={{ width: "360px" }}></col>
                                    <col ></col>
                                    <col ></col>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75" alt="" className="product-img"></img></td>
                                        <td>
                                            <span>Apples</span>

                                        </td>
                                        <td>1</td>
                                        <td>2$</td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75" alt="" className="product-img"></img></td>
                                        <td>
                                            <span>Apples</span>

                                        </td>
                                        <td>1</td>
                                        <td>2$</td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75" alt="" className="product-img"></img></td>
                                        <td>
                                            <span>Apples</span>

                                        </td>
                                        <td>1</td>
                                        <td>2$</td>
                                    </tr>

                                    <tr>
                                        <td><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75" alt="" className="product-img"></img></td>
                                        <td>
                                            <span>Apples</span>

                                        </td>
                                        <td>1</td>
                                        <td>2$</td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75" alt="" className="product-img"></img></td>
                                        <td>
                                            <span>Apples</span>

                                        </td>
                                        <td>1</td>
                                        <td>2$</td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75" alt="" className="product-img"></img></td>
                                        <td>
                                            <span>Apples</span>

                                        </td>
                                        <td>1</td>
                                        <td>2$</td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75" alt="" className="product-img"></img></td>
                                        <td>
                                            <span>Apples</span>

                                        </td>
                                        <td>1</td>
                                        <td>2$</td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=1920&q=75" alt="" className="product-img"></img></td>
                                        <td>
                                            <span>Apples</span>

                                        </td>
                                        <td>1</td>
                                        <td>2$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="OrderDetail__footer">
                            <div className="Customer" >
                                <div className="OrderDetail-customer-title">Customer</div>
                                <div className="OrderDetail-customer">
                                    <span className="order-text--bold">Name:</span>
                                    <span>Nguyen Tien Viet</span>
                                </div>
                                <div className="OrderDetail-customer">
                                    <span className="order-text--bold">Telephone:</span>
                                    <span>02398213921</span>
                                </div>
                                <div className="OrderDetail-address">
                                    <span className="order-text--bold">Shipping Address:</span>
                                    <span>2148 Straford Park, KY, Winchester, 40391, United States</span>
                                </div>

                            </div>

                            <div className="bill">
                                <div className="OrderDetail-bill">
                                    <span className="OrderDetail-bill-title">Sub total</span>
                                    <span className="OrderDetail-bill-price">$20.00</span>
                                </div>
                                <div className="OrderDetail-bill">
                                    <span className="OrderDetail-bill-title">Discount</span>
                                    <span className="OrderDetail-bill-price">$0.00</span>
                                </div>
                                <div className="OrderDetail-bill">
                                    <span className="OrderDetail-bill-title">Delivery Fee</span>
                                    <span className="OrderDetail-bill-price">$20.00</span>
                                </div>
                                <div className="OrderDetail-bill">
                                    <span className="OrderDetail-bill-title">Tax</span>
                                    <span className="OrderDetail-bill-price">$20.00</span>
                                </div>
                                <div className="OrderDetail-bill">
                                    <span className="OrderDetail-bill-title order-text--bold">Total</span>
                                    <span className="OrderDetail-bill-price order-text--bold">$20.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </>

        )

    }
}

export default OrderDetail;