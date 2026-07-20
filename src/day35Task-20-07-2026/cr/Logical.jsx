function Cart() {
  const cartItems = 3;

  return (
    <div>
      <h1>Shopping Cart</h1>

      <p>Items: {cartItems}</p>

      {cartItems > 0 && (
        <button>Proceed to Checkout</button>
      )}
    </div>
  );
}

export default Cart;