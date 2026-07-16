import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return <h3>User Name: {user}</h3>;
}

export default Profile;