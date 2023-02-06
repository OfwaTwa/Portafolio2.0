import React from 'react';
import { useEffect, useState } from 'react';
//icon
import { UilAngleUp } from '@iconscout/react-unicons'
//Style
import "../index.css";

export const Scroll = (props) => {
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
    return(
        <div>
            <a href="#" className={`scrollup ${scrollPosition >= 558 ? "show-scroll" : null }`} id='scroll-up'>
                <UilAngleUp size="1.5rem" className="scrollup__icon"/>
            </a>
        </div>
    )
}