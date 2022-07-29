import React, { Component } from "react";
import "./Analysis.scss";
import Chart from "./Chart";
import adminService from "../../../services/adminService";
import { now } from "moment";
import moment from "moment";
import Dropdown from "react-bootstrap/Dropdown";

class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      total30day: 0,
      order30day: 0,
      totalRevenue: 0,
      countNumber: 0,
      getChartData: [],
      year: moment(now()).year(),
      bestSaler: [],
    };
  }

  async componentDidMount() {
    let data = await adminService.handleTotal30day();
    let data1 = await adminService.handleOrder30day();
    let data2 = await adminService.handleTotalRevenue();
    let data3 = await adminService.handleGetProductBySid(1);
    let bestSaler = await adminService.handleBestSaler(1);

    let temp = [];
    for (let i = 0; i < 5; i++) {
      temp.push({
        rank: bestSaler[0][i],
        info: bestSaler[1][i],
      });
    }
    console.log("bestSaler", temp);
    this.setState({
      total30day: data["SUM(total)"],
      order30day: data1["COUNT(orderId)"],
      totalRevenue: data2["SUM(total)"],
      countNumber: data3.length,
      bestSaler: temp,
    });
  }

  async componentWillMount() {
    //this.getchartData(); // this should be this.getChartData();
  }

  changeYear = (year) => {
    this.setState({
      year: year,
    });
  };

  render() {
    return (
      <>
        <div className="analysis__container">
          <div className="analysis__header">
            <div className="analysis__header-total">
              <div className="total-title">
                <span className="total-title--bold">Total Revenue </span>
                {/* <span className='total-title--gray'>(Last 30 Days)</span> */}
              </div>
              <div className="analysis__header-logo">
                <span className="analysis__header-logo-total  text-color--green">
                  ${this.state.totalRevenue}
                </span>

                <div className="total-revenue">
                  <i className="fas fa-dollar-sign header-logo-icon  text-color--green"></i>
                </div>
              </div>
            </div>
            <div className="analysis__header-total">
              <div className="total-title">
                <span className="total-title--bold">Total Order </span>
                <span className="total-title--gray">(Last 30 Days)</span>
              </div>
              <div className="analysis__header-logo">
                <span className="analysis__header-logo-total text-color--red ">
                  {this.state.order30day}
                </span>

                <div className="total-order">
                  <i className="fas fa-cart-arrow-down header-logo-icon text-color--red"></i>
                </div>
              </div>
            </div>
            <div className="analysis__header-total">
              <div className="total-title">
                <span className="total-title--bold ">Todays Revenue </span>
                <span className="total-title--gray">(Last 30 Days)</span>
              </div>
              <div className="analysis__header-logo">
                <span className="analysis__header-logo-total text-color--orange">
                  ${this.state.total30day}
                </span>

                <div className="todays-revenue">
                  <i className="fas fa-hand-holding-usd header-logo-icon text-color--orange"></i>
                </div>
              </div>
            </div>
            <div className="analysis__header-total">
              <div className="total-title">
                <span className="total-title--bold">Total Product </span>
                <span className="total-title--gray">(Last 30 Days)</span>
              </div>
              <div className="analysis__header-logo">
                <span className="analysis__header-logo-total text-color--blue ">
                  {this.state.countNumber}
                </span>
                <div className="total-product">
                  <i className="fas fa-store header-logo-icon text-color--blue "></i>
                </div>
              </div>
            </div>
          </div>
          <div className="analysis__body">
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  bsPrefix="dropdown-btn"
                >
                  {this.state.year}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => this.changeYear(moment(now()).year())}
                  >
                    {moment(now()).year()}
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.changeYear(moment(now()).year() - 1)}
                  >
                    {moment(now()).year() - 1}
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.changeYear(moment(now()).year() - 2)}
                  >
                    {moment(now()).year() - 2}
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.changeYear(moment(now()).year() - 3)}
                  >
                    {moment(now()).year() - 3}
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.changeYear(moment(now()).year() - 4)}
                  >
                    {moment(now()).year() - 4}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Chart year={this.state.year} />
          </div>
          <div className="analysis__footer">
            <h3 className="analysis__footer-title">Popular Products</h3>

            <table className="analysis__footer-table">
              <colgroup>
                <col style={{ width: "10%" }}></col>
                <col style={{ width: "30%" }}></col>
                <col></col>
                <col style={{ width: "20%" }}></col>
                <col></col>
                <col style={{ width: "10%" }}></col>
              </colgroup>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price/Unit</th>
                  <th>Sale</th>
                  <th>Sold</th>
                  <th>Quantity</th>
                </tr>

                {}
              </thead>
              <tbody>
                {this.state.bestSaler?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.rank.pid}</td>
                      <td>{item.info.title}</td>
                      <td>{item.info.price}$</td>
                      <td>{item.info.discount}%</td>
                      <td>{item.rank.sold}</td>
                      <td>{item.info.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Analysis;
