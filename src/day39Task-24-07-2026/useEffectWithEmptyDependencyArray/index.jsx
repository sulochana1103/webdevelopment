import { useEffect } from "react";

function A() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <h2>Welcome to React</h2>;
}

export default A;