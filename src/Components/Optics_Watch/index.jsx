import  React  from 'react';
import { data_Optics_Watch} from '../Helper/Carts.Helper';
import { IoIosArrowForward } from "react-icons/io";
import Cart1 from '../AllCarts';
const Optics_Watch = () => {
  return (
    <div className='Car_Main'>
      <div >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 className="MobilePhone_Heading_text">Optics / Watch</h3>
          <div className="Veiw_Scss">
            <p >View all
              <IoIosArrowForward />
            </p>
          </div>
        </div>
        <div className="All_Carts">
          {data_Optics_Watch?.map((item, index) => {
            return <Cart1 item={item} index={index}/>
            
          })}
        </div>
      </div>
    </div>
  )
}

export default Optics_Watch;
