function withAuthentication(Component) {
  return function EnhancedComponent() {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please Login</h2>;
    }

    return <Component />;
    
  };
}

export default withAuthentication;