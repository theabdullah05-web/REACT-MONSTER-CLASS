import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  let handleOnClick = () => {
    setCount((preVal) => preVal + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleOnClick}>+1</button>
    </>
  );
};

export default Counter;
