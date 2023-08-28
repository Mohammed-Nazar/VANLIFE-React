import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Navigate } from "react-router-dom";
import "./verify.css"

const Verify = () => {
    const {emailVerify, verified, logout, currentUser, upProfilePro} = useAuth();
    const [messsage, setmessage] = useState();
    const [loading, setloading] = useState(false);
    const [name, setName] = useState("");
    const [imgRef, setImgRef] = useState();
    const [error, setError] = useState();
    const [subDone, setSubDone] = useState(false);
    const [checkMessage, setCheckMessage] = useState();



 
       
    
   
    if (verified && currentUser.displayName) {
        return <Navigate to="/profile"/>
    }

    const handleLogOut = ()=>{
        logout();
    }

    const handleInfo = async ()=>{
        if(name && imgRef) {
            try {
                await upProfilePro(name,imgRef);
                setSubDone(true)
            }catch {
                setError("error with updating profile")
            }
        }
        
    }

    useEffect(()=>{
        verified ? setloading(true): setloading(false);
        setName(currentUser.displayName)
        currentUser.displayName ? setSubDone(true): setSubDone(false);
        if (currentUser.displayName && !verified) {
            return setCheckMessage("You have already submited your info just verify your email")
        }
        if (verified && !currentUser.displayName) {
            return setCheckMessage("You have already verified your email just submit your info")
        }
        if (!verified && !currentUser.displayName) {
            return setCheckMessage("Verify your email & complete profile information to continue")
        }
    },[currentUser])

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
    <p className="verify-head">{checkMessage}</p>
        <div className="acc-info">
            <label htmlFor="name">Name</label>
            <input onChange={(e)=>setName(e.target.value)} value={name} className="name-input" type="name"/>
            <label className="up-input" htmlFor="photo">
            Upload profile photo
                <input accept="image/*" onChange={(e)=>setImgRef(e.target.files[0])} className="none" type="file" name="photo" id="photo" />
           <br />
           <sub>{imgRef?.name}</sub>
            </label>
            <p>{error}</p>
            <button onClick={handleInfo} disabled={subDone} className="btn verify-info-btn">Submit Info</button>
        </div>
        <button className="btn verify-btn" disabled={loading} onClick={handleVerify}>Send verification email</button>
        {messsage}
        <button className="signout-btn" disabled={loading} onClick={handleLogOut}>signOut</button>
    </div>
    </>
  )
}

export default Verify;
