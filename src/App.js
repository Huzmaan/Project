import './Header.scss';
import './slider.scss';
import Cart from './Components/Cart';
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Categories from "./Components/Catergory";
import Rating_Brand from "./Components/Rating_Brand"
function App() {
  return (
    <div className="App">
   {/* <Header/> */}
   <Slider/>
   <div className="App1">
   <Cart/>
   <Categories/>
   <Rating_Brand/> 
    </div>
    </div>
  );
}

export default App;
