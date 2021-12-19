import logo from "../Images/logo.svg";
import Playstore from "../Images/appstore.jpg";
import {FaFacebookF,FaGoogle} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'
import {AiFillYoutube} from 'react-icons/ai';
import {SiInstagram} from 'react-icons/si';
export const Data_Footer_Logo = [
  {
    image: logo,
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.",
    image2: Playstore,
  },
];
export const Data_Footer_About = [
  {
    Description: "About Us",
    p1: "Careers",
    p2: "Our Stores",
    p3: "Our Cares",
    p4: "Terms & Conditions",
    p5: "Privacy Policy",
  },
];
export const Data_Footer_Customer = [
    {
      Description: "Customer Care",
      p1: "Help Center",
      p2: "How to Buy",
      p3: "Track Your Order",
      p4: "Corporate & Bulk Purchasing",
      p5: "Returs & Refunds",
    },
  ];
  export const Data_Footer_Contact = [
    {
      Description: "Contact",
      p1: "70 Washington Square South, New York, NY 10012, United States",
      p2: "Email: uilib.help@gmail.com",
      p3: "Phone: +1 1123 456 780",
      p4 :<FaFacebookF/>,
      p5:<CgTwitter/>,
      p6:<AiFillYoutube/>,
      p7:<FaGoogle/>,
      p8:<SiInstagram/>,
    },
  ];
