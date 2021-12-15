import React from "react";
import { IoIosFlash } from "react-icons/io";
import { data } from "./Carts.Helper";
import {IoIosArrowForward} from "react-icons/io";
import { AiFillStar, AiOutlinePlusSquare } from "react-icons/ai";
import './Cart.scss';
const Cart = () => {
  
  return (
    <div>
      <div className="Heading_Flash">
        <div className="Cart_Heading">
        <IoIosFlash className="Flash_Icon" />
        <h2 className="Cart_Heading_Text">Flash Deals</h2>
        </div>
        <div className="Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
      </div>
      <div className="All_Carts">
        {data?.map((item, index)=>{
          return(
            <div className="Main_Card" key={index}> 
               <img src={item.image} width="100%"/>
               <p className="Cart_Discount_Css"> {item.discount}</p>
               <p> {item.description}</p>
               <div className="Cart_Icon">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
            <AiFillStar />
          </div>
          <div className="Card_Price">
             <p className="Price_Actual"> {item.Price_Actual}</p>
             <p className="Price_previous"><s> {item.Price_previous}</s></p>
             <AiOutlinePlusSquare className="Plus_Icon" />
          </div>
            </div>
          )
        })}
        
      </div>
    </div>
  );
};

export default Cart;
