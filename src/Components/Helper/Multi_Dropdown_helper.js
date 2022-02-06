import { CgBoy, CgGirl } from "react-icons/cg";
import { MdChildCare } from "react-icons/md";
import { GiBabyFace } from "react-icons/gi";
import ManDropdown from "../Header/man_dropdown";
import { IoIosArrowForward } from "react-icons/io";

export const Multi_dropdown = 
  {
    name: "Man Clothes",
    children: [
      "Shirt","T-shirts","Pant","Underwear"
    ],

  }
export const bike_dropdown = [
  {
    icon: <CgBoy />,
    description: "Man",
    view: <IoIosArrowForward />,
    hover: <ManDropdown />,
  },
  { icon: <CgGirl />, description: "Woman" },
  { icon: <MdChildCare />, description: "Baby Boy" },
  { icon: <GiBabyFace />, description: "Baby girl" },
];
