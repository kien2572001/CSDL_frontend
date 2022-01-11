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

export {handleLogin,handleSaveOrder}