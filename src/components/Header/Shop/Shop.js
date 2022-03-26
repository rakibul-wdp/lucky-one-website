import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='shop-container'>
      <div className='products-container'>
        <h1>shop container</h1>
        {
          products.map(product => console.log(product))
        }
      </div>
      <div className='selected-cart-container'>
        <h2>cart container</h2>
      </div>
    </div>
  );
};

export default Shop;
