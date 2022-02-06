import  React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MultiDropdowm } from "../Helper/DropDownHelper";

const Header_DropDown = () => {
  return (
    <div>
      <div className="Header_Container2">
        {MultiDropdowm?.map((item, index) => {
          return (
            <div className="DropDown" key={index}>
              {item.name}
              <span className="dropDown_span">
                <div className="DropDown_Contain">
                  {item?.children?.map((subMenu) => (
                    <div className="DropDown_Item">
                      {subMenu?.name}
                      {subMenu?.icon}
                      <div className="dropDown_containers">
                        <div className="dropDown_innerDiv">
                        {subMenu.children?.map((huzmmaan) => {
                          return (
                            <div className="dropdownitems">
                              {huzmmaan?.name}
                              </div>
                              );
                            })}
                            </div>
                      </div>
                    </div>
                  ))}
                </div>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header_DropDown;
