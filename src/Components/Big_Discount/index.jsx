import React,{useState} from "react";
import { GrGift } from "react-icons/gr";
import "./Big_Discount.scss";
import {AiOutlineArrowRight,AiOutlineArrowLeft}from "react-icons/ai";
import Container from "../../Components/Container"
import SectionHeaders from "../Header/SectionHeaders";

import {big_discout} from "../Helper/Big_Discount.Helper";
const Big_Discout = ({slide}) => {
  const [hello, setHello] = useState(0);
  const length = slide.length;
  console.log(slide)
  // const ref = useRef(null);
  
  const rigthSlide = () => {
    setHello(hello === length - 1 ? 0 : hello + 1);
  };
  
  const leftSlide = () => {
    setHello(hello === 0 ? length - 1 : hello - 1);
  };
  console.log(hello);
  if (!Array.isArray(slide) || slide.length <= 0) {
    return null;
  }
  return (
      <Container>
    <div>
    <Container>
       <div className="icon_Slider">
          <AiOutlineArrowLeft
            className="Left-Arrow"
            onClick={leftSlide}
            />
          <AiOutlineArrowRight
            className="Right-Arrow"
            onClick={rigthSlide}
            />
        </div>
        </Container>
     <SectionHeaders
     heading="Big Discounts"
     headerIcon={<GrGift className="Big_Discount_Icon" />}
     >
      <span className="Big_Discount_All_Carts">
        {big_discout?.map((item, index) => {
          return (
            <div className="Big_Discount_Carts" key={index}>
              <img className="Big_Discount_Img" src={item.image} />
              <div style={{display:"grid"}}>
              <h4 className="Big_Discount_Description">{item.description}</h4>
              <span className="Big_Discount_Main_Price">
              <p className="Big_Discount_Price_Scss">{item.price}</p>
              <p className="Big_Discount_DisPrice_Scss"><s>{item.disPrice}</s></p>
              </span>
              </div>
            </div>
          );
        })}
      </span>
      </SectionHeaders>
    </div>
      </Container>
  );
};

export default Big_Discout;
