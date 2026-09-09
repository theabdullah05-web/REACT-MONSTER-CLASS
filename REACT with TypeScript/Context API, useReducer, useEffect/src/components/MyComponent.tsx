import { useEffect, useState } from "react";

const MyComponent = () => {
  type data = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  };
  const [data, setData] = useState<data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/product/1");
        const result = res.json();
        setData(result);
      } catch (error) {
        console.error("Fetching data error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {data ? (
        <>
          <h2>Product</h2>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </>
      ) : (
        <p>Data not Found</p>
      )}
    </div>
  );
};

export default MyComponent;
