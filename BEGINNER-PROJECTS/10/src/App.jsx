import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./Sidebar/Sidebar";
import "./index.css";
const App = () => {
  const [selectedCategory, useSelectedCategory] = useState(null);
  //Input Filter
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
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
