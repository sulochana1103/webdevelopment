function List() {
  const students = [
    { id: 1, name: "Sulochana", course: "React" },
    { id: 2, name: "Rahul", course: "Java" },
    { id: 3, name: "Priya", course: "Python" },
  ];

  return (
    <div>
      <h2>Student Details</h2>

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{student.name}</h3>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default List;