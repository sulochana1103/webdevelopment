import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <Link to="/products">Products</Link>
      <br />

      <Link to="/dashboard">Dashboard</Link>
    </>
  );
}

export default Home;