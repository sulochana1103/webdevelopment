function StudentCard({ student, deleteStudent }) {
  return (
    <div className="card">
      <h3>{student.name}</h3>

      <p>{student.email}</p>

      <p>{student.course}</p>

      <button onClick={() => deleteStudent(student.id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;