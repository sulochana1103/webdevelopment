import { useReducer } from "react";

const initialState = {
  items: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { items: state.items + 1 };
    case "REMOVE":
      return { items: state.items - 1 };
    case "RESET":
      return { count: 0};
    default:
      return state;
  }
}
function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Items : {state.items}</h3>
      <button onClick={() => dispatch({ type: "ADD" })}>Add Item</button>
      <button onClick={() => dispatch({ type: "REMOVE" })}>Remove Item</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default ShoppingCart;