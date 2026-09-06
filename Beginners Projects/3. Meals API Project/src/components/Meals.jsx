import axios from "axios";
import { useEffect, useState } from "react";
const Meals = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
        );
        console.log(response.data.meals);
        setItem(response.data.meals);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  const itemsList = item.map(({ strMeal, strMealThumb, idMeal }) => (
    <section className="card" key={idMeal}>
      <img src={strMealThumb} alt={strMeal}></img>
      <section className="content">
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </section>
    </section>
  ));
  return <div className="items-container">{itemsList}</div>;
};

export default Meals;
