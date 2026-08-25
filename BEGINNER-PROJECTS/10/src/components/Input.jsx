export default function Input({ handleChange, value, title, name, color }) {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
      <span className="check-mark"></span>All
    </label>
  );
}
