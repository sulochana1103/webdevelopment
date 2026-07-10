import React, { useState } from "react";
import axios from "axios";

function Employees() {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setEmployees(response.data);
    } catch (error) {
      alert("Unable to load employee data.");
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={getEmployees}>Load Employees</button>

      {employees.map((employee) => (
        <p key={employee.id}>
          {employee.name} - {employee.email}
        </p>
      ))}
    </div>
  );
}

export default Employees;