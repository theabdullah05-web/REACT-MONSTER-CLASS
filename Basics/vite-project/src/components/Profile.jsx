import { useState } from "react";

const Profile = () => {
  let [profile, setProfile] = useState({ name: "Abdullah", age: "20" });
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
    setProfile((preVal) => ({ ...preVal, name: input, age: input1 }));
    setinput("");
    setinput1("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" value={input} onChange={handleInput}></input>
      <label htmlFor="age">Age</label>
      <input id="age" value={input1} onChange={handleInput1}></input>

      <button type="submit">Enter</button>
      <h1>Name:{profile.name}</h1>
      <h2>Age:{profile.age}</h2>
    </form>
  );
};

export default Profile;
