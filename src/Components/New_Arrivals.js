import React from 'react'
import "./New_Arrivals.scss";
import { Arrivals } from './New_Arrivals.Helper';
import {MdFiberNew} from 'react-icons/md';
import {IoIosArrowForward} from "react-icons/io";
import Container from "../Components/Container";


const New_Arrivals = () => {
    return (
        <div>
            <Container>
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
            </span>
            </Container>
        </div>
    )
}

export default New_Arrivals
