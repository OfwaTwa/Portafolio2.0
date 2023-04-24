import React from "react";
//Iconos
import {
  UilMessage,
} from "@iconscout/react-unicons";
//import image desarrollo web
import imageDW from "../imagenes/desarrollo-web.jpg";

const ProjectInMind = () => {
  return (
    <main className="main">
      {/* Project in mind */}
      <section className="project section">
        <div className="project__bg">
          <div className="project__container container grid">
            <div className="project__data">
              <h2 className="project__title">You have a new project</h2>
              <p className="project__description">Conctact me now</p>
              <a href="#contact" className="button button--flex button--white">
                Contact Me
                <UilMessage className="project__icon button__icon" />
              </a>
            </div>
            <img src={imageDW} alt="" className="project__img" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectInMind;
