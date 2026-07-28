import React from "react";

function UserList() {
  const users = ["John", "David", "Sara"];

  return (
    <>
      <h2>User List</h2>

      {users.map((user, index) => (
        <React.Fragment key={index}>
          <p>{user}</p>
          <hr />
        </React.Fragment>
      ))}
    </>
  );
}

export default UserList;