import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ViewProduct from "../components/Product/ViewProduct";
import SideBar from "../components/Sidebar/SideBar";
import "bootstrap";
import "./Home.scss";
import HomeSearch from "../components/HomeSearch/HomeSearch";
import Slider from "../components/Slider/Slider";
import ProductCart from "../components/ProductCart/ProductCart";
import { handleGetProductByCategory } from "../services/productService";
import { v4 as uuidv4 } from "uuid";
import { handleSearchProductByName } from "../services/productService";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    //this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory = async (category) => {
    let data = await handleGetProductByCategory(category);
    this.setState({
      products: data.products,
    });
  };

  async componentDidMount() {
    let data = await handleGetProductByCategory("Fruits & Vegetables");
    this.setState({
      products: data.products,
    });
  }

  searchProduct = async (name) => {
    let data = await handleSearchProductByName(name);
    console.log(data);
    let products = data.products;
    this.setState({
      products: products,
    });
    this.scrollToProduct();
  };

  scrollToProduct = () => {
    Scroll.animateScroll.scrollTo(1200);
  };

  render() {
    const { isLoggedIn } = this.props;
    //let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';
    //let linkToRedirect = '/'
    let arrProducts = this.state.products;
    return (
      // <Redirect to={linkToRedirect} />
      <>
        <div className=".container-fluid">
          <HomeSearch searchProduct={this.searchProduct} />
          <Slider />
          <div className="row">
            <div className="col-sm-2 sidebar">
              <SideBar changeCategory={this.changeCategory} />
            </div>
            <div className=" item-container">
              {arrProducts.map((item, index) => {
                return <ViewProduct product={item} key={uuidv4()} />;
              })}
            </div>
          </div>

          <div className="cart-shopping">
            <ProductCart />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
