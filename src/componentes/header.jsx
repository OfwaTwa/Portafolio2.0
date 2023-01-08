import React from "react";
import "../index.css"
import { UilApps, UilTimes, UilMessage, UilEstate, UilUserCircle, UilFileEditAlt, UilSuitcaseAlt, UilScenery } from '@iconscout/react-unicons'

const Header = (props) => {
    return(
        <div className="">
            <header className="header" id="header">
                <nav className="nav container" >
                    <a href="#" className="nav__logo" >Logo</a>
                    
                    <div className="nav__menu" id="nav-menu" >
                         <ul>
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <UilEstate/> Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <UilUserCircle/> About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" className="nav__link">
                                    <UilFileEditAlt/> Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <UilSuitcaseAlt/> Services
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#portfolio" className="nav__link">
                                    <UilScenery/> Portfolio
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <UilMessage/> Contac Me
                                </a>
                            </li>
                         </ul>
                         <UilTimes/>
                    </div>
                    <div className="nav_btns">
                        <div className="nav__toggle" id="nav-toggle">
                            <UilApps/>  
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;