import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Name from '../Name/Name';
import './Cart.css';

const Cart = ({ cart, chooseOne, suggest, product, chooseAgain }) => {
  return (
    <div>
      <h2 className='cart-header'>Order summary</h2>
      {cart.map((product) => (
        <Name product={product} key={product.id}></Name>
      ))}
      {suggest.map((items) => (
        <div className='choose-container' key={items[Math.floor(Math.random() * cart.length)].id}>
          <img src={items[Math.floor(Math.random() * cart.length)].img} alt='' />
          <h3 className='choose-header'>{items[Math.floor(Math.random() * cart.length)].name}</h3>
          <button className='icon'>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      ))}
      <button className='btn-selected-cart' onClick={() => chooseOne(product)}>Choose One</button>
      <br />
      <button className='btn-selected-cart' onClick={() => chooseAgain()}>Choose Again</button>
    </div>
  );
};

export default Cart;