function Students() {
  const students = [
    {
      id: 1,
      name: "Sulochana",
      subjects: ["React", "JavaScript", "HTML"],
    },
    {
      id: 2,
      name: "Rahul",
      subjects: ["Java", "Spring", "SQL"],
    },
  ];

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>

          <ul>
            {student.subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Students;