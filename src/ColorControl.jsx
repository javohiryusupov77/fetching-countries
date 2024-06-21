import React from "react";
import "./ColorControls.css";

const ColorControls = ({ color, dispatch }) => {
  const increment = () => dispatch({ type: "INCREMENT", color, amount: 20 });
  const decrement = () => dispatch({ type: "DECREMENT", color, amount: 20 });

  return (
    <div>
      <button onClick={increment}>+Increment</button>
      <button onClick={decrement}>-Decrement</button>
    </div>
  );
};

export default ColorControls;
