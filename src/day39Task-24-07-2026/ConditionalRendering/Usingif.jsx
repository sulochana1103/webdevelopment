//Conditional Rendering means displaying different UI based on a condition
function Usingif() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h2>Welcome User</h2>;
  }

  return <h2>Please Login</h2>;
}

export default Usingif;