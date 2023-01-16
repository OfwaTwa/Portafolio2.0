import React from "react";
import "../index.css";
import icon from "../imagenes/image.png"

const Profile = (props) => {
  return (
    <div className="home__img">
      <img className="home__blob-img" src={icon}></img>
    </div>
  );
};

export default Profile;