function withLogger(Component) {
  return function Enhanced(props) {
    console.log("Component Rendered");

    return <Component {...props} />;
  };
}

export default withLogger;