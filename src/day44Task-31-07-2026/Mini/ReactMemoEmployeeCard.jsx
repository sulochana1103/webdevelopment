import React from "react";

const EmployeeCard = React.memo(function EmployeeCard({
  employee,
  onDelete,
}) {
  const { id, name, role, salary } = employee;

  console.log("Employee Card Rendered");

  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{salary}</p>

      <button onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
});

export default EmployeeCard;