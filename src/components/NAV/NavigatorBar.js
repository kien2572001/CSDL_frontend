import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './NavigatorBar.scss';
import LogoShop from '../../assets/images/Logo.png';
import Login from '../Auth/Login';


class NavigatorBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false
        }
    }

    handleShowLogin(){
        console.log(this.state.showLogin)
        this.setState({
            showLogin: true
        })
    }

    render() {
        //JSX
        return (
            <>
                <div class="app">
                    <header class="header">
                        <div class="">
                            <nav class="header__navbar">
                                <ul class="header__navlist-list">
                                    <li class="header__navbar-item header__navbar-item--separate">
                                        <img src={LogoShop} />

                                    </li>
                                    <li class="header__navbar-item">
                                        <button className='header__navbar-item-btn'> Grocery</button>
                                        <ul className='header__navbar-item-btn-list'>
                                            <li>Hello</li>
                                            <li>Hello</li>
                                            <li>Hello</li>
                                            <li>Hello</li>
                                            <li>Hello</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className='hearder__navbar-search'>
                                    <button className='hearder__navbar-search-btn'>
                                        <i className="fas fa-search hearder__navbar-search-btn-icon"></i>
                                    </button>
                                    <input className='hearder__navbar-search-btn-search' placeholder='Search your products from here' ></input>

                                </div>

                                <ul class="header__navlist-list">
                                    <li class="header__navbar-item">
                                        <a href="" class="header__navbar-item-link">
                                            <span>Shops</span>
                                        </a>
                                    </li>
                                    <li class="header__navbar-item">
                                        <a href="" class="header__navbar-item-link">
                                            <span>Offers</span>
                                        </a>
                                    </li>
                                    <li class="header__navbar-item header__navbar-item--separate">
                                        <a href="" class="header__navbar-item-link">
                                            <span>FAQ</span>
                                        </a>

                                    </li>
                                    <li class="header__navbar-item ">
                                        <a href="" class="header__navbar-item-link">
                                            <span>Contact</span>
                                        </a>
                                    </li>
                                    <li class="header__navbar-item text--strong">
                                        {/* <button type="button" className="btn btn-danger" style={{width: '50px',height: '30px'}} onClick={()=>this.handleShowLogin()} >Join</button> */}
                                        <Login/>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                    </header>

                    <div class="container">

                    </div>

                    <footer class="footer">

                    </footer>
                </div >
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigatorBar);