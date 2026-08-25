import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./Sidebar/Sidebar";
import "./index.css";
//Database
import products from "./db/data";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  //--------Input Filter---------
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1),
  );
  //--------Radio Filter---------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <>
      <SideBar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
