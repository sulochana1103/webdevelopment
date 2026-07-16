import { useSelector } from "react-redux";
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {

  const employees =
    useSelector(state => state.employee.employees);

  return (
    <>
      <h2>Employees</h2>

      {
        employees.map(emp => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
          />
        ))
      }

    </>
  );
}

export default EmployeeList;