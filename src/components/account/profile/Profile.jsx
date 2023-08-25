import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const [profileImg, setProfileImg] = useState(
    currentUser.photoURL
      ? currentUser.photoURL
      : "https://w7.pngwing.com/pngs/753/432/png-transparent-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-people-thumbnail.png"
  );

  const handleClick = ()=>{
    logout();
}

  return (
    <>
      <div className="profile-con">
        <h1 className="Profile-header">Profile</h1>
        <div className="profile-info">
          <img className="profile-img" src={profileImg} alt="" />
          <h1 className="profile-name">
            {currentUser.displayName
              ? currentUser.displayName
              : currentUser.email.slice(0,6)}
          </h1>
        </div>
        <Link to="/editeProfile">
          <button className="editeProfile-btn">🔏 Edite proflie</button>
        </Link>
        <button onClick={handleClick}>signout</button>
      </div>
    </>
  );
};

export default Profile;
