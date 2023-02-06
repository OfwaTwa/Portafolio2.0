import React from 'react';
import { useEffect } from 'react';
//icon
import { UilLocationArrowAlt } from '@iconscout/react-unicons'
//Style
import "../index.css";

export const Scroll = (props) => {
    return(
        <div>
            <a href="#" className='scrollup' id='scroll-up'>
                <UilLocationArrowAlt/>
            </a>
        </div>
    )
}