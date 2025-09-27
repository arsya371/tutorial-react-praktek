import './App.css';
import ProductList from './components/ProductList';
import { useState, useEffect } from 'react';
import ProductCreate from './components/ProductCreate';
import { fetchProductsApi, createProductApi, editProductApi, deleteProductApi } from './api/productsAPI';

function App() {
  const [products, setProducts] = useState([]);
  const fetchProduct = async() => {
    const response = await fetchProductsApi()
    setProducts(response.data)
  }
  useEffect(() => {
    fetchProduct()
  }, [])
  const onEditProduct = async (id, data) => {
    const response = await editProductApi(id, data)

    const updatedProduct = products.map(prod => {
      if(prod.id === id) {
        return {...prod, ...response.data}
      }
      return prod
    });
    setProducts(updatedProduct);
  }

  const onCreateProduct = async (product) => {
    const response = await createProductApi(product)

    setProducts([
      ...products, response.data,
    ])
  }

  const onDeleteProduct = async (id) => {
    await deleteProductApi(id)
    const updatedProduct = products.filter((prod) => {
      return prod.id !== id
    });
    setProducts(updatedProduct) 
  }

  return ( 
    <> 
    <div className="app-title">Belanja Mobil</div>
    <ProductCreate onCreateProduct={onCreateProduct}/>
    <ProductList products={products} onDeleteProduct={onDeleteProduct} onEditProduct={onEditProduct}/>
    </>
  )
}

export default App;