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
      setData(results);
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>user Details:</h2>
      <table style={{ border: "2px solid black" }}>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>Id</th>
          <th style={{ border: "1px solid black" }}>Name</th>
          <th style={{ border: "1px solid black" }}>Username</th>
          <th style={{ border: "1px solid black" }}>Email</th>
          <th style={{ border: "1px solid black" }}>Phone</th>
        </tr>
        {data.map((el) => (
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>{el.id}</td>
            <td style={{ border: "1px solid black" }}>{el.name}</td>
            <td style={{ border: "1px solid black" }}>{el.username}</td>
            <td style={{ border: "1px solid black" }}>{el.email}</td>
            <td style={{ border: "1px solid black" }}>{el.phone}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default UserList;
