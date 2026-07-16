import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Toolkit Example</h2>

      <h3>Count : {count}</h3>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default Counter;