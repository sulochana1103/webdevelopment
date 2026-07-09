import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return (
    <>
      <h3>Profile</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </>
  );
}

export default Profile;