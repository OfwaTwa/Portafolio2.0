import React from "react";
import "../index.css";
import {
  UilLinkedin,
  UilGithub,
  UilLinkBroken,
} from "@iconscout/react-unicons";

const Redes = (props) => {
  return (
    <>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Redes;
