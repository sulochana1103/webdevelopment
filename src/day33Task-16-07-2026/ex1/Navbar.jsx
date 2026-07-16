import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Navbar</h2>
      {user ? <p>Welcome, {user}</p> : <p>Please Login</p>}
    </div>
  );
}

export default Navbar;