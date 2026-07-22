import { useState } from "react";

function DropdownExample() {
  const [course, setCourse] = useState("");

  return (
    <div>
      <h2>Select Course</h2>

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
        <option value="Vue">Vue</option>
      </select>

      <p>Selected Course: {course}</p>
    </div>
  );
}

export default DropdownExample;