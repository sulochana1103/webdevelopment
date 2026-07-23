function withAuth(Component) {
  return function ({ isLoggedIn, ...props }) {
    if (!isLoggedIn) {
      return <h2>Please Login</h2>;
    }

    return <Component {...props} />;
  };
}

export default withAuth;