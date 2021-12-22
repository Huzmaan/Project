import React from "react";
import { GrGift } from "react-icons/gr";
import "./Big_Discount.scss";
import {IoIosArrowForward} from "react-icons/io";
import Container from "../Components/Container"

import {data} from "../Components/Big_Discount.Helper";
const Big_Discout = () => {
  
  return (
    <div>
      <Container>
      <div style={{display: 'flex', justifyContent:'space-between'}}>
      <span className="Big_Discount_Heading">
        <GrGift className="Big_Discount_Icon" background="green" />
        <h2 className="Big_Discout_Heading_Text">Big Discounts</h2>
      </span>
        <div className="Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
        </div>
      <span className="Big_Discount_All_Carts">
        {data?.map((item, index) => {
          return (
            <div className="Big_Discount_Carts" key={index}>
              <img className="Big_Discount_Img" src={item.image} />
              <h4 className="Big_Discount_Description">{item.description}</h4>
              <span className="Big_Discount_Main_Price">
              <p className="Big_Discount_Price_Scss">{item.price}</p>
              <p className="Big_Discount_DisPrice_Scss"><s>{item.disPrice}</s></p>
              </span>
            </div>
          );
        })}
      </span>
      </Container>
    </div>
  );
};

export default Big_Discout;
