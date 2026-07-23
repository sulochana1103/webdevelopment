function Users({ users }) {
  return (
    <div>
      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default Users;