import React from 'react'
import Side_Bar_Brand from '../Side_Bar/index';
import Optics_Watch from "../Optics_Watch/index";
import Container from "../../Components/Container";


const Side_Bar_Brand_Optics_Watch = () => {
    return (
        <Container>
        <div className="Display">
            <Side_Bar_Brand/>
            <Optics_Watch/>
        </div>
        </Container>
    )
}

export default Side_Bar_Brand_Optics_Watch
