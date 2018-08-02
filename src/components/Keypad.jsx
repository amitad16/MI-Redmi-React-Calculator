import React from "react";

import "./Keypad.css";

import Key from "./Keypad/Key";

const Keypad = props => {
  const style = {
    position: "absolute",
    bottom: 0,
    height: "60%",
    width: "100%"
  };

  const keys = [
    ["AC", "C", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
  ];

  const handleClick = key => {
    props.clickHandler(key);
  };

  return (
    <div style={style}>
      {keys.map((row, rowKey) => {
        return (
          <div className="row" key={rowKey}>
            {row.map((v, i) => {
              return <Key key={i} value={v} clickHandler={handleClick} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keypad;
