import React from "react";

const Key = props => {
  const handleClick = () => {
    props.clickHandler(props.value);
  };

  return (
    <div className="key" value={props.value} onClick={handleClick}>
      {props.value}
    </div>
  );
};

export default Key;
