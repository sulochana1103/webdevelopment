import React from "react";

function ProductCard({ product }) {
  console.log("Product Render");

  return (
    <>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </>
  );
}

export default React.memo(ProductCard);