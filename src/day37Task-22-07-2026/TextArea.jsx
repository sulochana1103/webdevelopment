import { useState } from "react";

function TextAreaExample() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>Text Area</h2>

      <textarea
        rows="5"
        cols="30"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <p>{message}</p>
    </div>
  );
}

export default TextAreaExample;