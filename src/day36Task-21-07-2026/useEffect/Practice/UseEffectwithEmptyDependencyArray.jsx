import { useEffect } from "react";
import UseEffectwithoutDependencyArray from "./UseEffectwithoutdependencyarray";

function UseEffectwithEmptyDependencyArray() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div>
      <h2>Welcome to React</h2>
    </div>
  );
}

export default UseEffectwithEmptyDependencyArray;