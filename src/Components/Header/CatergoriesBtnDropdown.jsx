import React, { useRef } from "react";
import { cate_btn } from "../Helper/Catergories_btn_helper";
import UseOnOutsideClick from "../Hooks/UseOnOutsideClick";
const CatergoriesBtnDropdown = ( {onClose} ) => {
  const DropdownRef = useRef(null);


  UseOnOutsideClick(DropdownRef, () => {
    onClose();
    // console.log("outsideclick");
});
console.log("DropdownRef",DropdownRef)
  return (
    <div>
      <div  className="categories1" ref={DropdownRef}>
        {cate_btn?.map((item, index) => {
          return (
            <div  className="Categories_Type" key={index}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i >{item.icon}</i>
                <li className="Title">{item.description}</li>
              </span>
              <i>{item.view}</i>
              <span className="hover-container">{item?.hover}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatergoriesBtnDropdown;
