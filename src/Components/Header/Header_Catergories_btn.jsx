import { React, useEffect, useState } from "react";
import {
  GiClothes,
  GiFlowerPot,
  GiUltrasound,
  GiAutomaticSas,
} from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { AiOutlineLaptop, AiOutlineShoppingCart } from "react-icons/ai";
import { GoOctoface } from "react-icons/go";
import { FaMotorcycle, FaHeadSideVirus } from "react-icons/fa";
import { BsGift } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { BiCategory } from "react-icons/bi";

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
              <span className="Categories_Type">
                <i className="Categories_Icons">
                  <GiClothes />
                </i>
                <li className="Title">Fashion</li>
              </span>
              <span className="Categories_Type">
                <i className="Categories_Icons">
                  <AiOutlineLaptop />
                </i>
                <li className="Title">Electronics</li>
              </span>
              <span className="Categories_Type">
                <i className="Categories_Icons">
                  <FaMotorcycle />
                </i>
                <li className="Title">Bikes</li>
              </span>
              <span className="Categories_Type">
                <i className="Categories_Icons">
                  <GiFlowerPot />
                </i>
                <li className="Title">Home &amp; Garden</li>
              </span>
              <span className="Categories_Type">
                <i className="Categories_Icons">
                  <BsGift />
                </i>
                <li className="Title">Gifts</li>
              </span>
              <span className="Categories_Type">
                <i className="Categories_Icons">
                  <GiUltrasound />
                </i>
                <li className="Title">Music</li>
              </span>
              <span className="Categories_Type">
                <i className="Categories_Icons">
                  <FaHeadSideVirus />
                </i>
                <li className="Title">Health &amp; Beauty</li>
              </span>
              <span className="Categories_Type">
                <i className="Categories_Icons">
                  <MdPets />
                </i>
                <li className="Title">Pets</li>
              </span>
              <span className="Categories_Type">
                <i className="Categories_Icons">
                  <GoOctoface />
                </i>
                <li className="Title">Baby Toys</li>
              </span>
              <span className="Categories_Type">
                <i className="Categories_Icons">
                  <AiOutlineShoppingCart />
                </i>
                <li className="Title">Groceries</li>
              </span>
              <span className="Categories_Type">
                <i className="Categories_Icons">
                  <GiAutomaticSas />
                </i>
                <li className="Title">Autmotives</li>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header_Catergories_btn;
