import './Header.scss';
import './slider.scss';
import Cart from './Components/Cart';
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Categories from "./Components/Categories";
import Rating_Brand from "./Components/Rating_Brand";
import New_Arrivals from "./Components/New_Arrivals";
import Discount from "./Components/Big_Discout";
import Side_Bar_Car from "./Components/Side_Bar_Car";
import Side_Bar_Brands from './Components/Side_Bar_Brands';
import MobilePhone from './Components/MobilePhone';
function App() {
  return (
    <div className="App">
   {/* <Header/> */}
   <Slider/>
   <div className="App1">
   <Cart/>
   <Categories/>
   <Rating_Brand/> 
   <New_Arrivals/>
   <Discount/>
   <Side_Bar_Car/>
   <Side_Bar_Brands/>
   <MobilePhone/>
    </div>
    </div>
  );
}

export default App;
