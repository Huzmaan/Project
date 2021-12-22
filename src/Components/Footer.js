import React from 'react';
import './Footer.scss';
import Container from "../Components/Container";
import {Data_Footer_Logo,Data_Footer_About,Data_Footer_Customer,Data_Footer_Contact} from "./Footer_Helper"

const Footer = () => {
    return (
        <div className="Main_Footer">
                <Container>
            <div className="Main_Text_Footer">
            <div>
            {Data_Footer_Logo?.map((item, index)=>{
           return(
               <div className="logo" key={index}>
                   <img src={item.image}alt="Logo" />
                   <p className="description">{item.Description}</p>
                   <img className="PlayStore_Img" src={item.image2} alt="Playstore"/>
               </div>
           ) 
        })}  
        </div>
        <div>
            {Data_Footer_About?.map((item, index)=>{
           return(
               <div className="About" key={index}>
                    <h1 className="Heading">{item.Description}</h1>
                   <p className="paragraph">{item.p1}</p>
                   <p className="paragraph">{item.p2}</p>
                   <p className="paragraph">{item.p3}</p>
                   <p className="paragraph">{item.p4}</p>
                   <p className="paragraph">{item.p5}</p>
               </div>
           ) 
        })}  
        </div>
        <div>
            {Data_Footer_Customer?.map((item, index)=>{
           return(
            <div className="Customer" key={index}>
             <h1 className="Heading">{item.Description}</h1>
            <p className="paragraph">{item.p1}</p>
            <p className="paragraph">{item.p2}</p>
            <p className="paragraph">{item.p3}</p>
            <p className="paragraph">{item.p4}</p>
            <p className="paragraph">{item.p5}</p>
        </div>
           ) 
        })}  
        </div>
        <div>
            {Data_Footer_Contact?.map((item, index)=>{
           return(
            <div className="Contact" key={index}>
             <h1 className="Heading">{item.Description}</h1>
            <p>{item.p1}</p>
            <p>{item.p2}</p>
            <p>{item.p3}</p>
            <div className="Icon_Flex">
            <p className='Icon_Footer'>{item.p4}</p>
            <p className='Icon_Footer'>{item.p5}</p>
            <p className='Icon_Footer'>{item.p6}</p>
            <p className='Icon_Footer'>{item.p7}</p>
            <p className='Icon_Footer'>{item.p8}</p>
        </div>
        </div>
           ) 
        })}  
        </div>
        </div>
        </Container>
        </div>
    )
}

export default Footer;
