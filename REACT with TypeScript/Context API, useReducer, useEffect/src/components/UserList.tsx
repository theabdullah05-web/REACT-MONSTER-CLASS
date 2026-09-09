import { useEffect, useState } from "react";

const UserList = () => {
  interface data {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  }
  const [data, setData] = useState<data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      console.log(result);
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>user Details:</h2>
    </>
  );
};

export default UserList;
