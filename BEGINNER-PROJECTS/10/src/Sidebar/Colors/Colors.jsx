import "./Colors.css";
import Input from "../../components/Input";
const Colors = () => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="check-mark"></span>All
      </label>
      <Input />
    </div>
  );
};

export default Colors;
