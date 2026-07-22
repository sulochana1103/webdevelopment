import { useState } from "react";

function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Login Form</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={login.username}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={login.password}
        onChange={handleChange}
      />

      <hr />

      <p>Username: {login.username}</p>
      <p>Password: {login.password}</p>
    </div>
  );
}

export default Login;