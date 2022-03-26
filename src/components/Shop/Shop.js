import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [suggest, setSuggest] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }
  const chooseOne = (products) => {
    const newCart = [products];
    setSuggest(newCart);
  }
  const removeCart = () => {
    setCart([]);
    setSuggest([]);
  }
  return (
    <div className='shop-container'>
      <div className='products-container'>
        {
          products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
        }
      </div>
      <div className='selected-cart-container'>
        <Cart cart={cart} product={products} chooseOne={chooseOne} suggest={suggest} chooseAgain={removeCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
