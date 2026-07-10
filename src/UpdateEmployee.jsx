import { useState } from "react";

function UpdateEmployee() {
  const [employee, setEmployee] = useState({
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    department: "IT",
  });

  const updateEmployee = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employee),
        }
      );

      const data = await response.json();

      console.log(data);
      alert("Employee Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>

      <button onClick={updateEmployee}>
        Update Employee
      </button>
    </div>
  );
}

export default UpdateEmployee;