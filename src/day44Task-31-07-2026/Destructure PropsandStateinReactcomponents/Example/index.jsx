function Product({ name, price, inStock }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>

      <p>
        {inStock ? "Available" : "Out of Stock"}
      </p>
    </div>
  );
}

function Example() {
  return (
    <div>
      <Product
        name="Laptop"
        price={50000}
        inStock={true}
      />

      <Product
        name="Mobile"
        price={25000}
        inStock={false}
      />
    </div>
  );
}

export default Example;