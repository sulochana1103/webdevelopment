import React, { PureComponent } from "react";

class ChildPure extends PureComponent {

  render() {

    console.log("Pure Component");

    return <h2>Pure Component</h2>;
  }
}

export default ChildPure;