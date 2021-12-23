import { React, useState } from "react";
import { MdPhone, MdOutlineEmail, MdSearch } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
// import { VscAccount } from "react-icons/vsc";
import {MdSupervisorAccount} from 'react-icons/md'
import { BiShoppingBag } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";
import logo from "../Images/logo.svg";
import Container from "../Components/Container"

const Header = () => {
  const [dropdown, setdropdown] = useState(false);
  const [Selected, setSelected] = useState(false);
  return (
    <div>
      <div className="Header_Border">
      <Container>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <div className="Header_Border_div1">
          <p className="Header_Border_Text">
            <MdPhone  className="Phone_Icon"/>
            +88012 3456 7894
          </p>
          <p className="Header_Border_Text">
            <MdOutlineEmail  className="Phone_Icon"/>
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
          <select className="Header_Border_Text1">
            <option>EN</option>
            <option>BN</option>
            <option>HN</option>
            {/* <IoIosArrowDown /> */}
          </select>
          <select className="Header_Border_Text1">
            <option>USD</option>
            <option>EUR</option>
            <option>BDT</option>
            <option>INR</option>

            {/* <IoIosArrowDown /> */}
          </select>
          </div>
        </div>
    </Container> 

      </div>
      <div className="Main_Header">
      <Container>
        <div className="Header_Search">
          <img src={logo} alt="logo" />
          <div className="Search">
            <p className="Search_Icon">
              <MdSearch />
            </p>
            <input
              className="Search_Input"
              placeholder="Search for..."
              type="text"
            />
            <select className="Btn-Categories">
              <option>All Categories </option>
              <option>Car</option>
              <option>Clothes</option>
              <option>Electronics</option>
              <option>Laptop</option>
              <option>Desktop</option>
              <option>Camera</option>
              <option>Toys</option>
              <i>
              <IoIosArrowDown /></i>
            </select>
          </div>
          <div className="Header_Icon">
            <p className="Icon">
              <MdSupervisorAccount />
            </p>
            <p className="Icon">
              <BiShoppingBag />
            </p>
          </div>
        </div>
        <div className="Header_Container">
          <div className="categories">
            <i className="categories_icon">
              <AiFillAppstore /></i>  
          <select className="Btn_Categories">  
            <option>Categories</option>
            <option>Fashion</option>
            <option>Electronics</option>
            <option>Bikes</option>
            <option>Home &amp; Garden</option>
            <option>Gifts</option>
            <option>Music</option>
            <option>Health &amp; Beauty</option>
            <option>Pets</option>
            <option>Baby Toys</option>
            <option>Groceries</option>
            <option>Autmotives</option>
        {/* <IoIosArrowForward /> */}
          </select>
          </div>
          <div className="Header_Container2">
            <div className="DropDown" onclick={() => setdropdown(!dropdown)}>
              Home
              {dropdown || (
                <div className="DropDown_Contain">
                  <div className="DropDown_Item">Super Store</div>
                  <div className="DropDown_Item">Grocery</div>
                  <div className="DropDown_Item">Shop V3</div>
                  <div className="DropDown_Item">Shop V4</div>
                </div>
              )}
            </div>
            <div className="DropDown" onclick={(e)=>setdropdown(!dropdown)}>
              Pages
              {dropdown ||(
              <div className="DropDown_Contain">
                <div className="DropDown_Item" onclick={(e)=>setSelected(!Selected)}>
                  Sale Pages
                  <IoIosArrowForward />
                  {Selected &&(
                <div className="DropDown_Contain">
                  <div className="DropDown_Item">Version 1</div>
                  <div className="DropDown_Item">Version 2</div>
                </div>)}
                </div>
                <div className="DropDown_Item" onclick={(e)=>setSelected(!Selected)}>
                  Vendor
                  <IoIosArrowForward />
                  {Selected &&(
                <div className="DropDown_Contain">
                  <div className="DropDown_Item">All Vendors</div>
                  <div className="DropDown_Item">Vendor Store</div>
                </div>)}
                </div>
                <div className="DropDown_Item" onclick={(e)=>setSelected(!Selected)} >
                  Shop
                  <IoIosArrowForward />
                  {Selected && (
                <div className="DropDown_Contain">
                  <div className="DropDown_Item">Search Product</div>
                  <div className="DropDown_Item">Single Product</div>
                  <div className="DropDown_Item">Cart</div>
                  <div className="DropDown_Item">Checkout</div>
                  <div className="DropDown_Item">Alternative Checkout</div>
                  <div className="DropDown_Item">Order Confirmation</div>
                </div>)}
                </div>
              </div>)}
            </div>

            <div className="DropDown" onclick={(e)=>setdropdown(!dropdown)}>
              User Account
              {dropdown ||(
              <div className="DropDown_Contain">
                <div className="DropDown_Item" onclick={(e)=>setSelected(!Selected)}>
                  Orders
                  <IoIosArrowForward />
                  {Selected &&(
                  <div className="DropDown_Contain">
                    <div className="DropDown_Item">Order List</div>
                    <div className="DropDown_Item">Order Details</div>
                  </div>)}
                </div>
                <div className="DropDown_Item" onclick={(e)=>setSelected(!Selected)}>
                  Profile
                  <IoIosArrowForward />
                  {Selected &&(
                  <div className=" DropDown_Contain">
                    <div className="DropDown_Item">View Profile</div>
                    <div className="DropDown_Item">Edit Profile</div>
                  </div>)}
                </div>
                <div className="DropDown_Item" onclick={(e)=>setSelected(!Selected)}>
                  Address
                  <IoIosArrowForward />
                  {Selected &&(
                  <div className="DropDown_Contain">
                    <div className="DropDown_Item">Address List</div>
                    <div className="DropDown_Item">Add Address</div>
                  </div>)}
                </div>
                <div className="DropDown_Item" onclick={(e)=>setSelected(!Selected)}>
                  Support Ticket
                  <IoIosArrowForward />
                  {Selected &&(
                  <div className="DropDown_Contain">
                    <div className="DropDown_Item">All Ticket</div>
                    <div className="DropDown_Item">Ticket Details</div>
                  </div>)}
                </div>
                <div className="DropDown_Item">Wishlist</div>
              </div>)}
            </div>
            <div className="DropDown" onclick={(e)=>setdropdown(!dropdown)}>
              Vendor Account
              {dropdown ||(
              <div className="DropDown_Contain">
                <div className="DropDown_Item">Dashboard</div>
                <div className="DropDown_Item" onclick={(e)=>setSelected(!Selected)}>
                  Product
                  <IoIosArrowForward />
                  {Selected &&(
                  <div className="DropDown_Contain">
                    <div className="DropDown_Item">All Product</div>
                    <div className="DropDown_Item">Add/Edit Product</div>
                  </div>)}
                </div>
                <div className="DropDown_Item" onclick={(e)=>setSelected(!Selected)}>
                  Orders
                  <IoIosArrowForward />
                  {Selected &&(
                  <div className="DropDown_Contain">
                    <div className="DropDown_Item">All Order</div>
                    <div className="DropDown_Item">Order Details</div>
                  </div>)}
                </div>
                <div className="DropDown_Item">Profile</div>
              </div>)}
            </div>
            <div className="DropDown">Back to Demos</div>
          </div>
        </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
