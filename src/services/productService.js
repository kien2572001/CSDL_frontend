import axios from '../axios'

let handleGetProductByCategory = (category)=>{
    let link  = '/api/get-product?category=' + encodeURIComponent(category)
    return axios.get(link)
}


export {handleGetProductByCategory}