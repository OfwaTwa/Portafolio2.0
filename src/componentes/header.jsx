import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import {
  UilApps,
  UilTimes,
  UilMessage,
  UilEstate,
  UilUserCircle,
  UilFileEditAlt,
  UilSuitcaseAlt,
  UilScenery,
  UilMoon
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

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);

  useEffect(() => {
    document.body.className = "dark-theme";
  }, [ ]);
  

  return (
    <div className="" >
      <header className={`header ${scrollPosition >= 80 ? "scroll-header" : null}`} id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Logo
          </a>

          <div className={`nav__menu ${ open ? `show-menu` : null }`} id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#home" className={`nav__link ${scrollPosition === 0 ? "active-link" : null}`} >
                  <UilEstate size="1.2rem" /> Home
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#about" className={`nav__link ${scrollPosition === 558 ? "active-link" : null}`} >
                  <UilUserCircle size="1.2rem" /> About
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#skills" className={`nav__link ${scrollPosition === 1163 ? "active-link" : null}`} >
                  <UilFileEditAlt size="1.2rem" /> Skills
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#services" className={`nav__link ${scrollPosition === 2303 ? "active-link" : null}`} >
                  <UilSuitcaseAlt size="1.2rem" /> Services
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#portfolio" className={`nav__link ${scrollPosition === 2948 ? "active-link" : null}`} >
                  <UilScenery size="1.2rem" /> Portfolio
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#contact" className={`nav__link ${scrollPosition === 4042 ? "active-link" : null}`} >
                  <UilMessage size="1.2rem" /> Contacme
                </a>
              </li>
            </ul>
            <UilTimes className="nav__close" id="nav-close" onClick={()=> {openMenu()} } />
          </div>
          <div className="nav__btns">
            {/* theme change button */}
            <UilMoon className="change-theme" id="theme-button"/>
            
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