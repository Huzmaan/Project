import React from 'react';
import {Mandropdown}from '../Helper/man_dropdown';

const ManDropdown = () => {
  return <div>

      {Mandropdown?.map((item,index)=>{
          return(
              <div className="multi_dropdown" key={index}>
                  <div className="multidropdown">
                  <h5 className="dropdown-heading">{item.heading}</h5>
                  <p className="dropdown-title">{item.FirstTitle}</p>
                  <p className="dropdown-title">{item.SecondTitle}</p>
                  <p className="dropdown-title">{item.ThirdTitle}</p>
                  <p className="dropdown-title">{item.FourthTitle}</p>
              </div>
              </div>

          )
      })}
  </div>;
};

export default ManDropdown;
