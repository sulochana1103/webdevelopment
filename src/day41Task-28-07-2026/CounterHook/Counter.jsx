import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <h2>{count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default Counter;