import { Link } from "react-router-dom";

function Students() {
  const students = [
    { id: 101, name: "Rahul" },
    { id: 102, name: "Priya" },
    { id: 103, name: "Arjun" }
  ];

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            {student.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Students;