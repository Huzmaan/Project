import React from 'react';
import {data_Optics_Watch,data_Optics_Watch1,data_Optics_Watch2} from './Optics_Watch_Helper';
import { FiStar} from 'react-icons/fi';
import {BsPlus} from "react-icons/bs";
import {IoIosArrowForward}from "react-icons/io";

const Optics_Watch = () => {
    return (
        <div>
             <div >
        <div style={{display: 'flex',justifyContent:'space-between'}}>
            <h3 className="MobilePhone_Heading_text">Optics / Watch</h3>
            <div className="Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
        </div>
        <div className="All_Carts">
          <div>
          {data_Optics_Watch?.map((item, index)=>{
              return (
                <div className="Main_Card" key={index}> 
                <img src={item.image} width="100%"/>
                <p className="Discount_Css"> {item.discount}</p>
                <p> {item.description}</p>
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
          {data_Optics_Watch1?.map((item, index)=>{
              return (
                <div className="Main_Card" key={index}> 
                <img src={item.image} width="100%"/>
                <p className="Discount_Css"> {item.discount}</p>
                <p> {item.description}</p>
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
          {data_Optics_Watch2?.map((item, index)=>{
              return (
                <div className="Main_Card" key={index}> 
                <img src={item.image} width="100%"/>
                <p className="Discount_Css"> {item.discount}</p>
                <p> {item.description}</p>
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

export default Optics_Watch;
