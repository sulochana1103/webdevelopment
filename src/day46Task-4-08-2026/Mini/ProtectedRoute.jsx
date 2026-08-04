import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = true; // Change to false to test

  return isLoggedIn ? children : <Navigate to="/" />;
}

export default ProtectedRoute;