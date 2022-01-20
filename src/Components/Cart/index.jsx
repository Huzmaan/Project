import React, { useState } from "react";
import { IoIosFlash } from "react-icons/io";
import { data } from "../Helper/Carts.Helper";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus, AiFillHeart, AiFillEye } from "react-icons/ai";
import "./Cart.scss";
import SectionHeaders from "../Header/SectionHeaders";
function Increment(props) {
  return <BsPlus className="Plus_Icon" onClick={props.onClickFunction} />;
}
function Decrement(props) {
  return props.currentId ? (
    <AiOutlineMinus className="Minus_Icon" onClick={props.onClickFunction} />
  ) : (
    ""
  );
}
function Display(props) {
  return props.currentId ? <p className="Counter">{props.message}</p> : "";
}
const Cart = () => {
  return (
    <div>
      <SectionHeaders
        heading="Flash Deals"
        headerIcon={<IoIosFlash className="Flash_Icon" />}
      >
        <div className="All_Carts1">
          {data?.map((item, index) => {
            return <Cart1 item={item} index={index} />;
          })}
        </div>
      </SectionHeaders>
    </div>
  );
};
export default Cart;

export const Cart1 = ({ item, index }) => {
  const [currentId, setCurrentId] = useState(0);

  const incrementCounter = () => setCurrentId(currentId + 1);
  const decrementCounter = () => {
    // if(currentId > 0)
    setCurrentId(currentId - 1);
  };

  return (
    <div className="Main_Card1" key={index}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="Discount_Css"> {item.discount}</p>
        <div className="Hover_Icon">
          <i>
            <AiFillEye /></i>
          <i>
            <AiFillHeart /></i>
        </div>
      </div>
      <img src={item.image} className="Cart_Img" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="Cart_Description">
          <p className="description"> {item.description}</p>
          <div className="Cart_Icon">
            <p className="rating">{item.Rating}</p>
          </div>
          <div className="Card_Price">
            <p className="Price_Actual"> {item.Price_Actual}</p>
            <p className="Price_Previous">
              <s> {item.Price_previous}</s>
            </p>
          </div>
        </div>
        <div style={{ position: "relative", width: "30px", top: "28px" }}>
          <div
            style={{
              position: "absolute",
              bottom: "38px",
              textAlign: "center",
            }}
          >
            <Decrement
              onClickFunction={decrementCounter}
              currentId={currentId}
            />
            <Display message={currentId} currentId={currentId} />
          </div>
          <Increment onClickFunction={incrementCounter} />
        </div>
      </div>
    </div>
  );
};
