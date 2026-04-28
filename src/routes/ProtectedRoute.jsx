import React from "react";
import { useUserContext } from "../context/UserContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { userData } = useUserContext();
  if (userData) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
