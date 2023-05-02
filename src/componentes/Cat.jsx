import React from "react";
import { useState } from "react";
//
import iconCat from "../imagenes/cats/catIcon.png";
import imageUmi from "../imagenes/cats/Umi.jpg";
//Style
import "../index.css";
const Cat = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="image__container">
        <span className="image__container"> Xd </span>
        <img src={iconCat} alt=" " className="image__icon" onClick={onClick} />
      </div>
      <div
        className={`container__cat ${open ? "container__cat-active" : null}`}
      >
        <img src={imageUmi} className="image__Umi" />
      </div>
    </div>
  );
};

export default Cat;
