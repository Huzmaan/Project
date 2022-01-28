import { React, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Header_DropDown = () => {
  const [dropdown, setdropdown] = useState(false);
  const [Selected, setSelected] = useState(false);
  return (
    <div>
      <div className="Header_Container2">
        <div className="DropDown" onclick={() => setdropdown(!dropdown)}>
          Home
          {dropdown || (
            <span className="dropDown_span">
              <div className="DropDown_Contain">
                <div className="DropDown_Item">Super Store</div>
                <div className="DropDown_Item">Grocery</div>
                <div className="DropDown_Item">Shop V3</div>
                <div className="DropDown_Item">Shop V4</div>
              </div>
            </span>
          )}
        </div>
        <div className="DropDown" onclick={(e) => setdropdown(!dropdown)}>
          Pages
          {dropdown || (
            <span className="dropDown_span">
              <div className="DropDown_Contain">
                <div
                  className="DropDown_Item"
                  onclick={(e) => setSelected(!Selected)}
                >
                  Sale Pages
                  <IoIosArrowForward />
                  {Selected || (
                    <div className="dropDown_containers">
                      <div className="dropdownitems">Version 1</div>
                      <div className="dropdownitems">Version 2</div>
                    </div>
                  )}
                </div>
                <div
                  className="DropDown_Item"
                  onclick={(e) => setSelected(!Selected)}
                >
                  Vendor
                  <IoIosArrowForward />
                  {Selected || (
                    <div className="dropDown_containers">
                      <div className="dropdownitems">All Vendors</div>
                      <div className="dropdownitems">Vendor Store</div>
                    </div>
                  )}
                </div>
                <div
                  className="DropDown_Item"
                  onclick={(e) => setSelected(!Selected)}
                >
                  Shop
                  <IoIosArrowForward />
                  {Selected || (
                    <div className="dropDown_containers">
                      <div className="dropdownitems">Search Product</div>
                      <div className="dropdownitems">Single Product</div>
                      <div className="dropdownitems">Cart</div>
                      <div className="dropdownitems">Checkout</div>
                      <div className="dropdownitems">Alternative Checkout</div>
                      <div className="dropdownitems">Order Confirmation</div>
                    </div>
                  )}
                </div>
              </div>
            </span>
          )}
        </div>

        <div className="DropDown" onclick={(e) => setdropdown(!dropdown)}>
          User Account
          {dropdown || (
            <span className="dropDown_span">
              <div className="DropDown_Contain">
                <div
                  className="DropDown_Item"
                  onclick={(e) => setSelected(!Selected)}
                >
                  Orders
                  <IoIosArrowForward />
                  {Selected || (
                    <div className="dropDown_containers">
                      <div className="dropdownitems">Order List</div>
                      <div className="dropdownitems">Order Details</div>
                    </div>
                  )}
                </div>
                <div
                  className="DropDown_Item"
                  onclick={(e) => setSelected(!Selected)}
                >
                  Profile
                  <IoIosArrowForward />
                  {Selected || (
                    <div className=" dropDown_containers">
                      <div className="dropdownitems">View Profile</div>
                      <div className="dropdownitems">Edit Profile</div>
                    </div>
                  )}
                </div>
                <div
                  className="DropDown_Item"
                  onclick={(e) => setSelected(!Selected)}
                >
                  Address
                  <IoIosArrowForward />
                  {Selected || (
                    <div className="dropDown_containers">
                      <div className="dropdownitems">Address List</div>
                      <div className="dropdownitems">Add Address</div>
                    </div>
                  )}
                </div>
                <div
                  className="DropDown_Item"
                  onclick={(e) => setSelected(!Selected)}
                >
                  Support Ticket
                  <IoIosArrowForward />
                  {Selected || (
                    <div className="dropDown_containers">
                      <div className="dropdownitems">All Ticket</div>
                      <div className="dropdownitems">Ticket Details</div>
                    </div>
                  )}
                </div>
                <div className="DropDown_Item">Wishlist</div>
              </div>
            </span>
          )}
        </div>
        <div className="DropDown" onclick={(e) => setdropdown(!dropdown)}>
          Vendor Account
          {dropdown || (
            <span className="dropDown_span">
              <div className="DropDown_Contain">
                <div className="DropDown_Item">Dashboard</div>
                <div
                  className="DropDown_Item"
                  onclick={(e) => setSelected(!Selected)}
                >
                  Product
                  <IoIosArrowForward />
                  {Selected || (
                    <div className="dropDown_containers">
                      <div className="dropdownitems">All Product</div>
                      <div className="dropdownitems">Add/Edit Product</div>
                    </div>
                  )}
                </div>
                <div
                  className="DropDown_Item"
                  onclick={(e) => setSelected(!Selected)}
                >
                  Orders
                  <IoIosArrowForward />
                  {Selected || (
                    <div className="dropDown_containers">
                      <div className="dropdownitems">All Order</div>
                      <div className="dropdownitems">Order Details</div>
                    </div>
                  )}
                </div>
                <div className="DropDown_Item">Profile</div>
              </div>
            </span>
          )}
        </div>
        <div className="DropDown">Back to Demos</div>
      </div>
    </div>
  );
};

export default Header_DropDown;
