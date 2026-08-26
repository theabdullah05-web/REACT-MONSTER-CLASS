import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section
        className="sidebar"
        style={{
          maxHeight: "100vh",
          overflowY: "auto",
        }}
      >
        <div className="logo-container">
          <h1>
            <i class="fa-solid fa-cart-shopping"></i>
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
