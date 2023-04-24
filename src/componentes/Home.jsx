import React from "react";
import "../index.css";
//Imagen de perfil
import icon from "../imagenes/image.jpg";
//Iconos
import {
  UilLinkedin,
  UilGithub,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
  UilWhatsapp,
} from "@iconscout/react-unicons";

export const Home = (props) => {
  return (
    <main className="main">
      {/* Home */}
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/steven-chamorro/"
                target="_blank"
              >
                <UilLinkedin className="home__social-icon" />
              </a>
              <a href="https://github.com/OfwaTwa" target="_blank">
                <UilGithub className="home__social-icon" />
              </a>
              <a href="https://wa.me/573013533775" target="_blank">
                <UilWhatsapp className="home__social-icon" />
              </a>
            </div>

            <div className="home__img">
              <img className="home__blob-img" src={icon}></img>
            </div>

            <div className="home__data">
              <h1 className="home__tittle">I'm Ofwa Twa</h1>
              <h3 className="home__subtitle">Frontend Developer</h3>
              <p className="home__description">
                High level experience in web desing and knowledge, producing
                quality work.{" "}
              </p>
              <a href="#contact" className="button button--flex">
                Contact Me <UilMessage className="button__icon" />
              </a>
            </div>
          </div>
          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <UilMouseAlt className="home__scroll-mouse" />
              <span className="home__scroll-name">Scroll down</span>
              <UilArrowDown className="home__scroll-arrow" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};