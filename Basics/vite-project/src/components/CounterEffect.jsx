import { useEffect, useState } from "react";

const CounterEffect = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Increment ${count}`;
  });
  let handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default CounterEffect;
