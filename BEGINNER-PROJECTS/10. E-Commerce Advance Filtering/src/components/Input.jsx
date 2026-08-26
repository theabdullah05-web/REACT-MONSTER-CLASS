export default function Input({ handleChange, value, title, name, color }) {
  return (
    <label className="sidebar-label-container">
      <input type="radio" onChange={handleChange} value={value} name={name} />
      <span className="check-mark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}
