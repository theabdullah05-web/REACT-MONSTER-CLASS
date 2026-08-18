import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const counter = useRef("null");
  useEffect(() => {
    counter.current = setInterval(() => {
      setCount((preVal) => preVal + 1);
    }, 1000);
    return () => {
      clearInterval(counter.current);
    };
  }, []);
  return (
    <>
      <h1>Counter:{count} seconds</h1>
      <button onClick={() => clearInterval(counter.current)}>Stop Timer</button>
    </>
  );
};

export default Timer;
