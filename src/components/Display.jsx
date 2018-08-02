import React from "react";

import PrevTerm from "./Display/PrevTerms";
import CurrentTerm from "./Display/CurrentTerm";
import Result from "./Display/Result";

const Display = props => {
  const style = {
    background: "#eee",
    height: "40%",
    position: "relative"
  };
  return (
    <div style={style}>
      <PrevTerm prevTerms={props.prevTerms} />
      {(props.isCalculating) ?
        <CurrentTerm currentTerm={props.currentTerm} /> :
        null
      }
      <Result result={props.result} isCalculating={props.isCalculating} />
    </div>
  );
};

export default Display;
