import React from 'react';
import nike from '../Images/nike-black.png';

const Slider = () => {
    return (
        <>
        <div className="Main_Slider">
            <div >
                <h1><b>50% Off For Your First Shopping</b></h1>
                <p>lorem Ipsum dollor sit amet, consectetur adipiscing elit.Quis labortis consequat eu,quam etiam at quis ut convallis.</p>
                <button className= "btn_Slider">Shop Now</button>
            </div>
                <img src={nike} alt="Nike-Black" /> 
        </div>
        <div className="Main_Slider">
        <div >
            <h1><b>50% Off For Your First Shopping</b></h1>
            <p>lorem Ipsum dollor sit amet, consectetur adipiscing elit.Quis labortis consequat eu,quam etiam at quis ut convallis.</p>
            <button className= "btn_Slider">Shop Now</button>
        </div>
            <img src={nike} alt="Nike-Black" /> 
    </div>
    </>
    )
}

export default Slider
