import React from "react";
//Style
import "../index.css";
//Icon
import {
    UilFacebook,
    UilTwitter,
    UilInstagramAlt
  } from "@iconscout/react-unicons";

export const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Ofwa Twa</h1>
            <span className="footer__subtitle">Frontend developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" className="footer__link">
                Contactme
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a href="" target="_blank" className="footer__social">
              <UilFacebook />
            </a>

            <a href="" target="_blank" className="footer__social">
              <UilInstagramAlt />
            </a>

            <a href="" target="_blank" className="footer__social">
              <UilTwitter />
            </a>
          </div>
        </div>

        <p className="footer__copy" >&#169; uwu </p>
      </div>
    </footer>
  );
};
