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
      const results = await res.json();
      for (result of results) {
        setData((preVal) => [
          ...preVal,
          {
            id: result.id,
            name: result.name",
            username: result.username,
            email: result.email,
            phone: result.phone,
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
