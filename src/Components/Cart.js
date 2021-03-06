import React, { useState }from "react";
import { IoIosFlash } from "react-icons/io";
import Container from "../Components/Container";
import { data } from "./Carts.Helper";
import {IoIosArrowForward} from "react-icons/io";
import {BsPlus} from "react-icons/bs";
import {AiOutlineMinus} from "react-icons/ai";
import './Cart.scss';
function Increment(props) {
  
   return (
       <BsPlus className="Plus_Icon" onClick={props.onClickFunction}/>
          )
}
function Decrement(props) {
  
  return (
     
      props.currentId ?  <AiOutlineMinus className="Minus_Icon" onClick={props.onClickFunction}/> : ""
     
       
  )
}
function Display(props) {
  return (
   props.currentId ? <p className="Counter">{props.message}</p> :""
  )
}
const Cart = () => {
  
  return (
    <div>
      <Container>
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
      <div className="All_Carts1">
        {data?.map((item, index)=>{
          return(
 <Cart1 item={item} index={index}/>
            )
          })}        
      </div>
      </Container>
    </div>
  );
};
export default Cart;
export const Cart1 =({item,index})=>{
  const [currentId, setCurrentId] = useState(0);
  const incrementCounter = () => setCurrentId(currentId + 1);
  let decrementCounter = () => setCurrentId(currentId - 1);
  if(currentId<=1) {
    decrementCounter = () => setCurrentId(0);
  }
  return(
    <div className="Main_Card1" key={index}> 
    <p className="Cart_Discount_Css"> {item.discount}</p>
    <img src={item.image} width="90%"/>
    <p> {item.description}</p>
    <div className="Cart_Icon">
      <p>{item.Rating}</p>
</div>
<div >
<div className="Card_Price">
  <p className="Price_Actual"> {item.Price_Actual}</p>
  <p className="Price_previous"><s> {item.Price_previous}</s></p>
</div >
  <div> 

<Decrement onClickFunction={decrementCounter} currentId={currentId}/>
<Display message={currentId} currentId={currentId}/> 
<Increment onClickFunction={incrementCounter}/>
</div>
</div>
 </div>
  )
}