import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ViewProduct from '../components/Product/ViewProduct';
import SideBar from '../components/Sidebar/SideBar'
import 'bootstrap'
import './Home.scss'
import HomeSearch from '../components/HomeSearch/HomeSearch';
import Slider from '../components/Slider/Slider';
class Home extends Component {

    render() {
        const { isLoggedIn } = this.props;
        //let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';
        //let linkToRedirect = '/'
        return (
            // <Redirect to={linkToRedirect} />
            <>  
                <div className='.container-fluid'>
                    <HomeSearch/>
                    <Slider/>
                    <div className='row'>
                        <div className='col-sm-2 sidebar'>
                            <SideBar/>
                        </div>
                        <div className=' item-container'>
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/>  
                        <ViewProduct/>       
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        <ViewProduct/> 
                        </div>
                    </div>
                </div>
                
                
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
