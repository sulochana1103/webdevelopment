import { useState } from "react";

function LoginFunctional() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Login Successful");
  }

  function handleFocus(field) {
    console.log(field + " Focused");
  }

  function handleBlur(field) {
    console.log(field + " Left");
  }

  function loginMessage(name) {
    alert("Welcome " + name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Login</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
        onFocus={() => handleFocus("Username")}
        onBlur={() => handleBlur("Username")}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        onFocus={() => handleFocus("Password")}
        onBlur={() => handleBlur("Password")}
      />

      <br /><br />

      <button
        type="button"
        onClick={() => loginMessage(username)}
      >
        Welcome
      </button>

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginFunctional;