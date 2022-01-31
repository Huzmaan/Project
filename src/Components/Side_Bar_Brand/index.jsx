import React, { useState } from "react";
import {
  Data_Side_Bar_Brands,
  Data_Side_Bar_Shops,
} from "../Helper/Side_Bar_Brands_Helper";
import "./Side_Bar_Brand.scss";

const Side_Bar_Brand = () => {
  const [currentId, SetCurrentId] = useState(false);
  return (
    <div className="Side_Bar_Brand_Main">
      <div className="Side_Bar_Brand_Shop_Heading">
        <h3 className="Brands" onClick={() => SetCurrentId(true)}>
          Brands
        </h3>
        <h3 style={{ margin: "0" }}>|</h3>
        <h3 className="Shops" onClick={() => SetCurrentId(false)}>
          Shops
        </h3>
      </div>
      {currentId ? (
        <div>
          {Data_Side_Bar_Brands?.map((item, index) => {
            return (
              <div style={{ marginBottom: ".75rem" }} key={index}>
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
              </div>
            );
          })}
          <h5 className="View_Scss">View All Brands</h5>
        </div>
      ) : (
        <div>
          {Data_Side_Bar_Shops?.map((item, index) => {
            return (
              <div style={{ marginBottom: ".75rem" }} key={index}>
                <span className="side-bar-brand">
                  {item.image && (
                    <img className="Img_Ferrari" src={item.image} alt="image" />
                  )}
                  {item.description && <p>{item.description}</p>}
                </span>
              </div>
            );
          })}
          <h5 className="View_Scss">View All Shops</h5>
        </div>
      )}
    </div>
  );
};

export default Side_Bar_Brand;
