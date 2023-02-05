import React from "react";
import { useState } from "react";
import download from "../archivos/Curriculum.pdf";
import "../index.css";
//Imagen de perfil
import icon from "../imagenes/image.png";
import image from "../imagenes/power.webp";
//Iconos
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
  UilSchedule,
  UilWebGrid,
  UilArrowRight,
  UilTimes,
  UilCheckCircle,
  UilArrow,
  UilPen,
  UilPhone,
  UilEnvelopeHeart,
  UilMapMarker
} from "@iconscout/react-unicons";
//imagenes del portafolio
import portfolio1 from "../imagenes/portfolio1.png";
import portfolio2 from "../imagenes/portfolio2.webp";
import portfolio3 from "../imagenes/portfolio3.jpg";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
//import Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//import image desarrollo web
import imageDW from "../imagenes/desarrollo-web.png";

const Main = (props) => {
  // Skills
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  // Qualification
  const [openEducation, setOpenEducation] = useState(true);
  const [openWork, setOpenWork] = useState(false);
  //Services
  const [openServices1, setOpenServices1] = useState(false);
  const [openServices2, setOpenServices2] = useState(false);
  const [openServices3, setOpenServices3] = useState(false);

  const onClickSkills = (value) => {
    if (value === "open1" && open1 === false) {
      setOpen1(true);
      setOpen2(false);
      setOpen3(false);
    } else if (value === "open2" && open2 === false) {
      setOpen1(false);
      setOpen2(true);
      setOpen3(false);
    } else if (value === "open3" && open3 === false) {
      setOpen1(false);
      setOpen2(false);
      setOpen3(true);
    } else {
      setOpen1(false);
      setOpen2(false);
      setOpen3(false);
    }
  };

  const onClickQualification = (value) => {
    if (value === "open1" && openEducation === false) {
      setOpenEducation(true);
      setOpenWork(false);
    } else if (value === "open2" && openWork === false) {
      setOpenEducation(false);
      setOpenWork(true);
    } else {
      setOpenEducation(false);
      setOpenWork(false);
    }
  };

  const onClickServices = (value) => {
    if (value === "open1") {
      setOpenServices1(true);
    } else if (value === "open2") {
      setOpenServices2(true);
    } else if (value === "open3") {
      setOpenServices3(true);
    } else {
      setOpenServices1(false);
      setOpenServices2(false);
      setOpenServices3(false);
    }
  };

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
                  <UilLinkedin className="home__social-icon" />
                </a>
                <a href="https://github.com/OfwaTwa" target="_blank">
                  <UilGithub className="home__social-icon" />
                </a>
                <a href="" target="_blank">
                  <UilLinkBroken className="home__social-icon" />
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
              <p className="about__description">
                Web developer, with expensive knowledge and years of experience,
                working in web technologies and Ui / Ux design, delivering
                quality work.{" "}
              </p>

              <div className="about__info">
                <div>
                  <span className="about__info-title">08+</span>
                  <span className="about__info-name">
                    Years <br /> experience{" "}
                  </span>
                </div>

                <div>
                  <span className="about__info-title">+20</span>
                  <span className="about__info-name">
                    Completed <br /> project{" "}
                  </span>
                </div>

                <div>
                  <span className="about__info-title">05+</span>
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

        {/* skills */}
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>

          <div className="skills__container container grid">
            <div>
              {/* Skills 1 */}
              <div
                className={`skills__content ${
                  open1 ? "skills__open" : "skills__close"
                }`}
              >
                <div
                  className="skills__header"
                  onClick={() => {
                    onClickSkills("open1");
                  }}
                >
                  <UilBracketsCurly className="skills__icon" />
                  <div>
                    <h1 className="skills__titles">Frontend developer</h1>
                    <span className="skills__subtitle">More than 4 years</span>
                  </div>
                  <UilAngleDown className="skills__arrow" />
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
              <div
                className={`skills__content ${
                  open2 ? "skills__open" : "skills__close"
                }`}
              >
                <div
                  className="skills__header"
                  onClick={() => {
                    onClickSkills("open2");
                  }}
                >
                  <UilServer className="skills__icon" />
                  <div>
                    <h1 className="skills__titles">Frontend developer</h1>
                    <span className="skills__subtitle">More than 4 years</span>
                  </div>
                  <UilAngleDown className="skills__arrow" />
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
              <div
                className={`skills__content ${
                  open3 ? "skills__open" : "skills__close"
                }`}
              >
                <div
                  className="skills__header"
                  onClick={() => {
                    onClickSkills("open3");
                  }}
                >
                  <UilSwatchbook className="skills__icon" />
                  <div>
                    <h1 className="skills__titles">Designer</h1>
                    <span className="skil ls__subtitle">More than 3 years</span>
                  </div>
                  <UilAngleDown className="skills__arrow" />
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
              <div
                className={`qualification__button button--flex ${
                  openEducation ? "qualification__active" : null
                }`}
                data-target="#education"
                onClick={() => {
                  onClickQualification("open1");
                }}
              >
                <UilGraduationCap className="qualification__icon" />
                Education
              </div>

              <div
                className={`qualification__button button--flex ${
                  openWork ? "qualification__active" : null
                }`}
                data-target="#work"
                onClick={() => {
                  onClickQualification("open2");
                }}
              >
                <UilSuitcaseAlt className="qualification__icon" />
                Work
              </div>
            </div>

            <div className="qualification__sections">
              {/* Qualification content 1 */}
              <div
                className={`qualification__content ${
                  openEducation ? "qualification__active" : null
                }`}
                data-content
                id="education"
              >
                {/* Qualification 1 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Systems Engineer</h3>
                    <span className="qualification__subtitle">
                      Udenar - University
                    </span>
                    <div className="qualification__calendar">
                      <UilSchedule />
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
                    <span className="qualification__subtitle">
                      Spain - University
                    </span>
                    <div className="qualification__calendar">
                      <UilSchedule />
                      2014 - 2017
                    </div>
                  </div>
                </div>

                {/* Qualification 3 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Web development</h3>
                    <span className="qualification__subtitle">
                      Colombian - Institute
                    </span>
                    <div className="qualification__calendar">
                      <UilSchedule />
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
                    <span className="qualification__subtitle">
                      Colombian - Institute
                    </span>
                    <div className="qualification__calendar">
                      <UilSchedule />
                      2019 - 2021
                    </div>
                  </div>
                </div>
              </div>
              {/* Qualification content 2 */}
              <div
                className={`qualification__content ${
                  openWork ? "qualification__active" : null
                }`}
                data-content
                id="work"
              >
                {/* Qualification 1 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Software Enginner</h3>
                    <span className="qualification__subtitle">
                      Microsft - Colombian
                    </span>
                    <div className="qualification__calendar">
                      <UilSchedule />
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
                    <span className="qualification__subtitle">
                      Apple Inc - Spain
                    </span>
                    <div className="qualification__calendar">
                      <UilSchedule />
                      2018 - 2020
                    </div>
                  </div>
                </div>

                {/* Qualification 3 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Ui Designer</h3>
                    <span className="qualification__subtitle">
                      Figma - Spain
                    </span>
                    <div className="qualification__calendar">
                      <UilSchedule />
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
                <UilWebGrid className="services__icon" />
                <h3 className="services__title">
                  Ui/Ux <br /> Designer{" "}
                </h3>
              </div>

              <span
                className="button button--flex button--small button--link services__button"
                onClick={() => {
                  onClickServices("open1");
                }}
              >
                View More
                <UilArrowRight className="button__icon" />
              </span>

              <div
                className={`services__modal ${
                  openServices1 ? "active-modal" : null
                }`}
              >
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Ui/Ux <br /> Designer{" "}
                  </h4>
                  <UilTimes
                    className="services__modal-close"
                    onClick={() => {
                      onClickServices();
                    }}
                  />

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>I develop the user interface.</p>
                    </li>

                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>Web page development.</p>
                    </li>

                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>I create ux element interactions.</p>
                    </li>

                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>I position your company brand.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services 2 */}
            <div className="services__content">
              <div>
                <UilArrow className="services__icon" />
                <h3 className="services__title">
                  Frontend <br /> Developer{" "}
                </h3>
              </div>

              <span
                className="button button--flex button--small button--link services__button"
                onClick={() => {
                  onClickServices("open2");
                }}
              >
                View More
                <UilArrowRight className="button__icon" />
              </span>

              <div
                className={`services__modal ${
                  openServices2 ? "active-modal" : null
                }`}
              >
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Frontend <br /> Developer{" "}
                  </h4>
                  <UilTimes
                    className="services__modal-close"
                    onClick={() => {
                      onClickServices();
                    }}
                  />

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>I develop the user interface.</p>
                    </li>

                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>Web page development.</p>
                    </li>

                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>I create ux element interactions.</p>
                    </li>

                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>I position your company brand.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services 3 */}
            <div className="services__content">
              <div>
                <UilPen className="services__icon" />
                <h3 className="services__title">
                  Branding <br /> Designer{" "}
                </h3>
              </div>

              <span
                className="button button--flex button--small button--link services__button"
                onClick={() => {
                  onClickServices("open3");
                }}
              >
                View More
                <UilArrowRight className="button__icon" />
              </span>

              <div
                className={`services__modal ${
                  openServices3 ? "active-modal" : null
                }`}
              >
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Branding <br /> Designer{" "}
                  </h4>
                  <UilTimes
                    className="services__modal-close"
                    onClick={() => {
                      onClickServices();
                    }}
                  />

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>I develop the user interface.</p>
                    </li>

                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>Web page development.</p>
                    </li>

                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>I create ux element interactions.</p>
                    </li>

                    <li className="services__modal-service">
                      <UilCheckCircle className="services__modal-icon" />
                      <p>I position your company brand.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="portfolio section" id="portfolio">
          <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">Most recent work</span>

          <div className="portfolio__container container swiper-container">
            <div className="swiper-wrapper">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  {/* Portfolio 1 */}
                  <div className="portfolio__content grid swiper-slide">
                    <img src={portfolio1} alt="" className="portfolio__img" />

                    <div className="portfolio__data">
                      <h3 className="portfolio__title">Rick & Morty API</h3>
                      <p className="portfolio__description">
                        Rick and Morty API consumption, with an interactive
                        menu, and different presentations.
                      </p>
                      <a
                        href="#"
                        className="button button--flex button--small portfolio__button"
                      >
                        Demo
                        <UilArrowRight className="button__icon" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {/* Portfolio 2 */}
                  <div className="portfolio__content grid swiper-slide">
                    <img src={portfolio2} alt="" className="portfolio__img" />

                    <div className="portfolio__data">
                      <h3 className="portfolio__title">Calculator</h3>
                      <p className="portfolio__description">
                        calculator made in react.
                      </p>
                      <a
                        href="#"
                        className="button button--flex button--small portfolio__button"
                      >
                        Demo
                        <UilArrowRight className="button__icon" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {/* Portfolio 3 */}
                  <div className="portfolio__content grid swiper-slide">
                    <img src={portfolio3} alt="" className="portfolio__img" />

                    <div className="portfolio__data">
                      <h3 className="portfolio__title">Netflix</h3>
                      <p className="portfolio__description">
                        netflix simulation project.
                      </p>
                      <a
                        href="#"
                        className="button button--flex button--small portfolio__button"
                      >
                        Demo
                        <UilArrowRight className="button__icon" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <div className="">Parte en blanco, por que no supe como solucionarlo D:</div>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Project in mind */}
        <section className="project section">
          <div className="project__bg">
            <div className="project__container container grid">
              <div className="project__data">
                <h2 className="project__title">You have a new project</h2>
                <p className="project__description">Conctact me now</p>
                <a href="#contact" className="button button--flex button--white">
                  Contact Me
                  <UilMessage className="project__icon button__icon"/> 
                </a>
              </div>
              <img src={imageDW} alt="" className="project__img" />
            </div>
          </div>
        </section>
        
        {/* Contact Me */}
        <section className="contact section" id="contact">
          <h2 className="section__title">Contact Me</h2>
          <span className="section__subtitle">Get in touch</span>

          <div className="contact__container container grid">
            <div className="">
              <div className="contact__information">
                <UilPhone className="contact__icon" size="2rem" />

                <div>
                  <h3 className="contact__title">Call Me</h3>
                  <span className="contact__subtitle">(+57) 301 353 3775</span>
                </div>
              </div>
              
              <div className="contact__information">
                <UilEnvelopeHeart className="contact__icon" size="2rem" />

                <div>
                  <h3 className="contact__title">Email</h3>
                  <span className="contact__subtitle">ofwatwa@gmail.com</span>
                </div>
              </div>

              <div className="contact__information">
                <UilMapMarker className="contact__icon" size="2rem" />

                <div>
                  <h3 className="contact__title">Location</h3>
                  <span className="contact__subtitle">Colombia - Nariño</span>
                </div>
              </div>
            </div>

            <form action="" className="contact__form grid">
              <div className="contact__inputs grid">
                <div className="contact__content">
                  <label htmlFor="" className="contact__label">Name</label>
                  <input type="text" className="contact__input" />
                </div>

                <div className="contact__content">
                  <label htmlFor="" className="contact__label">Email</label>
                  <input type="email" className="contact__input" />
                </div>
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">Project</label>
                <input type="text" className="contact__input" />
              </div>

              <div className="contact__content">
                <label htmlFor="" className="contact__label">Message</label>
                <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
              </div>

              <div>
                <a href="" className="button button--flex">
                  Send Message
                  <UilMessage className="button__icon"/>
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
