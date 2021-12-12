import React from 'react';
import {data_Optics_Watch,data_Optics_Watch1,data_Optics_Watch2} from './MobilePhone_Helper';
import { AiFillStar, AiOutlinePlusSquare} from 'react-icons/ai';

const MobilePhone = () => {
    return (
        <div>
             <div >
        <div>
            <h3 className="MobilePhone_Heading_text">Optics / Watch</h3>
        </div>
        <div className="All_Carts">
          <div>
          {data_Optics_Watch?.map((item, index)=>{
              return (
                <div className="Main_Card" key={index}> 
                <img src={item.image} width="100%"/>
                <p className="Discount_Css"> {item.discount}</p>
                <p> {item.Description}</p>
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
          <div>
          {data_Optics_Watch1?.map((item, index)=>{
              return (
                <div className="Main_Card" key={index}> 
                <img src={item.image} width="100%"/>
                <p className="Discount_Css"> {item.discount}</p>
                <p> {item.Description}</p>
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
          <div>
          {data_Optics_Watch2?.map((item, index)=>{
              return (
                <div className="Main_Card" key={index}> 
                <img src={item.image} width="100%"/>
                <p className="Discount_Css"> {item.discount}</p>
                <p> {item.Description}</p>
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
        </div>
    )
}

export default MobilePhone
