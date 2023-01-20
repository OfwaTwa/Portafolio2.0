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
  UilSwatchbook,
  UilGraduationCap,
  UilSuitcaseAlt,
  UilSchedule
} from "@iconscout/react-unicons";
import download from "../archivos/Curriculum.pdf";
import image from "../imagenes/power.webp";
import { useState } from "react";

const Main = (props) => {
  // Skills
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  // Qualification
  const [openEducation, setOpenEducation] = useState(true);
  const [openWork, setOpenWork] = useState(false);

  const onClickSkills = (value) => {
    if(value === "open1" && open1 === false ){
      setOpen1(true);
      setOpen2(false);
      setOpen3(false);
    } else if (value === "open2" && open2 === false){
      setOpen1(false);
      setOpen2(true);
      setOpen3(false);
    } else if (value === "open3" && open3 === false ){
      setOpen1(false);
      setOpen2(false);
      setOpen3(true);
    } else {
      setOpen1(false);
      setOpen2(false);
      setOpen3(false);
    }
  }

  const onClickQualification = (value) => {
    if(value === "open1" && openEducation === false ){
      setOpenEducation(true);
      setOpenWork(false); 
    } else if(value === "open2" && openWork === false){
      setOpenEducation(false);
      setOpenWork(true);
    } else {
      setOpenEducation(false);
      setOpenWork(false);
    }
  }

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
              <div className={`skills__content ${open1 ? "skills__open" : "skills__close"}`}>
                <div className="skills__header" onClick={()=>{onClickSkills("open1")}} >
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
              <div className={`skills__content ${open2 ? "skills__open" : "skills__close"}`}>
                <div className="skills__header" onClick={()=>{onClickSkills("open2")}} >
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
              <div className={`skills__content ${open3 ? "skills__open" : "skills__close"}`}>
                <div className="skills__header" onClick={()=>{onClickSkills("open3")}} >
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
        {/* Qualification */}
        <section className="qualification section">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personal journey</span>

          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div className={`qualification__button button--flex ${openEducation ? "qualification__active" : null }`} data-target='#education' onClick={()=>{ onClickQualification("open1")}} >
                <UilGraduationCap className="qualification__icon"/>
                Education
              </div>

              <div className={`qualification__button button--flex ${openWork ? "qualification__active" : null }`} data-target='#work' onClick={()=>{ onClickQualification("open2")}}>
                <UilSuitcaseAlt className="qualification__icon"/>
                Work
              </div>
            </div>

            <div className="qualification__sections">
              {/* Qualification content 1 */}
              <div className={`qualification__content ${openEducation ? "qualification__active"  : null}`} data-content id="education" >
                {/* Qualification 1 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Systems Engineer</h3>
                    <span className="qualification__subtitle">Udenar - University</span>
                    <div className="qualification__calendar">
                      <UilSchedule/>
                      2009 - 2014
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                {/* Qualification 2 */}
                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Web Desing</h3>
                    <span className="qualification__subtitle">Spain - University</span>
                    <div className="qualification__calendar">
                      <UilSchedule/>
                      2014 - 2017
                    </div>
                  </div>
                </div>

                {/* Qualification 3 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Web development</h3>
                    <span className="qualification__subtitle">Colombian - Institute</span>
                    <div className="qualification__calendar">
                      <UilSchedule/>
                      2017 - 2019
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                {/* Qualification 4 */}
                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    {/* <span className="qualification__line"></span> */}
                  </div>

                  <div>
                    <h3 className="qualification__title">Master in Ui/Ux</h3>
                    <span className="qualification__subtitle">Colombian - Institute</span>
                    <div className="qualification__calendar">
                      <UilSchedule/>
                      2019 - 2021
                    </div>
                  </div>
                </div>
              </div>
              {/* Qualification content 2 */}
              <div className={`qualification__content ${openWork ? "qualification__active"  : null}`} data-content id="work">
                {/* Qualification 1 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Software Enginner</h3>
                    <span className="qualification__subtitle">Microsft - Colombian</span>
                    <div className="qualification__calendar">
                      <UilSchedule/>
                      2016 - 2018
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                {/* Qualification 2 */}
                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Frontend developer</h3>
                    <span className="qualification__subtitle">Apple Inc - Spain</span>
                    <div className="qualification__calendar">
                      <UilSchedule/>
                      2018 - 2020
                    </div>
                  </div>
                </div>

                {/* Qualification 3 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Ui Designer</h3>
                    <span className="qualification__subtitle">Figma - Spain</span>
                    <div className="qualification__calendar">
                      <UilSchedule/>
                      2017 - 2019
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    {/* <span className="qualification__line"></span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services section" id="services">
          <h2 className="section__title">Services</h2>
          <span className="section__subtitle">What i offer</span>

          <div className="services__container container grid">
            {/* Services 1 */}
            <div className="services__content">
              <div>
                  
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
