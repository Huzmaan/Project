import React from 'react'
import "./New_Arrivals.scss";
import { Arrivals } from './New_Arrivals.Helper';
import {MdFiberNew} from 'react-icons/md';
import {IoIosArrowForward} from "react-icons/io";


const New_Arrivals = () => {
    return (
        <div>
            <span className="New_Arrivals_Heading">
                <MdFiberNew className="New_Arrivals_Icon"/>
                <h2 className="New_Arrivals_Heading_Text">New Arrivals</h2>
                <div className="New_Arrivals_Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
            </span>
            <span className="New_Arrivals_All_Carts">
            {Arrivals?.map((item, index) => {
          return (
            <div key={index}>
              <img className="New_Arrivals_Image_Scss" src={item.image} />
              <p>{item.description}</p>
              <p className="New_Arrivals_Price_scss">{item.price}</p>
            </div>
          );
        })}

                {/* <span>
                    <img src={imagegoggles} alt="" />
                    <p>Sunglass</p>
                    <p >$150</p>
                 </span>
                <span>
                    <img className="New_Arrivals_Image_Scss" src={lipstick2} alt="" />
                    <p>Makeup</p>
                    <p className="New_Arrivals_Price_scss">$250</p>
                </span>
                <span>
                    <img className="New_Arrivals_Image_Scss" src={bgwatch} alt="" />
                    <p>Smart Watch</p>
                    <p className="New_Arrivals_Price_scss">$350</p>
                </span>
                <span>
                    <img className="New_Arrivals_Image_Scss" src={lipstick1} alt="" />
                    <p>Lipstick</p>
                    <p className="New_Arrivals_Price_scss">$15</p>
                </span>
                <span>
                    <img className="New_Arrivals_Image_Scss" src={lipstick4} alt="" />
                    <p>Green plant</p>
                    <p className="New_Arrivals_Price_scss">$55</p>
                </span>
                <span>
                    <img className="New_Arrivals_Image_Scss" src={lipstick3} alt="" />
                    <p>Bonsai tree</p>
                    <p className="New_Arrivals_Price_scss">$535</p>
                </span> */}
            </span>
        </div>
    )
}

export default New_Arrivals
