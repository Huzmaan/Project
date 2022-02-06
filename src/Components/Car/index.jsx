import { React, useState } from 'react';
import './Car.scss';
import { DataCars } from '../Helper/Carts.Helper'
import { IoIosArrowForward } from "react-icons/io";
import Cart1 from "../AllCarts"
const Car = () => {
  return (
    <div className="Car_Main">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "12px" }}>
        <h3 className="Cars_Heading_text">Cars</h3>
        <div className="Veiw_Scss">
          <p >View all
            <IoIosArrowForward />
          </p>
        </div>
      </div>
      <div className="All_Carts">
        {DataCars?.map((item, index) => {
          return (
            <Cart1 item={item} index={index} />
          )
        })}
      </div>
    </div>
  )
}

export default Car