import { useEffect, useState } from "react";

const UserList = () => {
  type data = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  const [data, setData] = useState<data[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      for (user of result) {
        setData((preVal) => [
          ...preVal,
          {
            id: 1,
            name: "string",
            username: "string",
            email: "string",
            phone: "string",
          },
        ]);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>user Details:</h2>
      {data.map((el) => (
        <>{el}</>
      ))}
    </>
  );
};

export default UserList;
