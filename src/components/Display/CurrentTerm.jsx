import React from "react";

const CurrentTerm = props => {

  const style = {
    position: "absolute",
    bottom: "70px",
    width: "100%",
    height: "100px",
    fontSize: "2em",
    lineHeight: "100px",
    textAlign: "right",
    padding: "0 16px"
  };

  return <div style={style}>{props.currentTerm}</div>;
}

export default CurrentTerm;
