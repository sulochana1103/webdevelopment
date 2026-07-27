import React from "react";

function PatchFetch() {

  const updateEmail = async () => {

    try {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: "newemail@gmail.com",
          }),
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
      <button onClick={updateEmail}>PATCH User</button>
    </>
  );
}

export default PatchFetch;