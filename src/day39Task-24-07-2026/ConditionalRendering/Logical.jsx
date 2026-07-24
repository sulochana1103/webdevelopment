function Logical() {
  const isAdmin = true;

  return (
    <div>
      {isAdmin && <h2>Admin Panel</h2>}
    </div>
  );
}
export default Logical;