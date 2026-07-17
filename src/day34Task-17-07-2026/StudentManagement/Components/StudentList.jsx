import { useContext, useEffect, useState } from "react";
import { StudentContext } from "./StudentContext";
import StudentCard from "./StudentCard";
import { getStudents } from "./api";

function StudentList() {
  const { students, setStudents } = useContext(StudentContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const data = await getStudents();

        const updatedStudents = data.map((student) => ({
          id: student.id,
          name: student.name,
          email: student.email,
          course: "React",
        }));

        setStudents(updatedStudents);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }

    fetchStudents();
  }, []);

  const deleteStudent = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
        />
      ))}
    </div>  
  );
}

export default StudentList;