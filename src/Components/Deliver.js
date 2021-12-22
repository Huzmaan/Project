import React from 'react';
import {Data_Deliver} from './Deliver_Helper';
import "./Deliver.scss";
import Container from "../Components/Container"

const Deliver = () => {
    return (
        <div className="Main_Deliver">
            {Data_Deliver?.map((item, index)=>{
                return (
                    <div className="Deliver_Card" key={index}>
                        <Container>
                        <p>{item.Icon}</p>
                        <h5>{item.Description}</h5>
                        <p>{item.paragraph}</p>

            </Container>
                    </div>
                )
            })}
        </div>
    )
}

export default Deliver
