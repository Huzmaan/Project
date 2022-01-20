import React from 'react';
import { MdSupervisorAccount } from "react-icons/md";
import { BiHomeAlt, BiCategory } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";

const Header_Mobile = () => {
  return (
    <div>
      <div className="Mobile_Reponsive">
        <div className="Parts">
          <i className="Mobile_Icon">
            <BiHomeAlt />
          </i>
          <p className='title'>Home</p>
        </div>
        <div className="Parts">
          <i className="Mobile_Icon">
            <BiCategory />
          </i>
          <p className='title'>Category</p>
        </div>
        <div className="Parts">
          <p className="counter">3</p>
          <i className="Mobile_Icon">
            <BsCart3 />
          </i>
          <p className='title'>Cart</p>
        </div>
        <div className="Parts">
          <i className="Mobile_Icon">
            <MdSupervisorAccount />
          </i>
          <p className='title'>Account</p>
        </div>
      </div>
    </div>
  )
}

export default Header_Mobile
