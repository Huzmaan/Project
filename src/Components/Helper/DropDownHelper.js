import { IoIosArrowForward } from "react-icons/io";
// export const DropDown = ["Super Store", "Grocery", "Shop V3", "Shop V4"];
// export const pages = [
//   {pages1 :"Sale Pages",icon: <IoIosArrowForward />, salepage1:"Version 1",salepage2:"Version 2"},
//   {pages2 :"Vendor",icon: <IoIosArrowForward />, vendor1:"All Vendors",vendor2:"Vendor Shop"},
//   {pages3 :"Shop",icon: <IoIosArrowForward />},
// ];
export const MultiDropdowm = [
  {
    name: "Home",
    children: [
      { name: "Super Store" },
      { name: "Grocery" },
      { name: "Shop V3" },
      { name: "Shop V4" },
    ],
  },
  {
    name: "Pages",
    children: [
      {
        name: "Sale pages",icon:<IoIosArrowForward/>,
        children: [
          {
            name: "Version 1",
          },
          {
            name: "Version 2",
          },
        ],
      },
      {
        name: "Vendor",icon:<IoIosArrowForward/>,
        children: [{ name: "All Vendors" }, { name: "Vendor Shop" }],
      },
      {
        name: "Shop",icon:<IoIosArrowForward/>,
        children: [
          { name: "Search Product" },
          { name: "Single Product" },
          { name: "Cart" },
          { name: "Checkout" },
          { name: "Alternative Checkout" },
          { name: "Order Confirmation" },
        ],
      },
    ],
  },
  {
    name: "User Account",
    children: [
      {
        name: "Orders",icon:<IoIosArrowForward/>,
        children: [
          {
            name: "Order list",
          },
          {
            name: "Order Details",
          },
        ],
      },
      {
        name: "Profile",icon:<IoIosArrowForward/>,
        children: [
          {
            name: "View Profile",
          },
          { name: "Edit Profile" },
        ],
      },
      {
        name: "Address",icon:<IoIosArrowForward/>,
        children: [
          {
            name: "Address List",
          },
          { name: "Add Address" },
        ],
      },
      {
        name: "Support Tickets",icon:<IoIosArrowForward/>,
        children: [
          {
            name: "All Tickets",
          },
          { name: "Tickets Details" },
        ],
      },
      {
        name: "Wishlist",
      },
    ],
  },
  {
    name: "Vendor Account",
    children: [
      {
        name: "Dasboard",
      },
      {
        name: "Product",icon:<IoIosArrowForward/>,
        children: [
          {
            name: "All Product",
          },
          { name: "Add/Edit Product" },
        ],
      },
      {
        name: "Orders",icon:<IoIosArrowForward/>,
        children: [
          {
            name: "All Orders",
          },
          { name: "Orders Details" },
        ],
      },
      {
        name: "Profile",
      },
    ],
  },{
      name:"Back To Demos"
  }
];
