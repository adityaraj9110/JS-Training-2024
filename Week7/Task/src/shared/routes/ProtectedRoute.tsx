import { Navigate } from "react-router-dom";
import { FormValuesForLogin } from "../DataTypes/FormType";

interface ProtectedRouteProps {
  user: FormValuesForLogin;
  component: JSX.Element;
}

const ProtectedRoute = ({ user, component }: ProtectedRouteProps) => {
  if (!user?.email) {
    return <Navigate to={"/login"} />;
  }
  return component;
};

export default ProtectedRoute;
