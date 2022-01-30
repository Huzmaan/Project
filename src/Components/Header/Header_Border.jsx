import React, { useState, useRef } from "react";
import Container from "../../Components/Container";
import logoWhite from "../../Images/logo-white.svg";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import useOnOutsideClick from "../Hooks/useOnOutsideClick";

const Header_Border = ({ onClose, Account }) => {
  const modalRef = useRef(null);
  useOnOutsideClick(modalRef, () => {
    // onClose();
  });
  const [inCatergory, setinCatergory] = useState(true);
  const [Catergory, setCatergory] = useState(true);
  const [langauge, setlangauge] = useState(false);
  const [Langauge, setLangauge] = useState(false);
  const [close, setClose] = useState(false);

  const lockScroll = React.useCallback(() => {
    setClose((prev) => !prev);
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = React.useCallback(() => {
    setClose(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <div>
      <div className="Header_Border">
        <Container>
          <div className="Header_borders">
            <img className="logo_Responsive" src={logoWhite} alt="logoWhite" />
            <div className="Header_Border_div1">
              <div className="Header_Border_divs">
                <i>
                  <MdPhone className="Phone_Icon" />
                </i>
                <p className="Header_Border_Text">+88012 3456 7894</p>
              </div>
              <div className="Header_Border_div">
                <i>
                  <MdOutlineEmail className="Phone_Icon" />
                </i>
                <p className="Header_Border_Text">support@ui-lib.com</p>
              </div>
            </div>
            <div className="Header_Border_div2">
              <p className="Header_Border_Text" id="Header">
                <p className="Hover">Theme FAQ"s</p>
              </p>
              <p className="Header_Border_Text" id="Header">
                <p className="Hover">Need Help?</p>
              </p>
              <div id="Header_Text">
                <div className="Header_Border_Text1">
                  <select className="abc">
                    <option className="list_Item">EN</option>
                    <option className="list_Item">BN</option>
                    <option className="list_Item">HN</option>
                  </select>
                </div>
                <div className="Header_Border_Text2">
                  <select className="abc">
                    <option className="list_Item">USD</option>
                    <option className="list_Item">EUR</option>
                    <option className="list_Item">BDT</option>
                    <option className="list_Item">INR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* {close && (
        <inCatergory
          onClose={() => {
            unlockScroll();
          }}
          Account={Account}
        />
      )} */}
    </div>
  );
};

export default Header_Border;
