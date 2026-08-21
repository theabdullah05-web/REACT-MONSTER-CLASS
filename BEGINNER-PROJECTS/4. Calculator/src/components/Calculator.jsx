import { useState } from "react";
import "../style.css";
const Calculator = () => {
  const [input, setInput] = useState("");
  const clear = () => {
    setInput("");
  };
  const display = (val) => {
    setInput(input + val);
  };
  const result = () => {
    const newVal = eval(input);
    setInput(newVal);
  };
  return (
    <form className="calculator" name="calc">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="value"
      />
      <span className="num clear" onClick={clear}>
        C
      </span>
      <span onClick={() => display("/")}>&divide;</span>
      <span onClick={() => display("*")}>&times;</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span onClick={() => display("+")} className="plus">
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span onClick={result}>=</span>
    </form>
  );
};

export default Calculator;
