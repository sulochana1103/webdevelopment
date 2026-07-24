import { useState, useEffect } from "react";

function A() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Runs after every render");
  });

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default A;