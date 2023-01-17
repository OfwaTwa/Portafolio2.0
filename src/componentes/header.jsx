import React from "react";
import "../index.css";
import { useState } from "react";
import {
  UilApps,
  UilTimes,
  UilMessage,
  UilEstate,
  UilUserCircle,
  UilFileEditAlt,
  UilSuitcaseAlt,
  UilScenery,
} from "@iconscout/react-unicons";

const Header = (props) => {
  const [ open, setOpen ] = useState(false);

  const openMenu = () => {
    if(open === false){
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <div className="">
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Logo
          </a>

          <div className={`nav__menu ${ open ? `show-menu` : null }`} id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#home" className="nav__link">
                  <UilEstate size="1.2rem" /> Home
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#about" className="nav__link">
                  <UilUserCircle size="1.2rem" /> About
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#skills" className="nav__link">
                  <UilFileEditAlt size="1.2rem" /> Skills
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#services" className="nav__link">
                  <UilSuitcaseAlt size="1.2rem" /> Services
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#portfolio" className="nav__link">
                  <UilScenery size="1.2rem" /> Portfolio
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#contact" className="nav__link">
                  <UilMessage size="1.2rem" /> Contacme
                </a>
              </li>
            </ul>
            <UilTimes className="nav__close" id="nav-close" onClick={()=> {openMenu()} } />
          </div>
          <div className="nav_btns">
            <div className="nav__toggle" id="nav-toggle" onClick={ ()=> {openMenu()}} >
              <UilApps className="nav__toggle" onClick={ ()=> {openMenu()}} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;