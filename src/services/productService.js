import axios from '../axios'

let handleGetProductByCategory = (category) => {
  let link = '/api/get-product?category=' + encodeURIComponent(category)
  return axios.get(link)
}

let handleGetCategoryById = (id) => {
  return axios.get(`/api/get-category-by-id?id=${id}`)
}

let handleGetStoreById = (id) => {
  return axios.get(`/api/get-store-by-id?id=${id}`)
}

let handleSaveToOrderItem = (item) => {
  return axios.post('/api/save-to-order-item', item)
}

let handleFindOrderById = (id) => {
  return axios.get('/api/find-order-by-id?id=' + encodeURIComponent(id))
}

let handleFindProductById = (id) => {
  return axios.get(`/api/find-product-by-id?id=${id}`)
}

let handleGetProductByStoreId = (sid)=>{
  return axios.get('/api/get-product-by-storeId?sid=',sid)
}

export {
  handleGetProductByCategory,
  handleGetCategoryById,
  handleGetStoreById,
  handleSaveToOrderItem,
  handleFindOrderById,
  handleFindProductById,
  handleGetProductByStoreId
}
