import { useState } from "react";
import "../style.css";
const ToggleBackgroundColor = () => {
  let [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");
  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "white" ? "#ffa31a" : "white");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  };
  return (
    <div style={{ backgroundColor, color: textColor }}>
      <button
        style={{
          buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
        onClick={handleClick}
      >
        {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      <section className="content">
        <h1>
          Welcome TO A<br />
          REAL WORLD...
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
