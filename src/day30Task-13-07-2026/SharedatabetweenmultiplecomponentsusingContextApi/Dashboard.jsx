import { useContext } from "react";
import StudentContext from "./StudentContext";

function Dashboard() {
  const student = useContext(StudentContext);

  return <h2>Dashboard : {student}</h2>;
}

export default Dashboard;