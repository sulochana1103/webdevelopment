import { useState, useEffect } from "react";

function UseEffectwithoutDependencyArray() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Rendered");
  });

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UseEffectwithoutDependencyArray; 