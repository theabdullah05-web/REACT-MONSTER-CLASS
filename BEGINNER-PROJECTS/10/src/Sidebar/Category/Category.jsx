import Input from "../../components/Input";
import "./Category.css";
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="check-mark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneackers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneackers"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
