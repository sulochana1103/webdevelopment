import { useState } from "react";

function FileInputExample() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div>
      <h2>File Upload</h2>

      <input
        type="file"
        onChange={handleFileChange}
      />

      <p>Selected File: {fileName}</p>
    </div>
  );
}

export default FileInputExample;