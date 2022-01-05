import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './NavigatorBar.scss';
import LogoShop from '../../assets/images/Logo.png';
import Login from '../Auth/Login';
import {Link} from 'react-router-dom'

class NavigatorBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleProduct: '',
            removeSearchData: false,
        }
    }


    handleChangeSearchTitleProduct = (event) => {
        console.log(">>> on change", this.state)
        if (event.target.value === '') {
            this.setState({
                titleProduct: event.target.value,
                removeSearchData: false,
            })
            return;
        }
        this.setState({
            titleProduct: event.target.value,
            removeSearchData: true,
        })
    }
    handleSearchTitleProduct = () => {
        console.log(">>> check Search bar")
    }
    handleRemoveTitleProduct = () => {
        console.log(">>> check remove");
        this.setState({
            titleProduct: "",
            removeSearchData: false,
        })

    }

    render() {
        let { titleProduct, removeSearchData } = this.state;
        //JSX
        return (
            <>
                <div className="app">
                    <header className="header">
                        <div className="">
                            <nav className="header__navbar">
                                <ul className="header__navlist-list">
                                    <li className="header__navbar-item header__navbar-item--separate">
                                        <img src={LogoShop} />

                                    </li>
                                    <li className="header__navbar-item">
                                        <a className='header__navbar-item-btn '>
                                            <i className="far fa-lemon "></i>
                                            <span>Grocery</span>
                                            <i className="fas fa-caret-down .header__item--icon-down"></i>
                                        </a>
                                        <ul className='header__navbar-item-btn-list'>
                                            <li className='header__nabar-item-btn-list-store'>
                                                <i className="far fa-lemon "></i>

                                                <a>Grocery</a>
                                            </li>
                                            <li className='header__nabar-item-btn-list-store'>
                                                <i className="far fa-lemon "></i>

                                                <a>Bakery</a>
                                            </li>
                                            <li className='header__nabar-item-btn-list-store'>
                                                <i className="far fa-lemon "></i>

                                                <a>Makeup</a>
                                            </li>
                                            <li className='header__nabar-item-btn-list-store'>
                                                <i className="far fa-lemon "></i>

                                                <a>Bags</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <div className='hearder__navbar-search'>
                                    <span className='hearder__navbar-search-btn'>
                                        <i className="fas fa-search hearder__navbar-search-btn-icon hearder__navbar-search-btn-icon--search"
                                            onClick={() => this.handleSearchTitleProduct()}


                                        ></i>

                                    </span>
                                    <input className='hearder__navbar-search-btn-search'
                                        type='text'
                                        //value={removeSearchData ? titleProduct : 'Search your products from here'}
                                        value={titleProduct}
                                        onChange={(event) => this.handleChangeSearchTitleProduct(event)}
                                    />

                                    <span className={removeSearchData ? 'hearder__navbar-search-btn' : 'tag-display-none'}

                                    >
                                        <i
                                            className="fas fa-times hearder__navbar-search-btn-icon hearder__navbar-search-btn-icon--remove"
                                            onClick={() => this.handleRemoveTitleProduct()}
                                        ></i>
                                    </span>

                                </div>
                                <ul className="header__navlist-list">
                                    <li className="header__navbar-item">
                                        <Link to={'/'} className="header__navbar-item-link"><span>Shops</span></Link>
                                    </li>
                                    <li className="header__navbar-item">
                                        <a href="" className="header__navbar-item-link">
                                            <span>Offers</span>
                                        </a>
                                    </li>
                                    <li className="header__navbar-item header__navbar-item--separate">
                                        
                                        <Link to={'/faq'} className="header__navbar-item-link"><span>FAQ</span></Link>

                                    </li>
                                    <li className="header__navbar-item ">
                                        <a href="" className="header__navbar-item-link" >
                                            <span>Contact</span>
                                        </a>
                                    </li>
                                    <li className="header__navbar-item text--strong">
                                        {/* <button type="button" className="btn btn-danger" style={{width: '50px',height: '30px'}} onClick={()=>this.handleShowLogin()} >Join</button> */}
                                        <Login />
                                    </li>

                                </ul>
                            </nav>
                        </div>

                    </header>

                    <div className="container">

                    </div>

                    <footer className="footer">

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