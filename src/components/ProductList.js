import React from 'react'
import ProductCard from '../components/ProductCard';

const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
  return (
    <div className="cards">
      {products.map((product) => {
        return (
        <ProductCard key={product.id} product={product} onDeleteProduct={onDeleteProduct} onEditProduct={onEditProduct}/>
        )
      })}
    </div>
  )
}

export default ProductList
