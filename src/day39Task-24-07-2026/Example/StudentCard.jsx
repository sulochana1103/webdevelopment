function StudentCard({ student }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{student.name}</h3>
      <p>{student.email}</p>
      <p>{student.phone}</p>
    </div>
  );
}

export default StudentCard;