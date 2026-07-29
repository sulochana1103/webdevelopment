import React, { PureComponent } from "react";

class Child extends PureComponent {
  render() {
    console.log("Child Rendered");

    return (
      <h2>Name: {this.props.name}</h2>
    );
  }
}

export default Child;