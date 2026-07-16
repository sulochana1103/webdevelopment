import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Navbar</h2>

      {user ? (
        <h3>Welcome {user}</h3>
      ) : (
        <h3>Please Login</h3>
      )}
    </div>
  );
}

export default Navbar;