import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import { useEffect } from "react";

export const Host = () => {
    const {currentUser, logout} = useAuth();
    
    const handleClick = ()=>{
        logout();
    }


  return (
    <div>{currentUser?.email}
    <button onClick={handleClick}>signout</button></div>
  )
}
