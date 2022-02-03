import { React, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { DropDown } from "../Helper/DropDownHelper";

const Header_DropDown = () => {

  return (
    <div>
      <div className="Header_Container2">
        <div className="DropDown">
          Home
          <span className="dropDown_span">
            <div className="DropDown_Contain">
              {DropDown?.map((item, index) => {
                return (
                  <div className="DropDown_Item" key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
          </span>
        </div>
        <div className="DropDown">
          Pages
          <span className="dropDown_span">
            <div className="DropDown_Contain">

              <div className="DropDown_Item">
                Sale Pages
                <IoIosArrowForward />
                <div className="dropDown_containers">
                  <div className="dropDown_innerDiv">
                    <div className="dropdownitems">Version 1</div>
                    <div className="dropdownitems">Version 2</div>
                  </div>
                </div>
              </div>
              <div className="DropDown_Item">
                Vendor
                <IoIosArrowForward />
                <div className="dropDown_containers">
                  <div className="dropdownitems">All Vendors</div>
                  <div className="dropdownitems">Vendor Store</div>
                </div>
              </div>
              <div className="DropDown_Item">
                Shop
                <IoIosArrowForward />
                <div className="dropDown_containers">
                  <div className="dropdownitems">Search Product</div>
                  <div className="dropdownitems">Single Product</div>
                  <div className="dropdownitems">Cart</div>
                  <div className="dropdownitems">Checkout</div>
                  <div className="dropdownitems">Alternative Checkout</div>
                  <div className="dropdownitems">Order Confirmation</div>
                </div>
              </div>
            </div>
          </span>
        </div>

        <div className="DropDown">
          User Account
          <span className="dropDown_span">
            <div className="DropDown_Contain">
              <div className="DropDown_Item">
                Orders
                <IoIosArrowForward />
                <div className="dropDown_containers">
                  <div className="dropdownitems">Order List</div>
                  <div className="dropdownitems">Order Details</div>
                </div>
              </div>
              <div className="DropDown_Item">
                Profile
                <IoIosArrowForward />
                <div className=" dropDown_containers">
                  <div className="dropdownitems">View Profile</div>
                  <div className="dropdownitems">Edit Profile</div>
                </div>
              </div>
              <div className="DropDown_Item">
                Address
                <IoIosArrowForward />
                <div className="dropDown_containers">
                  <div className="dropdownitems">Address List</div>
                  <div className="dropdownitems">Add Address</div>
                </div>
              </div>
              <div className="DropDown_Item">
                Support Ticket
                <IoIosArrowForward />
                <div className="dropDown_containers">
                  <div className="dropdownitems">All Ticket</div>
                  <div className="dropdownitems">Ticket Details</div>
                </div>
              </div>
              <div className="DropDown_Item">Wishlist</div>
            </div>
          </span>
        </div>
        <div className="DropDown">
          Vendor Account
          <span className="dropDown_span">
            <div className="DropDown_Contain">
              <div className="DropDown_Item">Dashboard</div>
              <div className="DropDown_Item">
                Product
                <IoIosArrowForward />
                <div className="dropDown_containers">
                  <div className="dropdownitems">All Product</div>
                  <div className="dropdownitems">Add/Edit Product</div>
                </div>
              </div>
              <div className="DropDown_Item">
                Orders
                <IoIosArrowForward />
                <div className="dropDown_containers">
                  <div className="dropdownitems">All Order</div>
                  <div className="dropdownitems">Order Details</div>
                </div>
              </div>
              <div className="DropDown_Item">Profile</div>
            </div>
          </span>
        </div>
        <div className="DropDown">Back to Demos</div>
      </div>
    </div>
  );
};

export default Header_DropDown;
