import {React,useState} from 'react';
import {Data_MobilePhone,Data_MobilePhone1,Data_MobilePhone2} from './MobilePhone_Helper';
import { FiStar} from 'react-icons/fi';
import {BsPlus}from 'react-icons/bs';
import './MobilePhone.scss';
import {AiOutlineMinus} from "react-icons/ai";
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
const MobilePhone = () => {
    return (
        <div>
             <div >
        <div style={{display: 'flex',justifyContent:'space-between',marginBottom:"12px"}}>
            <h3 className="MobilePhone_Heading_text">Mobile Phones</h3>
            <div className="Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
        </div>
        <div className="All_Carts">
          <div>
          {Data_MobilePhone?.map((item, index)=>{
              return (
               <Mobile item={item} index={index}/>
              )
          })}
          </div>
          <div>
          {Data_MobilePhone1?.map((item, index)=>{
              return (
                <Mobile item={item} index={index}/>
              )
          })}
          </div>
          <div>
          {Data_MobilePhone2?.map((item, index)=>{
              return (
                <Mobile item={item} index={index}/>
              )
          })}
          </div>
        </div>
        </div>
        </div>
    )
}

export default MobilePhone

export const Mobile =({item,index})=>{
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
    <p> {item.Description}</p>
    <div className="Card_Icon">
 <FiStar /> <FiStar /> <FiStar /> <FiStar />
 <FiStar />
</div>
<div className="Card_Price">
  <p className="Price_Actual"> {item.Price_Actual}</p>
  <p className="Price_Previous"><s> {item.Price_Previous}</s></p>
  <div> 

<Decrement onClickFunction={decrementCounter} currentId={currentId}/>
<Display message={currentId} currentId={currentId}/> 
<Increment onClickFunction={incrementCounter}/>
</div>
</div>
 </div>
  )
}