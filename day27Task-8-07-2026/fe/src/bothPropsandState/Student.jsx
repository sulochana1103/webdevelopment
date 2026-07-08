import { useState } from "react";

function Student(props) {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Student Details</h2>

      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>

      <p>Likes: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Like
      </button>
    </div>
  );
}

export default Student;