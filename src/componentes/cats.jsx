import { useState } from "react";

import iconCat from "../imagenes/cats/catIcon.png";
import imageUmi from "../imagenes/cats/Umi.jpg";

import "../style/cats.css"
const Cats = (props) => {

  const [open, setOpen] = useState(false);

  const onClick = (props) => {
    if(open){
      setOpen(false);
    } else{
      setOpen(true);
    }
  }

  return (
    <div>
      <div className="image__container">
        <img src={iconCat} alt=" " className="image__icon" onClick={()=>{onClick()}}/>
      </div>
      <div className={`container__cat ${open? "container__cat-active" : null }`} >
        <img src={imageUmi} className="image__Umi" />
      </div>
    </div>
  );
};

export default Cats;