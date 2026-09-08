import type { MouseEvent } from "react";

const EventHandling = () => {
  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered:", e.currentTarget);
  };
  return (
    <>
      <div onMouseEnter={handleMouseEnter}>
        <h1>Event Handling</h1>
        <h2>Exercise</h2>
      </div>
      <button>Click Me</button>
    </>
  );
};

export default EventHandling;
