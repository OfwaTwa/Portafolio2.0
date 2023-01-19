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
  UilImport,
  UilBracketsCurly,
  UilAngleDown,
  UilServer,
  UilSwatchbook
} from "@iconscout/react-unicons";
import download from "../archivos/Curriculum.pdf";
import image from "../imagenes/power.webp";

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
            <img src={image} alt="" className="about__img" />

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

              <div className="about__buttons">
                <a download="" href={download} className="button button--flex">
                  Download CV<UilImport className="button__icon"/>
                </a>
              </div>
            </div>
          </div>          
        </section>

        {/* skills */}
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>

          <div className="skills__container container grid">
            <div>
              {/* Skills 1 */}
              <div className="skills__content">
                <div className="skills__header">
                  <UilBracketsCurly className="skills__icon"/>
                  <div>
                    <h1 className="skills__titles">Frontend developer</h1>
                    <span className="skills__subtitle">More than 4 years</span>
                  </div>
                  <UilAngleDown className="skills__arrow"/>
                </div>

                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__html"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">CSS</h3>
                      <span className="skills__number">40%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__css"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__number">30%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">React</h3>
                      <span className="skills__number">20%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__react"></span>
                    </div>
                  </div>
                </div>
              </div>
              {/* skills 2 */}
              <div className="skills__content">
                <div className="skills__header">
                  <UilServer className="skills__icon"/>
                  <div>
                    <h1 className="skills__titles">Frontend developer</h1>
                    <span className="skills__subtitle">More than 4 years</span>
                  </div>
                  <UilAngleDown className="skills__arrow"/>
                </div>

                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">PHP</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__php"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Node Js</h3>
                      <span className="skills__number">60%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__node"></span>
                    </div>
                  </div>

                  <div className="skills__data">  
                    <div className="skills__titles">
                      <h3 className="skills__name">Firebase</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__firebase"></span>
                    </div>  
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Python</h3>
                      <span className="skills__number">85%</span>
                    </div>  
                    <div className="skills__bar">
                      <span className="skills__percentage skills__python"></span>
                    </div>
                  </div>
                </div>
              </div>
              {/* skills 3 */}
              <div className="skills__content">
                <div className="skills__header">
                  <UilSwatchbook className="skills__icon"/>
                  <div>
                    <h1 className="skills__titles">Designer</h1>
                    <span className="skil ls__subtitle">More than 3 years</span>
                  </div>
                  <UilAngleDown className="skills__arrow"/>
                </div>

                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Figma</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__figma"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Sketch</h3>
                      <span className="skills__number">54%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__sketch"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Photoshop</h3>
                      <span className="skills__number">32%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__photoshop"></span>
                    </div>
                  </div>

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
