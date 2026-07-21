import { useEffect, useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load students");
        }

        return response.json();
      })
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading students...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.email}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;