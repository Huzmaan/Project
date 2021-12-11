import React from 'react';
import {Data_MobilePhone} from './MobilePhone_Helper';
import { AiFillStar, AiOutlinePlusSquare} from 'react-icons/ai';
import './MobilePhone.scss';

const MobilePhone = () => {
    return (
        <div>
             <div >
        <div>
            <h3 className="MobilePhone_Heading_text">Mobile Phones</h3>
        </div>
        <div className="All_Carts">
          {Data_MobilePhone?.map((item, index)=>{
              return (
                <div className="Main_Card" key={index}> 
                <img src={item.image} width="100%"/>
                <p className="Discount_Css"> {item.discount}</p>
                <p> {item.description}</p>
                <div className="Card_Icon">
             <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
             <AiFillStar />
           </div>
           <div className="Card_Price">
              <p className="Price_Actual"> {item.Price_Actual}</p>
              <p className="Price_Previous"><s> {item.Price_Previous}</s></p>
              <AiOutlinePlusSquare className="Plus_Icon" />
           </div>
             </div>
              )
          })}
        </div>
        </div>
        </div>
    )
}

export default MobilePhone
