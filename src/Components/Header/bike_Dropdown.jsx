import React from "react";
import { bike_dropdown } from "../Helper/Multi_Dropdown_helper";
import './bike_Dropdown.scss';

const BikeDropdown = () => {
  return (
    <div>
      <div className="main_bike">
        <div>
          {bike_dropdown?.map((item, index) => {
            return (
              <div className="bike-Div" key={index}>
                <div className="bike-flex">
                <i className="bike-icon">{item.icon}</i>
                <p>{item.description}</p>
                </div>
                <i>{item.view}</i>
                <span className="Hover-Container">{item?.hover}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BikeDropdown;
