import React from "react";

function FetchThen() {

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={getUsers}>Fetch Users</button>
    </>
  );
}

export default FetchThen;