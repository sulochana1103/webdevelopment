import { useState } from "react";

function CheckboxExample() {
  const [skills, setSkills] = useState([]);

  const handleSkill = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  return (
    <div>
      <h2>Select Skills</h2>

      <label>
        <input
          type="checkbox"
          value="HTML"
          onChange={handleSkill}
        />
        HTML
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="CSS"
          onChange={handleSkill}
        />
        CSS
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="React"
          onChange={handleSkill}
        />
        React
      </label>

      <p>Skills: {skills.join(", ")}</p>
    </div>
  );
}

export default CheckboxExample;