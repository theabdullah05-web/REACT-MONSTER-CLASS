import { useState } from "react";

const UserProfile = () => {
  interface profile {
    name: string;
    age: string;
    email: string;
  }
  const [profile, setProfile] = useState<profile>({
    name: "",
    age: "",
    email: "",
  });
  let newName = "";
  let newAge = "";
  let newEmail = "";
  const changeName = (name: string) => {
    setProfile((preVal) => ({ ...preVal, name }));
    newName = name;
  };
  const changeAge = (age: string) => {
    setProfile((preVal) => ({ ...preVal, age }));
    newAge = age;
  };
  const changeEmail = (email: string) => {
    setProfile((preVal) => ({ ...preVal, email }));
    newEmail = email;
  };
  const submitInfo = () => {
    setProfile((preVal) => ({
      ...preVal,
      name: newName,
      age: newAge,
      email: newEmail,
    }));
  };
  return (
    <>
      <input
        type="text"
        value={profile.name}
        placeholder="name"
        onChange={(e) => changeName(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        value={profile.age}
        placeholder="age"
        onChange={(e) => changeAge(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        placeholder="email"
        value={profile.email}
        onChange={(e) => changeEmail(e.target.value)}
      />
      <br></br>
      <h3>Profile Info</h3>
      {profile.name !== "" && <h4>Name: {profile.name}</h4>}
      {profile.age !== "" && <h4>Age: {profile.age}</h4>}
      {profile.email !== "" && <h4>Email: {profile.email}</h4>}
      <button onClick={submitInfo}>Submit</button>
    </>
  );
};

export default UserProfile;
