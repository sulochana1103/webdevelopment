import { useContext } from "react";
import { UserContext } from "./UserContext";

function Login() {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Login</h2>

      <button onClick={() => setUser("Sulochana")}>
        Login
      </button>
    </div>
  );
}

export default Login;