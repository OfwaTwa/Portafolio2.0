import React from "react";
import { useState } from "react";
import "../index.css";
//Iconos
import {
  UilBracketsCurly,
  UilAngleDown,
  UilServer,
  UilSwatchbook,
} from "@iconscout/react-unicons";
//import iconos for skills
import icon1 from "../imagenes/icons/html.png";
import icon2 from "../imagenes/icons/css.png";
import icon3 from "../imagenes/icons/js.png";
import icon4 from "../imagenes/icons/react.png";
import icon5 from "../imagenes/icons/java.png";
import icon6 from "../imagenes/icons/php.png";
import icon7 from "../imagenes/icons/sql.png";
import icon8 from "../imagenes/icons/node-js.png";
import icon9 from "../imagenes/icons/figma.png";

const Skills = () => {
  // Skills
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const onClickSkills = (value) => {
    if (value === "open1") {
      setOpen1(!open1);
    } else if (value === "open2") {
      setOpen2(!open2);
    } else {
      setOpen3(!open3);
    }
  };
  return (
    <main className="main">
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
                  <span className="skills__subtitle">More than 2 years</span>
                </div>
                <UilAngleDown className="skills__arrow" />
              </div>

              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <img src={icon1} alt="" className="skills__img" />
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles ">
                    <img src={icon2} alt="" className="skills__img" />
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img src={icon3} alt="" className="skills__img" />
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img src={icon4} alt="" className="skills__img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
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
                  <h1 className="skills__titles">Backend developer</h1>
                  <span className="skills__subtitle">More than 1 years</span>
                </div>
                <UilAngleDown className="skills__arrow" />
              </div>

              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <img src={icon5} alt="" className="skills__img" />
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img src={icon6} alt="" className="skills__img" />
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img src={icon8} alt="" className="skills__img" />
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img src={icon7} alt="" className="skills__img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
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
                  <span className="skills__subtitle">More than 1 years</span>
                </div>
                <UilAngleDown className="skills__arrow" />
              </div>

              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <img src={icon9} alt="" className="skills__img" />
                  </div>
                  {/* Progress Bar
                    <div className="skills__bar">
                      <span className="skills__percentage skills__figma"></span>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
