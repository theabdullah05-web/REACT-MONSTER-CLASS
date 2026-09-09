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
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {data.map((el) => (
          <tr>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.username}</td>
            <td>{el.email}</td>
            <td>{el.phone}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default UserList;
