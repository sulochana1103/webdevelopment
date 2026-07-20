function Dashboard() {
  const role = "admin";

  if (role === "admin") {
    return <h1>Admin Dashboard</h1>;
  } else {
    return <h1>Employee Dashboard</h1>;
  }
}

export default Dashboard;