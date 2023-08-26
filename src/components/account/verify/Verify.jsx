import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";

const Verify = () => {
    const {emailVerify, verified} = useAuth();
    const [messsage, setmessage] = useState();
    const [loading, setloading] = useState(false);

    if (verified) {
        return <Navigate to="/profile"/>
    }

    const handleVerify = ()=>{
        if (verified) {
            setmessage("Email alredy verified")
            setloading(true)
        } else if (!verified){
            emailVerify();
            setloading(true)
            setmessage("Email sent, Check your inbox (check spam folder)")
        }
    }
  return (
    <>
    <div className="verify">
        <p>Verify your email to continue</p>
        <button disabled={loading} onClick={handleVerify}>Send verification email</button>
        {messsage}
    </div>
    </>
  )
}

export default Verify;
