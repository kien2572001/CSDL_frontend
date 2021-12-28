
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fontawesome/css/all.css'

// import appchild from "./appchild";


import "./SearchBar.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import { render } from "react-dom";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


function SearchBar() {
    return (
        <>
            <>
                <nav class="navbar navbar-light justify-content-between">
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
        </>
    )
}
export default SearchBar;