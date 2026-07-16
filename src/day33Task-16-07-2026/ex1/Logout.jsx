import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Logout() {
  const { logout } = useContext(AuthContext);

  return (
    <button onClick={logout}>
      Logout
    </button>
  );
}

export default Logout;