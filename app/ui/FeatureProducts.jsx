import React from 'react';
import Product from './Product';
import { fetchProducts } from '../lib/data';

const FeatureProducts = async () => {
  const products = await fetchProducts();
  
  return (
    <>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Variety of speakers and headphones</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (<Product product={product} key={product._id}/>))}
      </div>
    </>
  )
}

export default FeatureProducts;