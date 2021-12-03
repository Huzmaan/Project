import React from 'react'
import {IoIosFlash} from 'react-icons/io';
import flash from '../Images/flash-3.png';
import {AiFillStar} from 'react-icons/ai'

const Cart = () => {
    return (
        <div>
            <div className="Heading_Flash">
            <IoIosFlash className="Flash_Icon"/>
            <h1>Flash Deals</h1> 
            <div className ="Main_Card">
                <img src={flash} alt="flash" width="100%" />
                <p className="Discount_Css">28% off</p>
                <p>Smart Watch Black</p>
                <div className ="Card_Icon">
                <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
                </div>
                <div className="Card_Price">
                    <p className="Price_Actual">$108.00 </p>
                    <p className="Price_Previous"><s> 150.00</s></p>
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default Cart
