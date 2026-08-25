import Input from "../../components/Input";
import "./Category.css";
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={test} />
        </label>
      </div>
    </div>
  );
};

export default Category;
