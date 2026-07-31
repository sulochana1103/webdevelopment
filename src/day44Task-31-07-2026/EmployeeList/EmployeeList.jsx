function EmployeeList() {
  const employees = [
    { id: 101, name: "Rahul", role: "Developer" },
    { id: 102, name: "Priya", role: "Tester" },
    { id: 103, name: "Kiran", role: "Designer" },
  ];

  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;