import React from "react";
import './AdminOrder.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import OrderDetail from "./OrderDetail";
class AdminOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        console.log(">>> check Order", this.state.modal)
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <>
                <div className="container__AdminOrder">
                    <div className="adminOrder__header">
                        <h3 className="adminOrder__header-title">Orders</h3>
                        <div className="adminOrder__header-search">
                            <button className="adminOrder__header-search-btn">
                                <i className="fas fa-search search-btn-icon"></i>
                            </button>
                            <input className="adminOrder__header-search-input"
                                type="search"
                                placeholder="Type your query and press enter"
                            ></input>
                        </div>

                    </div>
                    <div className="adminOrder__body">
                        <table className="adminOrder-table">
                            <colgroup>
                                <col ></col>
                                <col style={{ width: "150px" }}></col>
                                <col ></col>
                                <col style={{ width: "120px" }}></col>
                                <col></col>
                                <col></col>
                                <col></col>
                                <col></col>
                                <col style={{ width: "220px" }}></col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tracking Number</th>
                                    <th>Delivery Fee</th>
                                    <th>Total</th>
                                    <th>Order Date</th>
                                    <th>Status</th>
                                    <th>Shipping Address</th>
                                    <th>Download</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>
                                        <div className="actions__status">
                                            <button className="actions__status--detail"
                                                onClick={() => this.toggle()}
                                            >
                                                Detail
                                            </button>
                                            <button className="actions__status--accept">
                                                Accept
                                            </button>
                                            <button className="actions__status--reject">
                                                Reject
                                            </button>

                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>
                                        <div className="actions__status">
                                            <button className="actions__status--detail">
                                                Detail
                                            </button>
                                            <button className="actions__status--accept">
                                                Accept
                                            </button>
                                            <button className="actions__status--reject">
                                                Reject
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>Content 1</td>
                                    <td>
                                        <div className="actions__status">
                                            <button className="actions__status--detail">
                                                Detail
                                            </button>
                                            <button className="actions__status--accept">
                                                Accept
                                            </button>
                                            <button className="actions__status--reject">
                                                Reject
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="order-detail-modal">
                    <OrderDetail />
                </Modal>

            </>
        )
    }
}
export default AdminOrder