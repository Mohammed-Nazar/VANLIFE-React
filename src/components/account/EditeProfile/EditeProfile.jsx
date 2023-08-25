import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import "./edite.css"
import { Navigate, redirect, useNavigate } from "react-router-dom";

 const EditeProfile = () => {
    const {currentUser, upProfile, updatePhoto} =  useAuth();
    const[UserName, setuser] = useState(currentUser.displayName?currentUser.displayName: currentUser.email.slice(0,6))
    const [loading, setLoading] =useState(true)
    const [error, seterror]= useState();
    const [image, setProfileImg] = useState();
    const [src, setSrc] = useState(currentUser.photoURL
        ? currentUser.photoURL
        : "https://w7.pngwing.com/pngs/753/432/png-transparent-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-people-thumbnail.png"
   )
      
   let navigate = useNavigate(); 
      console.log(currentUser)
const handleClick = async(e)=>{
    try{
        seterror("Done Changed")
        setLoading(true)
        if(image){
            await updatePhoto(image)
        }
        await upProfile(UserName);
        try {
            setTimeout(() => {
                navigate("/profile") 
            }, 3000);
        }catch{

        }
    }catch{
        seterror("falied")
        setLoading(false)
    }
}
    console.log(image)
  return (
    <div className="edite-con">
        <div className="img-con">
            <img src={src} alt="Profile Image" />
            <input onChange={e=>{setProfileImg(e.target.files[0]); setLoading(false)}} type="file" name="image" id="image" />
        </div>
        <div className="name-con">
            <label htmlFor="name">Name </label>
            <input onChange={e=>{setuser(e.target.value); setLoading(false)}} type="text" value={UserName} id="name" name="name" />
        </div>
        <button onClick={handleClick} disabled={loading} className="save-btn">Save Changes</button>
        <p>{error}</p>
    </div>
  )
}

export default EditeProfile;