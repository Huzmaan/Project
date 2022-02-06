import React from "react";
import { IoIosFlash } from "react-icons/io";
import { data } from "../Helper/Carts.Helper";
import "./Cart.scss";
import Cart1 from "../AllCarts";
import SectionHeaders from "../Header/SectionHeaders";
const Cart = () => {
  return (
    <div>
      <SectionHeaders
        heading="Flash Deals"
        headerIcon={<IoIosFlash className="Flash_Icon" />}
      >
        <div className="All_Carts1">
          {data?.map((item, index) => {
            return <Cart1 item={item} index={index} />;
          })}
        </div>
      </SectionHeaders>
    </div>
  );
};
export default Cart;

