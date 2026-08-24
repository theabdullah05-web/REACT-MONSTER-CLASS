import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <i class="fa-solid fa-cart-shopping"></i>
          </h1>
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Sidebar;
