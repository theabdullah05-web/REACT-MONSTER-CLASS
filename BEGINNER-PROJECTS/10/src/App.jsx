import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./Sidebar/Sidebar";
import "./index.css";
//Database
import products from "./db/data";
import Card from "./components/Card";
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
  //--------Buttons Filter---------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };
  const filteredData = () => {
    let filteredProducts = products;
    //filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected,
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={uuidv4()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      ),
    );
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
