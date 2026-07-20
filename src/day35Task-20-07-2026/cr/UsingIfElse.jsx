function Dashboard() {
  const role = "admin";

  if (role === "admin") {
    return <h1>Welcome Admin Dashboard</h1>;
  } else {
    return <h1>Welcome User Dashboard</h1>;
  }
}

export default Dashboard;