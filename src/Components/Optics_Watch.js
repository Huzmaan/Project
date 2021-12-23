import {React ,useState} from 'react';
import {data_Optics_Watch,data_Optics_Watch1,data_Optics_Watch2} from './Optics_Watch_Helper';
import { FiStar} from 'react-icons/fi';
import {BsPlus} from "react-icons/bs";
import {IoIosArrowForward}from "react-icons/io";
import {AiOutlineMinus} from "react-icons/ai"

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
const Optics_Watch = () => {
    return (
        <div>
             <div >
        <div style={{display: 'flex',justifyContent:'space-between',alignItems:'center',marginBottom:"12px "}}>
            <h3 className="MobilePhone_Heading_text">Optics / Watch</h3>
            <div className="Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
        </div>
        <div className="All_Carts">
          <div>
          {data_Optics_Watch?.map((item, index)=>{
              return (
                <Optics item={item} index={index}/>
              )
          })}
          </div>
          <div>
          {data_Optics_Watch1?.map((item, index)=>{
              return (
                <Optics item={item} index={index}/>
              )
          })}
          </div>
          <div>
          {data_Optics_Watch2?.map((item, index)=>{
              return (
                <Optics item={item} index={index}/>
              )
          })}
          </div>
        </div>
        </div>
        </div>
    )
}

export default Optics_Watch;


export const Optics =({item,index})=>{
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
