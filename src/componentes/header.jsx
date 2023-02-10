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
  UilMoon,
  UilSun
} from "@iconscout/react-unicons";

const Header = (props) => {
  const [ open, setOpen ] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [ active, setActive ] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);

  const openMenu = () => {
    if(open === false){
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const changeTheme = (props) => {
    if(active){
      document.body.className = props;
      setActive(false);
    } else {
      document.body.className = props;
      setActive(true);
    }
  }

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
                  <UilEstate size="1.2rem" className="nav__icon" /> Home
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#about" className={`nav__link ${scrollPosition === 558 ? "active-link" : null}`} >
                  <UilUserCircle size="1.2rem" className="nav__icon" /> About
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#skills" className={`nav__link ${scrollPosition === 1163 ? "active-link" : null}`} >
                  <UilFileEditAlt size="1.2rem" className="nav__icon" /> Skills
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#services" className={`nav__link ${scrollPosition === 2303 ? "active-link" : null}`} >
                  <UilSuitcaseAlt size="1.2rem" className="nav__icon" /> Services
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#portfolio" className={`nav__link ${scrollPosition === 2948 ? "active-link" : null}`} >
                  <UilScenery size="1.2rem" className="nav__icon" /> Portfolio
                </a>
              </li>
              <li className="nav__item" onClick={()=> {openMenu()} } >
                <a href="#contact" className={`nav__link ${scrollPosition === 4042 ? "active-link" : null}`} >
                  <UilMessage size="1.2rem" className="nav__icon" /> Contacme
                </a>
              </li>
            </ul>
            <UilTimes className="nav__close" id="nav-close" onClick={()=> {openMenu()} } />
          </div>
          <div className="nav__btns">
            {/* theme change button */}
            { active === false ? 
              <UilMoon className="change-theme" id="theme-button" onClick={ ()=>{changeTheme( "dark-theme" )} } /> : 
              <UilSun className="change-theme" id="theme-button" onClick={ ()=>{changeTheme( " " )} } />}
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