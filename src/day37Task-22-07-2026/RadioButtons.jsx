import { useState } from "react";

function RadioExample() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <h2>Select Gender</h2>

      <label>
        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>

      <br />

      <label>
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>

      <p>Gender: {gender}</p>
    </div>
  );
}

export default RadioExample;