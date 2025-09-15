import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProtectedRoute({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const t = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    setToken(t);
  }, []);

  if (token === null) return null;

  if (!token) return <Navigate to="/" replace />;

  return children;
}

export default ProtectedRoute;
