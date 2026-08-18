import { useReducer, useState } from "react";
import { CounterReducer, initialState } from "./CounterReducer";
const Counter1 = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  const [input, setInput] = useState("");
  const handleIncrementByValue = () => {
    dispatch({ type: "incrementByAmount", payload: +input });
  };
  const handleDecrementByValue = () => {
    dispatch({ type: "decrementByAmount", payload: +input });
  };
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br></br>
      <br></br>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleIncrementByValue}>Add</button>
        <button onClick={handleDecrementByValue}>Subtract</button>
      </div>
    </>
  );
};

export default Counter1;
