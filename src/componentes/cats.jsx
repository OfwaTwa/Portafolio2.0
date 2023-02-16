import iconCat from "../imagenes/cats/catIcon.png";
import "../style/cats.css"

const Cats = (props) => {
  return (
    <>
      <div className="image__container">
        <img src={iconCat} alt=" " className="image__icon"/>
      </div>
    </>
  );
};

export default Cats;