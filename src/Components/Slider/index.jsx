import React, { useState } from 'react';
// import nike from '../../Images/nike-black.png';
import Container from "../../Components/Container";
import { Slider_Data } from '../Helper/Slider.Helper';
import "./slider.scss";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    return (
        <div className='Slider_Main'>
            <Container>
                <BsFillArrowLeftCircleFill className='left-arrow' />
                <BsFillArrowRightCircleFill className='right-arrow' />
                {Slider_Data?.map((item, index) => {
                    return (
                        <div key={index} className="Main_Slider">
                            <div className='slider'>
                                <div className="Slider">
                                    <h1 className="Slider_Heading"><b>{item.heading}</b></h1>
                                    <p className="Slider_Text" >{item.description}</p>
                                    <button className="btn_Slider">{item.btn}</button>
                                </div>
                                <div>
                                    <img className="Slider_Img" src={item.image} alt="Nike-Black" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}

export default Slider
