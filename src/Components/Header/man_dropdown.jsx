import React from "react";
import { Multi_dropdown } from "../Helper/Multi_Dropdown_helper";
import "./man_Dropdown.scss";
import shopping from "../../Images/module.png";
const ManDropdown = () => {
  return (
    <>
      <div className="Main_manDropDown">
        <div className="Main_Mandropdown">
          {Array.from({ length: 4 })?.map((_, index) => {
            return (
              <div className="man_dropdown" key={index}>
                <div className="mandropdown">
                  <p className="man_dropdown-heading">{Multi_dropdown.name}</p>
                  {Multi_dropdown?.children.map((subtotal) => {
                    return <p className="man_dropdown-title">{subtotal}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <img className="man_dropdown_img" src={shopping} alt="" />
      </div>
    </>
  );
};

export default ManDropdown;
