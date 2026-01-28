import { getUserRole, isAuthenticated } from "@/utils/auth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/guest/login" replace />;
  }

  const role = getUserRole();

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/guest/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
