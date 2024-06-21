import React from "react";
const ColorDisplay = ({ red, green, blue }) => {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        margin: "auto",
        borderRadius:"10px"
      }}
    >
      <h1>
        rgb({red}, {green}, {blue})
      </h1>
    </div>
  );
};

export default ColorDisplay;
