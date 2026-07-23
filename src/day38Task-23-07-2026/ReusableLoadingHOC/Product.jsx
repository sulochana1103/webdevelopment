function Products({ products }) {
  return (
    <div>
      {products.map((product) => (
        <h3 key={product.id}>{product.name}</h3>
      ))}
    </div>
  );
}

export default Products;