import { useState } from "react";

const UserProfile = () => {
  interface profile {
    name: string;
    age: number;
    email: string;
  }
  const [profile, setProfile] = useState<profile>({
    name: "Abdullah",
    age: 21,
    email: "something@gmail.com",
  });
  return (
    <>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <h3>Profile Info</h3>
      <h4>Name: {profile.name}</h4>
      <h4>Age: {profile.age}</h4>
      <h4>Email: {profile.email}</h4>
    </>
  );
};

export default UserProfile;
