import React from "react";
import Accordions from "./components/Accordions";
import "./index.css";
import { accordionData } from "./utils/content";
const App = () => {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <Accordions title={title} content={content} />
      ))}
    </div>
  );
};

export default App;
