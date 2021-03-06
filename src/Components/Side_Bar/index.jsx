import React from 'react';
import {data_Side_Bar} from "../Helper/Side_Bar_Helper"
import './Side_Bar.scss';



const Side_Bar = () => {
    return (
        <div className="side-bar_Main">
            {data_Side_Bar?.map((item, index)=>{
                return (
                    <span className="side-bar" key={index}>
                        <span className="Ferrari_Scss">
                       <img className="Img_Ferrari" src={item.image} alt="Ferrari"/>
                       <p>{item.description} </p>
                       </span>
                    </span>
                )
            })}
            <p className="View_Scss">View All Brands</p>
           
        </div>
    )
}

export default Side_Bar
