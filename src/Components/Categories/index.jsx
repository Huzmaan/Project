import React, {useState} from "react";
import { AiFillAppstore,AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
// import { IoIosArrowForward } from "react-icons/io";
import "./Catergory.scss";
import { Categorie } from "../Helper/Catergory.Helper";
import Container from "../../Components/Container";
import SectionHeaders from "../Header/SectionHeaders";
const Catergory = () => {
  return (
    <div className="Main_Category">
      <SectionHeaders
        heading="Top Categories"
        headerIcon={<AiFillAppstore className="Catergory_Icon" />}
      >
        <div className="Catergory_Scss">
          {Categorie?.map((item, index) => {
            return (
              <div className="catergory_main" key={index}>
                <div className="catergory_Radius">
                  <div className="Catergory_radius">
                    <div className="catergories_radius"
                    >
                      <p className="Catergory_Item">{item.description}</p>
                    </div>
                    <div className="catergories_radius"
                    >
                      <p className="Catergory_Time">{item.order}</p>
                    </div>
                  </div>
                  <div className="Catergories_div">
                    <div className="catergories">
                      <div className="Catergories_Main_Div"
                      >
                        <div className="Brands_Carts_Hover">
                          <img className="Catergory_Image" src={item.image} />
                          <div className="Brand"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionHeaders>
     
    </div>
  );
};

export default Catergory;
