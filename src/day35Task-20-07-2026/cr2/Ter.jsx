import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>

      {
        isLoggedIn
        ? <h1>Welcome User</h1>
        : <h1>Please Login</h1>
      }

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Change Status
      </button>

    </div>
  );
}

export default App;