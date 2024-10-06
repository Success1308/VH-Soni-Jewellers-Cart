const Cart = ({ cartItems, removeItemFromCart }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeItemFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={() => alert("Checkout not implemented")}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
