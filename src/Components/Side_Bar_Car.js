import React from 'react';
import Side_Bar from './Side_Bar';
import Cars from './Car';
import '../Components/Side_Bar_Car.scss';
import Container  from "../Components/Container";

const Side_Bar_Car = () => {
    return (
            <Container>
        <div className="Side_Bar_Cars">
            <Side_Bar/>
            <Cars/>
        </div>
            </Container>
    )
}

export default Side_Bar_Car
