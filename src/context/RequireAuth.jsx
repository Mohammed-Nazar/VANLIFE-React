import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"



const RequireAuth = ({children}) => {
    const {currentUser} = useAuth();

  return (
    <>
    {currentUser ? <Outlet/> : <Navigate to="/login"/>}
    </>
  )
}

 export default RequireAuth;