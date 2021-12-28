import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ViewProduct from '../components/Product/ViewProduct';

class Home extends Component {

    render() {
        const { isLoggedIn } = this.props;
        //let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';
        //let linkToRedirect = '/'
        return (
            // <Redirect to={linkToRedirect} />
            <>
                <ViewProduct/>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
