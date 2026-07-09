import { useContext } from "react";
import UserContext from "./UserContext";

function Dashboard() {
  const user = useContext(UserContext);

  return <h3>Hello, {user.name}</h3>;
}

export default Dashboard;