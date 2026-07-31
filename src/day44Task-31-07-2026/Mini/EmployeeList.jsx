import { useMemo, useState, useCallback } from "react";
import EmployeeCard from "./ReactMemoEmployeeCard";

function EmployeeList() {

  const [employees, setEmployees] = useState([
    { id: 1, name: "Rahul", role: "Developer", salary: 50000 },
    { id: 2, name: "Priya", role: "Tester", salary: 40000 },
    { id: 3, name: "Kiran", role: "Designer", salary: 45000 }
  ]);

  const totalSalary = useMemo(() => {
    return employees.reduce(
      (sum, emp) => sum + emp.salary,
      0
    );
  }, [employees]);

  const deleteEmployee = useCallback((id) => {
    setEmployees((prev) =>
      prev.filter((emp) => emp.id !== id)
    );
  }, []);

  return (
    <>
      <h2>Employees</h2>

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={deleteEmployee}
        />
      ))}

      <h3>Total Salary : {totalSalary}</h3>
    </>
  );
}

export default EmployeeList;