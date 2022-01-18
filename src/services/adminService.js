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

    handleGetOrderBySid(sid){
        return axios.get(`/api/admin/get-order-by-sid?sid=${sid}`)
    },

    handleGetOrderItemBySidAndOrderId(orderId,sid){
        return axios.get(`/api/get-order-item-by-sid-orderid`,{
            params: {
              orderId: orderId,
              sid: sid
            }
          })
    },

    handleChangeOrderStatus(orderId,status){
        return axios.post('/api/change-order-status',{
            orderId: orderId,
            status: status 
        })
    },

    handleGetProductBySid(sid){
        return axios.get(`/api/get-product-by-sid?sid=${sid}`)
    }

};

export default adminService;