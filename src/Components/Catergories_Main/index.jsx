import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import {
  Data_Categories_Main,
} from "../Helper/Categories_Main_Helper";
import SectionHeaders from "../Header/SectionHeaders";
import "./Categories_Main.scss";
import Container from "../../Components/Container";

const Categories_Main = () => {
  return (
      <Container>
    <div className="Car_Mains">
    <SectionHeaders
     heading=" Categories"
     headerIcon={<AiFillAppstore className="Catergory_Icon" />}
    >
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="Category_Heading">
          <AiFillAppstore className="Catergory_Icon" />
          <h2 className="Category_Heading_Text">Top Categories</h2>
        </div>
        <div className="Veiw_Scss">
          <p>
            View all
            <IoIosArrowForward />
          </p>
        </div>
      </div> */}
      <div className="categories_main">
        {Data_Categories_Main?.map((item, index) => {
          return (
            <div className="Categories" key={index}>
              <div className="Catergories_Image_description">
                <img src={item.image} />
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      </SectionHeaders>
    </div>
      </Container>
  );
};

export default Categories_Main;
