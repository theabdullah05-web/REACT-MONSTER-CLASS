// import Counter from "./components/Counter";

import { useState } from "react";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";

export const App = () => {
  const [state, setState] = useState<object>({});
  // return <Counter />;
  return (
    <>
      <UserProfile information={state} func={setState} />
      <TodoList/>
    </>
  );
};
