import React from "react";
import {
  UilArrowRight,
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

const Portfolio = () => {
  return (
    <main className="main">
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
                <div className="portfolio__content grid">
                  <img src={portfolio1} alt="" className="portfolio__img" />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Rick & Morty API</h3>
                    <p className="portfolio__description">
                      Rick and Morty API consumption, with an interactive menu,
                      and different presentations.
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
                <div className="portfolio__content grid">
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
                <div className="portfolio__content grid">
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
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
