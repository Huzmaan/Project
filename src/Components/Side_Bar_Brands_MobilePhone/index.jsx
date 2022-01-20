import React from 'react';
import Side_Bar_Brand from "../Side_Bar_Brand/index";
import MobilePhone from "../MobilePhone/index";
import './Side_Bar_Brands_MobilePhone.scss';
import Container from "../../Components/Container";

const Side_Bar_Brands_MobilePhone = () => {
    return (
        <Container>
        <div className="Display">
<Side_Bar_Brand/>
<MobilePhone/>
        </div>
        </Container>
    )
}

export default Side_Bar_Brands_MobilePhone
