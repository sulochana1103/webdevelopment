import React, { useEffect, useState } from "react";

function FetchUseEffectAsync() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUsers() {

      try {

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        setUsers(data);

      } catch (error) {

        console.log(error);

      }

    }

    fetchUsers();

  }, []);

  return (
    <>
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default FetchUseEffectAsync;