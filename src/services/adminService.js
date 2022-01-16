import axios from '../axios';
import * as queryString from 'query-string';

const adminService = {

    /**
     * Đăng nhập hệ thống
     * {
     *  "username": "string",
     *  "password": "string"
     * }
     */
    login(userName,passWord) {
        return axios.post(`api/admin/login`, {userName,passWord})
    },

};

export default adminService;