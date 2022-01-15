import axios from '../axios'

let handleLogin = (email,passWord)=>{
    return axios.post('/api/login',{
        userName: email,
        passWord:passWord
    })
}


let handleSaveOrder = (order)=>{
    return axios.post('/api/save-order',order)
}

let handleGetOrderByUserId = (cid)=>{
    return axios.get(`/api/find-order-by-userid?id=${cid}`)
}

export {handleLogin,handleSaveOrder,handleGetOrderByUserId}