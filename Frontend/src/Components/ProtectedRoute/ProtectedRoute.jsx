// ProtectedRoute.js
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const isRegistered = localStorage.getItem("isRegistered");

  if (!isRegistered) {
    // Eğer kayıt başarılı değilse register sayfasına yönlendir
    return <Navigate to="/register" />;
  }

  return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
