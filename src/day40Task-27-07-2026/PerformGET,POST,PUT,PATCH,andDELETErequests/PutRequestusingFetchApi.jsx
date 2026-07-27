import React from "react";

function PutFetch() {

  const updateUser = async () => {

    const updatedUser = {
      id: 1,
      name: "Updated Name",
      email: "updated@gmail.com",
    };

    try {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(updatedUser),
        }
      );

      const data = await response.json();

      console.log(data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <>
      <button onClick={updateUser}>PUT User</button>
    </>
  );
}

export default PutFetch;