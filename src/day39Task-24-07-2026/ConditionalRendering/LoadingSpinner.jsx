function LoadingSpinner() {
  const loading = true;

  return (
    <div>
      {loading ? <h2>Loading...</h2> : <h2>Users Loaded</h2>}
    </div>
  );
}
export default LoadingSpinner;