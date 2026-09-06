import UseFetch from "./UseFetch";
const CustomHook = () => {
  const [data] = UseFetch("https://stephen-king-api.onrender.com/api/books");
  return (
    <div>
      {data && data.data.map((item, idx) => <p key={idx}>{item.Title}</p>)}
    </div>
  );
};

export default CustomHook;
