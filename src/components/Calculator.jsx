import React, { Component } from "react";

import Display from "./Display";
import Keypad from "./Keypad";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressed: "",
      operator: "",
      currentTerm: "",
      expression: "",
      result: "",
      isCalculating: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  calculate = expression => {
    return new Promise(resolve => {
      this.setState({ result: eval(expression) }, () => {
        resolve(this.state.result);
      });
    });
  };

  // TODO: Implement % and Decimal values.
  handleClick = key => {
    const operators = ["/", "*", "-", "+"];
    switch (key) {
      case "AC": {
        this.setState({
          operator: "",
          currentTerm: "",
          expression: "",
          result: "",
          keyPressed: key,
          isCalculating: false
        });
        break;
      }
      // TODO: Calculate result and look for operator**************************************************
      case "C": {
        this.setState(prevState => {
          return {
            keyPressed: key,
            currentTerm: prevState.currentTerm.slice(0, -1),
            expression: prevState.expression.slice(0, -1),
            isCalculating: false
          };
        });
        break;
      }
      case "=": {
        this.setState(
          prevState => {
            return {
              keyPressed: key,
              expression: prevState.expression + prevState.currentTerm,
              currentTerm: ""
            };
          },
          () => {
            this.setState({ currentTerm: "" });
            this.calculate(this.state.expression).then(result => {
              if (result) {
                this.setState({
                  result,
                  keyPressed: "",
                  operator: "",
                  currentTerm: "",
                  expression: "",
                  isCalculating: false
                });
              }
            });
          }
        );
        break;
      }
      case "/":
      case "*":
      case "-":
      case "+": {
        if (operators.indexOf(this.state.keyPressed) !== -1) {
          break;
        } else {
          this.setState(prevState => {
            return {
              keyPressed: key,
              currentTerm: "",
              isCalculating: true
            };
          });
        }
      }
      default: {
        this.setState(prevState => {
          return {
            keyPressed: key,
            currentTerm: prevState.currentTerm + key,
            isCalculating: true
          };
        }, () => {
          this.setState(prevState => {
            return {
              expression: prevState.expression + this.state.currentTerm[this.state.currentTerm.length - 1],
            }
          }, () => {
            if (operators.indexOf(key) === -1) {
              this.calculate(this.state.expression).then(result => {
                if (result) {
                  this.setState({
                    result,
                    isCalculating: true
                  });
                }
              });
            }
          })
        });
      }
    }
  };
  render() {
    const style = {
      width: 300,
      height: 600,
      margin: "100px auto",
      position: "relative"
    };
    return (
      <div style={style}>
        <Display
          currentTerm={this.state.currentTerm}
          prevTerms={this.state.expression}
          result={this.state.result}
          isCalculating={this.state.isCalculating}
        />
        <Keypad clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
