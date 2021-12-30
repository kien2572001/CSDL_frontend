import React from "react";
import './HomeSearch.scss'

class HomeSearch extends React.Component{
    render(){
        return (
            <div className="home-search">
                <div className="slogan-content">
                    <h1>Groceries Delivered in 90 Minute</h1>
                    <p>Get your healthy foods &nap; snacks delivered at your doorsteps all day everyday</p>
                    <div className="search-bar">
                        <input/>
                        <button>Search</button>
                    </div>
                </div>              
            </div>
        )
    }
}

export default HomeSearch