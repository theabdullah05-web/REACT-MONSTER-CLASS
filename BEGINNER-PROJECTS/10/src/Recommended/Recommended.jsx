import "./Recommended.css";

const Recommended = () => {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button className="btns">All Products</button>
        <Buttons />
      </div>
    </div>
  );
};

export default Recommended;
