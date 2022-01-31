import React from "react";
import { AiFillAppstore } from "react-icons/ai";
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
      <div className="categories_main">
        {Data_Categories_Main?.map((item, index) => {
          return (
            <div className="Categories" key={index}>
              <div className="Catergories_Image_description">
                <img src={item.image} alt="image"/>
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
