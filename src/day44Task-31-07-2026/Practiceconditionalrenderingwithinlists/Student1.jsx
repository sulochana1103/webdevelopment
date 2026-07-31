function Student1() {
  const students = [
    { id: 1, name: "Rahul", marks: 80 },
    { id: 2, name: "Priya", marks: 35 },
    { id: 3, name: "Kiran", marks: 65 },
  ];

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>

          {student.marks >= 40 ? (
            <p style={{ color: "green" }}>Pass</p>
          ) : (
            <p style={{ color: "red" }}>Fail</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Student1;