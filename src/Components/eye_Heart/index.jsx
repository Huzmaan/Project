import React, { useState } from "react";
import { AiFillEye, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const EyeHeart = () => {
  const [heart, setHeart] = useState(false);
  return (
    <div>
      {/* <i>
        <AiFillEye style={{ fontSize: "25px" }} />
      </i> */}
      <div onClick={() => setHeart((prev) => !prev)} className="Hover_Icon">
        {heart ? (
          <AiFillHeart style={{ color: "red", fontSize: "25px" }} />
        ) : (
          <i>
            <AiOutlineHeart style={{ fontSize: "21px" }} />{" "}
          </i>
        )}
      </div>
    </div>
  );
};

export default EyeHeart;
