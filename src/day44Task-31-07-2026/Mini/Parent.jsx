import { Component } from "react";
import ChildPure from "./PureComponentChildPure";

class Parent extends Component {

  state = {
    count: 0,
  };

  render() {

    return (
      <>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count,
            })
          }
        >
          Re-render
        </button>

        <ChildPure />
      </>
    );
  }
}

export default Parent;