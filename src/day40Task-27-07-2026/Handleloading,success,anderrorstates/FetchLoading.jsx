import React, { useState } from "react";

function FetchLoading() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const getUsers = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
      setSuccess("Users fetched successfully.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Fetch Users</button>

      {loading && <h3>Loading...</h3>}

      {success && <h3 style={{ color: "green" }}>{success}</h3>}

      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchLoading;