import { useState } from "react";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const addEmployee = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employee),
        }
      );

      const data = await response.json();

      console.log("Employee Added:", data);
      alert("Employee Added Successfully!");

      setEmployee({
        name: "",
        email: "",
        department: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={addEmployee}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Employee Email"
          value={employee.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;