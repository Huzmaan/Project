import React from 'react';
import {AiFillAppstore} from "react-icons/ai";
import {IoIosArrowForward} from "react-icons/io";
import { Data_Categories_Main,Data_Categories_Main1} from './Categories_Main_Helper';
import './Categories_Main.scss';


const Categories_Main = () => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
           <div className="Category_Heading">
            <AiFillAppstore className= "Catergory_Icon"/>
            <h2 className="Category_Heading_Text">Top Categories</h2 >
            </div>
            <div className="Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
        </div>  
            <div className="categories_main">
                {Data_Categories_Main?.map((item, index)=>{
                    return(
                        <div className="Categories" key={index}>
                      <img  src={item.image}/>
                      <p >{item.description}</p>
                        </div>
                    )
                })}
            </div>
            <div className="categories_main">
                {Data_Categories_Main1?.map((item, index)=>{
                    return(
                        <div className="Categories" key={index}>
                      <img  src={item.image}/>
                      <p >{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories_Main
