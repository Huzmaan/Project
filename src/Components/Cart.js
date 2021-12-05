import React from "react";
import { IoIosFlash } from "react-icons/io";
import flash from "../Images/flash-3.png";
import nike from "../Images/nike-black.png";
import watch from "../Images/watch.png";
import watch2 from "../Images/watch-2.png";
import {IoIosArrowForward} from "react-icons/io";
import { AiFillStar, AiOutlinePlusSquare } from "react-icons/ai";
import './Cart.scss';
const Cart = () => {
  return (
    <div>
      <div className="Heading_Flash">
        <div className="Cart_Heading">
        <IoIosFlash className="Flash_Icon" />
        <h2 className="Cart_Heading_Text">Flash Deals</h2>
        </div>
        <div className="Veiw_Scss">
        <p >View all
         <IoIosArrowForward/>
        </p>
        </div>
      </div>
      <div className="All_Carts">
        <div className="Main_Card">
          <img src={nike} alt="nike" width="100%" />
          <p className="Discount_Css">25% off</p>
          <p>
            <b>Smart Watch Black</b>
          </p>
          <div className="Card_Icon">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
            <AiFillStar />
          </div>
          <div className="Card_Price">
            <p className="Price_Actual">$187.50 </p>
            <p className="Price_Previous">
              <s> 250.00</s>
            </p>
            <AiOutlinePlusSquare className="Plus_Icon" />
          </div>
        </div>
        <div className="Main_Card">
          <img src={watch} alt="watch" width="100%" />
          <p className="Discount_Css">15% off</p>
          <p>
            <b>Smart Watch Black</b>
          </p>
          <div className="Card_Icon">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiFillStar />
          </div>
          <div className="Card_Price">
            <p className="Price_Actual">$297.50 </p>
            <p className="Price_Previous">
              <s> 350.00</s>
            </p>
            <AiOutlinePlusSquare className="Plus_Icon" />
          </div>
        </div>
        <div className="Main_Card">
          <img src={flash} alt="flash" width="100%" />
          <p className="Discount_Css">28% off</p>
          <p>
            <b>Smart Watch Black</b>
          </p>
          <div className="Card_Icon">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiFillStar />
          </div>
          <div className="Card_Price">
            <p className="Price_Actual">$108.00 </p>
            <p className="Price_Previous">
              <s> 150.00</s>
            </p>
            <AiOutlinePlusSquare className="Plus_Icon" />
          </div>
        </div>
        <div className="Main_Card">
          <img src={watch2} alt="watch" width="100%" />
          <p className="Discount_Css">21% off</p>
          <p>
            <b>Smart Watch Black</b>
          </p>
          <div className="Card_Icon">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiFillStar />
          </div>
          <div className="Card_Price">
            <p className="Price_Actual">$142.20 </p>
            <p className="Price_Previous">
              <s> 180.00</s>
            </p>
            <AiOutlinePlusSquare className="Plus_Icon" />
          </div>
        </div>
        <div className="Main_Card">
          <img src={nike} alt="nike" width="100%" />
          <p className="Discount_Css">25% off</p>
          <p>
            <b>Smart Watch Black</b>
          </p>
          <div className="Card_Icon">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiFillStar />
          </div>
          <div className="Card_Price">
            <p className="Price_Actual">$187.50 </p>
            <p className="Price_Previous">
              <s> 250.00</s>
            </p>
            <AiOutlinePlusSquare className="Plus_Icon" />
          </div>
        </div>
        <div className="Main_Card">
          <img src={watch} alt="watch" width="100%" />
          <p className="Discount_Css">21% off</p>
          <p>
            <b>Smart Watch Black</b>
          </p>
          <div className="Card_Icon">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiFillStar />
          </div>
          <div className="Card_Price">
            <p className="Price_Actual">$142.20 </p>
            <p className="Price_Previous">
              <s> 180.00</s>
            </p>
            <AiOutlinePlusSquare className="Plus_Icon" />
          </div>
        </div>
        <div className="Main_Card">
          <img src={flash} alt="flash" width="100%" />
          <p className="Discount_Css">28% off</p>
          <p>
            <b>Smart Watch Black</b>
          </p>
          <div className="Card_Icon">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiFillStar />
          </div>
          <div className="Card_Price">
            <p className="Price_Actual">$108.00 </p>
            <p className="Price_Previous">
              <s> 150.00</s>
            </p>
            <AiOutlinePlusSquare className="Plus_Icon" />
          </div>
        </div>
        <div className="Main_Card">
          <img src={watch2} alt="watch2" width="100%" />
          <p className="Discount_Css">15% off</p>
          <p>
            <b>Smart Watch Black</b>
          </p>
          <div className="Card_Icon">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiFillStar />
          </div>
          <div className="Card_Price">
            <p className="Price_Actual">$297.50 </p>
            <p className="Price_Previous">
              <s> 350.00</s>
            </p>
            <AiOutlinePlusSquare className="Plus_Icon" />
          </div>
        </div>
        <div className="Main_Card">
          <img src={nike} alt="nike" width="100%" />
          <p className="Discount_Css">19% off</p>
          <p>
            <b>Smart Watch Black</b>
          </p>
          <div className="Card_Icon">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiFillStar />
          </div>
          <div className="Card_Price">
            <p className="Price_Actual">$249.19 </p>
            <p className="Price_Previous">
              <s> 299.00</s>
            </p>
            <AiOutlinePlusSquare className="Plus_Icon" />
          </div>
        </div>
        <div className="Main_Card">
          <img src={watch} alt="watch" width="100%" />
          <p className="Discount_Css">21% off</p>
          <p>
            <b>Smart Watch Black</b>
          </p>
          <div className="Card_Icon">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiFillStar />
          </div>
          <div className="Card_Price">
            <p className="Price_Actual">$142.20 </p>
            <p className="Price_Previous">
              <s> 180.00</s>
            </p>
            <AiOutlinePlusSquare className="Plus_Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
