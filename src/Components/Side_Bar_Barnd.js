import React, { useState } from "react";
import {
  Data_Side_Bar_Brands,
  Data_Side_Bar_Shops,
} from "./Side_Bar_Brands_Helper";

const Side_Bar_Brand = () => {
  const [currentId, SetCurrentId] = useState(false);
  return (
    <div className="Side_Bar_Brand_Main">
      <div className="Side_Bar_Brand_Shop_Heading">
        <p  onClick={() => SetCurrentId(true)}>Brands</p>
        <p>|</p>
        <p onClick={() => SetCurrentId(false)}>Shops</p>
      </div>
      {currentId ? (
        <div>
          {Data_Side_Bar_Brands?.map((item, index) => {
            return (
              <div key={index}>
                {
                  <span className="side-bar-brand">
                    {item.image && (
                      <img
                        className="Img_Ferrari"
                        src={item.image}
                        alt="image"
                      />
                    )}
                    {item.description && <p>{item.description}</p>}
                  </span>
                }
                <h5 className="View_Scss">{item.View}</h5>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {Data_Side_Bar_Shops?.map((item, index) => {
            return (
              <div key={index}>
                <span className="side-bar-brand">
                  {item.image && (
                    <img className="Img_Ferrari" src={item.image} alt="image" />
                  )}
                  {item.description && <p>{item.description}</p>}
                </span>
                <h5 className="View_Scss">{item.View}</h5>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Side_Bar_Brand;

