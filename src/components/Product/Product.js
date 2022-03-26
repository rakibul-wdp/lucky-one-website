import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
  const {img, name, price, ratings} = product;
  return (
    <div className='product'>
      <img src={img} alt='' />
      <div className='product-info'>
        <h3 className='product-name'>{name}</h3>
        <p>Price: ${price}</p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className='btn-product'>
        <p className='btn-text'>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;