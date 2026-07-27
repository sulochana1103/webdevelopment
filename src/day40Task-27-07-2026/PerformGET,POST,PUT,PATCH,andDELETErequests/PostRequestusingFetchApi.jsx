import React from "react";

function PostFetch() {

  const addUser = async () => {

    const newUser = {
      name: "Sulochana",
      email: "sulochana@gmail.com",
    };

    try {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newUser),
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
      <button onClick={addUser}>POST User</button>
    </>
  );
}

export default PostFetch;