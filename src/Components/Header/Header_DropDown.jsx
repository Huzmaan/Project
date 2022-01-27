import {React, useState} from 'react';
import {  IoIosArrowForward } from "react-icons/io";;

const Header_DropDown = () => {
    const [dropdown, setdropdown] = useState(false);
    const [Selected, setSelected] = useState(false);
    return (
        <div>
            
            <div className="Header_Container2">
              <div className="DropDown" onclick={() => setdropdown(!dropdown)}>
                Home
                {dropdown ||
                  <div className="DropDown_Contain">
                    <div className="DropDown_Item">Super Store</div>
                    <div className="DropDown_Item">Grocery</div>
                    <div className="DropDown_Item">Shop V3</div>
                    <div className="DropDown_Item">Shop V4</div>
                  </div>}
              </div>
              <div className="DropDown" onclick={e => setdropdown(!dropdown)}>
                Pages
                {dropdown ||
                  <div className="DropDown_Contain">
                    <div
                      className="DropDown_Item"
                      onclick={e => setSelected(!Selected)}
                    >
                      Sale Pages
                      <IoIosArrowForward />
                      {Selected ||
                        <div className="dropDown_contain">
                          <div className="DropDown_Item">Version 1</div>
                          <div className="DropDown_Item">Version 2</div>
                        </div>}
                    </div>
                    <div
                      className="DropDown_Item"
                      onclick={e => setSelected(!Selected)}
                    >
                      Vendor
                      <IoIosArrowForward />
                      {Selected ||
                        <div className="dropDown_contain">
                          <div className="DropDown_Item">All Vendors</div>
                          <div className="DropDown_Item">Vendor Store</div>
                        </div>}
                    </div>
                    <div
                      className="DropDown_Item"
                      onclick={e => setSelected(!Selected)}
                    >
                      Shop
                      <IoIosArrowForward />
                      {Selected ||
                        <div className="dropDown_contain">
                          <div className="DropDown_Item">Search Product</div>
                          <div className="DropDown_Item">Single Product</div>
                          <div className="DropDown_Item">Cart</div>
                          <div className="DropDown_Item">Checkout</div>
                          <div className="DropDown_Item">
                            Alternative Checkout
                          </div>
                          <div className="DropDown_Item">
                            Order Confirmation
                          </div>
                        </div>}
                    </div>
                  </div>}
              </div>

              <div className="DropDown" onclick={e => setdropdown(!dropdown)}>
                User Account
                {dropdown ||
                  <div className="DropDown_Contain">
                    <div
                      className="DropDown_Item"
                      onclick={e => setSelected(!Selected)}
                    >
                      Orders
                      <IoIosArrowForward />
                      {Selected ||
                        <div className="dropDown_contain">
                          <div className="DropDown_Item">Order List</div>
                          <div className="DropDown_Item">Order Details</div>
                        </div>}
                    </div>
                    <div
                      className="DropDown_Item"
                      onclick={e => setSelected(!Selected)}
                    >
                      Profile
                      <IoIosArrowForward />
                      {Selected ||
                        <div className=" dropDown_contain">
                          <div className="DropDown_Item">View Profile</div>
                          <div className="DropDown_Item">Edit Profile</div>
                        </div>}
                    </div>
                    <div
                      className="DropDown_Item"
                      onclick={e => setSelected(!Selected)}
                    >
                      Address
                      <IoIosArrowForward />
                      {Selected ||
                        <div className="dropDown_contain">
                          <div className="DropDown_Item">Address List</div>
                          <div className="DropDown_Item">Add Address</div>
                        </div>}
                    </div>
                    <div
                      className="DropDown_Item"
                      onclick={e => setSelected(!Selected)}
                    >
                      Support Ticket
                      <IoIosArrowForward />
                      {Selected ||
                        <div className="dropDown_contain">
                          <div className="DropDown_Item">All Ticket</div>
                          <div className="DropDown_Item">Ticket Details</div>
                        </div>}
                    </div>
                    <div className="DropDown_Item">Wishlist</div>
                  </div>}
              </div>
              <div className="DropDown" onclick={e => setdropdown(!dropdown)}>
                Vendor Account
                {dropdown ||
                  <div className="DropDown_Contain">
                    <div className="DropDown_Item">Dashboard</div>
                    <div
                      className="DropDown_Item"
                      onclick={e => setSelected(!Selected)}
                    >
                      Product
                      <IoIosArrowForward />
                      {Selected ||
                        <div className="dropDown_contain">
                          <div className="DropDown_Item">All Product</div>
                          <div className="DropDown_Item">Add/Edit Product</div>
                        </div>}
                    </div>
                    <div
                      className="DropDown_Item"
                      onclick={e => setSelected(!Selected)}
                    >
                      Orders
                      <IoIosArrowForward />
                      {Selected ||
                        <div className="dropDown_contain">
                          <div className="DropDown_Item">All Order</div>
                          <div className="DropDown_Item">Order Details</div>
                        </div>}
                    </div>
                    <div className="DropDown_Item">Profile</div>
                  </div>}
              </div>
              <div className="DropDown">Back to Demos</div>
            </div>
        </div>
    )
}

export default Header_DropDown
