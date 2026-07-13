import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome {user}</h2>

      <button onClick={() => setUser("Guest")}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;