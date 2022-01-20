import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { IoIosArrowDown, IoMdContact } from "react-icons/io";
import logo from "../../Images/logo.svg";
import { BiShoppingBag } from "react-icons/bi";
import Container from "../../Components/Container";
import { IoIosArrowForward } from "react-icons/io";
import Header_Catergories_btn from "./Header_Catergories_btn";
import LoginSignup from "../modules/Login_Signup/index";


const Header_Search = ({ haveText, showMiniMenu, resetCategory, Account }) => {
  const [inCatergory, setinCatergory] = useState(false);
  const [helloWorld, sethelloWorld] = useState(false);
  const [account, setaccount] = useState(false);

  useEffect(() => {
    console.log("false")
    setinCatergory(false)
  }, [resetCategory])


  const lockScroll = React.useCallback(() => {
    setaccount(prev => !prev)
    document.body.style.overflow = 'hidden';
  }, [])


  const unlockScroll = React.useCallback(() => {
    setaccount(false)
    document.body.style.overflow = '';
  }, [])
  return (
    <>
      <div>
        <Container>
          <div className="Header_Search">
            <div className="Logo_Btn">
              <img className="Logo" src={logo} alt="logo" />
              <div className="Header_Showminimenu">
                {showMiniMenu && <Header_Catergories_btn haveText={haveText} resetCategory={resetCategory} />}
              </div>
            </div>
            <div className="Search_Parent">
              <div className="Search">
                <p className="Search_Icon">
                  <MdSearch />
                </p>
                <input
                  className="Search_Input"
                  placeholder="Searching for..."
                  type="text"
                />
                <span className="btn-Categories-Parent">
                  <div
                    className="Btn-Categories"
                    onClick={() => setinCatergory(!inCatergory)}
                  >
                    <div className="Categories_btn">
                      <p className="Select">{helloWorld ? helloWorld : "All Categories"}</p>
                    </div>
                    <IoIosArrowForward className="Categories_Icon" />
                    {inCatergory && (
                      <div className="Catergories_button">
                        <li onClick={() => sethelloWorld("Car")} className="catergories_title">Car</li>
                        <li onClick={() => sethelloWorld("Clothes")} className="catergories_title">Clothes</li>
                        <li onClick={() => sethelloWorld("Electronics")} className="catergories_title">Electronics</li>
                        <li onClick={() => sethelloWorld("Laptop")} className="catergories_title">Laptop</li>
                        <li onClick={() => sethelloWorld("Desktop")} className="catergories_title">Desktop</li>
                        <li onClick={() => sethelloWorld("Camera")} className="catergories_title">Camera</li>
                        <li onClick={() => sethelloWorld("Toys")} className="catergories_title">Toys</li>
                      </div>
                    )}
                  </div>
                </span>
              </div>
            </div>
            <div className="Header_Icon">
              <p>
                <i>
                  <IoMdContact className="Icon" onClick={() => { lockScroll() }} />
                </i>
              </p>
              <p className="Cart_Counter">3</p>
              <p className="Icon">
                <BiShoppingBag />
              </p>
            </div>
          </div>
        </Container>
      </div>
      {account && <LoginSignup onClose={() => {
        unlockScroll()

      }} Account={Account} />}
    </>
  );
};

export default Header_Search;
