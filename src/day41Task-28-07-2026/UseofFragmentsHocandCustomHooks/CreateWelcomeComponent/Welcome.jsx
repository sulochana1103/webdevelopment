import React from "react";
import useCounter from "../CreateCustomHook/useCounter";

function Welcome() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h2>Custom Hook Example</h2>

      <h3>Count : {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Welcome;