import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../utils";

import userIcon from '../../src/assets/images/user.svg';
import passIcon from '../../src/assets/images/pass.svg';
import './Login.scss';
import { FormattedMessage } from 'react-intl';

import adminService from '../services/adminService';

import ReactDOM from "react-dom";

// eslint-disable-next-line
import "swiper/bundle";
import "../components/Decorate/slider.css";
import Slider from "../components/Decorate/slider.js";

import "../components//Decorate/SearchBar.css";
import SearchBar from '../components/Decorate/SearchBar.js';

import "../components/Decorate/slogan.css";
import Slogan from '../components/Decorate/slogan.js';

import background from '../components/Decorate/bg.png';


class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
    }

    initialState = {
        username: '',
        password: '',
        loginError: ''
    }

    state = {
        ...this.initialState
    };

    refresh = () => {
        this.setState({
            ...this.initialState
        })
    }

    onUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    redirectToSystemPage = () => {
        const { navigate } = this.props;
        const redirectPath = '/system/user-manage';
        navigate(`${redirectPath}`);
    }

    processLogin = () => {
        const { username, password } = this.state;

        const { adminLoginSuccess, adminLoginFail } = this.props;
        let loginBody = {
            username: 'admin',
            password: '123456'
        }
        //sucess
        let adminInfo = {
            "tlid": "0",
            "tlfullname": "Administrator",
            "custype": "A",
            "accessToken": "eyJhbGciOiJIU"
        }

        adminLoginSuccess(adminInfo);
        this.refresh();
        this.redirectToSystemPage();
        try {
            adminService.login(loginBody)
        } catch (e) {
            console.log('error login : ', e)
        }

    }

    handlerKeyDown = (event) => {
        const keyCode = event.which || event.keyCode;
        if (keyCode === KeyCodeUtils.ENTER) {
            event.preventDefault();
            if (!this.btnLogin.current || this.btnLogin.current.disabled) return;
            this.btnLogin.current.click();
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handlerKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlerKeyDown);
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        const { username, password, loginError } = this.state;
        const { lang } = this.props;

        return (
            <>
                <div className="login-wrapper">
                    <div className="login-container">
                        <div className='bg'>
                            <Slogan />
                            <SearchBar />
                        </div>
                        <Slider />
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
