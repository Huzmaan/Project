import React, { useState, useRef } from "react";
import Container from "../../Components/Container";
import { Slider_Data } from "../Helper/Slider.Helper";
import "./slider.scss";
const Slider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = slides.length;
  const ref = useRef(null);

  const rigthSlide = () => {
    setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1);
  };

  const leftSlide = () => {
    setActiveIndex(activeIndex === 0 ? length - 1 : activeIndex - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div style={{ maxWidth: "1280px", margin: "auto" }}>
      <div className="Slider_Main">
        <Container>
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            <div className="Icon_Slider">
              <input
                name="icon"
                id="next"
                type="radio"
                className="left-arrow"
                onClick={leftSlide}
                defaultChecked
              ></input>
              <input
                name="icon"
                id="prev"
                type="radio"
                className="right-arrow"
                onClick={rigthSlide}
              ></input>
            </div>
            <div
              className="sliderMain"
              style={{
                transform: `translateX(-${
                  ref?.current?.clientWidth * activeIndex
                }px)`,
                height: "100%",
                overflow: "hidden",
                display: "flex",
                width: "200vw",
                transition: "all 0.5s ease 0s",
              }}
            >
              {Slider_Data?.map((item, index) => {
                return (
                  <>
                    <div
                      className={
                        index === activeIndex ? "slide active" : "slide"
                      }
                      key={index}
                      ref={ref}
                    >
                      <div className="Slider_main">
                        <div className="Slider">
                          <h1 className="Slider_Heading">
                            <b>{item.heading}</b>
                          </h1>
                          <p className="Slider_Text">{item.description}</p>
                          <button className="btn_Slider">{item.btn}</button>
                        </div>
                        <div className="slider-img">
                          <img
                            className="Slider_Img"
                            src={item.image}
                            alt="Nike-Black"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Slider;
