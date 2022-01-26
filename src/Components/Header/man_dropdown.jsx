import React from 'react';
import {Mandropdown}from '../Helper/man_dropdown';

const ManDropdown = () => {
  return <div>

      {Mandropdown?.map((item,index)=>{
          return(
              <div key={index}>
                  <h5>{item.heading}</h5>
                  <p>{item.FirstTitle}</p>
                  <p>{item.SecondTitle}</p>
                  <p>{item.ThirdTitle}</p>
                  <p>{item.FourthTitle}</p>
              </div>

          )
      })}
  </div>;
};

export default ManDropdown;
