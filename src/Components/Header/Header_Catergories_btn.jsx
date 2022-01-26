import { React, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { cate_btn } from "../Helper/Catergories_btn_helper";

const Header_Catergories_btn = ({ haveText, resetCategory }) => {
  const [Catergory, setCatergory] = useState(false);

  useEffect(() => {
    setCatergory(false);
  }, [resetCategory]);

  return (
    <div>
      <div className="categories">
        <div
          className={`Btn_Categories ${!haveText ? "condensed" : ""}`}
          onClick={() => setCatergory(!Catergory)}
        >
          <div className="Categories_btn">
            <i className="categories_icon">
              <BiCategory />
            </i>
            {haveText && <p className="select">Categories</p>}
          </div>
          <IoIosArrowForward className="Categories_Icons" />
          {Catergory && (
            <div className="categories1">
              {cate_btn?.map((item, index) => {
                return (
                  <div className="Categories_Type" key={index}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <i>{item.icon}</i>
                      <li className="Title">{item.description}</li>
                    </span>
                    <i>{item.view}</i>
                    <span className="hover-container">{item?.hover}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header_Catergories_btn;
