import { React, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import CatergoriesBtnDropdown from "./CatergoriesBtnDropdown";
import { useRef } from "react";

const Header_Catergories_btn = ({ haveText, resetCategory, Account }) => {
  const [Catergory, setCatergory] = useState(false);
  const [catBtn, setCatBtn] = useState(false);
  useEffect(() => {
    setCatergory(false);
  }, [resetCategory]);

  // const lockScroll = React.useCallback(() => {
  //   setCatBtn(prev => !prev)
  //   document.body.style.overflow = 'hidden';
  // }, [])

  // const unlockScroll = React.useCallback(() => {
  //   setCatBtn(false)
  //   document.body.style.overflow = '';
  // }, [])
  // const unlockScroll = () => {
  //   setCatBtn(false);
  // };
  const Close = () => {
    setCatergory(false)
    console.log("hahaha onclose working");
  };

  return (
    <>
      <div>
        <div className="categories">
          <div
            className={`Btn_Categories ${!haveText ? "condensed" : ""}`}
            onClick={() => setCatergory(true)}
          >
            <div className="Categories_btn">
              <i className="categories_icon">
                <BiCategory />
              </i>
              {haveText && (
                <p className="select" onClick={Close}>
                  Categories
                </p>
              )}
            </div>
            {Catergory && (
              <CatergoriesBtnDropdown
                onClose={() => {
                  setCatergory(false)
                }}
              />
            )}
            <IoIosArrowForward className="Categories_Icons" />
          </div>
        </div>
      </div>
      {catBtn && (
        <CatergoriesBtnDropdown
          onClose={() => {
            setCatergory(false)
          }}
          Account={Account}
        />
      )}
    </>
  );
};

export default Header_Catergories_btn;
