import {React ,useState} from 'react';
import './Car.scss';
import {FiStar} from "react-icons/fi";
import {BsPlus} from "react-icons/bs";
import {AiOutlineMinus} from "react-icons/ai"
import {Data_Cars,Data_Cars1} from './Cars_Helper'
import {IoIosArrowForward}from "react-icons/io";

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
const Car = () => {
    return (
        <div className="Car_Main">
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:"12px"}}>
            <h3 className="Cars_Heading_text">Cars</h3>
            <div className="Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
        </div>
        <div className="All_Carts">
          {Data_Cars?.map((item, index)=>{
              return (
                <Car1 item={item} index={index}/>
              )
          })}
        </div>
        <div className="All_Carts">
          {Data_Cars1?.map((item, index)=>{
              return (
                <Car1 item={item} index={index}/>
              )
          })}
        </div>
        </div>
    )
}

export default Car

export const Car1 =({item,index})=>{
    const [currentId, setCurrentId] = useState(0);
    const incrementCounter = () => setCurrentId(currentId + 1);
    let decrementCounter = () => setCurrentId(currentId - 1);
    if(currentId<=1) {
      decrementCounter = () => setCurrentId(0);
    }
  return(
    <div className="Main_Card" key={index}> 
    <img src={item.image} width="100%"/>
    <p className="Discount_Css"> {item.discount}</p>
    <p> {item.description}</p>
    <div className="Card_Icon">
 <FiStar /> <FiStar /> <FiStar /> <FiStar />
 <FiStar />
</div>
<div className="Card_Price">
  <p className="Price_Actual"> {item.Price_Actual}</p>
  <p className="Price_Previous"><s> {item.Price_previous}</s></p>
</div>
<div> 

<Decrement onClickFunction={decrementCounter} currentId={currentId}/>
<Display message={currentId} currentId={currentId}/> 
<Increment onClickFunction={incrementCounter}/>
</div>
 </div>
  )
}