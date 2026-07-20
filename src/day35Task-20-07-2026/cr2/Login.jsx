import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("student");

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>Please Login</h2>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </div>
      ) : (
        <div>
          <h2>Welcome</h2>

          {role === "admin" ? (
            <h3>Admin Dashboard</h3>
          ) : role === "teacher" ? (
            <h3>Teacher Dashboard</h3>
          ) : (
            <h3>Student Dashboard</h3>
          )}

          <button onClick={() => setRole("admin")}>
            Admin
          </button>

          <button onClick={() => setRole("teacher")}>
            Teacher
          </button>

          <button onClick={() => setRole("student")}>
            Student
          </button>

          <br /><br />

          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;