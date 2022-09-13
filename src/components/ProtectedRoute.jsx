import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { authenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !authenticated) {
      navigate("/");
    }
  }, [loading, authenticated, navigate]);

  if (loading) return null;

  return <div>{children}</div>;
};

export default ProtectedRoute;
