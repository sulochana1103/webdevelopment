import React from "react";

function GetFetch() {

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={getUsers}>GET Users</button>
    </>
  );
}

export default GetFetch;