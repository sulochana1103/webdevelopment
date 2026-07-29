//Pure Component

import React, { PureComponent } from "react";

class EmployeeClass extends PureComponent {
  render() {
    console.log("EmployeeClass Render");

    return (
      <div>
        <h2>Employee Name : {this.props.name}</h2>
      </div>
    );
  }
}

export default EmployeeClass;