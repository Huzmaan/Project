import { React, useState } from 'react';
import './Car.scss';
import { FiStar } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus, AiFillEye,AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Data_Cars } from '../Helper/Cars_Helper'
import { IoIosArrowForward } from "react-icons/io";

function Increment(props) {

  return (
    <BsPlus className="Plus_Icon" onClick={props.onClickFunction} />
  )
}
function Decrement(props) {

  return (

    props.currentId ? <AiOutlineMinus className="Minus_Icon" onClick={props.onClickFunction} /> : ""


  )
}
function Display(props) {
  return (
    props.currentId ? <p className="Counter">{props.message}</p> : ""
  )
}
const Car = () => {
  return (
    <div className="Car_Main">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3 className="Cars_Heading_text">Cars</h3>
        <div className="Veiw_Scss">
          <p >View all
            <IoIosArrowForward />
          </p>
        </div>
      </div>
      <div className="All_Carts">
        {Data_Cars?.map((item, index) => {
          return (
            <Car1 item={item} index={index} />
          )
        })}
      </div>
     
    </div>
  )
}

export default Car

export const Car1 = ({ item, index }) => {
  const [heart,setHeart]= useState(false);
  const [currentId, setCurrentId] = useState(0);
  const incrementCounter = () => setCurrentId(currentId + 1);
  let decrementCounter = () => setCurrentId(currentId - 1);
  if (currentId <= 1) {
    decrementCounter = () => setCurrentId(0);
  }
  return (
    <div className="Main_Card" key={index}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="Discount_Css"> {item.discount}</p>
        <div className='hover_flex'>
        <i>
          <AiFillEye style={{fontSize:"25px"}}/></i>
        <div onClick={() => setHeart((prev) => !prev)} 
        className="Hover_Icon">
          {heart?(
              <AiFillHeart style={{color:"red",fontSize:"25px"}}/>
              ):(
                <i >
    
              <AiOutlineHeart style={{fontSize:"21px"}}/>   </i>
          )}
        </div>
        </div>
      </div>
      <img src={item.image} width="100%" alt='image'/>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p> {item.description}</p>
          <div className="Card_Icon">
            <FiStar /> <FiStar /> <FiStar /> <FiStar />
            <FiStar />
          </div>
          <div className="Card_Price">
            <p className="Price_Actual"> {item.Price_Actual}</p>
            <p className="Price_Previous"><s> {item.Price_previous}</s></p>
          </div>
        </div>
        <div style={{ position: "relative", width: "30px", top: "40px" }}>
          <div style={{ position: "absolute", bottom: "60px", textAlign: "center" }}>
            <Decrement onClickFunction={decrementCounter} currentId={currentId} />
            <Display message={currentId} currentId={currentId} />
          </div>
          <Increment onClickFunction={incrementCounter} />
        </div>
      </div>

    </div>
  )
}