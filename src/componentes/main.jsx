import React from "react";
import "../index.css";
import icon from "../imagenes/image.png";
import {
  UilLinkedin,
  UilGithub,
  UilLinkBroken,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
} from "@iconscout/react-unicons";

const Main = (props) => {
  return (
    <>
      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a
                  href="https://www.linkedin.com/in/steven-chamorro/"
                  target="_blank"
                >
                  <UilLinkedin />
                </a>
                <a href="https://github.com/OfwaTwa" target="_blank">
                  <UilGithub />
                </a>
                <a href="" target="_blank">
                  <UilLinkBroken />
                </a>
              </div>

              <div className="home__img">
                <img className="home__blob-img" src={icon}></img>
              </div>

              <div className="home__data">
                <h1 className="home__tittle">Hi, I'm Ofwa Twa</h1>
                <h3 className="home__subtitle">Frontend Developer</h3>
                <p className="home__description">
                  High level experience in web desing and knowledge, producing
                  quality work.{" "}
                </p>
                <a href="#contact" className="button button--flex">
                  Contact Me <UilMessage size="1rem" className="button__icon" />
                </a>
              </div>
            </div>
            <div className="home__scroll">
              <a href="#about" className="home_scroll-button button--flex">
                <UilMouseAlt size="2rem" className="home__scroll-mouse" />
                <span className="home_scroll-name">Scroll down</span>
                <UilArrowDown size="1.25rem" className="home__scroll-arrow" />
              </a>
            </div>  
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
