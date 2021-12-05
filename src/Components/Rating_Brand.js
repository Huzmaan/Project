import React from 'react';
import './Rating_Brand.scss';
import {FaMedal} from 'react-icons/fa';

const Rating_Brand = () => {
    return (
        <div>
            <span className="Rating_Heading">
            <FaMedal className="Rating_Icon"/>
            <h2 className="Rating_Heading_Text">Top Rating</h2 >
            </span>
        </div>
    )
}

export default Rating_Brand
