import React from "react";
import "./Rating_Brand.scss";
import { FaMedal } from "react-icons/fa";
import { RatingBrand,Brand } from "./Rating_Brands.Helper";
import { AiFillStar } from "react-icons/ai";
import { GiNorthStarShuriken } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

const Rating_Brand = () => {
  return (
    <div className="rating-brand">
      <div>
        <span className="Rating_Heading">
          <div className="rating_heading">
          <FaMedal className="Rating_Icon" />
          <h2 className="Rating_Heading_Text">Top Rating</h2></div>
          <div className="Rating_Veiw_Scss">
            <p>
              View all
              <IoIosArrowForward />
            </p>
          </div>
        </span>
        <div className="Rating_AllCarts">
          {RatingBrand?.map((item, index) => {
            return (
              <div key={index}>
                <img className="Rating_Image" src={item.image} />
                <br />
                <span className="Rating_Icons">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span className="Rating_Icons_Rate"> {item.Rating}</span>;
                </span>
                <p className="Rating_Text">{item.description}</p>
                <p className="Rating_Price">{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Main_Brands">
        <span className="Brand_Heading">
          <GiNorthStarShuriken className="Brand_Icon" />
          <h2 className="Brand_Heading_Text">Featured Brands</h2>
          <div className="Brand_Veiw_Scss">
            <p>
              View all
              <IoIosArrowForward />
            </p>
          </div>
        </span>
        <div className="Brands_Carts">
          {Brand?.map((item, index)=>{
               return(
                 <div key={index}>
                   <img className="Brands_Carts_Img" src={item.image_Brand}/>
                   <h4>{item.description_Brand}</h4>
                 </div>
               )
          })}
        </div>
      </div>
    </div>
  );
};

export default Rating_Brand;
