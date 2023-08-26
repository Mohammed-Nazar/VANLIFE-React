import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const RequireVerify = () => {
    const { verified } = useAuth();
  return verified ? <Outlet/> : <Navigate to="/emailVerify"/>
}

export default RequireVerify;