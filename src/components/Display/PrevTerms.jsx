import React, { Component } from "react";

class PrevTerms extends Component {
  state = {};
  render() {
    const style = {
      position: "absolute",
      bottom: "170px",
      width: "100%",
      fontSize: "1.5em",
      textAlign: "right",
      padding: "0 16px",
      // overflowY: "scroll",
      maxHeight: "130px"
    };

    return <div style={style}>{this.props.prevTerms}</div>;
  }
}

export default PrevTerms;
