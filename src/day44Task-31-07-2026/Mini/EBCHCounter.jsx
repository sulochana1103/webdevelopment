import useCounter from "./CustomHookuseCounter";

function Counter() {

  const { count, increment } = useCounter();

  return (
    <>
      <h2>{count}</h2>

      <button onClick={increment}>
        Increment
      </button>
    </>
  );
}

export default Counter;