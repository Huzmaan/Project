import React, { useState } from "react";
import { MdPhone, MdOutlineEmail, MdSearch } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BiShoppingBag } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";
import logo from "../Images/logo.svg";

const Header = () => {
//   const [dropdown, setdropdown] = useState(false);
  const AllCategory=()=>{
         <div id="dropdown" className="Categories">
                <p>All Categories</p>
                <p>Car</p>
                <p>Clothes</p>
                <p>Electronics</p>
                <p>Laptop</p>
                <p>Desktop</p>
                <p>Camera</p>
                <p>Toys</p>
            </div>
  }
  return (
    <div>
      <div className="Header_Border">
        <div className="Header_Border_div1">
          <p className="Header_Border_Text">
            <MdPhone />
            +88012 3456 7894
          </p>
          <p className="Header_Border_Text">
            <MdOutlineEmail />
            support@ui-lib.com
          </p>
        </div>
        <div className="Header_Border_div2">
          <p className="Header_Border_Text">
            <p className="Hover">Theme FAQ"s</p>
          </p>
          <p className="Header_Border_Text">
            <p className="Hover">Need Help?</p>
          </p>
          <p className="Header_Border_Text1">
              <li>EN</li>
              <li>BN</li>
              <li>HN</li>
            <IoIosArrowDown />
          </p>
          <p className="Header_Border_Text1">
            USD
            <IoIosArrowDown />
          </p>
        </div>
      </div>
      <div className="Main_Header">
        <div className="Header_Search">
          <img src={logo} alt="logo" />
          <div className="Search">
            <MdSearch />
            <input
              className="Search_Input"
              placeholder="Search for..."
              type="text"
            />
            <button className="Btn-Categories" onClick={()=>AllCategory()}>
              All Categories <IoIosArrowDown />
            </button>
          </div>
          <div className="Header_Icon">
            <p className="Icon">
              <VscAccount />
            </p>
            <p className="Icon">
              <BiShoppingBag />
            </p>
          </div>
        </div>
        <div className="Header_Container">
          <button className="Btn_Categories">
            <AiFillAppstore />
            Categories
            <IoIosArrowForward />
          </button>
          <div className="Header_Container2">
            <div className="Hover_home">
              Home
              <div className="DropDown_Contain">
                <div className="DropDown_Item">Super Store</div>
                <div className="DropDown_Item">Grocery</div>
                <div className="DropDown_Item">Shop V3</div>
                <div className="DropDown_Item">Shop V4</div>
              </div>
            </div>
            <div className="Hover_home">Pages
            <div className="DropDown_Contain">
                <div className="DropDown_Item">Sale Pages<IoIosArrowForward /></div>
                <div className="DropDown_Contain">
                <div className="DropDown_Item">Version 1</div>
                <div className="DropDown_Item">Version 2</div>
              </div>
                <div className="DropDown_Item">Vendor<IoIosArrowForward /></div>
                <div className="DropDown_Contain">
                <div className="DropDown_Item">All Vendors</div>
                <div className="DropDown_Item">Vendor Store</div>
              </div>
                <div className="DropDown_Item">Shop<IoIosArrowForward /></div>
                <div className="DropDown_Contain">
                <div className="DropDown_Item">Search Product</div>
                <div className="DropDown_Item">Single Product</div>
                <div className="DropDown_Item">Cart</div>
                <div className="DropDown_Item">Checkout</div>
                <div className="DropDown_Item">Alternative Checkout</div>
                <div className="DropDown_Item">Order Confirmation</div>
              </div>
              </div>
            </div>

            <div className="Hover_home">User Account
            <div className="DropDown_Contain">
                <div className="DropDown_Item">Orders<IoIosArrowForward />
                <div className="DropDown_Contain">
                    <div className="DropDown_Item">Order List</div> 
                    <div className="DropDown_Item">Order Details</div>
                </div>
                </div>
                <div className="DropDown_Item">Profile<IoIosArrowForward />
                <div className=" DropDown_Contain">
                    <div className="DropDown_Item">View Profile</div>
                    <div className="DropDown_Item">Edit Profile</div>
                </div>
                </div>
                <div className="DropDown_Item">Address<IoIosArrowForward />
                <div className="DropDown_Contain">
                    <div className="DropDown_Item">Address List</div>
                    <div className="DropDown_Item">Add Address</div>
                </div>
                </div>
                <div className="DropDown_Item">Support Ticket<IoIosArrowForward />
                <div className="DropDown_Contain">
                    <div className="DropDown_Item">All Ticket</div>
                    <div className="DropDown_Item">Ticket Details</div>
                </div>
                </div>
                <div className="DropDown_Item">Wishlist</div>
              </div>
            </div>
            <div className="Hover_home">Vendor Account
            <div className="DropDown_Contain">
                <div className="DropDown_Item">Dashboard</div>
                <div className="DropDown_Item">Product<IoIosArrowForward />
                <div className="DropDown_Contain">
                <div className="DropDown_Item">All Product</div>
                <div className="DropDown_Item">Add/Edit Product</div>
              </div>
                </div>
                <div className="DropDown_Item">Orders<IoIosArrowForward />
                <div className="DropDown_Contain">
                <div className="DropDown_Item">All Order</div>
                <div className="DropDown_Item">Order Details</div>
              </div>
                </div>
                <div className="DropDown_Item">Profile</div>
              </div>
            </div>
            <div className="Hover">Back to Demos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
