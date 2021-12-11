import React from 'react';
import './Car.scss';
import {AiFillStar,AiOutlinePlusSquare} from "react-icons/ai"
import {Data_Cars,Data_Cars1} from './Cars_Helper'
const Car = () => {
    return (
        <div className="Car_Main">
        <div>
            <h3 className="Cars_Heading_text">Cars</h3>
        </div>
        <div className="All_Carts">
          {Data_Cars?.map((item, index)=>{
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
              <p className="Price_Previous"><s> {item.Price_previous}</s></p>
              <AiOutlinePlusSquare className="Plus_Icon" />
           </div>
             </div>
              )
          })}
        </div>
        <div className="All_Carts">
          {Data_Cars1?.map((item, index)=>{
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
              <p className="Price_Previous"><s> {item.Price_previous}</s></p>
              <AiOutlinePlusSquare className="Plus_Icon" />
           </div>
             </div>
              )
          })}
        </div>
        </div>
    )
}

export default Car
