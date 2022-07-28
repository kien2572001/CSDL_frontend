import React from "react";
import "./OrderDetail.scss";
import { handleGetUserInfoByCid } from "../../../services/userService";
import jsPDF from "jspdf";
import "jspdf-autotable";
class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      khachHang: null,
    };
  }

  async componentDidMount() {
    let data = await handleGetUserInfoByCid(this.props.order.cid);
    this.setState({
      khachHang: data[0],
    });
  }

  pdfGenerate = (item) => {
    console.log(">>> check pdf", item);
    let data = this.props.data;
    //console.log(">>> check data", data);
    var head = [["Product", "Quantity", "Price"]];
    var body = [];
    data.forEach((item) => {
      body.push([item.title, item.quantity, "$" + item.price]);
    });

    var doc = new jsPDF();
    doc.text(20, 20, "Order ID: " + item.orderId);
    doc.autoTable({
      startY: 40,
      head: head,
      body: body,
      theme: "grid",
    });

    doc.autoTable({
      head: [["Customer", " Detail"]],
      theme: "grid",
      didDrawCell: function (data) {
        if (data.column.index === 0) {
          doc.autoTable({
            startY: data.cell.y + 2,

            theme: "grid",
            tableWidth: "wrap",
          });
        }
      },
      startY: doc.autoTable.previous.finalY + 10,
    });
    doc.save("order.pdf");
  };

  render() {
    let arrItem = this.props.data;
    let order = this.props.order;
    console.log(order);
    //console.log('Khach hang: ',this.state.khachHang)
    return (
      <>
        <div className="OrderDetail__container" id="order-detail-modal">
          <div className="OrderDetail">
            <div className="OrderDetail__header">
              <h3 className="OrderDetail__header-title">
                ORDER ID - {order.orderId}
              </h3>
            </div>
            <div className="OrderDetail__table">
              <table>
                <colgroup>
                  <col style={{ width: "120px" }}></col>
                  <col style={{ width: "360px" }}></col>
                  <col></col>
                  <col></col>
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
                  {arrItem?.map((item) => {
                    return (
                      <tr>
                        <td>
                          <img
                            src={item.img}
                            alt=""
                            className="product-img"
                          ></img>
                        </td>
                        <td>
                          <span>{item.title}</span>
                        </td>
                        <td>{item.quantity}</td>
                        <td>{item.price}$</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="OrderDetail__footer">
              <div className="Customer">
                <div className="OrderDetail-customer-title">Customer</div>
                <div className="OrderDetail-customer">
                  <span className="order-text--bold">Name:</span>
                  <span>
                    {this.state.khachHang?.firstName}{" "}
                    {this.state.khachHang?.lastName}
                  </span>
                </div>
                <div className="OrderDetail-customer">
                  <span className="order-text--bold">Telephone:</span>
                  <span>{this.state.khachHang?.phone}</span>
                </div>
                <div className="OrderDetail-address">
                  <span className="order-text--bold">Shipping Address:</span>
                  <span>{this.state.khachHang?.address}</span>
                </div>
              </div>

              <div className="bill">
                <div className="OrderDetail-bill">
                  <span className="OrderDetail-bill-title">Order Status</span>
                  <span className="OrderDetail-bill-price">{order.status}</span>
                </div>
                <div className="OrderDetail-bill">
                  <span className="OrderDetail-bill-title">Time Schedule</span>
                  <span className="OrderDetail-bill-price">
                    {order.delivery}
                  </span>
                </div>
                <div className="OrderDetail-bill">
                  <span className="OrderDetail-bill-title">Sub total</span>
                  <span className="OrderDetail-bill-price">${order.total}</span>
                </div>
                <div className="OrderDetail-bill">
                  <span className="OrderDetail-bill-title">Delivery Fee</span>
                  <span className="OrderDetail-bill-price">$0.00</span>
                </div>
                <div className="OrderDetail-bill">
                  <span className="OrderDetail-bill-title order-text--bold">
                    Total
                  </span>
                  <span className="OrderDetail-bill-price order-text--bold">
                    ${order.total}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <button
                className="down-btn"
                onClick={() => this.pdfGenerate(order)}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OrderDetail;
