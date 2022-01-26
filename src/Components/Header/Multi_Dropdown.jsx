import React from "react";
import { Multi_dropdown } from "../Helper/Multi_Dropdown_helper";
import "./Multi_dropdown.scss";
import Shoes from "../../Images/dropdownImage.png";

export const MultiDropdown = () => {
  return (
    <>
      <div className="Main_MultiDropDown">
        <div className="Main_Multidropdown">
          {Multi_dropdown?.map((item, index) => {
            return (
              <div className="multi_dropdown" key={index}>
                <div className="multidropdown">
                  <h4 className="dropdown-heading">{item.heading}</h4>
                  <p className="dropdown-title">{item.first_title}</p>
                  <p className="dropdown-title">{item.second_title}</p>
                  <p className="dropdown-title">{item.third_title}</p>
                  <p className="dropdown-title">{item.fourth_title}</p>
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
