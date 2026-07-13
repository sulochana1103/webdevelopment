import { useContext } from "react";
//import UserContext from "./UserContext";
//import UserContext from "./day28Task-9-07-2026/contextApi/UserContext";
import UserContext from './day30Task-13-07-2026/ContextProviderandConsumerExample';


function Home() {
  const user = useContext(UserContext);

  return (
    <h1>Welcome {user}</h1>
  );
}

export default Home;