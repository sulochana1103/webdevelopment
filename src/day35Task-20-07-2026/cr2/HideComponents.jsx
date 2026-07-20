import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome Sulochana</h1>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;