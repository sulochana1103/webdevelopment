import React from "react";

function withBorder(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div
        style={{
          border: "2px solid blue",
          padding: "15px",
          margin: "15px",
          borderRadius: "10px",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withBorder;