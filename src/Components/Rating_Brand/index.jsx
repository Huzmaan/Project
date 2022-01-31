import React from "react";
import "./Rating_Brand.scss";
import { FaMedal } from "react-icons/fa";
import { RatingBrand, Brand } from "../Helper/Rating_Brands.Helper";
import { AiFillStar } from "react-icons/ai";
import { GiNorthStarShuriken } from "react-icons/gi";
import Container from "../../Components/Container";
import SectionHeaders from "../Header/SectionHeaders";

const Rating_Brand = () => {
  return (
    <Container>
      <div className="rating-brand">
        <div className="Rating">
          <SectionHeaders
            heading="Top Ratings"
            headerIcon={<FaMedal className="Rating_Icon" />}
          >
            <div className="Rating_AllCarts">
              {RatingBrand?.map((item, index) => {
                return (
                  <div className="Rating_Div" key={index}>
                    <img className="Rating_Image" src={item.image} alt="image"/>
                    <br />
                    <div className="Rating_Texts">
                      <span className="Rating_Icons">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span className="Rating_Icons_Rate">
                          {" "}
                          {item.Rating}
                        </span>
                      </span>
                      <p className="Rating_Text">{item.description}</p>
                      <p className="Rating_Price">{item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionHeaders>
        </div>
        <div className="Main_Brands">
          <SectionHeaders
            heading="Featured Brands"
            headerIcon={<GiNorthStarShuriken className="Rating_Icon" />}
          >
            <div className="Brands_Carts">
              {Brand?.map((item, index) => {
                return (
                  <div className="Brands" key={index}>
                    <div className="Brands_Carts_Hover">
                      <img className="Brands_Carts_Img" src={item.image_Brand} alt="image"/>
                      <div className="Brand"></div>
                    </div>
                    <h4>{item.description_Brand}</h4>
                  </div>
                );
              })}
            </div>
          </SectionHeaders>
        </div>
      </div>
    </Container>
  );
};

export default Rating_Brand;
