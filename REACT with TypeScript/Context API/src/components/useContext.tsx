import { createContext } from "react";

interface context {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useContext = () => {
  const MyContext = createContext<context>({
    count: 0,
    increment: () => {},
    decrement: () => {},
  });
  return <></>;
};

export default useContext;
