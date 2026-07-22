import { useState } from "react";

function TextField() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Controlled Text Field</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Name: {name}</h3>
    </div>
  );
}

export default TextField;