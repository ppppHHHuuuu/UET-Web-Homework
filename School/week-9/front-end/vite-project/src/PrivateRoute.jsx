// PrivateRoute.js
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Retrieve the token from Redux state
  const token = useSelector((state) => state.auth.token);
  // const token = "321";
  console.log("state ", token)
  // If token is not defined or null, redirect to login page
  if (!token) {
    alert("Token undefined, pls access by default route /login")

    return <Navigate to="/login" />;
  }

  // If token exists, render the requested component
  return children;
};

export default PrivateRoute;
