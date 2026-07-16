import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>

      {user ? (
        <>
          <p>Name : {user}</p>
          <p>Email : {user.toLowerCase()}@gmail.com</p>
        </>
      ) : (
        <p>No User Logged In</p>
      )}
    </div>
  );
}

export default Profile;