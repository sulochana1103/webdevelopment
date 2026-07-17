import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function Navbar() {

  const { user } = useContext(StudentContext);

  return (

    <div className="navbar">

      <h1>Student Management System</h1>

      <h3>Welcome {user}</h3>

    </div>

  );
}

export default Navbar;