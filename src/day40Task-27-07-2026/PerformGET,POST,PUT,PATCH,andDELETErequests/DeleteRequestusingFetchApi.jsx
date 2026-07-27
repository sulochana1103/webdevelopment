import React from "react";

function DeleteFetch() {

  const deleteUser = async () => {

    try {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("User Deleted Successfully");
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <button onClick={deleteUser}>DELETE User</button>
    </>
  );
}

export default DeleteFetch;