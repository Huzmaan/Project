import React from 'react';
import {FiStar}from 'react-icons/fi';
import {BsPlus} from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import {Data_More_For_You,Data_More_For_You1,Data_More_For_You2,Data_More_For_You3} from './More_For_You_Helper';

const More_For_You = () => {
    return (
        <div>
             <div >
        <div style={{display: 'flex',justifyContent:'space-between'}}>
            <h3 className="MobilePhone_Heading_text">More For You</h3>
            <div className="Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
        </div>
        <div className="All_Carts">
          <div>
          {Data_More_For_You?.map((item, index)=>{
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
          {Data_More_For_You1?.map((item, index)=>{
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
          {Data_More_For_You2?.map((item, index)=>{
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
          {Data_More_For_You3?.map((item, index)=>{
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

export default More_For_You
