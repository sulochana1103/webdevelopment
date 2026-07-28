import React from "react";

function List() {
  const users = ["John", "Alice"];

  return (
    <>
      {users.map((user) => (
        <React.Fragment key={user}>
          <h2>{user}</h2>
          <hr />
        </React.Fragment>
      ))}
    </>
  );
}

export default List;