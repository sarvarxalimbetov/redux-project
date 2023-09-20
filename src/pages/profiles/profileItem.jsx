import React from "react";
import { useSelector } from "react-redux";
import "./profile.css";

export default function ProfileItem() {
  const storeData = useSelector((state) => state);
  const listItems = storeData?.map((data) => (
    <div className="profile_item">
      <img className="profile_avatar" src={data.avatar} alt="avatar" />
      <div className="profile_info">
        <h1 className="profile_name">{data.name}</h1>
        <p className="profile_email">{data.email}</p>
      </div>
    </div>
  ));

  return <>{listItems}</>;
}
