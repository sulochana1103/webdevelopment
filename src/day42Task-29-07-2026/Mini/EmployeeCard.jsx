//React.memo

import React from "react";

function EmployeeCard({ employee }) {
  console.log("EmployeeCard Render");

  return (
    <div>
      <h2>Employee Card</h2>

      <p>Name : {employee.name}</p>

      <p>Salary : ${employee.salary}</p>
    </div>
  );
}

export default React.memo(EmployeeCard);