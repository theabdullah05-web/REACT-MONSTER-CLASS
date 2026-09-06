import { useState } from "react";

const TodoList = () => {
  let [todo, setTodo] = useState([]);
  let [input, setInput] = useState("");
  let handleInput = (e) => {
    setInput(e.target.value);
  };
  let handleChange = () => {
    setTodo((preVal) => [...preVal, input]);
    setInput("");
  };
  return (
    <>
      <input value={input} onChange={handleInput} />
      <button onClick={handleChange}>Add Todo</button>
      <ul>
        {todo.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
