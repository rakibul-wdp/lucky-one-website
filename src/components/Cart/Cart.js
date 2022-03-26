import React from 'react';
import Name from '../Name/Name';

const Cart = ({cart}) => {
  
  return (
    <div>
      <h2>Order summary</h2>
      {/* <p>Total product: {product.name}</p> */}
      {cart.map((product) => (
        <Name product={product} key={product.id}></Name>
      ))}
    </div>
  );
};

export default Cart;