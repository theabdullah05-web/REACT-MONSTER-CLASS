import { useState } from "react";

const UserProfile = () => {
  interface profile {
    name: string;
    age: number;
    email: string;
  }
  const [profile, setProfile] = useState<profile>({
    name: "",
    age: 0,
    email: "",
  });
  return (
    <>
      <input type="text" value={profile.name} />
      <br></br>
      <input type="text" value={profile.age} />
      <br></br>
      <input type="text" placeholder={profile.email} />
      <br></br>
      <h3>Profile Info</h3>
      <h4>Name: {profile.name}</h4>
      <h4>Age: {profile.age}</h4>
      <h4>Email: {profile.email}</h4>
    </>
  );
};

export default UserProfile;
