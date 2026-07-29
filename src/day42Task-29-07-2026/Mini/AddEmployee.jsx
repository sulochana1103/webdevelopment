//useCallback

import React from "react";

function AddEmployee({ addEmployee }) {

  console.log("AddEmployee Render");

  return (
    <button onClick={addEmployee}>
      Add Employee
    </button>
  );
}

export default React.memo(AddEmployee);