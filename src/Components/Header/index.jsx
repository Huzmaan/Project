import React, { useEffect, useState } from "react";
import "./Header.scss";
import Container from "../../Components/Container";
import Header_Search from "./Header_Search";
import Header_Border from "./Header_Border";
import Header_Catergories_btn from "./Header_Catergories_btn";
import Header_DropDown from "./Header_DropDown";
import Header_Mobile from "./Header_Mobile";

const Header = ({Account}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 80);
    });
  }, []);
  return (
    <>
    <div>
      <Header_Border />

      <span
        className={`headerContainer ${scrolled ? "show-header" : "hide-header"
          }`}
      >
        <Header_Search Account showMiniMenu resetCategory={scrolled} />
      </span>

      <Header_Search Account haveText resetCategory={scrolled} />
      <div className="Main_Header">
        <Container>
          <div className="Header_Container">
            <Header_Catergories_btn Account haveText resetCategory={scrolled} />
            <Header_DropDown />
          </div>
        </Container>
        <Header_Mobile />
      </div>
    </div>
    </>
  );
};

export default Header;
