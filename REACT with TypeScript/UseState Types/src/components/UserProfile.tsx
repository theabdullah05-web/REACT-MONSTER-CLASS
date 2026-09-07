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
  return (
    <>
      <input type="text" value={profile.name} placeholder="name" />
      <br></br>
      <input type="text" value={profile.age} placeholder="age" />
      <br></br>
      <input type="text" placeholder="email" value={profile.email} />
      <br></br>
      <h3>Profile Info</h3>
      <h4>Name: {profile.name}</h4>
      <h4>Age: {profile.age}</h4>
      <h4>Email: {profile.email}</h4>
    </>
  );
};

export default UserProfile;
