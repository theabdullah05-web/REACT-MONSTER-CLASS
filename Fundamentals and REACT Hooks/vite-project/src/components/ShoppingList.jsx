import { useState } from "react";

const ShoppingList = () => {
  let [shoppingList, setShoppingList] = useState([]);
  let [input, setinput] = useState("");
  let [input1, setinput1] = useState("");
  let handleInput = (e) => {
    setinput(e.target.value);
  };
  let handleInput1 = (e) => {
    setinput1(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    setShoppingList((preVal) => [...preVal, { name: input, quantity: input1 }]);
    setinput("");
    setinput1("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" value={input} onChange={handleInput}></input>
      <label htmlFor="quantity">Quantity</label>
      <input id="quantity" value={input1} onChange={handleInput1}></input>

      <button type="submit">Enter</button>
      <ul>
        {shoppingList.map((el) => (
          <li>
            Name:{el.name} and Quantity:{el.quantity}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default ShoppingList;
