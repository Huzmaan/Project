import React from 'react';
import './Banner.scss';
import Watch from '../Images/Watch_banner.png';
import Light from '../Images/Light_Banner.png';
import Container from "../Components/Container";

const Banner = () => {
    return (
        <Container>
        <div className="banner_Scss">
            <img src={Watch} alt="Watch_Banner"/>
            <img src={Light} alt="Light_Banner"/>
        </div>
        </Container>
    )
}

export default Banner
