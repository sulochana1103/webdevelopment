import { useContext } from "react";
import UserContext from "./UserContext";

function Home() {
  const name = useContext(UserContext);

  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
}

export default Home;