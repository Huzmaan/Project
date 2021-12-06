import React from "react";
import { GrGift } from "react-icons/gr";
import "./Big_Discount.scss";

import {data} from "../Components/Big_Discount.Helper";
const Big_Discout = () => {
  
  return (
    <div>
      <span>
        <GrGift />
        <h2>Big Discounts</h2>
      </span>
      <span>
        {data?.map((item, index) => {
          return (
            <div className="Big_Discount_Carts" key={index}>
              <img className="Big_Discount_Img" src={item.image} />
              <p>{item.description}</p>
              <p>{item.price}</p>
              <p><s>{item.disPrice}</s></p>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default Big_Discout;
