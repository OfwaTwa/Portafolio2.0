import React from "react";
import "../index.css";
import { UilMessage, UilMouseAlt, UilArrowDown } from '@iconscout/react-unicons'

const Home = (props) => {
    return (
        <div>
            <div className="home__data">
                <h1 className="home__tittle">Hi, I'm Ofwa Twa</h1>
                <h3 className="home__subtitle">Frontend Developer</h3>
                <p className="home__description">High level experience in web desing
                    and knowledge, producing quality work. </p>
                <a href="#contact" className="button button--flex">
                Contact Me <UilMessage size="1rem" className="button__icon"/>
                </a>
            </div>

            <div className="home__scroll">
                <a href="#about" className="home_scroll-button button--flex">
                    <UilMouseAlt/>
                    <span className="home_scroll-name">Scroll down</span>
                    <UilArrowDown/>
                </a>
            </div>
        </div>  
    )
}

export default Home;