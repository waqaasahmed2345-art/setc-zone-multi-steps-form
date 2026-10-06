import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useContext } from "react";

import React from "react";

const Auth = ({ allowedRoles }) => {
    console.log("asdghsavjh", allowedRoles)
//  const { auth } = useContext(AuthContext);
const auth = { role: "marketer" }; // Hardcoded authentication data
  const location = useLocation();



  return allowedRoles.find((role) => auth.role.includes(role)) ? (
    <Outlet />
  ) : auth?.name ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/register" state={{ from: location }} replace />
  );
};

export default Auth;