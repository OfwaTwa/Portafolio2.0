import React from "react";
import { useState } from "react";
import "../index.css";
//Iconos
import {
  UilGraduationCap,
  UilSuitcaseAlt,
  UilSchedule,
} from "@iconscout/react-unicons";

const Qualification = () => {
  // Qualification
  const [openEducation, setOpenEducation] = useState(true);
  const [openWork, setOpenWork] = useState(false);

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

  return (
    <main className="main">
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
                    <UilSchedule className="qualification__icon" /> 2009 - 2014
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
                  <h3 className="qualification__title">Bootcamp Henry</h3>
                  <span className="qualification__subtitle">
                    Argentina - Bootcamp
                  </span>
                  <div className="qualification__calendar">
                    <UilSchedule className="qualification__icon" /> 2014 - 2017
                  </div>
                </div>
              </div>

              {/* Qualification 3 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Frontend</h3>
                  <span className="qualification__subtitle">
                    Udemy - Courses
                  </span>
                  <div className="qualification__calendar">
                    <UilSchedule className="qualification__icon" /> 2017 - 2019
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
                    Platzi - Courses
                  </span>
                  <div className="qualification__calendar">
                    <UilSchedule className="qualification__icon" /> 2019 - 2021
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
                  <h3 className="qualification__title">Web Designer</h3>
                  <span className="qualification__subtitle">
                    Inventas-App - Colombian
                  </span>
                  <div className="qualification__calendar">
                    <UilSchedule className="qualification__icon" /> 2021 - 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Qualification;
