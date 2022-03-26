import Name from '../Name/Name';

const Cart = ({ cart, chooseOne, suggest, product, chooseAgain }) => {
  return (
    <div>
      <h2>Order summary</h2>
      {cart.map((product) => (
        <Name product={product} key={product.id}></Name>
      ))}
      {suggest.map((items) => (
        <div key={items[Math.floor(Math.random() * cart.length)].id}>
          <img src={items[Math.floor(Math.random() * cart.length)].img} alt='' />
          <h3>{items[Math.floor(Math.random() * cart.length)].name}</h3>
        </div>
      ))}
      <button onClick={() => chooseOne(product)}>Choose One</button>
      <button onClick={() => chooseAgain()}>Choose Again</button>
    </div>
  );
};

export default Cart;

// items[Math.floor(Math.random() * cart.length)]
