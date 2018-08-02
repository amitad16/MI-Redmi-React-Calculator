import React from "react";

import './Result.css'

const Result = props => {
  return <div className={!props.isCalculating ? 'increaseSize' : 'decreaseSize'}>{props.result ? '= ' + props.result : '0'}</div>;
}

export default Result;
