import { useState } from "react";

function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.name === "" || form.email === "") {
      setError("All fields are required");
      return;
    }

    alert("Form Submitted");

    setError("");

    setForm({
      name: "",
      email: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <br />
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button>Submit</button>
    </form>
  );
}

export default StudentForm; 




