import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Profile Component</h2>
      <h3>Welcome {user}</h3>
    </div>
  );
}

export default Profile;