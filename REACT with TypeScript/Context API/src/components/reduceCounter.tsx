import { useReducer } from "react";

const reduceCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h2>{state.count}</h2>
    </>
  );
};

export default reduceCounter;
