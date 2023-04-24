import React from "react";
import download from "../archivos/Curriculum.pdf";
import "../index.css";
//Imagen de perfil
import image from "../imagenes/about.jpg";
import {
  UilImport,
} from "@iconscout/react-unicons";
//import Styles

const About = () => {
  return (
    <main className="main">
      {/* About */}
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
          <img src={image} alt="" className="about__img" />

          <div className="about__data">
            <p className="about__description">
              I am a web developer highly skilled in creating dynamic and
              engaging websites. I have experience in programming languages such
              as HTML, CSS, JavaScript and PHP, and in the use of the React
              tool. I am passionate about technology. <br /> I am always looking
              for ways to improve my skill and knowledge in the field of web
              development.
            </p>

            <div className="about__info">
              <div>
                <span className="about__info-title">01+</span>
                <span className="about__info-name">
                  Years <br /> experience{" "}
                </span>
              </div>

              <div>
                <span className="about__info-title">+6</span>
                <span className="about__info-name">
                  Completed <br /> project{" "}
                </span>
              </div>

              <div>
                <span className="about__info-title">01+</span>
                <span className="about__info-name">
                  Companies <br /> worked{" "}
                </span>
              </div>
            </div>

            <div className="about__buttons">
              <a download="" href={download} className="button button--flex">
                Download CV
                <UilImport className="button__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
