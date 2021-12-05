import React from 'react';
import './Rating_Brand.scss';
import {FaMedal} from 'react-icons/fa';
import Camera from "../Images/camera-1.png";
import Shoe from "../Images/shoes-2.png";
import Phone from "../Images/mobile-1.png"; 
import watch from "../Images/watch-1.png";
import {AiFillStar} from "react-icons/ai"

const Rating_Brand = () => {
    return (
        <div>
            <span className="Rating_Heading">
            <FaMedal className="Rating_Icon"/>
            <h2 className="Rating_Heading_Text">Top Rating</h2 >
            </span>
            <div className="Rating_AllCarts">
            <span className="Rating_Carts">
             <img className="Rating_Image" src={Camera} alt="Camera"/><br/>
             <span className="Rating_Icons">
              <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><span className="Rating_Icons_Rate"> (49)</span>;
              </span>
              <span className="Rating">
              <p className="Rating_Text">Camera</p>
              <p className="Rating_Price">$3,300</p>
              </span>
            </span>
            <span className="Rating_Carts">
             <img className="Rating_Image" src={Shoe} alt="Shoe"/><br/>
             <span className="Rating_Icons">
              <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><span className="Rating_Icons_Rate"> (20)</span>;
              </span>
              <p className="Rating_Text">Shoe</p>
              <p className="Rating_Price">$400</p>
            </span>
            <span className="Rating_Carts">
             <img className="Rating_Image"src={Phone} alt="phone"/><br/>
             <span className="Rating_Icons">
              <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><span className="Rating_Icons_Rate"> (65)</span>;
              </span>
              <p className="Rating_Text">Phone</p>
              <p className="Rating_Price">$999</p>
            </span>
            <span className="Rating_Carts">
             <img className="Rating_Image"src={watch} alt="watch"/><br/>
             <span className="Rating_Icons">
              <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><span className="Rating_Icons_Rate">(75)</span>;
              </span>
              <p className="Rating_Text">Watch</p>
              <p className="Rating_Price">$999</p>
            </span>
            </div>
        </div> 
    )
}

export default Rating_Brand
