import { useContext } from "react";
import UserContext from "./UserContext";

function Dashboard() {
  const user = useContext(UserContext);

  return <h2>Dashboard: Welcome {user}</h2>;
}

export default Dashboard;