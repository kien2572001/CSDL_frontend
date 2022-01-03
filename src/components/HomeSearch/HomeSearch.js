import React from "react";
import './HomeSearch.scss'

class HomeSearch extends React.Component {
    render() {
        return (
            <div className="home-search">
                <div className="slogan-content">
                    <div className="text1">
                        <h1 class="text-2xl lg:text-4xl xl:text-5xl tracking-tight text-heading font-bold">Groceries Delivered in 90 Minute</h1>
                    </div>
                    <div className="text2">
                        <p class="text-sm lg:text-base xl:text-lg text-heading">Get your healthy foods &amp; snacks delivered at your doorsteps all day everyday</p>
                    </div>
                    <>
                        <nav class="navbar navbar-light justify-content-between fonttext">
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search your products from here" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    <i class="fas fa-search"></i>
                                    <span>Search</span>
                                </button>
                            </form>
                        </nav>
                    </>
                    <div className="nuller"></div>
                </div>
            </div>
        )
    }
}

export default HomeSearch