// import {useState} from "react";
// import Container from './Components/Container';
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Categories from "./Components/Categories";
import Rating_Brand from "./Components/Rating_Brand";
import New_Arrivals from "./Components/New_Arrivals";
import Discount from "./Components/Big_Discount";
import Side_Bar_Car from "./Components/Side_Bar_Car";
import Side_Bar_Brands_MobilePhone from "./Components/Side_Bar_Brands_MobilePhone";
import Banner from "./Components/Banner";
import Side_Bar_Brand_Optics_Watch from "./Components/Side_Bar_Brand_Optics_Watch";
import Categories_Main from "./Components/Catergories_Main";
import More_For_You from "./Components/More_For_You";
import Deliver from "./Components/Deliver";
import Footer from "./Components/Footer";
import { Slider_Data } from "./Components/Helper/Slider.Helper";
import { data } from "./Components/Helper/Carts.Helper";
import { Categorie } from "./Components/Helper/Catergory.Helper";
import { big_discout } from "./Components/Helper/Big_Discount.Helper";

function App() {
  return (
    <div className="App">
      <div className="Header_Slider">
        <Header />
        <Slider slides={Slider_Data} />
      </div>
      <Cart slide={data} />
      <Categories slide={Categorie} />
      <Rating_Brand />
      <New_Arrivals />
      <Discount slide={big_discout} />
      <Side_Bar_Car />
      <Side_Bar_Brands_MobilePhone />
      <Banner />
      <Side_Bar_Brand_Optics_Watch />
      <Categories_Main />
      <More_For_You />
      <Deliver />
      <Footer />
    </div>
  );
}

export default App;
