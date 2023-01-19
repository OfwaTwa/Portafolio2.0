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
        
        {/* Home */}
        
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a
                  href="https://www.linkedin.com/in/steven-chamorro/"
                  target="_blank"
                >
                  <UilLinkedin className="home__social-icon"/>
                </a>
                <a href="https://github.com/OfwaTwa" target="_blank">
                  <UilGithub className="home__social-icon"/>
                </a>
                <a href="" target="_blank">
                  <UilLinkBroken className="home__social-icon"/>
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
              <a href="#about" className="home__scroll-button button--flex">
                <UilMouseAlt size="2rem" className="home__scroll-mouse" />
                <span className="home__scroll-name">Scroll down</span>
                <UilArrowDown size="1.25rem" className="home__scroll-arrow" />
              </a>
            </div>  
          </div>
        </section>

        {/* About */}

        <section className="about section" id="about">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My introduction</span>

          <div className="about__container container grid">
            <img src="" alt="" className="about__img" />

            <div className="about__data">
              <p className="about__description">Web developer, with expensive knowledge and years of
                experience, working in web technologies and Ui / Ux design, delivering quality work. </p>
              
              <div className="about__info">
                <div>
                  <span className="about__info-title">08+</span>
                  <span className="about__info-name">Years <br/> experience </span>
                </div>

                <div>
                  <span className="about__info-title">+20</span>
                  <span className="about__info-name">Completed <br/> project </span>
                </div>
                
                <div>
                  <span className="about__info-title">05+</span>
                  <span className="about__info-name">Companies <br/> worked </span>
                </div>
              </div>
            </div>
          </div>          
        </section>
      </main>
    </>
  );
};

export default Main;
