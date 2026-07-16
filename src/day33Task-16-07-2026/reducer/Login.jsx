import { useReducer } from "react";
import { reducer, initialState } from "./reducer";

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    setTimeout(() => {
      if (
        state.email === "admin@gmail.com" &&
        state.password === "12345"
      ) {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: "Invalid Email or Password",
        });
      }
    }, 1000);
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "EMAIL",
              payload: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "PASSWORD",
              payload: e.target.value,
            })
          }
        />

        <br />
        <br />

        <button type="submit">
          {state.loading ? "Logging in..." : "Login"}
        </button>

        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </form>

      <br />

      {state.success && (
        <p style={{ color: "green" }}>
          {state.success}
        </p>
      )}

      {state.error && (
        <p style={{ color: "red" }}>
          {state.error}
        </p>
      )}
    </div>
  );
}

export default Login;