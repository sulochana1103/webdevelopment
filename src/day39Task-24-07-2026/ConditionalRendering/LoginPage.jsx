function LoginPage() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <h2>Dashboard</h2> : <button>Login</button>}
    </div>
  );
}
export default LoginPage;