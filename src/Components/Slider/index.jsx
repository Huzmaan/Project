import React from 'react';
import nike from '../../Images/nike-black.png';
import Container from "../../Components/Container";
import "./slider.scss"

const Slider = () => {
    return (
        <>
            <Container>
                <div>
                    <div >
                        <div className="Main_Slider">
                            <div className='slider'>
                                <div className="Slider"  >
                                    <h1 className="Slider_Heading"><b>50% Off For Your First Shopping</b></h1>
                                    <p className="Slider_Text" >lorem Ipsum dollor sit amet, consectetur adipiscing elit.Quis labortis consequat eu,quam etiam at quis ut convallis.</p>
                                    <button className="btn_Slider">Shop Now</button>
                                </div>
                                <div>
                                    <img className="Slider_Img" src={nike} alt="Nike-Black" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* <Container>
        <div className="Main_Slider">
            <div className="Slider" >
                <h1 className="Slider_Heading"><b>50% Off For Your First Shopping</b></h1>
                <p className="Slider_Text">lorem Ipsum dollor sit amet, consectetur adipiscing elit.Quis labortis consequat eu,quam etiam at quis ut convallis.</p>
                <button className= "btn_Slider">Shop Now</button>
            </div>
                <img className="Slider_Img" src={nike} alt="Nike-Black" /> 
        </div>
                </Container> */}
        </>
    )
}

export default Slider
