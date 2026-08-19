import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState();
  const handleSubmit = () => {
    setTodo((preVal) => [
      ...todo,
      {
        text: input,
        id: Math.floor(Math.random() * 10),
      },
    ]);
    setInput("");
  };
  const handleDelete = (ID) => {
    setTodo((todo) => todo.filter((el) => el.id !== ID));
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Enter</button>
      <ul className="todos-list">
        {todo.map((el) => (
          <li className="todo" key={el.id}>
            <span>{el.text}</span>
            <button className="close" onClick={() => handleDelete(el.id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
