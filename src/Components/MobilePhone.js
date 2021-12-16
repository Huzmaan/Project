import React from 'react';
import {Data_MobilePhone,Data_MobilePhone1,Data_MobilePhone2} from './MobilePhone_Helper';
import { FiStar} from 'react-icons/fi';
import {BsPlus}from 'react-icons/bs';
import './MobilePhone.scss';
import {IoIosArrowForward}from "react-icons/io";

const MobilePhone = () => {
    return (
        <div>
             <div >
        <div style={{display: 'flex',justifyContent:'space-between'}}>
            <h3 className="MobilePhone_Heading_text">Mobile Phones</h3>
            <div className="Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
        </div>
        <div className="All_Carts">
          <div>
          {Data_MobilePhone?.map((item, index)=>{
              return (
                <div className="Main_Card" key={index}> 
                <img src={item.image} width="100%"/>
                <p className="Discount_Css"> {item.discount}</p>
                <p> {item.Description}</p>
                <div className="Card_Icon">
             <FiStar /> <FiStar /> <FiStar /> <FiStar />
             <FiStar />
           </div>
           <div className="Card_Price">
              <p className="Price_Actual"> {item.Price_Actual}</p>
              <p className="Price_Previous"><s> {item.Price_Previous}</s></p>
              <BsPlus className="Plus_Icon" />
           </div>
             </div>
              )
          })}
          </div>
          <div>
          {Data_MobilePhone1?.map((item, index)=>{
              return (
                <div className="Main_Card" key={index}> 
                <img src={item.image} width="100%"/>
                <p className="Discount_Css"> {item.discount}</p>
                <p> {item.Description}</p>
                <div className="Card_Icon">
             <FiStar /> <FiStar /> <FiStar /> <FiStar />
             <FiStar />
           </div>
           <div className="Card_Price">
              <p className="Price_Actual"> {item.Price_Actual}</p>
              <p className="Price_Previous"><s> {item.Price_Previous}</s></p>
              <BsPlus className="Plus_Icon" />
           </div>
             </div>
              )
          })}
          </div>
          <div>
          {Data_MobilePhone2?.map((item, index)=>{
              return (
                <div className="Main_Card" key={index}> 
                <img src={item.image} width="100%"/>
                <p className="Discount_Css"> {item.discount}</p>
                <p> {item.Description}</p>
                <div className="Card_Icon">
             <FiStar /> <FiStar /> <FiStar /> <FiStar />
             <FiStar />
           </div>
           <div className="Card_Price">
              <p className="Price_Actual"> {item.Price_Actual}</p>
              <p className="Price_Previous"><s> {item.Price_Previous}</s></p>
              <BsPlus className="Plus_Icon" />
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
