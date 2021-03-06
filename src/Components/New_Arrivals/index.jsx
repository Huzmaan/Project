import React from 'react'
import "./New_Arrivals.scss";
import { IoIosFlash } from "react-icons/io";
import { Arrivals } from '../Helper/New_Arrivals.Helper';
import { MdFiberNew } from 'react-icons/md';
import { IoIosArrowForward } from "react-icons/io";
import Container from "../../Components/Container";
import SectionHeaders from "../Header/SectionHeaders";


const New_Arrivals = () => {
  return (
    <Container>
      <div>
        <SectionHeaders
          heading="New Arrivals"
          headerIcon={<MdFiberNew className="New_Arrivals_Icon" />}>
          {/* <div className="New_Arrivals_Heading">
                <MdFiberNew className="New_Arrivals_Icon"/>
                <h2 className="New_Arrivals_Heading_Text">New Arrivals</h2>
                <div className="New_Arrivals_Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
            </div> */}
          <div className="New_Arrivals_All_Carts">
            {Arrivals?.map((item, index) => {
              return (
                <div style={{ marginRight: "16px", cursor: "pointer" }} key={index}>
                  <div className='Brands_Carts_Hover'>
                    <img className="New_Arrivals_Image_Scss" src={item.image} />
                    <div className='Brand'></div>
                  </div>
                  <p style={{ fontWeight: "500" }}>{item.description}</p>
                  <p className="New_Arrivals_Price_scss">{item.price}</p>
                </div>
              );
            })}
          </div>
        </SectionHeaders>
      </div>
    </Container>
  )
}

export default New_Arrivals
