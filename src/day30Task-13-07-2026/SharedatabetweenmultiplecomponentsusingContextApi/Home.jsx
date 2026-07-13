import { useContext } from "react";
import StudentContext from "./StudentContext";

function Home() {
  const student = useContext(StudentContext);

  return <h2>Home : Welcome {student}</h2>;
}

export default Home;