import { useReducer } from "react";

type state = {
  count: number;
};

type action = { type: "Increment" } | { type: "Decrement" };

const reduceCounter = () => {
  const reducer = (state: state, action: action): state => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h2>{state.count}</h2>
    </>
  );
};

export default reduceCounter;
