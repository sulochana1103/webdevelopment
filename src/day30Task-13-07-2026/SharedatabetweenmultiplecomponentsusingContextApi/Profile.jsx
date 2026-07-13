import { useContext } from "react";
import StudentContext from "./StudentContext";

function Profile() {
  const student = useContext(StudentContext);

  return <h2>Profile : {student}</h2>;
}

export default Profile;