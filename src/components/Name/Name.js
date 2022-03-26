import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Name.css';

const Name = ({ product }) => {
  const { img, name } = product;
  return (
    <div>
      <div className='cart-detail'>
        <img src={img} alt='' />
        <h3 className='cart-product-name'>{name}</h3>
        <button>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Name;
