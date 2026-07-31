function List3() {
  const employees = [
    { id: 1, name: "Amit", role: "Developer" },
    { id: 2, name: "Neha", role: "Tester" },
    { id: 3, name: "Raj", role: "Designer" },
  ];

  return (
    <div>
      {employees.map(({ id, name, role }) => (
        <div key={id}>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      ))}
    </div>
  );
}

export default List3;