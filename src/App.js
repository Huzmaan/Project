import './Header.scss';
import './slider.scss';
// import {useState} from "react";
// import Container from './Components/Container';
import Cart from './Components/Cart';
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Categories from "./Components/Categories";
import Rating_Brand from "./Components/Rating_Brand";
import New_Arrivals from "./Components/New_Arrivals";
import Discount from "./Components/Big_Discout";
import Side_Bar_Car from "./Components/Side_Bar_Car";
import Side_Bar_Brands_MobilePhone from './Components/Side_Bar_Brands_MobilePhone';
import Banner from './Components/Banner';
import Side_Bar_Brand_Optics_Watch from './Components/Side_Bar_Brand_Optics_Watch';
import Categories_Main  from './Components/Categories_Main';
import More_For_You from './Components/More_For_You';
import Deliver from './Components/Deliver';
import Footer from './Components/Footer';
function App() {
  // const [selected,setSelected] = useState("")
  return (
    <div className="App">
      <div className="Header_Slider">
   <Header/>
   <Slider/>
   </div>
   <div className="App1">
   <Cart/>
   <Categories/>
   <Rating_Brand/> 
   <New_Arrivals/>
   <Discount/>
   <Side_Bar_Car/>
   <Side_Bar_Brands_MobilePhone/>
   <Banner/>
   <Side_Bar_Brand_Optics_Watch/>
   <Categories_Main/>
   <More_For_You/>
   <Deliver/>
   <Footer/>
    </div>
    </div>
  );
}

export default App;
