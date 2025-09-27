import axios from 'axios';

export const fetchProductsApi = async() => {
    const response = await axios.get('http://localhost:3005/products')
    return response
}

export const createProductApi = async(product) => {
    const response = await axios.post('http://localhost:3005/products', product)
    return response
}

export const editProductApi = async(id, data) => {
    const response = await axios.put(`http://localhost:3005/products/${id}`, data)
    return response
}

export const deleteProductApi = async(id) => {
    await axios.delete(`http://localhost:3005/products/${id}`)
}