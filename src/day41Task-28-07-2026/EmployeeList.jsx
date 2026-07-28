function Employee({ name, department }) {
  return (
    <>
      <h3>{name}</h3>
      <p>Department: {department}</p>
      <hr />
    </>
  );
}

export default Employee;