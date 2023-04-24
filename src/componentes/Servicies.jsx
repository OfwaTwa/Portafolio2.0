import React from "react";
import { useState } from "react";
import "../index.css";
//Iconos
import {
  UilWebGrid,
  UilArrowRight,
  UilTimes,
  UilCheckCircle,
  UilArrow,
  UilPen,
} from "@iconscout/react-unicons";

const Services = () => {
  //Services
  const [openServices1, setOpenServices1] = useState(false);
  const [openServices2, setOpenServices2] = useState(false);
  const [openServices3, setOpenServices3] = useState(false);

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
    <main className="main">
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
    </main>
  );
};

export default Services;
