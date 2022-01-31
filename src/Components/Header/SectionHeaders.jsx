import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Container from "../../Components/Container";
import "../Cart/Cart.scss";

const SectionHeaders = ({ children, headerIcon, heading }) => {
  return (
    <div>
      <Container>
        <div className="Heading_Flash">
          <div className="Cart_Heading">
            {headerIcon}
            <h2 className="Cart_Heading_Text">{heading}</h2>
          </div>
          <div className="Veiw_Scss">
            <p style={{display:"flex"}}>
              View all
              <IoIosArrowForward />
            </p>
          </div>
        </div>
        {children}
      </Container>
    </div>
  );
};

export default SectionHeaders;
