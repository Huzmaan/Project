import { React, useState } from "react";
import Container from "../../Components/Container";
import logoWhite from "../../Images/logo-white.svg";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Header_Border = () => {
  const [inCatergory, setinCatergory] = useState(true);
  const [Catergory, setCatergory] = useState(true);
  const [langauge,setlangauge]= useState (false);
  const [Langauge,setLangauge]= useState (false)

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
                <i className="Header_Border_Text">+88012 3456 7894</i>
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
                <div
                  className="Header_Border_Text1"
                  onClick={() => setinCatergory(!inCatergory)}
                >
                  <div >
                    <p className="abc">{langauge ? langauge: "EN"}</p>
                  </div>
                  <IoIosArrowForward className="categories_Icons" />
                  {inCatergory ||
                    <div className="Language">
                      <li onClick={()=>setlangauge("EN")} className="list_Item">EN</li>
                      <li onClick={()=>setlangauge("BN")} className="list_Item">BN</li>
                      <li onClick={()=>setlangauge("HN")}className="list_Item">HN</li>
                    </div>}
                </div>
                <div
                  className="Header_Border_Text2"
                  onClick={() => setCatergory(!Catergory)}
                >
                  <div >
                    <p className="abc">{Langauge ? Langauge: "USD"}</p>
                  </div>
                  <IoIosArrowForward className="categories_Icons" />
                  {Catergory ||
                    <div className="Language">
                      <li onClick={()=>setLangauge("USD")}className="list_Item">USD</li>
                      <li onClick={()=>setLangauge("EUR")}className="list_Item">EUR</li>
                      <li onClick={()=>setLangauge("BDT")}className="list_Item">BDT</li>
                      <li onClick={()=>setLangauge("INR")}className="list_Item">INR</li>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header_Border;
