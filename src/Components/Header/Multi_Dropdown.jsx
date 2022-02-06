import React from "react";
import { Multi_dropdown } from "../Helper/Multi_Dropdown_helper";
import "./Multi_dropdown.scss";
import Shoes from "../../Images/dropdownImage.png";

export const MultiDropdown = () => {
  return (
    <>
      <div className="Main_MultiDropDown">
        <div className="Main_Multidropdown">
          {Array.from({ length: 8 })?.map((_, index) => {
            return (
              <div className="multi_dropdown" key={index}>
                <div className="multidropdown">
                  <p className="dropdown-heading">{Multi_dropdown.name}</p>
                  {Multi_dropdown?.children.map((subtotal) => {
                    return <p className="dropdown-title">{subtotal}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <img className="dropdown_img" src={Shoes} alt="" />
      </div>
    </>
  );
};

export default MultiDropdown;
