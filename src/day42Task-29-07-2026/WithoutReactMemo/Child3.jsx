import React from "react";

function Child({ name }) {
  console.log("Child Render");

  return <h2>Hello {name}</h2>;
}

export default Child;