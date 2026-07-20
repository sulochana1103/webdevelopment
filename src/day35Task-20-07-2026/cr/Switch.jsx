function OrderStatus() {
  const status = "shipped";

  switch (status) {
    case "pending":
      return <h1>Order is Pending</h1>;

    case "confirmed":
      return <h1>Order Confirmed</h1>;

    case "shipped":
      return <h1>Order Shipped</h1>;

    case "delivered":
      return <h1>Order Delivered</h1>;

    default:
      return <h1>Order Cancelled</h1>;
  }
}
export default OrderStatus;