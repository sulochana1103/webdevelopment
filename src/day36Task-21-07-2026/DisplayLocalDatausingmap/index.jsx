function Data() {
  const users = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "David", email: "david@gmail.com" },
    { id: 3, name: "Emma", email: "emma@gmail.com" }
  ];

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Data;