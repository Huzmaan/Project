import {
  GiClothes,
  GiFlowerPot,
  GiUltrasound,
  GiAutomaticSas
} from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineLaptop, AiOutlineShoppingCart } from "react-icons/ai";
import { FaMotorcycle, FaHeadSideVirus } from "react-icons/fa";
import { BsGift } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { GoOctoface } from "react-icons/go";
import { MultiDropdown } from "../Header/Multi_Dropdown";
import BikeDropdown from "../Header/bike_Dropdown";

export const cate_btn = [
  {
    description: "Fashion",
    icon: <GiClothes />,
    view: <IoIosArrowForward />,
    // hover: <MultiDropdown />
  },
  {
    description: "Electronics",
    icon: <AiOutlineLaptop />,
    view: <IoIosArrowForward />,
    // hover: <MultiDropdown />
  },
  {
    description: "Bikes",
    icon: <FaMotorcycle />,
    view: <IoIosArrowForward />,
    hover: <BikeDropdown />
  },
  {
    description: "Home & Garden",
    icon: <GiFlowerPot />,
    view: <IoIosArrowForward />,
    // hover: <MultiDropdown />
  },
  { description: "Gifts", icon: <BsGift />, view: <IoIosArrowForward /> },
  { description: "Music", icon: <GiUltrasound /> },
  { description: "Health & Beauty", icon: <FaHeadSideVirus /> },
  { description: "Pets", icon: <MdPets /> },
  { description: "Baby Toys", icon: <GoOctoface /> },
  { description: "Groceries", icon: <AiOutlineShoppingCart /> },
  { description: "Autmotives", icon: <GiAutomaticSas /> }
];
