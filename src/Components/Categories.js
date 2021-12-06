import React from 'react';
import {AiFillAppstore} from "react-icons/ai";
import './Catergory.scss';
import {Categories} from '../Components/Catergory.Helper';
const Catergory = () => {
    return (
        <div>
            <div className="Category_Heading">
            <AiFillAppstore className= "Catergory_Icon"/>
            <h2 className="Category_Heading_Text">Top Categories</h2 >
            </div>
            <div className="Catergory_Scss">
                {Categories?.map((item, index)=>{
                    return(
                        <div key={index}>
                      <img className="Catergory_Image" src={item.image}/>
                      <span className="Catergory_radius">
                          <p className="Catergory_Item">{item.description}</p>
                          <p className="Catergory_Time">{item.order}</p>
                      </span>
                        </div>
                    )
                })}
                {/* <div>
             <img className="Catergory_Image1" src={categories1}alt="categories1"/>
             <span className="Catergory_radius">
             <p className="Catergory_Item">Headphone</p>
             <p className="Catergory_Time">3k orders this week</p></span>
             </div>
             <div>
             <img className="Catergory_Image2" src={categories2}alt="categories2"/>
             <span className="Catergory_radius">
             <p className="Catergory_Item">Watches</p>
             <p className="Catergory_Time">3k orders this week</p></span>
             </div>
             <div>
             <img className="Catergory_Image3" src={categories3}alt="categories3"/>
             <span className="Catergory_radius">
             <p className="Catergory_Item">Sunglasses</p>
             <p className="Catergory_Time">3k orders this week</p></span>
             </div> */}
            </div>
        </div>
    )
}

export default Catergory
