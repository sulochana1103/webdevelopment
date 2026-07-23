function withLoading(Component) {
  return function ({ isLoading, ...props }) {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    return <Component {...props} />;
  };
}

export default withLoading;