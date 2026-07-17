import { useState, useContext } from "react";
import { StudentContext } from "./StudentContext";

function StudentForm() {
  const { students, setStudents } = useContext(StudentContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const addStudent = (e) => {
    e.preventDefault();

    if (!name || !email || !course) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      email,
      course,
    };

    setStudents([...students, newStudent]);

    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <form onSubmit={addStudent} className="form">
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Student Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;