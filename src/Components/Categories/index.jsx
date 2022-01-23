import React, {useState} from "react";
import { AiFillAppstore } from "react-icons/ai";
import {FiArrowLeftCircle,FiArrowRightCircle} from 'react-icons/fi';
// import { IoIosArrowForward } from "react-icons/io";
import "./Catergory.scss";
import { Categorie } from "../Helper/Catergory.Helper";
import Container from "../../Components/Container";
import SectionHeaders from "../Header/SectionHeaders";
const Catergory = ({slide}) => {
  const [hello, setHello] = useState(0);
  const length = slide.length;
  console.log(slide)
  // const ref = useRef(null);
  
  const rigthSlide = () => {
    setHello(hello === length - 1 ? 0 : hello + 1);
  };
  
  const leftSlide = () => {
    setHello(hello === 0 ? length - 1 : hello - 1);
  };
  console.log(hello);
  if (!Array.isArray(slide) || slide.length <= 0) {
    return null;
  }
  return (
    <div className="Main_Category">
       <Container>
       <div className="icon_Slider">
          <FiArrowLeftCircle
            className="Left-Arrow"
            onClick={leftSlide}
            />
          <FiArrowRightCircle
            className="Right-Arrow"
            onClick={rigthSlide}
            />
        </div>
        </Container>
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
