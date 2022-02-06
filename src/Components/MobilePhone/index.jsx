import { React, useState } from 'react';
import { Data_MobilePhone } from '../Helper/Carts.Helper';
import './MobilePhone.scss';
import { IoIosArrowForward } from "react-icons/io";
import Cart1 from '../AllCarts';
const MobilePhone = () => {
  const [currentId, setCurrentId] = useState(0);
  const incrementCounter = () => setCurrentId(currentId + 1);
  let decrementCounter = () => setCurrentId(currentId - 1);
  if (currentId <= 1) {
    decrementCounter = () => setCurrentId(0);
  }
  return (
    <div className='Car_Main'>
      <div >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3 className="MobilePhone_Heading_text">Mobile Phones</h3>
          <div className="Veiw_Scss">
            <p >View all
              <IoIosArrowForward />
            </p>
          </div>
        </div>
        <div className="All_Carts">
          {Data_MobilePhone?.map((item, index) => {
            return <Cart1 item={item} index={index} />;
            
          })}
        </div>
      </div>
    </div>
  )
}

export default MobilePhone