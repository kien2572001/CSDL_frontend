import axios from '../axios'

let handleGetProductByCategory = (category)=>{
    let link  = '/api/get-product?category=' + encodeURIComponent(category)
    return axios.get(link)
}


let handleGetCategoryById = (id)=>{
    return axios.get(`./api/get-category-by-id?id=${id}`)
}

let handleGetStoreById = (id)=>{
    return axios.get(`./api/get-store-by-id?id=${id}`)
}

export {handleGetProductByCategory,handleGetCategoryById,handleGetStoreById}