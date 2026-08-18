import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const callApi = async () => {
      const API = "https://jsonplaceholder.typicode.com/posts";
      const res = await fetch(API);
      const data1 = await res.json();
      setData(data1);
    };
    callApi();
  }, []);
  return <div>{data.length && data[0].title}</div>;
};

export default FetchDataEffect;
