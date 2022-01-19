import React, { Component } from 'react';
import './Analysis.scss'
import Chart from './Chart';

class Analysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            chartData: {},
        }
    }
    async componentWillMount() {
        // this.getchartData(); // this should be this.getChartData();

        this.setState({
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Products',
                        data: [
                            10,
                            100,
                            153,
                            80,
                            20,
                            95,
                            10,
                            100,
                            133,
                            80,
                            105,
                            95
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 206, 86, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 159, 64, 0.8)',
                            'rgba(60, 179, 113, 0.8)',
                            'rgba(238, 130, 238, 0.8)',
                            'rgba(0, 0, 255, 0.8)',
                            'rgba(255, 0, 0, 0.8)',
                            'rgba(255, 165, 0, 0.8)',
                            'rgba(106, 90, 205, 0.8)'
                        ]
                    }
                ]
            }
        });
    }



    render() {
        return (
            <>
                <div className='analysis__container'>
                    <div className='analysis__header'>
                        <div className='analysis__header-total'>
                            <div className='total-title'>
                                <span className='total-title--bold'>Total Revenue</span>
                                <span className='total-title--gray'>(Last 30 Days)</span>
                            </div>
                            <div className='analysis__header-logo'>
                                <div className='total-revenue'>
                                    <i className="fas fa-dollar-sign header-logo-icon"></i>
                                </div>

                            </div>
                        </div>
                        <div className='analysis__header-total'>
                            <div className='total-title'>
                                <span className='total-title--bold'>Total Order</span>
                                <span className='total-title--gray'>(Last 30 Days)</span>
                            </div>
                            <div className='analysis__header-logo'>
                                <div className='total-order'>
                                    <i className="fas fa-cart-arrow-down header-logo-icon"></i>
                                </div>

                            </div>
                        </div>
                        <div className='analysis__header-total'>
                            <div className='total-title'>
                                <span className='total-title--bold'>Todays Revenue</span>
                                <span className='total-title--gray'>(Last 30 Days)</span>
                            </div>
                            <div className='analysis__header-logo'>
                                <div className='todays-revenue'>
                                    <i className="fas fa-hand-holding-usd header-logo-icon">

                                    </i>
                                </div>

                            </div>
                        </div>
                        <div className='analysis__header-total'>
                            <div className='total-title'>
                                <span className='total-title--bold'>Total Product</span>
                                <span className='total-title--gray'>(Last 30 Days)</span>
                            </div>
                            <div className='analysis__header-logo'>
                                <div className='total-product'>
                                    <i className="fas fa-store header-logo-icon"></i>

                                </div>

                            </div>
                        </div>


                    </div>
                    <div className='analysis__body'>
                        <Chart chartData={this.state.chartData} />

                    </div>
                    <div className='analysis__footer'>
                        <h3 className='analysis__footer-title'>Popular Products</h3>

                        <table className='analysis__footer-table'>
                            <colgroup>
                                <col style={{ width: "10%" }} ></col>
                                <col style={{ width: "30%" }} ></col>
                                <col ></col>
                                <col style={{ width: "20%" }}></col>
                                <col></col>
                                <col style={{ width: "10%" }}></col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Group</th>
                                    <th>Shop</th>
                                    <th>Price/Unit</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Apples</td>
                                    <td>Grocery</td>
                                    <td>Grocery Shop</td>
                                    <td>$2.00</td>
                                    <td>18</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Apples</td>
                                    <td>Grocery</td>
                                    <td>Grocery Shop</td>
                                    <td>$2.00</td>
                                    <td>18</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Apples</td>
                                    <td>Grocery</td>
                                    <td>Grocery Shop</td>
                                    <td>$2.00</td>
                                    <td>18</td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Apples</td>
                                    <td>Grocery</td>
                                    <td>Grocery Shop</td>
                                    <td>$2.00</td>
                                    <td>18</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Apples</td>
                                    <td>Grocery</td>
                                    <td>Grocery Shop</td>
                                    <td>$2.00</td>
                                    <td>18</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Apples</td>
                                    <td>Grocery</td>
                                    <td>Grocery Shop</td>
                                    <td>$2.00</td>
                                    <td>18</td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Apples</td>
                                    <td>Grocery</td>
                                    <td>Grocery Shop</td>
                                    <td>$2.00</td>
                                    <td>18</td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Apples</td>
                                    <td>Grocery</td>
                                    <td>Grocery Shop</td>
                                    <td>$2.00</td>
                                    <td>18</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>Apples</td>
                                    <td>Grocery</td>
                                    <td>Grocery Shop</td>
                                    <td>$2.00</td>
                                    <td>18</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Apples</td>
                                    <td>Grocery</td>
                                    <td>Grocery Shop</td>
                                    <td>$2.00</td>
                                    <td>18</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </>
        )
    }
}

export default Analysis;