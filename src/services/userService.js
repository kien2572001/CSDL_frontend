import axios from '../axios'

let handleLogin = (email,passWord)=>{
    return axios.post('/api/login',{
        userName: email,
        passWord:passWord
    })
}


export {handleLogin}