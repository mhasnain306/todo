import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const token = localStorage.getItem("todoAccessToken");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
