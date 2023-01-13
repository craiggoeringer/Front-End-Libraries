import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ops = ["/", "*", "-", "+"];
const ids = { 0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  "/": "divide",
  "*": "multiply",
  "-": "subtract",
  "+": "add" };

const Calculator = () => {
  const [lastPressed, setLastPressed] = useState(undefined);
  const [computation, setComputation] = useState("0");

  const isOperand = input => {
    return ops.includes(input);
  };

  const handleClick = event => {
    const { innerText } = event.target;

    switch (innerText) {
      case "AC":
        setComputation("0");
        break;
      case ".":
        const splitted = computation.split(/[\+\-\*\/]/);
        const lastObject = splitted.slice(-1);
        const last = lastObject[0];
        if (!last.includes(".")) {
          setComputation(prev => prev + ".");
        }
        break;
      case "=":
        const evaluated = eval(computation);
        setComputation(evaluated);
        break;
      default:

        if (isOperand(innerText)) {
          const operand = innerText;
          if (isOperand(lastPressed) && operand !== "-") {
            const copyComputation = computation.split("");
            const lastNumberIdx = copyComputation.reverse().findIndex(char => char !== " " && nums.includes(Number(char)));
            const evaluated = computation.slice(0, computation.length - lastNumberIdx) + ` ${operand} `;
            setComputation(evaluated);
          } else
          {
            setComputation(prev => prev + operand);
          }
        }
        // input is number
        else {
            const num = innerText;
            if (computation === "0") {
              setComputation(num);
            } else
            {
              setComputation(prev => prev + num);
            }
          }}

    setLastPressed(innerText);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "calculator" }, /*#__PURE__*/
    React.createElement("div", { id: "display" }, computation), /*#__PURE__*/

    React.createElement("button", { className: "btn btn-secondary", onClick: handleClick, id: "clear" }, "AC"), /*#__PURE__*/



    React.createElement("button", { className: "btn btn-secondary", onClick: handleClick, id: "decimal" }, "."),



    nums.map((num) => /*#__PURE__*/
    React.createElement("button", { className: "btn btn-dark",
      key: num,
      onClick: handleClick,
      id: ids[num] },
    num)),



    ops.map((operand) => /*#__PURE__*/
    React.createElement("button", { className: "btn btn-secondary",
      key: operand,
      onClick: handleClick,
      id: ids[operand] },
    operand)), /*#__PURE__*/



    React.createElement("button", { className: "btn btn-dark", onClick: handleClick, id: "equals" }, "=")));





};

ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("app"));