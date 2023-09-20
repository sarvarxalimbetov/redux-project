import React from "react";
import ProfileItem from "./profileItem";
import { useSelector } from "react-redux";
import "./profile.css";

const Profile = () => {
  const storeData = useSelector((state) => state);

  return (
    <div className="profile">
      {storeData.length ? (
        <ProfileItem /> 
      ) : (
        <h1 className="profile_error">
          &laquo;Home&raquo; sahifasiga o'tib ma'lumotlarni to'ldiring!
        </h1>
      )}
    </div>
  );
};

export default Profile;
