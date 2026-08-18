import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("First Render");
  }, []);
  return <div>BasicEffect</div>;
};

export default BasicEffect;
