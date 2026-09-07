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
      <h3>Profile Info</h3>
      <p>Name:{profile.name}</p>
      <p>Age:{profile.age}</p>
      <p>Email:{profile.email}</p>
    </>
  );
};

export default UserProfile;
