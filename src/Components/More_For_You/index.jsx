import React from 'react';
import { Data_More_For_You } from '../Helper/Carts.Helper';
import Container from "../../Components/Container";
import SectionHeaders from '../Header/SectionHeaders';
import Cart1 from '../AllCarts';


const More_For_You = () => {
  return (
    <Container>
      <div >
        <SectionHeaders
          heading="More For You"
        >
          <div className="All_Carts">
            {Data_More_For_You?.map((item, index) => {
              return <Cart1 item={item} index={index}/>
            })}
          </div>
        </SectionHeaders>
      </div>
    </Container>
  )
}

export default More_For_You