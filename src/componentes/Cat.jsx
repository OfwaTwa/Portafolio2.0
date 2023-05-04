import React from "react";
import { useState } from "react";
//
import iconCat from "../imagenes/cats/catIcon.png";
//Style
import "../index.css";
//image certificates
import { certificate } from "../Certificates/Certificates";
const Cat = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    if (open === true) {
      window.scrollTo(scrollLeft, scrollTop);
      document.body.className = "";
    } else {
      document.body.className = "bodyChange";
      window.onscroll = function () {};
    }
  };

  return (
    <div>
      <div className="image__container">
        <span className="">Certificates</span>
        <img src={iconCat} alt=" " className="image__icon" onClick={onClick} />
      </div>
      <div
        className={`container__ctf ${open ? "container__ctf-active" : null}`}
      >
        <div className="images">
          {certificate.map((certificate, key) => {
            return <img src={certificate} id={key} className="image__size" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cat;
