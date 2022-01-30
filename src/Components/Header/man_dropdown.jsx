import React from 'react';
import {Mandropdown}from '../Helper/man_dropdown';
import './man_Dropdown.scss';
import shopping from '../../Images/module.png' 
const ManDropdown = () => {
  return(
  <>
  <div className="Main_manDropDown"> 
   <div className="Main_Mandropdown">
      {Mandropdown?.map((item,index)=>{
          return(
              <div className="man_dropdown" key={index}>
                  <div className="mandropdown">
                  <h5 className="man_dropdown-heading">{item.heading}</h5>
                  <p className="man_dropdown-title">{item.FirstTitle}</p>
                  <p className="man_dropdown-title">{item.SecondTitle}</p>
                  <p className="man_dropdown-title">{item.ThirdTitle}</p>
                  <p className="man_dropdown-title">{item.FourthTitle}</p>
              </div>
              </div>

          )
      })}
  </div>
  <img className="man_dropdown_img" src={shopping} alt="" />
  </div>
  </>
)
};

export default ManDropdown;
