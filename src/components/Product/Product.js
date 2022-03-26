import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({product}) => {
  const {img, name, price, ratings} = product;
  return (
    <div className='product'>
      <img src={img} alt='' />
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      <button className='btn-product'>
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;