import React, { useState } from "react";
import commercialProduct from "./commercialProduct";
import "./EightBall.css";

const EightBall = () => {
  const defaultState = {
    msg: "Think of a Question",
    color: "black",
  };
  const [ball, setBall] = useState(defaultState);

  const getRandom = () => Math.floor(Math.random() * 20);

  const handleClick = () => {
    const newBall = commercialProduct[getRandom()];
    setBall(newBall);
  };

  return (
    <>
      {
        <>
          <button
            className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: ball.color }}
          >
            {ball.msg}
          </button>

          <button onClick={() => setBall(defaultState)}>Reset</button>
        </>
      }
    </>
  );
};
export default EightBall;
