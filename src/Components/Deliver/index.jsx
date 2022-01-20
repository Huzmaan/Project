import React from 'react';
import { Data_Deliver } from '../Helper/Deliver_Helper';
import "./Deliver.scss";
import Container from "../../Components/Container"

const Deliver = () => {
    return (
        <Container>
            <div className="Main_Deliver">
                {Data_Deliver?.map((item, index) => {
                    return (
                        <div className="Deliver_Card" key={index}>
                            <i>{item.Icon}</i>
                            <h4 className='Deliver_Discription'>{item.Description}</h4>
                            <p className='Deliver_Paragraph'>{item.paragraph}</p>

                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default Deliver
