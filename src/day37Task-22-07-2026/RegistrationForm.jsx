import { useState } from "react";

function RegistrationForm1() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    course: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // Single Change Handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.gender) {
      newErrors.gender = "Select gender";
    }

    if (!form.course) {
      newErrors.course = "Select course";
    }

    if (!form.agree) {
      newErrors.agree = "Accept Terms & Conditions";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Registration Successful!");

    console.log(form);

    setErrors({});

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      course: "",
      agree: false,
    });
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.password}</p>

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.confirmPassword}</p>

        {/* Gender */}
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <p style={{ color: "red" }}>{errors.gender}</p>

        {/* Course */}
        <select
          name="course"
          value={form.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>

        <p style={{ color: "red" }}>{errors.course}</p>

        {/* Checkbox */}
        <div>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            I Agree to Terms & Conditions
          </label>
        </div>

        <p style={{ color: "red" }}>{errors.agree}</p>

        <button type="submit">Register</button>
      </form>

      <hr />

      <h3>Live Preview</h3>

      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
      <p>Gender: {form.gender}</p>
      <p>Course: {form.course}</p>
    </div>
  );
}

export default RegistrationForm1;