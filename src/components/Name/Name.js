import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Name.css';

const Name = ({product}) => {
  const {img, name} = product;
  return (
    <div className='cart-img'>
      <img src={img} alt="" />
      <p>{name}</p>
      <button>
        <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Name;